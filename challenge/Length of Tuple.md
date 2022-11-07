# Length of Tuple

## 문제

배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현하세요.

```tsx
type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
```

## 정답

```tsx
type Length<T extends readonly any[]> = T["length"];
```

## 풀이

1. 제네릭 T의 길이를 변환
2. T의 배열만 들어올 수 있게 처리

- 1번의 경우 저번 문제를 풀다가 배열객체에[”length”]를 넣을경우 길이를 반환한다는 것을 알아서 바로
  = T[’length’] 를 해줬다.
  ```tsx
  type Length<T> = T["length"];
  ```
- 단순히 이렇게만 했을경우 테스트 예제는 잘 되지만, 오류처리에서 오류가 나야하는 값들이 오류가 나지 않는다.
  ```tsx
  // @ts-expect-error
  Length <
    5 >
    // @ts-expect-error
    Length<"hello world">;
  ```
  → 둘다 배열을 입력받은게 아니므로 오류가 뜬다.
  → 배열만 들어올 수 있게 인자를 바꿔주자!
  ```tsx
  type Length<T extends any[]> = T["length"];
  ```
- 하지만 여전히 오류가 뜬다.
  ```tsx
  const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
  const spaceX = [
    "FALCON 9",
    "FALCON HEAVY",
    "DRAGON",
    "STARSHIP",
    "HUMAN SPACEFLIGHT",
  ] as const;
  ```
  - 다음 배열들은 각 자리의 값을 그대로 타입으로 쓰기 위해 “as const”를 붙였다. (const로 타입 단언, 원래같으면 각 자리가 string이 되지만, 각자리의 ‘tesla’ , ‘model 3’이 타입자체가 됨)
    → 이 경우에 readonly 가 되므로, 인자도 똑같이 readonly를 붙여줬더니 정답이 되었다!

## 특이사항

- 이제 슬슬 감을 잡고.. 있나?
