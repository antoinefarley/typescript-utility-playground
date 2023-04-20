// Extract

type GroupA = 'apple' | 'banana' | 'grape';
type GroupB = 'apple';

type ExtractedGroup = Extract<GroupA, GroupB>;

// type ExtractedGroup = 'apple'

export {};
