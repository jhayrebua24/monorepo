import { useContext } from "react";
import { SessionContext } from "./session.context";

export const useSession = () => {
  const ctxValue = useContext(SessionContext);

  if (!ctxValue) {
    throw Error("Unable to find Session Provider");
  }
  return ctxValue;
};
