"use client";

import { User, UserSchema } from "@elearning/shared-types";

export default function Home() {
  const user: User = {
    id: "1",
    email: "test@example.com",
    name: "Test User",
    role: "student",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Validate user data using Zod schema
  const result = UserSchema.safeParse(user);

  if (!result.success) {
    console.error("Invalid user data:", result.error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to E-Learning Platform
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
