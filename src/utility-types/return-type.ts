// ReturnType

interface User {
  name: string;
  email: string;
  bio: string;
}

const getUserNameLowerCase = (user: User) => user.name.toLowerCase();

type UserName = ReturnType<typeof getUserNameLowerCase>;

// type UserName = string

export {};
