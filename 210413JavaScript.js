//17장 생성자 함수에 의한 객체 생성
//빈 객체의 생성 - 생성자 함수란 new연산자와 함께 호출하여 객체를 생성하는 함수
const person = new Object();

//프로퍼티 추가
person.name = 'Lee';
person.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
};

console.log(person);
person.sayHello();
//생성자 함수
//생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체를 간편하게 생성 가능
function Circle(radius){
    this.radius=radius,
    this.getDiameter= function(){
        return 2*this.radius;
    };
}

const Circle1 = new Circle(5);
const Circle2 = new Circle(10);

//new 연산자 이용 호출시 생성자 함수로 동작, 없을시 일반함수로 동작
//1. 런타임 이전 인스턴스 생성 및 this바인딩 바인딩이란? 식별자와 값을 연결한느 과정
//2. 인스턴스의 초기화
//3. 인스턴스 반환 - return 명시적 기술시 기술값 반환, return 사용X

//함수객체는 내부슬롯과 내부 메소드, 함수로서 동작하기 위한 함수객체만은 위한 내부슬롯, 내부메소드 추가로 보유
function foo(){};
console.log(foo());
console.log(new foo());

//모든 함수는 callable이지만 생성자 함수로서 호출할 수 있는지의 차이 존재
//constructor : 함수 선언문, 함수 표현식, 클래스
//non-constructor : 메서드, 화살표함수

function foo(){};
const bar = function(){};

const baz = {
    x : function(){},
};
new foo();
new bar();

const obj = {
    x(){}
};

new obj.x();

//18장 함수와 일급객체
//함수는 일반 객체와 같이 함수의 매개변수에 전달할 수 있으며 함수의 반환값으로 사용할 수 있다.
//함수객체는 고유의 프로퍼티를 소유한다.
//1. arguments 2.caller 3.length 4.name 5.__proto__ 6. prototype

//19장 프로토타입
//프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다
//모든 객체는 하나의 프로토타입을 갖는다.
//모든 프로토타입은 생성ㅇ자 함수와 연결되어 있다.
function Circle(radius){
    this.radius = radius;
}

Circle.prototype.getArea = function(){
    return Math.PI*this.radius**2;
};
//프로토타입의 프로퍼티와 메소드를 상속받는다.
//공통적으로 사용할 프로퍼티나 메소드를 프로토타입에 미리 구현해두면, 별도 구현없이 프로토타입의 자산을 공유하여 사용할 수 있다.
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);

//__proto__는 접근자 프로퍼티 이다. 
//Object.getprototypeOf 메소드 사용해 프로토타입 참고 취득  get Objecct.prototype.__proto__와 내용처리 동일
//Object.setPrototypeOf 메소드 사용해 프로토타입 교체 set Objecct.prototype.__proto__와 내용처리 동일

//__proto__객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용
//prototype 프로퍼티  생성자 함수가 자신이 생성할 객체(인스턴스)의 프로토 타입을 할당하기 위해 사용

//__proto__대신 참조 취득하고 싶을 경우 Object.getPrototypeOf 메소드
//프로토 타입 교체시 Object.setPrototypeOf 메소드 사용

//프로토타입과 생성자함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재한다.

//프로토타입 생성 시점 - 사용자정의와 빌트인
console.log(Person.prototype);

function Person(name){
    this.name = name;
}