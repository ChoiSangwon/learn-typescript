## 클래스

### readonly

- 클래스의 속성에 readonly 키워드를 사용하면 접근만 가능.

```tsx
class Developer {
  readonly name: string; //사용할 속성 목록 작성
  constructor(theName: string) {
    this.name = theName; //생성자로 생성 후 변경 불가능 (readonly이므로)
  }
}
let john = new Developer("John");
john.name = "John"; // name은 readonly이므로 오류가 뜸.
```

### GET SET

- get : 특정 값을 알아오기
- set : 특정 값을 설정하기

```tsx
class Developer {
  private name: string;

  get name(): string {
    //get
    return this.name;
  }

  set name(newValue: string) {
    if (newValue && newValue.length > 5) {
      throw new Error("이름이 너무 깁니다");
    }
    this.name = newValue;
  }
}
const josh = new Developer();
josh.name = "Josh Bolton"; // Error
josh.name = "Josh";
```

### 추상 클래스

- 하위에 상속받을 클래스의 모양을 정해주는 클래스. 예약어 abstract 사용
  → abstract가 붙은 곳은 상속 받은 하위클래스 에서는 무조건 구현해야함.

```tsx
abstract class Developer {
  abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log("drink sth");
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log("develop web");
  }
  design(): void {
    console.log("design web");
  }
}
const dev = new Developer(); // 추상 클래스는 직접 사용 불가능, 에러뜸.
const josh = new FrontEndDeveloper();
josh.coding(); // develop web
josh.drink(); // drink sth
josh.design(); // design web
```
