import { PropsWithChildren, useState } from "react";
import { SessionContext } from "./session.context";
import { TSessionUser } from "./session.types";

function SessionProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<TSessionUser>({
    firstName: "John",
    lastName: "Doe",
  });

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
