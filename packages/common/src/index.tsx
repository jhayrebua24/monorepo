/* eslint-disable react-refresh/only-export-components */

export type THelloWorld = () => void;

export const sayHello: THelloWorld = () => {
  console.log("Hello world");
};

export * from "./session";
