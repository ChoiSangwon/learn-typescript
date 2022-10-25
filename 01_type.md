## 기본 타입

- Boolean
- Number
- String
- Object
- Array
- Tuple
- Enum
- Any
- Void
- Null
- Undefined
- Never

### Boolean

- 진위값 (true or false)

```tsx
const bool: boolean = true;
```

### String

- 문자열

```tsx
const str: string = "hello";
```

### Number

- 숫자 (정수, 실수)

```tsx
const num: number = 10;
```

### Array

- 배열, 들어갈 형을 지정해줘야 한다.

```tsx
const arr: Array<number> = [1, 2, 3];
const heroes: Array<string> = ["Capt", "Thor", "Hulk", 10];
const items: number[] = [1, 2, 3];
```

### Object

- 객체
- 기본적으로 “객체”라고만 생성해서 그안에 여러 값을 담아도 되고, 안에 들어갈 값의 형식까지 세세하게 지정해 줄 수 있다.

```tsx
const obj: object = {};
const person: {
  name: string;
  age: number;
} = {
  name: "asdf",
  age: 123,
};
```

### tuple

- 배열과 비슷하지만 들어갈 데이터의 자료형의 순서까지 정해준다.

```tsx
const address: [string, number] = ["asaf", 100];
```
