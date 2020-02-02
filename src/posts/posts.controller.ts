import {Crud, CrudController} from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import {Post} from './post.entity';
import {PostsService} from './posts.service';
import {GetManyPostsDto} from './dto/get-many-posts.dto';
import {GetOnePostDto} from './dto/get-one-post.dto';

@Crud({
    model: {
        type: Post,
    },
    routes: {
        only: ['getOneBase', 'getManyBase'],
    },
    serialize: {
        getMany: GetManyPostsDto,
        get: GetOnePostDto,
    }
})
@Controller('posts')
export class PostsController implements CrudController<Post> {
    constructor(public service: PostsService) {}
}
