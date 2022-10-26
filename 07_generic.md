## 제네릭

### 제네릭이란

- 제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미

```tsx
function getText<T>(text: T): T {
  return text;
}

//함수를 호출할 때 자료형도 정해서 넘겨줄 수 있음.
getText<number>(10); //number을 넘겨주므로 함수의 T부분이 전부 number로 바뀜.
getText<string>("하이"); //string을 넘겨주므로 함수의 T부분이 전부 string으로 바뀜.
```

### 기존의 타입 정의 방식과 제네릭의 차이점

```tsx
function logText(text: string) {
  return text;
}
function logNumber(text: number) {
  return text;
}
//중복되는 함수를 타입을 바꾸기 위해서 계속 사용하면 문제가 됨. (자원 낭비)
```

```tsx
//위의 문제점을 해결하기 위해서 유니온 타입을 사용해서 여러가지 자료형을 동시에 받을 수 있다.
function logText(text: string | number) {
  return text;
}
//1. 하지만 이렇게 받을 시 함수 내부에서 string과 number에서 동시에 사용하는 메서드만 사용 가능.
//(따로 if문으로 처리해주지 않으면 string과 number가 각각 들어왔을때 각자의 자료형의 메서드를 사용하는게 불가능)
//2. 만약 함수의 리턴값을 담은 변수나 객체가 있을시에도 그것의 타입은 두개를 동시에 가지고 있음
const a = logText("a"); //여기서 a의 타입은 string이 아닌 string | number 두개를 다 가진다.
a.split(); //오류 발생, a는 string이 아닌 string | number이므로.
```

- 이런 문제점을 해결하기 위해 제네릭 사용

```tsx
function logText<T>(text: T): T {
  text.split();
  return text;
}

logText<string>("a");
lotText<number>(123);
//이런 식으로 제네릭을 사용할 경우 선언한 타입만 가지게 된다.

//1. 자료형에 따라 중복되는 함수를 줄일 수 있고,
//2. 유니온 타입을 사용했을때처럼 여러개의 자료형을 가지고 있지 않아서, 각 타입에 맞게 사용할 수도 있다.
```

### 제네릭 타입 제한

- 추가적으로 배열형태로 받아들이게 []를 붙이거나 Array를 사용할 수 있다.

```tsx
function logText<T>(text: T[]): T[] {
  console.log(text.length); // 제네릭 타입이 배열이기 때문에 `length`를 허용합니다.
  return text;
}
//혹은
function logText<T>(text: Array<T>): Array<T> {
  console.log(text.length);
  return text;
}
```

- 정의된 타입 이용가능

```tsx
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  //extends로 이미 정의된 타입을 상속 가능
  text.length;
  return text;
}
logTextLength("a"); // string은 length가 있음.
logTextLength(10); //error : number은 length가 없다.
```

- keyof

```tsx
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOPtion;
}
//keyof 키워드를 extends와 같이 사용하면 상속받을 인터페이스에 속한 속성들 중에서 하나를 인자로 사용할 수 있게 된다.

getShoppingItemOption("name");
```
