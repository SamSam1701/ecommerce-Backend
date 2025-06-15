import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Resolver(() => User) // <- 👈 Đây là "khai báo Resolver"
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User])
  findAll() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args('input') input: CreateUserDto) {
    return this.userService.create(input);
  }
}
