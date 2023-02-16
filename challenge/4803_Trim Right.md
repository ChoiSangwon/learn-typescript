# Trim Right

### 난이도: 중간

## 문제

정확한 문자열 타입이고 끝부분의 공백이 제거된 새 문자열을 반환하는 `Trim<T>`를 구현하십시오.

```tsx
type Trimed = TrimRight<"   Hello World    ">; // 기대되는 결과는 '   Hello World'입니다.
```

## 정답

```tsx
type TrimRight<S extends string> = S extends `${infer A}${" " | "\n" | "\t"}`
  ? TrimRight<A>
  : S;
```

## 풀이

- Trim left와 마찬가지로 infer 키워드로 전체 문장과 제일 뒷 글자를 유니온타입으로 해서 나눈다.
- 그다음 true(즉, 뒤가 ‘ ‘,\n,\t일 경우)에는 앞부분을 이용해서 재귀호출을, false인 경우에는 S를 리턴 해준다.
