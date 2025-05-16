// apps/web/src/components/UserInfo.test.tsx
import { render, screen } from "@testing-library/react";
import UserInfo from "./UserInfo";
import { User } from "@elearning/shared-types";

test("renders user info", () => {
  const user: User = {
    id: "1",
    name: "Test User",
    email: "test@example.com",
  };

  render(<UserInfo user={user} />);

  expect(screen.getByText("Test User")).toBeInTheDocument();
  expect(screen.getByText("test@example.com")).toBeInTheDocument();
});
