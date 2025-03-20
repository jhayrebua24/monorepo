import { Dispatch, SetStateAction } from "react";

export type TSessionUser = {
  firstName: string;
  lastName: string;
};
export type TSessionContext = {
  user: TSessionUser;
  setUser: Dispatch<SetStateAction<TSessionUser>>;
};
