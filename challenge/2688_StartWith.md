# 2688. StartsWith

### 난이도: 중간

## 문제

Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`

→ 문자열 T가 문자열 U로 시작하는지 판단하세요

```tsx
type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false
```

[type-challenges/README.md at main · type-challenges/type-challenges](https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.md)

## 정답

```tsx
type StartsWith<T extends string, U extends string> = T extends `${U}${infer A}`
  ? true
  : false;
```

## 풀이

- 어떻게 할지 많이 고민했는데 생각보다 쉬운 풀이방법이 있었다.
- `U`가 `T`의 시작부분이어야 하므로 그냥 `T extends `${U}${infer A}``를 사용해서 판별하면 된다.
  → 만약 U가 포함되어있으면 true, 안되어있으면 false로 리턴해주면 된다.
