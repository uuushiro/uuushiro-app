import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';

const SALT = '1234';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  private createPasswordDigest(password: string) {
    return crypto.createHash('sha256').update(SALT + '/' + password).digest('hex');
  }

  async findUserByName(firstName: string, lastName: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { firstName, lastName } });
    return !!user;
  }

  async register(userData: Partial<User>): Promise<void> {
    if (await this.findUserByName(userData.firstName, userData.lastName)) {
      return Promise.reject(new Error('User is already taken.'))
    }
    await this.userRepository.insert({
      ...userData,
      password: this.createPasswordDigest(userData.password)
    });
    return;
  }

  async loginUser(firstName: string, lastName: string, password: string) {
    return await this.userRepository.findOne({
      where: {
        firstName, lastName, password: this.createPasswordDigest(password),
      },
    });
  }
}
