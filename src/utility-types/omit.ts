// Omit

interface User {
  name: string;
  email: string;
  bio: string;
}

type UserPreview = Omit<User, 'bio'>;

/* 
type UserPreview = {
  name: string;
  email: string;
}
*/

export {};
