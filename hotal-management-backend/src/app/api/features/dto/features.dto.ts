import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFeaturesDto {
    
    @ApiProperty()
    @IsOptional()
    readonly creator_id: number; // Assuming creator is the ObjectId of the user

    @ApiProperty()
    @IsNotEmpty()
    readonly category: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly type: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly streetaddress: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly aptsuite: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly city: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly province: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly country: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly guestcount: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly bedroomcount: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly bedcount: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly bathroomcount: number;

    @ApiProperty({ type: [String] })
    readonly amenities: string[];

    @ApiProperty({ type: [String] })
    readonly listingphotopaths: string[];

    @ApiProperty()
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly description: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly highlight: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly highlightdesc: string;

    @ApiProperty()
    @IsNotEmpty()
    readonly price: number;
}