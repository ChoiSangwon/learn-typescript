# Concat

## 문제

JavaScript의 `Array.concat` 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, 인수를 왼쪽부터 concat한 새로운 배열을 반환해야 합니다.

```tsx
type Result = Concat<[1], [2]>; // expected to be [1, 2]
```

## 정답

```tsx
type Concat<T extends any[], U extends any[]> = [...T, ...U];
```

## 풀이

- 스프레드 연산자를 사용해서 비교적 빠르게 합친 배열을 구했다.

```tsx
type Concat<T, U> = [...T, ...U];
```

- 하지만 이 경우에는 A rest element type must be an array type. 이라는 오류가 뜨는데, 스프레드 연산자는 배열의 요소를 펼치는 연산자인데 T와 U가 배열이라는 확신이 없어서 뜨는것이라 예상.
  → extends any[]를 추가해서 해결했다.

## 특이사항
