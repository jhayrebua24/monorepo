import { useSession } from "@acme/common";

function TestComponent() {
  const { user } = useSession();

  return (
    <div role="main" aria-label="Test component">
      Hello {user?.firstName}
    </div>
  );
}

export default TestComponent;
