# Readonly2

## 문제

`T`에서 `K` 프로퍼티만 읽기 전용으로 설정해 새로운 오브젝트 타입을 만드는 제네릭 `MyReadonly2<T, K>`를 구현하세요. `K`가 주어지지 않으면 단순히 `Readonly<T>`처럼 모든 프로퍼티를 읽기 전용으로 설정해야 합니다.

```tsx
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
```

## 정답

```tsx
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Q in keyof T]: T[Q];
} & Omit<T, K>;
```

## 풀이

- 우선 원래 readonly 문제에서와 똑같이 내부요소들을 readonly 해준다.
- 그리고 Omit을 사용하여 K를 & 해준다.
  ```tsx
  interface Person {
    name: string;
    age: number;
  }
  interface Developer {
    readonly name: string;
    skill: number;
  }
  type Dev = Person & Developer;
  //이렇게 되면 Dev는 { name:string; age: numver; skill: number}을 가지게 된다.
  ```
  → 같은 요소의 readonly랑 그냥 일반 값을 & 해주면 readonly가 사라진다

```tsx
type MyReadonly2<T, K extends keyof T> = {
  readonly [Q in keyof T]: T[Q];
} & Omit<T, K>;
```

- 이렇게 까지 만든 후 K가 없을 경우에 그냥 readonly처럼 동작하는걸 어떻게 해야할지 몰라서 찾아봤다.
  → 찾아보니 K가 없을 경우를 대비하여 기본값을 = keyof T 로 할당해주면 정상 동작한다.
