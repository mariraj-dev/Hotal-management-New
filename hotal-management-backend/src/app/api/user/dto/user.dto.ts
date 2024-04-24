import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class UserResetPasswordDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'user_id should not be empty' })
    readonly user_id: string;

    @ApiProperty()
    @IsOptional()
    readonly password: string;

}

export class UpdateUserRoleDto {

    @ApiProperty()
    @IsNotEmpty()
    readonly user_id: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly user_category: string;

}

export class UpdateUserDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'user_id should not be empty' })
    readonly user_id: string;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    readonly first_name: string;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    readonly last_name: string;

    @ApiProperty()
    @IsOptional()
    @IsNotEmpty()
    readonly user_category: string;

}