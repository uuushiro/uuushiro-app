import { Inject } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateUserDTO } from '../dto/users.dto';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Resolver((of) => User)
export class UserResolver { 
  constructor(@Inject(UsersService) private userService: UsersService) {}

  @Query((returns) => User, { nullable: true })
  async user(@Args("id", { type: () => ID }) id: number) {
    return await this.userService.findUserById(id);
  }

  @Mutation((returns) => User, { nullable: true })
  async saveUser(@Args("user") user: CreateUserDTO) {
    return await this.userService.register(user);
  }
}