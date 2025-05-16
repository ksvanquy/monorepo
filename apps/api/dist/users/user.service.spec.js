"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// apps/api/src/user.service.spec.ts
const user_service_1 = require("./user.service");
describe("UserService", () => {
    let service;
    beforeEach(() => {
        service = new user_service_1.UserService();
    });
    it("should return user with correct types", () => {
        const user = service.getUser();
        expect(user).toHaveProperty("id");
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("email");
    });
});
