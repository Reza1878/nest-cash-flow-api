import { Body, Controller, Post } from '@nestjs/common';
import AddUserUseCase from '../../../Applications/use_case/user/AddUserUseCase';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private addUserUseCase: AddUserUseCase) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    await this.addUserUseCase.execute(dto);

    return {
      message: 'Register success',
    };
  }
}
