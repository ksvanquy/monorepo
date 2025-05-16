"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserSchema = exports.CreateUserSchema = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.string(),
    email: zod_1.z.string().email(),
    name: zod_1.z.string().min(2),
    role: zod_1.z.enum(["student", "teacher", "admin"]),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.CreateUserSchema = exports.UserSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
exports.UpdateUserSchema = exports.CreateUserSchema.partial();
