## 인터페이스

### 인터페이스란?

상호간의 정의한 약속, 혹은 규칙

타입크스립트에서의 인터페이스

- 객체의 스펙
- 함수의 파라미터
- 함수의 스펙
- 배열과 객체를 접근하는 방식
- 클래스

### 변수에서 인터페이스 활용

```tsx
interface User {
  age: number;
  name: string;
}

var seho: User = {
  age: 33,
  name: "세호",
};
```

- User라는 인터페이스 선언, 인터페이스 사용시 그 변수(혹은 객체)는 반드시 선언된 값을 가지고 있어야함. (number의 age와 string의 name이 있어야 함)

### 함수에서 인터페이스 활용

- 함수의 인자를 인터페이스로 정의

```tsx
interface User{
	age: number;
	name: string;
}

function getUser(user : User) {
	console.log(user);
}
const sang : User = {
	name: "상원";
	age : 11;
}
getUser(sang) //만약 sang 이란 변수가 name,age중 하나라도 안가지고 있으면 오류.
```

- 함수 구조를 정의하는 인터페이스

```tsx
interface SumFunction {
  (a: number, b: number): number; //a,b는 함수의 인자, 제일 뒤의 number은 리턴 값
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};
//함수의 인자와 리턴값을 미리 정의한대로 작성해야지 오류가 나지 않는다.
```

- 인덱싱 방식을 정하는 인터페이스

```tsx
interface StringArray {
  [index: number]: string;
  //index라는 값은, 이 인터페이스로 만들어진 배열은 인덱스로 숫자만 들어갈 수 있다.
  //또한 인덱스에 따른 값은 string이 나와야 한다.
}

let arr: StringArray = ["a", "b", "c"];
arr[0] = 10; //오류가 남. 인덱스를 사용해서 접근했을 때 string이 나와야 하지만 10은 number이므로
```

- 딕셔너리 패턴

```tsx
interface StringRegexDictionary {
  [key: string]: RegExp;
  //RegExp는 타입스크리트에 내장되어있는 정규표현식이라는 뜻
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
//객체의 인덱스를 접근할 때 정규표현식 사용 가능
```

- 인터페이스의 상속

```tsx
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  age: number;
  lauguage: string;
}
//만약 이렇게 Developer안의 Person과 겹치는 부분을 Person을 사용해서 표현하고 싶으면?
//extends 키워드를 사용해 상속하자
interface Developer1 extends Person {
  language: string;
}
let sang: Developer1 = {
  name: "sangwon",
  age: 22,
  //Develpoer1안에는 name과 age는 없지만, Person에게 상속받았으므로 name,age가 둘다 있어야함.
  language: "ko",
};
```
