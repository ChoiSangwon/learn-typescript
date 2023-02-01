# Trim

### 난이도: 중간

## 문제

정확한 문자열 타입이고 양쪽 끝의 공백이 제거된 새 문자열을 반환하는 `Trim<T>`를 구현하십시오.

```tsx
type trimmed = Trim<"  Hello World  ">; // 기대되는 결과는 'Hello World'입니다.
```

## 정답

```tsx
type Trim<S extends string> = S extends `${" " | "\n" | "\t"}${infer A}`
  ? Trim<A>
  : S & S extends `${infer A}${" " | "\n" | "\t"}`
  ? Trim<A>
  : S;
```

## 풀이

- trim left와 trim right를 각각 만들어서 & 해줬다.
