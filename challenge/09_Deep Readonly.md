# Deep Readonly

### 난이도: 중간

## 문제

객체의 프로퍼티와 모든 하위 객체를 재귀적으로 읽기 전용으로 설정하는 제네릭`DeepReadonly<T>`를 구현하세요.

이 챌린지에서는 타입 파라미터 `T`를 객체 타입으로 제한하고 있습니다. 객체뿐만 아니라 배열, 함수, 클래스 등 가능한 다양한 형태의 타입 파라미터를 사용하도록 도전해 보세요.

```tsx
type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as `Expected`
```

## 정답

```tsx
type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>;
};
```

## 풀이

- 원래의 Readonly와 다른점은 제네릭 T안에 또다른 객체가 있을 수 있다는 점이다. (그래서 Deep이란 말을 사용한듯)
- 제일 처음한 생각은 readonly와 똑같이 T의 요소들을 하나씩 readonly해주다가 객체를 만나면 재귀호출하면 되겠다고 해서 어떻게 재귀호출할지를 생각
  → 근데 이거 너무 어려웠음
- 한창 고민하다가 포기하고 찾아봤는데 역시 재귀호출해서 풀 수 있었음
  → `keyof T[K] extends never`를 사용하면 현재 객체인지 아닌지 판단할 수 있음.
  → 객체일때는 DeepReadonly를 재귀호출, 아니면 T[K]를 그대로 사용한다.
