import {
  Controller,
  HttpCode,
  HttpStatus,
  Body,
  Get,
  Post,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UserDto } from 'src/users/dto/User.dto';
import { IUserService } from 'src/users/services/user/user';

// Api/Users
@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: IUserService,
  ) {}

  @Get()
  getUsers() {
    return this.userService.getUser();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @Delete()
  deleteUser() {
    this.userService.deleteUser();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getUserById(@Param('id') id: string) {
    const user = this.userService.getUserById(id);
    return user ? user : {};
  }
}
