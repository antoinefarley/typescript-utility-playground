// Parameters

interface User {
  name: string;
  email: string;
  bio: string;
}

const getUserNameLowerCase = (user: User) => user.name.toLowerCase();

type UserParameter = Parameters<typeof getUserNameLowerCase>;

// type UserParameter = [user: User]

export {};
