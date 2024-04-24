import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookingEntity } from "./entities/booking.entities";
import { BookingController } from "./booking.controller";
import { BookingService } from "./booking.service";


@Module({
    imports: [
      TypeOrmModule.forFeature([BookingEntity]),
    ],
    controllers: [BookingController],
    providers: [BookingService],
    exports:[BookingService]
  })
  export class BookingModule { } 