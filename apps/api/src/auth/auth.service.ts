import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {

    async registerUser(createUserDto: CreateUserDto) {
        throw new Error("Method not implement")
        // const user = await this.userService.findByEmail(createUserDto.email);
        // if (user) throw new ConflictException('User already exists!');
        // return this.userService.create(createUserDto);
      }
}
