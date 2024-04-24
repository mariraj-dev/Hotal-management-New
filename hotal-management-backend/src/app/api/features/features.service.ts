import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import Config from '../../../config/app';
import { Repository } from "typeorm";
const bcrypt = require("bcryptjs");
import { InjectRepository } from "@nestjs/typeorm";
import { FeaturesEntity } from "./entities/features.entities";
import { CreateFeaturesDto } from "./dto/features.dto";
const jwt = require("jsonwebtoken");


@Injectable()
export class FeaturesService {

    constructor(
        @InjectRepository(FeaturesEntity) private FeaturesReposistory: Repository<FeaturesEntity>,
    ) { }


    async createFeaturesDto(createFeaturesDto: CreateFeaturesDto, req: any) {
        try {
            let features: FeaturesEntity = await this.FeaturesReposistory.save(createFeaturesDto)
            return features;
        } catch (error) {
            // this.loggerService.loggerService({ level: 'error', message: error?.message });
            throw new HttpException(error.message, error.status);
        }
    }

    async getProperties(category: string) {
        console.log("category", category);
        try {
            let listings

            if (category) {
                listings = await this.FeaturesReposistory.find({

                    where: { category: category }
                })
            } else {
                listings = await this.FeaturesReposistory.find()
            }
            return listings
        } catch (error) {
            // this.loggerService.loggerService({ level: 'error', message: error?.message });
            throw new HttpException(error.message, error.status);
        }
    }





}
