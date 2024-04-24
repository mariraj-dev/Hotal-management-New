import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as path from 'path';
import { AuthModule } from './auth/auth.module';

import { AppMiddleware } from './app.middleware';


import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './app/api/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import app from './config/app';
import { UserEntity } from './app/api/user/entities/user.entities';
import { FeaturesModule } from './app/api/features/features.module';
import { FeaturesEntity } from './app/api/features/entities/features.entities';
import { BookingModule } from './app/api/booking-detaila/booking.module';
import { BookingEntity } from './app/api/booking-detaila/entities/booking.entities';

const env = process.env.NODE_ENV || 'local';
const p = [path.join(process.cwd(), `.env`), path.join(process.cwd(), `env/.env`)];
console.log(`Loading environment from ${p}`, process.env.TYPEORM_USERNAME);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: p,
      load: [app],
    }),
   
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const options = configService.get('database');
        // options.name = 'default';
        options.entities = [UserEntity,FeaturesEntity,BookingEntity];
        return options;
      },
    }),
    UserModule,
    FeaturesModule,
    BookingModule,
    AuthModule,
    
    ScheduleModule.forRoot(),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppMiddleware)
      .exclude(
        { path: '/api/v1/hotal-management/auth/user/register', method: RequestMethod.ALL },
        { path: '/api/v1/hotal-management/auth/user/login', method: RequestMethod.ALL },
        // { path: '/api/user/forget-password', method: RequestMethod.POST },
        // '/api/auth/(.)',
        // { path: '/api/trainee', method: RequestMethod.POST },
        // { path: '/api/student-detail/asset', method: RequestMethod.POST },
        // { path: '/api/asset/:asset_id/upload-signed-url', method: RequestMethod.GET },
        // { path: '/api/code-table', method: RequestMethod.ALL },
        // { path: '/api/job/job-list-enquiry', method: RequestMethod.GET },
        // { path: '/api/course', method: RequestMethod.GET },
        // { path: '/api/user/:id', method: RequestMethod.GET },
        // { path: '/api/version', method: RequestMethod.GET },
        // { path: '/api/code-table', method: RequestMethod.GET },
        // { path: '/api/health', method: RequestMethod.GET}
      )
      .forRoutes('*');
  }}