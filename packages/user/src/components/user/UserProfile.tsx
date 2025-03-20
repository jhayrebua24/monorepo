import { useSession } from "@acme/common";

function UserProfile() {
  const { user } = useSession();
  return (
    <div>
      Hello from profile: {user?.firstName} {user?.lastName}
    </div>
  );
}

export default UserProfile;
