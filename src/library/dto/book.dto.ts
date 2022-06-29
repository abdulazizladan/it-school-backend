import { ApiProperty } from "@nestjs/swagger";

export class createBookDTO {
    id: number;

    @ApiProperty({nullable: false})
    title: string;

    @ApiProperty({nullable: false})
    author: string;

    @ApiProperty({default: new Date(), readOnly: true})
    createdAt: Date;
}