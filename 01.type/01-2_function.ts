//함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}
sum(10, 20);

//함수의 반환값에 타입을 정의
function add(): number {
  return 10;
}

// 함수에 타입(파라미터, 반환값)을 정의하는 방식
function sum1(a: number, b: number): number {
  return a + b;
}

//자바 스크립트와는 달리 파라미터에 정의된 만큼만 값을 넣어야 한다
//sum(10, 20, 30, 40); //-> 자바 스크립트는 여러개를 넘겨도 되지만, 타입스크립트는 선언되어있는 만큼(2개)만 값을 줘야한다.

//함수의 옵셔널 파라미터
//함수의 파라미터에 콜론(:)앞에 ?를 붙여주면 옵셔널(생략가능) 파라미터가 된다.
function log(a: string, b?: string, c?: string) {}

//두번째 인자부터 옵셔널 파라미터 이므로 넣어도 안넣어도 상관없음
log("hi");
log("hi", "aa");
log("hi", "aa", "bb");
