"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const shared_types_1 = require("@elearning/shared-types");
const user_service_1 = require("./user.service");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll() {
        return [this.userService.getUser()];
    }
    create(createUserDto) {
        // Validate using Zod schema
        const result = shared_types_1.CreateUserSchema.safeParse(createUserDto);
        if (!result.success) {
            throw new Error("Invalid user data");
        }
        const newUser = Object.assign(Object.assign({ id: Math.random().toString(36).substr(2, 9) }, createUserDto), { createdAt: new Date(), updatedAt: new Date() });
        return newUser;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof shared_types_1.CreateUser !== "undefined" && shared_types_1.CreateUser) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof shared_types_1.User !== "undefined" && shared_types_1.User) === "function" ? _b : Object)
], UsersController.prototype, "create", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersController);
