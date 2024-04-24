import {
    HttpException,
    HttpStatus,
    Injectable,
    NestMiddleware,
  } from '@nestjs/common';
  import { NextFunction, Request, Response } from 'express';
  import * as jwt from 'jsonwebtoken';
import { UserService } from './app/api/user/user.service';
  // import { UserService } from '../src/app/api/user/user.service';
  
  @Injectable()
  export class AppMiddleware implements NestMiddleware {
    private secret: string;
    constructor(private readonly userService: UserService) {
      this.secret ='mysecretkey';
    }
  
    async use(req: Request, res: Response, next: NextFunction) {
      const accessToken = req.headers.authorization;
      if (accessToken) {
        console.log("accessToken",accessToken);
        console.log("this.secret",this.secret)
        let decoded: any;
        try {
          decoded = jwt.verify(accessToken, this.secret);
          console.log("decoded",decoded);
          
        } catch (error) {
          throw new HttpException('Invalid token.', HttpStatus.UNAUTHORIZED);
        }
        const user = true//await this.userService.findOne(decoded.sub);
        if (!user) {
          throw new HttpException('User is not found.', HttpStatus.NOT_FOUND);
        }
        req['user'] = user;
        next();
      } else {
        throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
      }
    }
  }
    