import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, Request} from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { CreateFeaturesDto } from "./dto/features.dto";
import { FeaturesService } from "./features.service";

@Controller()
export class FeaturesController {
  constructor(
    private readonly featuresService: FeaturesService
  ) { }

  @Post('api/v1/hotal-management/features')
  @ApiBody({ type: CreateFeaturesDto })
  @HttpCode(HttpStatus.OK)
  async loginCreated(
    @Body() createFeaturesDto: CreateFeaturesDto,
    @Request() req: any
  ) {

    return await this.featuresService.createFeaturesDto( createFeaturesDto, req);
  };




  @Get('api/v1/hotal-management/properties')
  @HttpCode(HttpStatus.OK)
  async Getproperties(
    @Query('category') category: string,
  ) {

    return await this.featuresService.getProperties( category);
  };
}
