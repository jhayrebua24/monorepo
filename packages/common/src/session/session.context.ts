import { createContext } from "react";
import { TSessionContext } from "./session.types";

export const SessionContext = createContext<TSessionContext | null>(null);

console.log("************");
console.log("**SESSION**");
console.log("************");
