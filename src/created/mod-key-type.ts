// ModKeyType

type ModKeyType<T extends object, Keys extends keyof T, NewType> = {
  [key in keyof T]: key extends Keys ? NewType : T[key];
};

interface User {
  name: string;
  email: string;
  bio: string;
}

type UserNumber = ModKeyType<User, keyof User, number>;

/*
type User = {
  name: number;
  email: number;
  bio: number;
};
*/

export {};
