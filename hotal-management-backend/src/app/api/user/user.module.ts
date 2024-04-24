import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entities";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { BookingEntity } from "../booking-detaila/entities/booking.entities";

@Module({
    imports: [
      TypeOrmModule.forFeature([UserEntity,BookingEntity]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports:[UserService]
  })
  export class UserModule { }