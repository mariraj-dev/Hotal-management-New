import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { BookingEntity } from "./entities/booking.entities";

const jwt = require("jsonwebtoken");


@Injectable()
export class BookingService {

    constructor(
        @InjectRepository(BookingEntity) private FeaturesReposistory: Repository<BookingEntity>,
    ) { }



}
