// Exclude

type GroupA = 'apple' | 'banana' | 'grape';
type GroupB = 'apple';

type ExcludedGroup = Exclude<GroupA, GroupB>;

// type ExcludedGroup = 'banana' | 'grape'

export {};
