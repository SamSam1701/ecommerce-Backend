import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = []; // Tạm thời lưu user trong mảng

  findAll(): User[] {
    return this.users;
  }

  create(input: CreateUserDto): User {
    const newUser = {
      id: this.users.length + 1, // Ví dụ tạo ID đơn giản
      ...input,
    };
    this.users.push(newUser as User);
    return newUser as User;
  }
}
