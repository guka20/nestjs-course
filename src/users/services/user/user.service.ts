import { Injectable } from '@nestjs/common';
import { IUserService } from './user';
import { UserDto } from 'src/users/dto/User.dto';

@Injectable()
export class UserService implements IUserService {
  private users: UserDto[] = [];
  createUser(user: UserDto) {
    return this.users.push(user);
  }
  getUser() {
    return this.users;
  }
  deleteUser() {}

  getUserById(id: string) {
    return { username: 'Gurami', id };
  }
}
