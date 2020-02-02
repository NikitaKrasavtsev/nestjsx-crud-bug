import {Exclude} from 'class-transformer';

export class GetManyPostsDto {
    id: string;

    title: string;

    @Exclude()
    text: string;
}
