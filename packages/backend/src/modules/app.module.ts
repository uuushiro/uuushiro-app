import { Module } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';
import { UsersModule } from '../modules/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
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
