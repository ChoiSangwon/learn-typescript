# Awaited

## 문제

Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?

예시: 들어 `Promise<ExampleType>`이 있을 때, `ExampleType`을 어떻게 얻을 수 있을까요?

```tsx
type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string
```

## 정답

```tsx
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer A>
  ? A extends Promise<infer K>
    ? MyAwaited<A>
    : A
  : never;
```

## 풀이

- Promise 객체에 싸여져 있는 것을 타입으로 빼내야 한다!
- 처음에는 infer 키워드를 사용해서 단순히 Promise 하나 안쪽에 있는 값을 빼내려고 했다.
  → 하지만 케이스에서 단순히 하나가아닌 이중 삼중의 Promise객체에 감싸져 있었다.
- 어떻게 여러번 Promise를 떼어낼 수 있을까 생각하다가 재귀호출을 해서 떼어낼 수 있을거 같았다.
  → 처음 확인한 infer A가 Promise 객체면 MyAwaited를 재귀호출, 아니면 A를 타입으로 만들어줬다.

```tsx
type MyAwaited<T extends Promise<any>> = T extends Promise<infer A>
  ? A extends Promise<infer K>
    ? MyAwaited<A>
    : A
  : T;
```

- 이렇게 했을 때 1~4 케이스는 정상동작 했지만, 마지막 케이스가 오류가 났다.
  → 왜 오류가 났을까 고민하는데 Promise가 아닌 PromiseLike도 고려해서 PromiseLike로 바꿔주니까 해결되었다.

## 특이사항

- Promise와 PromiseLike의 차이

[Array vs ArrayLike, Promise vs PromiseLike](https://yceffort.kr/2021/11/array-arraylike-promise-promiselike)
