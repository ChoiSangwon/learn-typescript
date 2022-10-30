## 유니온 타입 & 인터섹션 타입

### Union Type

- 자바스크립트의 OR(||)연산자와 같이 A이거나 B라는 의미의 타입

→ 여러가지 타입을 한번에 사용하게 지정 할 수 있다.

```tsx
function printA(value: string | number) {
  console.log(value);
}
printA(1);
printA("AAA");
//둘다 잘 동작한다.
```

### 유니온 타입의 장점

- 코드 작성 단계에서 any와 다르게 타입을 추론할 수 있다.

```tsx
function printA(value : any){
	if(typeof value === 'number'){
		value. //여기서 value는 any타입으로 취급되므로 number에 사용가능한 메서드들이 자동완성되어지지 않음.
	}
}

function printB(value : string|number){
	if(typeof value === 'number'){
		value. //여기서는 vaule이 number로 인식이 되어서 number에 사용가능한 메서드들이 자동완성 됨.
	}
}
printA(1)
printA("AAA")

```

### 주의할 점

```tsx
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
}
```

- 위 코드에서 introduce의 인자를 보면 | 연산자는 or 이므로 Person이나 Developer 타입이 둘다 올수 있다. 그래서 someone은 Person이나 Developer의 속성을 전부 가져올 수 있을것 같지만 사실 아니다
  → 타입스크립트의 관점에서는 Person과 Developer중 뭐가 들어올지 모르기 때문에 최대한 오류가 안나는 방향으로 가게된다.
  **즉, Person과 Developer이 둘다 가지고 있는 name의 접근만 오류가 안뜨게 된다.**

### 인터섹션 타입

- &을 사용해서 여러 타입을 만족하는 하나의 타입을 의미

```tsx
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: number;
}
type Capt = Person & Developer;

//Capt는 다음과 같은
{
  name: string;
  age: number;
  skill: string;
} //Person과 Developer의 모든 속성을 다 가지고 있어야한다.
```

⇒ 두개의 합집합을 의미.
