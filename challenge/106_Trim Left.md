# Trim Left

### 난이도 중간

## 문제

정확한 문자열 타입이고 시작 부분의 공백이 제거된 새 문자열을 반환하는 `TrimLeft<T>`를 구현하십시오.

```tsx
type trimed = TrimLeft<"  Hello World  ">; // 기대되는 결과는 'Hello World  '입니다.
```

## 정답

```tsx
type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer a}`
  ? TrimLeft<a>
  : S;
```

## 풀이

- 문자열을 어떻게 처리할까 고민하다가 예전에 한문자씩 처리하는 것을 봐서 ````백틱으로 문자열을 만들어 준다음 앞쪽의 공백하나와 그뒤 나머지 문자열을 a로 나뒀다.
- 그다음에 재귀호출을 해서 앞쪽 문자열 하나씩을 확인하면서 공백이면 다시 TrimLeft로 재귀호출 해주고 아닐 경우 S를 넣어줬다.

```tsx
type TrimLeft<S extends string> = S extends ` ${infer a}` ? TrimLeft<a> : S;
```

→ 이렇게까지 해놓고 보니 단순히 공백만이 아닌 `\n \t`도 제거를 해줘야했다.

→ `‘ ‘` `\n` `\t` 를 한번에 제거해주려면 어떻게 해야하는지 고민했다.

```tsx
type TrimLeft<S extends string> = S extends " " | "\n" | ("\t" & `${infer a}`)
  ? TrimLeft<a>
  : S;
//이러고있었... ㅋㅋㅋㅋㅋㅋ
```

- 단순히 `‘ ‘` `\n` `\t` 을 유니온 타입으로 만들어줬다.
