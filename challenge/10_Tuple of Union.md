# Tuple of Union

## 문제

튜플 값으로 유니온 타입을 생성하는 제네릭 `TupleToUnion<T>`를 구현하세요.

```tsx
type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
```

## 정답

```tsx
type TupleToUnion<T extends readonly any[]> = T[number];
```

## 풀이

- 11번 Tuple of object의 코드를 참고,

```tsx
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};
```

- 이 코드의 경우 배열이 [123,”123”,”abcd”]라면 타입으로 {123:123 , “123” : “123”, “abcd”:”abcd”}로 반환된다.
- 위의 코드를 참고하여 각 요소마다 값을 지정하는게 아닌 배열의 원소값 자체를 타입으로 선언해서 해결했다.

## 특이사항

- 중간난이도여서 “당연히 더 어렵겠지”라는 마음으로 빙 돌다가 해결한 문제.
  꼭 중간난이도라고 코드가 길거나 내용이 어렵지는 않다…
