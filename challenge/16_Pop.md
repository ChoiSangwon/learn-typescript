# Pop

## 문제

Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.

⇒ T를 입력받았을때 마지막 요소를 제거해라

```tsx
type arr1 = ["a", "b", "c", "d"];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]
```

## 정답

```tsx
type Pop<T extends any[]> = T extends [...infer K, infer b] ? K : [];
```

## 풀이

- 우선 제네릭 T는 배열을 받으므로 `T extends any[]` 로 만들어 준다
- 또 infer를 두개 사용하여 마지막 전까지의 K, 마지막 요소 \_로 나눠준다.

```tsx
type Pop<T extends any[]> = T extends [...infer K, infer b] ? K : null;
```

→ 여기까지 했을때 `Expect<Equal<Pop<[]>, []>>`에서 오류가 나왔다.

→ 아마도 비어있을때 []가 아니라 null이 반환되어서 오류가 뜨는것 같아 null 대신 [] (빈배열)을 넣어줬다.

## 특이사항

- infer 키워드를 이렇게 나눠서 사용이 가능한줄 처음알았다.

```tsx
T = ['a','b','c','d']
//만약 T가 이렇다면

[infer A, ...infer B, infer C]
//A = 'a', B = ['b','c'], C = 'd'
[... infer A,infer B, infer C]
//A = ['a','b'], B = 'c', C = 'd'
```

→ 이런식으로 값을 얻어낼 수 있네 ㄷ..
