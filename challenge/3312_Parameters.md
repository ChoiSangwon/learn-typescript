# Parameters

## 문제

내장 제네릭 `Parameters<T>`를 이를 사용하지 않고 구현하세요.

```tsx
const foo = (arg1: string, arg2: number): void => {};
type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
```

## 정답

```tsx
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : any;
```

## 풀이

- args 부분만 리턴해주면 되는데 어떻게 리턴할지 고민했다

```tsx
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => any
  ? T
  : any;
```

- 처음에는 이런식의 코드를 짰었는데 결국은 여기서 마지막 T부분에 인자가 들어오게 바꾸면 되겠다고 생각해서 열심히 방법을 찾아봤지만 해결 못했다.
- 결국은 인터넷에서 이것저것을 찾아봤는데 infer 을 사용해서 args배열의 값을 하나씩 얻어내야 하는 문제였다.

### 특이사항

- infer에 대한 자세한 정리

[TypeScript - infer](https://velog.io/@from_numpy/TypeScript-infer)

- 이게 쉬움난이도에서 제일 어려웠다.
- 그리고 이제 쉬움이 끝났다. 큰일났네…
