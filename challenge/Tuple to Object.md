# Tuple to Object

## 문제

배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.

```tsx
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

## 정답

```tsx
type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};
```

## 풀이

- 처음에 키를 모든 속성을 불러와서 선언하면 될줄 알고, [K in keyof T] 했더니 인덱스가 문자열 처리가 되어서 왔다.
  → 찾아보니 타입스크립트에서 배열은 arr = [”aaa”, “bbb”]가 있으면 0:”aaa”, 1:”bbb”같은 방식으로 배열이 key/vaule 형식으로 되어있어서 keyof를 하면 인덱스를 불러오는것.
- 과연 어떻게 해야지 배열의 인자 그대로를 가져올 수 있지? 하고 검색을 하다가 방법을 찾았다.

[타입스크립트 - 배열의 값을 타입(union)으로 바꾸기(const assertions)](https://code-masterjung.tistory.com/50)

→ 이 글에서 처럼 배열에 [number]을 사용하면 배열의 값을 유니온 타입으로 얻을 수 있었다.

```tsx
const names = ["123asdf", "123aesdf", "dcsfgdasf"] as const;
type aaa = typeof names[number];
//type aaa = "123asdf" | "123aesdf" | "dcsfgdasf"
```

## 특이사항

- 글을 잘 못써서… 하고싶은 말이 많은데 표현이 안되는…
