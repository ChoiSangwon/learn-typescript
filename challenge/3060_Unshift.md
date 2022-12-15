# Unshift

## 문제

`Array.unshift`의 타입 버전을 구현하세요.

```tsx
type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
```

## 정답

```tsx
type Unshift<T extends unknown[], U> = [U, ...T];
```

## 풀이

- push와 똑같은 방식. 새로 만들어주는 배열의 순서만 바꿔주면 된다.

## 특이사항
