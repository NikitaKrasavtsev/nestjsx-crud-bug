import {Injectable} from '@nestjs/common';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Post} from './post.entity';

@Injectable()
export class PostsService extends TypeOrmCrudService<Post> {
    constructor(@InjectRepository(Post) postsRepository: Repository<Post>) {
        super(postsRepository);
    }
}
