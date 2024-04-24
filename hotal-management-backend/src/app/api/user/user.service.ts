import { HttpException, HttpStatus, Injectable } from "@nestjs/common";


import { UserEntity } from "./entities/user.entities";
import Config from '../../../config/app';
import { CreateUserDto, LoginUserDto } from "./dto/create-user.dto";
import { Repository } from "typeorm";
const bcrypt = require("bcryptjs");
import { InjectRepository } from "@nestjs/typeorm";
import { BookingEntity } from "../booking-detaila/entities/booking.entities";
import { log } from "console";
const jwt = require("jsonwebtoken");


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private UserReposistory: Repository<UserEntity>,
        @InjectRepository(BookingEntity) private BookingReposistory: Repository<BookingEntity>,
    ) { }

    async createUser(createUserDto: CreateUserDto, req: any) {
        console.log("createUserDto", createUserDto)
        try {
            /* Check if user exists */
            const existingUser = await this.UserReposistory.findOne({ email: createUserDto?.email });
            if (existingUser) {
                return "User already exists!";

                //   return re.status(409).json({ message: "User already exists!" });
            }

            /* Hass the password */
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

            let user = new UserEntity()
            user.password = hashedPassword;
            user.email = createUserDto?.email;
            user.firstname = createUserDto?.firstname;
            user.lastname = createUserDto?.lastname;

            console.log("user", user);

            const userResults: UserEntity = await this.UserReposistory.save(user)

            return userResults;
        } catch (error) {
            // this.loggerService.loggerService({ level: 'error', message: error?.message });
            throw new HttpException(error.message, error.status);
        }
    }




    async loginUser(loginUserDto: LoginUserDto, req: any) {
        try {
            /* Check if user exists */
            const user = await this.UserReposistory.findOne({ email: loginUserDto?.email });
            if (!user) {
                return "User doesn't exist!";
            }

            /* Compare the password with the hashed password */
            const isMatch = await bcrypt.compare(loginUserDto?.password, user.password)
            if (!isMatch) {
                return "Invalid Credentials!"
            }
            /* Generate JWT token */

            const crypto = require('crypto');

            const generateRandomString = (length) => {
                return crypto.randomBytes(Math.ceil(length / 2))
                    .toString('hex') // Convert to hexadecimal format
                    .slice(0, length); // Trim to desired length
            };

            const JWT_SECRET = 'mysecretkey';
            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' })
            delete user.password
            console.log("token", token);
            let userData = {
                "token": token,
                "user": user
            }
            console.log("user", userData);

            return userData
        } catch (error) {
            // this.loggerService.loggerService({ level: 'error', message: error?.message });
            throw new HttpException(error.message, error.status);
        }


    }


    async getTrips(userId: number, req: any) {
        try {
            const trips = await this.BookingReposistory.find({
                where: {
                    customerid: userId
                },
                relations:['customer','host','listing']
            })
            return trips;
        } catch (error) {
            // this.loggerService.loggerService({ level: 'error', message: error?.message });
            throw new HttpException(error.message, error.status);
        }
    }

    async getProperties(userId: number, req: any) {
        try {
            const trips = await this.BookingReposistory.find({
                where: {
                    creator: userId
                }
            })
            return trips;
        } catch (error) {
            // this.loggerService.loggerService({ level: 'error', message: error?.message });
            throw new HttpException(error.message, error.status);
        }
    }

}
