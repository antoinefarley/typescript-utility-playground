// Required

interface PartialUser {
  name?: string;
  email?: string;
  bio?: string;
}

type RequiredUser = Required<PartialUser>;

/* 
type RequiredUser = {
  name: string;
  email: string;
  bio: string;
}
*/

export {};
