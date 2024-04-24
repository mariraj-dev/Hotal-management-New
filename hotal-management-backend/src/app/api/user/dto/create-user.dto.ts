import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMinSize, IsDefined, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";

export class CreateUserDto {

    @ApiProperty()
    @IsOptional()
    readonly email: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly firstname: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly lastname: string;

    @ApiProperty()
    @IsOptional()
    readonly password: string;

  
}

export class LoginUserDto {

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly password: string;

  
}

