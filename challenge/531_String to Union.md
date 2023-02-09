# String to Union

### 난이도: 중간

## 문제

Implement the String to Union type. Type take string argument. The output should be a union of input letters

→ string 문자열이 주어지면 각 문자를 유니온타입으로 가지게 해라

```tsx
type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
```

## 정답

```tsx
type StringToUnion<T extends string> = T extends `${infer F}${infer A}`
  ? `${F}` | StringToUnion<A>
  : never;
```

## 풀이

- 우선 infer 키워드를 사용해 제일 앞글자와 나머지를 나눈다.
- 앞에 글자는 타입으로 지정하고, 유니온 타입에 StringToUnion을 넣어 재귀로 문자열 전체를 돌아준다.
