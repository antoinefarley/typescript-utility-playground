// String Manipulation

// Uppercase
type StringToUppercase = 'apple';
type UppercaseString = Uppercase<StringToUppercase>;
// type UppercaseString = "APPLE"

// Lowercase
type StrinToLowercase = 'APPLE';
type LowercaseString = Lowercase<StrinToLowercase>;
// type LowercaseString = "apple"

// Capitalize
type StringToCapitalize = 'apple';
type CapitalizeString = Capitalize<StringToCapitalize>;
// type CapitalizeString = "Apple"

// Uncapitalize
type StringToUncapitalize = 'ApPle';
type UncapitalizeString = Uncapitalize<StringToUncapitalize>;
// type UncapitalizeString = "apPle"

export {};
