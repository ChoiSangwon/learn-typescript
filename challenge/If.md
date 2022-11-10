# If

## 문제

조건 `C`, 참일 때 반환하는 타입 `T`, 거짓일 때 반환하는 타입 `F`를 받는 타입 `If`를 구현하세요. `C`는 `true` 또는 `false`이고, `T`와 `F`는 아무 타입입니다.

```tsx
type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
```

## 정답

```tsx
type If<C extends boolean, T, F> = true extends C ? T : F;
```

## 풀이

1. C가 참일때는 T, 거짓일때는 F로 타입을 할당해준다.
2. C가 boolean이 아닐때 오류로 처리해준다.

- 1번의 경우 그동안 조건을 기준으로 타입을 많이 할당해서 금방 해냈다.
- 그리고 나서 다한줄 알았는데

```tsx
// @ts-expect-error
type error = If<null, "a", "b">;
```

이 경우에 boolean 타입이 아닌 null이 들어왔는데도 true가 아니라고 ‘b’를 타입으로 할당해버린

→ boolean 타입이 아닐경에는 오류를 내줘야 한다!

사실 여기서 고민을 많이 했는데, 생각해보니 그럼 인자로 들어오는 C가 타입으로 boolean이면 될것 같아서 C extends boolean을 해줬더니 답을 찾았다!

## 특이사항

- 2번… 나름 오래 고민했는데 답이 너무 허무해요.
