# Capitalize

### 난이도: 중간

## 문제

문자열의 첫 글자만 대문자로 바꾸고 나머지는 그대로 놔두는 `Capitalize<T>`를 구현하세요.

```tsx
type capitalized = Capitalize<"hello world">; // expected to be 'Hello world'
```

## 정답

```tsx
type MyCapitalize<S extends string> = S extends `${infer A}${infer B}`
  ? `${Uppercase<A>}${B}`
  : "";
```

## 풀이

- 첫 글자만 대문자로 바꾸는 것이므로 백틱(``)과 infer키워드를 사용해서 제일 앞 문자와 나머지를 분리해줬다.
- 첫 글자를 대문자로 만들기 위해 Uppercase<A>를 사용해서 만들어 준 뒤 나머지 B와 다시 합쳐 줬다.
- 원래 처음에는 제일 뒤의 false 부분에 `null`을 넣었는데 이 경우에 빈 문자열이 들어왔을 때 null을 가지게 되므로 `‘’`로 바꿔줬다.
