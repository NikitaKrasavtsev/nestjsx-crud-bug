import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PostsModule} from './posts/posts.module';
import ormConfig from '../ormconfig';

@Module({
    imports: [
        TypeOrmModule.forRoot(ormConfig),
        PostsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
