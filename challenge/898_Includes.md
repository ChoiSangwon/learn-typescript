# Includes

### 난이도: 쉬움

## 문제

JavaScript의 `Array.includes` 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, `true` 또는 `false`를 반환해야 합니다.

```tsx
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
```

## 정답

```tsx
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;
```

## 풀이

- 어떻게 풀지 고민하다가 저번에 썼던 재귀방식을 써보기로 했다.
- infer 키워드를 사용해서 제일 첫번째 요소와 나머지를 구분해서 지정했고, Equal을 사용해 첫번째 원소와 같으면 true, 같지 않으면 나머지 원소들을 Includes로 재귀호출을 해서 그 다음 요소를 확인하는 방식으로 코드를 짰다.
