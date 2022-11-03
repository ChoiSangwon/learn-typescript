# Readonly

## 문제

`T`의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 `Readonly<T>`를 이를 사용하지 않고 구현하세요.

```tsx
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
```

## 정답

```tsx
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

## 풀이

- 맵드 타입(Mapped Type)을 사용하면 쉽게 풀 수 있는 문제
- 입력받은 T를 그대로 사용하면서 readonly만 붙여주면 된다.
  T의 속성을 전부 불러오기 위해 K in keyof T를 사용하고, 그 속성에 맞는 타입인 T[K]를 사용한다.
  → 결국 이러면 T와 똑같은 인터페이스를 만드는 것이고, 문제에서 전부 읽기 전용으로 바꾸라고 했으므로, 앞에 readonly를 붙여준다.
