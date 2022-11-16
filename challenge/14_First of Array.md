# First of Array

## 문제

배열(튜플) `T` 를 받아 첫 원소의 타입을 반환하는 제네릭 `First<T>`를 구현하세요.

```tsx
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```

## 정답

```tsx
type First<T extends any[]> = T extends [] ? never : T[0];
```

## 풀이

1. 배열의 첫번째 원소를 타입으로 반환해라
2. never, 즉 [] 빈배열이 들어왔을 경우를 해결해라

- 1번 같은 경우는 쉽게 해결했다. 첫번째 원소만을 반환해주면 되니까
  = T[0] 하면 바로 되었기 때문이다.
  (물론 ={T[0]} 해서 왜 안되는거지 하고 잠깐 5분정도 헤매긴 했지만…)
- 2번의 경우에는 타입스크립트에서 ? 연산자를 써서(조건부타입) 빈 배열일 경우 never, 아니면 T[0]를 넣어주면 되겠다고 생각했다.
  → 여기까지는 좋았다. 그 이후로 대환장파티 시작
  대충 해봤던 것들
  ```tsx
  type First<T extends any[]> = T.length===0 ? never:T[0];
  //T는 타입이기 때문에 .length 속성이 없다.
  type First<T extends any[]> = T[0]===undefined [] ? never:T[0];
  //비교 연산자 못쓴다.
  type First<T extends any[]> = T extends never ? never:T[0];
  //never을 상속해서 never면 never, 아니면 T[0] 반환하려 했는데 이렇게 해도 undefined는 못거른다.
  ```

→ 결론적으로 []를 상속받아서 [] 빈배열이 들어왔을때는 never, 아니면 T[0]를 리턴해주면 되었다.

## 특이사항

- 대환장파티… ㅋㅋㅋㅋㅋㅋㅋ 진짜 말도안되는거 다 넣어봤다.
- 아니 처음부터 왜 “빈 배열일때 never 리턴하면 되겠다!” 해놓고 이렇게 돌아간거지…
