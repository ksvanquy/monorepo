// apps/api/src/user.service.spec.ts
import { UserService } from "./user.service";
import { User } from "@elearning/shared-types";

describe("UserService", () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it("should return user with correct types", () => {
    const user: User = service.getUser();
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("email");
  });
});
