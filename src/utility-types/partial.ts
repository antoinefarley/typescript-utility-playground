// Partial

interface User {
  name: string;
  email: string;
  bio: string;
}

type PartialUser = Partial<User>;

/*
type PartialUser = {
  name?: string;
  email?: string;
  bio?: string;
}
*/

export {};
