# 2693. EndsWith

### 난이도: 중간

## 문제

Implement `EndsWith<T, U>` which takes two exact string types and returns whether `T` ends with `U`

```tsx
type a = EndsWith<"abc", "bc">; // expected to be true
type b = EndsWith<"abc", "abc">; // expected to be true
type c = EndsWith<"abc", "d">; // expected to be false
```

[type-challenges/README.md at main · type-challenges/type-challenges](https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md)

## 정답

```tsx
type EndsWith<T extends string, U extends string> = T extends `${infer A}${U}`
  ? true
  : false;
```

## 풀이

- StartsWith와 마찬가지로 U가 T뒤에 있는지를 판별해서 U로 끝나면 true, 아니면 false를 리턴
