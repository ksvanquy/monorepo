// apps/api/src/user.service.ts
import { Injectable } from "@nestjs/common";
import { User } from "@elearning/shared-types";

@Injectable()
export class UserService {
  getUser(): User {
    return {
      id: "123",
      name: "Nguyen Van A",
      email: "a.nguyen@example.com",
      role: "student",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
