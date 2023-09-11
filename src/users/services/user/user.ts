import { UserDto } from 'src/users/dto/User.dto';

export interface IUserService {
  createUser(user: UserDto);
  getUser();
  deleteUser();
  getUserById(id: string);
}
