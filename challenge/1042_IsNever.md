# IsNever

## 문제

데이터 형식을 받아 never일 경우에는 true, 아닐경우에는 false를 반환하시오

```tsx
type A = IsNever<never>; // expected to be true
type B = IsNever<undefined>; // expected to be false
type C = IsNever<null>; // expected to be false
type D = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false
```

## 정답

```tsx
type IsNever<T> = [T] extends [never] ? true : false;
```

## 풀이

- 처음에는 굉장히 쉽게 생각했다. 그냥 조건부 타입을 활용해 never일때는 true, 아닐때는 false를 넣어주면 된다고 생각했다.

```tsx
type IsNever<T> = T extends never ? true : false;
```

- 그런데 이 코드의 경우 false일때는 잘 동작하지만 정작 never을 넣으면 true값이 나오는게 아닌 “never”이 그대로 나오게 된다.
  → 이를 해결하기 위해 온갖 방법을 다 써봤지만 포기하고 자료를 찾아보았다.

[타입스크립트의 Never 타입 완벽 가이드](https://ui.toast.com/weekly-pick/ko_20220323)

- 이 글의 마지막 부분에 위 코드의 오류에 대한 답이 나온다.
  - 타입스크립트는 조건부 타입에 대해 자동적으로 유니언 타입을 할당한다.
  - `never`은 빈 유니언 타입이다.
  - 그러므로 할당이 발생하면 할당할 것이 없으므로 조건부 타입은 `never`로 평가된다
    ⇒ 즉 never인지 판단하기 전에 타입스크립트 자체에서 never이 할당이 되어버린다는 것이다.
    자동으로 할당되는 것을 막기 위해 튜플로 감싸주어 판별한다.

## 특이사항

- 글을 보고 대충은 이해했지만 never이 할당되는 자세한 이유는 좀더 찾아봐야 될 것 같다.
