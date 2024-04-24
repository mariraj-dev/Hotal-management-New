import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Request } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { RouteConstants } from "../route-constant/route-constants"
import { CreateUserDto, LoginUserDto } from "./dto/create-user.dto";
@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }



  @Post('api/v1/hotal-management/auth/user/register')
  @ApiBody({ type: CreateUserDto })
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() userDto: CreateUserDto,
    @Request() req: any
  ) {

    return await this.userService.createUser(userDto, req);
  };



  @Post('api/v1/hotal-management/auth/user/login')
  @ApiBody({ type: LoginUserDto })
  @HttpCode(HttpStatus.OK)
  async loginCreated(
    @Body() loginUserDto: LoginUserDto,
    @Request() req: any
  ) {

    return await this.userService.loginUser(loginUserDto, req);
  };

  @Get('api/v1/hotal-management/user/:userId/trips')
  @HttpCode(HttpStatus.OK)
  async getTripList(
    @Param('userId') userId: number,
    @Request() req: any
  ) {
    console.log("userId userId", userId);

    return await this.userService.getTrips(userId, req);
  };

  /* GET PROPERTY LIST */
  @Get('api/v1/hotal-management/user/:userId/properties')
  @HttpCode(HttpStatus.OK)
  async getPropertiesList(
    @Param('userId') userId: number,
    @Request() req: any
  ) {
    console.log("userId userId", userId);

    return await this.userService.getProperties(userId, req);
  };


  
  

}
