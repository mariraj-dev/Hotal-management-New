import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FeaturesController } from "./features.controller";
import { FeaturesEntity } from "./entities/features.entities";
import { FeaturesService } from "./features.service";

@Module({
    imports: [
      TypeOrmModule.forFeature([FeaturesEntity]),
    ],
    controllers: [FeaturesController],
    providers: [FeaturesService],
    exports:[FeaturesService]
  })
  export class FeaturesModule { } 