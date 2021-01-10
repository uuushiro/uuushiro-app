import {
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  HttpException,
} from '@nestjs/common';
import { CreateUserDTO, LoginUserDTO } from '../dto/users.dto';
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('hoge')
  @HttpCode(HttpStatus.OK)
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    if (await this.usersService.findUserByName(createUserDTO.firstName, createUserDTO.lastName)) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: `Screen name '${createUserDTO.firstName}, ${createUserDTO.lastName}' is already taken.`,
        },
        409,
      );
    }
    try {
      await this.usersService.register(createUserDTO);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: `'Internal server error error: ${e}.'`,
        },
        500,
      );
    }
    return
  }

  @Post('login')
  async login(@Body() loginUserDTO: LoginUserDTO): Promise<User> {
    let user: User;
    try {
      user = await this.usersService.loginUser(
        loginUserDTO.firstName,
        loginUserDTO.lastName,
        loginUserDTO.password,
      );
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal server error',
        },
        500
      );
    }

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User Not Found',
        },
        404
      );
    }
    return user;
  }
}