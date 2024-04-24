import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        const request = context.switchToHttp().getRequest();
        if (request?.session) {
            console.log(request?.session)
            // TODO verify user from db
            return roles.includes(request?.session?.roles)
        }
        return false;
    }
}
