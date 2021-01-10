import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';
import { UserResolver} from '../resolvers/user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  providers: [UsersService, UserResolver],
  controllers: [UsersController],
})

export class UsersModule {}