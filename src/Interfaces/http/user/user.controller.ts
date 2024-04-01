import { Body, Controller, Get, Post } from '@nestjs/common';
import AddUserUseCase from '../../../Applications/use_case/user/AddUserUseCase';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserByIdUseCase } from '../../../Applications/use_case/user/GetUserByIdUseCase';
import { Auth } from 'src/common/auth/auth.decorator';
import User from 'src/Domains/users/entities/User';

@Controller('user')
export class UserController {
  constructor(
    private addUserUseCase: AddUserUseCase,
    private getUserByIdUseCase: GetUserByIdUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    await this.addUserUseCase.execute(dto);

    return {
      message: 'Register success',
    };
  }

  @Get('/me')
  async fetchMe(@Auth() user: User) {
    delete user.password;
    return {
      data: { user },
      message: 'Success get user',
    };
  }
}
