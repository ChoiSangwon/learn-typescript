# Pick

---

### 난이도: 쉬움

### 주차: 3주차

---

## 문제

`T` 에서 `K` 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 `Pick<T, K>` 을 이를 사용하지 않고 구현하세요.

```tsx
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

## 정답

```tsx
type MyPick<T, K extends keyof T> = {
  [Q in K]: T[Q];
};
```

## 풀이

- 우선 Pick이라는 것이 기본기 핸드북을 공부하면서 잠깐 나왔었다.

[유틸리티 타입 | 타입스크립트 핸드북](https://joshua1988.github.io/ts/usage/utility.html#%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0-%ED%83%80%EC%9E%85%EC%9D%B4%EB%9E%80)

- 유틸리티 타입, 즉 이미 정의되어 있는 타입을 바꿀 때 쉽게 바꿀수 있는 타입 문법이다.
- 그중에서도 pick은 특정 몇개의 속성을 선택하여 타입을 정의하는 것.

---

결국 “해야할 일은 전달받은 타입(or 인터페이스)에서 특정 값만 추출해서 사용할 수 있게 만들기!” 이다.

- 그래서 우선 첫번째 인자는 타입(or 인터페이스)이고, 그 뒤에 들어오는 것들은 T의 속성들이므로
  K extends key T 로 T의 속성들을 받았다.
- 근데 여기까지 해놓고 잘 모르겠어서 여러 자료들을 찾아봤다.
  → 그래서 알게 된 내용이 in을 사용해서 K를 순회하며 찾고, 그 속성을 다시 T[]를 사용하여 다시 할당하는 법을 알았다

## 특이

아니 잠시만요 쉬움인데 이거 왜케 어렵습니까…?
