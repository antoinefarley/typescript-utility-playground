// Pick

interface User {
  name: string;
  email: string;
  bio: string;
}

type UserPreview = Pick<User, 'name' | 'email'>;

/* 
type UserPreview = {
  name: string;
  email: string;
}
*/

export {};
