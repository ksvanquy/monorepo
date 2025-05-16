import { Controller, Get, Post, Body, ValidationPipe } from "@nestjs/common";
import { User, CreateUserSchema, CreateUser } from "@elearning/shared-types";
import { UserService } from "./user.service";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): User[] {
    return [this.userService.getUser()];
  }

  @Post()
  create(@Body() createUserDto: CreateUser): User {
    // Validate using Zod schema
    const result = CreateUserSchema.safeParse(createUserDto);
    if (!result.success) {
      throw new Error("Invalid user data");
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return newUser;
  }
}
