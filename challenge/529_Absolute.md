# 529. Absolute

### 난이도: 중간

## 문제

Implement the `Absolute` type. A type that take string, number or bigint. The output should be a positive number string

→ string, number,bigint의 타입의 받았을 때 절댓값을 string으로 얻어내라

```tsx
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
```

## 정답

```tsx
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer A}`
  ? `${A}`
  : `${T}`;
```

## 풀이

- `T`가 `number,` `bigint`일 때에 문자열 처리를 해주기 위해 `${T}` 사용.
- `-${infer A}`로 `-`부호를 가지고 있는 경우, `-`와 숫자(`infer A`)를 나눠준다.
- `-`부호가 있을 경우엔 `-`를 떼고 `A`를, `-`부호가 없을때에는 `T`를 반환한다.
- `string`형식으로 얻어내라고 했기 때문에, 각각 `${A}`, `${T}` 으로 반환한다.

### 특이사항

- `bigint`는 `string`으로 바꿨을 때 알아서 `_`와 `n`이 떼어진다.
