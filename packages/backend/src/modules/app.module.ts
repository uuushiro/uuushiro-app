import { Module } from '@nestjs/common';
import { User } from '../models/user.model';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';
import { UsersModule } from '../modules/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.graphql",
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'uuushiro-app',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
