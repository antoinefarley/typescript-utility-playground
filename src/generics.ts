// Generics

// MinMax

type MinMax<T extends string | number> = {
  min: T;
  max: T;
};

type MinMaxNumber = MinMax<number>;
type MinMaxString = MinMax<string>;
// type MinMaxBoolean = MinMax<boolean>; // Non permis

// AddPrefixToObjectValues

type AddPrefixToObjectValues<T extends Record<string, string>, Prefix extends string> = {
  [key in keyof T]: `${Prefix}-${T[key]}`;
};

type User = {
  name: 'name';
  email: 'email';
  bio: 'bio';
};

type UserWithPrefix = AddPrefixToObjectValues<User, 'new'>;

/*
 type UserWithPrefix = {
  name: 'new-name';
  email: 'new-email';
  bio: 'new-bio';
};
 */
