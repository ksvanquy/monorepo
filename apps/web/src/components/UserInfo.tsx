// apps/web/src/components/UserInfo.tsx
import { User } from "@elearning/shared-types";

type UserInfoProps = {
  user: User;
};

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
