# Append to Object

### 난이도: 중간

## 문제

주어진 인터페이스에 새로운 필드를 추가한 object 타입을 구현하세요. 이 타입은 세 개의 인자를 받습니다.

```tsx
type Test = { id: "1" };
type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
```

## 정답

```tsx
type AppendToObject<T, U extends string | number | symbol, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};
```

## 풀이

- K의 키를 구할때 keyof T와 U를 유니온 타입으로 묶어주고, T의 key일때는 T[K], U일때는 V를 넣어줌.

```tsx
type AppendToObject<T, U, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};
```

- 이렇게까지 했을때 예제는 전부 정상작동하지만 `keyof T | U`부분에서 빨간줄 생김
  → 오류 메세지에 **“This type parameter might need an `extends string | number | symbol` constraint. “**라고 뜨길래 `U에 extends string | number | symbol` 추가 했더니 해결되었다.
