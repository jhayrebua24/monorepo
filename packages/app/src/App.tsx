import { SessionProvider } from "@acme/common";
import { User } from "@acme/user";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div>
      <SessionProvider>
        <User />
        <TestComponent />
      </SessionProvider>
    </div>
  );
}

export default App;
