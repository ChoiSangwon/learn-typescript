# Integer

### 난이도: 중간

## 문제

Please complete type `Integer<T>`, type `T` inherits from `number`, if `T` is an integer return it, otherwise return `never`.

→ type T가 number을 상속받고, 정수일 경우 그자체를 리턴하고, 아닐경우에 never을 반환하는 Integer<T>를 만들어라

## 정답

```tsx
type Integer<T extends number> = number extends T
  ? never
  : `${T}` extends `${infer A}.${infer B}`
  ? never
  : T;
```

## 풀이

- 처음에는 단순히 number이면 그 자체를 반환하는 코드를 짬
  ```tsx
  type Integer<T> = T extends number ? T : never;
  ```
  → 하지만 이렇게 할 경우 정수만 고를수 없다. (실수형도 전부 true가 되어버림)
- 그래서 어떻게 실수를 거를 수 있을까 고민했는데, 실수는 소수점(.)이 있으므로 이것이 존재하면 실수라고 판단하는 코드를 작성.
  ```tsx
  type Integer<T extends number> = T extends number
    ? `${T}` extends `${infer A}.${infer B}`
      ? never
      : T
    : never;
  ```
  → 하지만 이렇게 할 경우 “number”라는 키워드 자체가 들어올 때에도 true 값을 내버려서 정답이 아니였다.
- 어떻게 해야할지 몰라서 조금 찾아봤는데 처음 extends 키워드를 뒤집어서 사용해서 해결할 수 있었다.
  - `number extends T`
  - 이 부분이 이걸 왜 뒤집는지 처음에 이해가 안되었는데, extends의 대한 설명을 자세히 읽고 이해를 했다.
  - 우선 `A extends T ? B : C` 라는 코드는 A가 T와 같거나 T의 서브타입 (부분집합 느낌)일 경우에는 B, 아닐 경우에는 C 라는 뜻이다.
  - 문제의 예시를 보면 실제 숫자가 아닌 “number”키워드가 들어오면 false를 띄우고 싶은데 `T extends number`을 하면 T에 number가 들어온다해도 `number extends number` 이므로 true가 되어버린다.
  - 하지만 뒤집어서 `number extends T`를 해버렸을 때에는, T에 정수(예를 들어 1)가 들어왔다고 생각하면 `number extends 1` 이 되므로 false가 된다. 하지만 `number`이 들어오게 된다면 `number extends number`이 되므로 true가 된다.
    → 결국은 number이 들어오는걸 걸러주기 위해서 뒤집은거 같다.

## 특이사항

- extends에 잘 정리되어 있는 글. 헷갈리면 한번 읽어보는것도 좋을것 같네요.

[[TypeScript] "T extends U ? X : Y"에 대한 고찰](https://mugglim.tistory.com/13)
