import { Body, Controller, HttpCode, HttpStatus, Post, Request} from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { BookingService } from "./booking.service";


@Controller()
export class BookingController {
  constructor(
    private readonly bookingService: BookingService
  ) { }

  


}
