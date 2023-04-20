// NonNullable

type ValueOrNull = 'hello' | null | undefined;

type Value = NonNullable<ValueOrNull>;

// type Value = "hello"

export {};
