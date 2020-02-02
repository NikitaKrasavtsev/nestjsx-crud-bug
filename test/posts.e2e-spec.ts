import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import {getRepository} from 'typeorm';
import { AppModule } from '../src/app.module';

describe('Posts', () => {
    let app: INestApplication;
    let postInsertResult;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = module.createNestApplication();

        await app.init();

        const repository = getRepository('Post');
        await repository.clear();
        postInsertResult = await repository.insert([
            repository.create({id: 1, title: 'Test Post 1 title', text: 'Test Post 1 text'}),
            repository.create({id: 2, title: 'Test Post 2 title', text: 'Test Post 2 text'}),
        ]);
    });

    describe('GET /posts', () => {
        it('should return a list of posts', () => {
           return request(app.getHttpServer())
               .get('/posts')
               .expect(HttpStatus.OK)
               .expect(({body}) => {
                   const sample = body[0];

                   expect(sample.title).toBeDefined();
                   expect(sample.text).not.toBeDefined();
               });
        });
    });

    describe('GET /posts/:id', () => {
        it('should return one post', () => {
            return request(app.getHttpServer())
                .get(`/posts/${postInsertResult.identifiers[0].id}`)
                .expect(HttpStatus.OK)
                .expect(({body}) => {
                    expect(body.title).toBeDefined();
                    expect(body.text).toBeDefined();
                });
        });
    });
});
