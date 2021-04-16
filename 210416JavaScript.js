//클래스
//JavaScript는 프로토타입 기반 객체 지향 언어다. 프로토타입 기반 객체지향 언어는 클래스가 필요없는 객체지향 프로그래밍 언어다.
var Person = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayHi = function () {
        console.log('Hi! My name is' + this.name);
    };
    return Person;
}());

var me = new Person('Lee');
me.sayHi();

//클래스와 생성자 함수 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않는다.
//1. 클래스 new없이 사용시 에러, 생성자 함수 new 없을시 일반함수로 호출
//2. 클래스는 상속지원 키워드 제공 extends, super  생성자 X
//3. 클래스 호이스팅 없는듯 동작. 함수 선언문 정의 생성자함수 >>함수 호이스팅, 함수 표현식 정이 생성자함수 >> 변수 호이스팅
//4. 클래스 모든 코드 내 암묵적 strict mode적용, 해제 불가
//5. 클래스는 constructor, 프로토타입 메서드, 정적 메서드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false이다. 열거 불가.

//일급 객체이다. 

class Person { }//클래스 선언문
console.log(typeof Person);//클래스는 함수로 평가받는다.

//클래스 선언문은 let,const키워드로 선언한 변수처럼 호이스팅 된다. 선언문 이전에 일시적 사각지대Temporal Dead Zone에 빠진다.
//모든 선언문은 런타임 이전에 먼저 실행.

//일반함수 - 그냥 함수
//생성자 함수 - 객체만들기

//메소드 - constructor, 프로토타입 메서드, 정적 메서드 세가지
//constructor 인스턴스를 생성하고 초기화 하기 위한 특수한 메서드 생성자.
class Person {
    constructor(name) {
        this.name = name;
    }
}
//constructor내부 return 사용 금지 class의 기본 동작을 훼손한다.
//명시적 객체 return>>객체 return 원시값 return>> this return  

//프로토타입 메소드 - prototype프로퍼티에 메소드를 추가하지 않아도 기본적으로 프로토타입 메소드가 된다.
class Person{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`Hi! My name is ${this.name}`);
    }
}
const me = new Person('Lee');
me.sayHi();
//클래스 몸체에서 정의한 메소드는 인스턴스의 프로토타입에 존재하는 프로토타입 메소드가 된다. 인스턴스는 프로토타입 메소드를 상속받아 사용할 수 있다.

//정적메소드 - 인스턴스를 생성하지 않아도 호출할 수 있는 메소드
class Person{
    constructor(name){
        this.name=name;
    }
    static sayHi(){
        console.log('Hi!');//정적메소드는 클래스에 바인딩 된다. 클래스로 호출한다. 프로토타입 체인상에 클래스가 없으므로 인스턴스로 클래스의 메소드를 상속받을 수 없다.
    }
}

//메소드 내부에 참조할 프로퍼티가 있다면 프로토타입 메소드로, 메소드 내부에서 인스턴스를 참조할 필요가 없다면 this를 사용하지 않게 된다.
//빌트인 객체 Math, Number, JSON, Object, Reflect등 다양한 정적메소드 제공하는 유틸리티utility함수

//클래스에서 정의한 메소드의 특징
//1. function 키워드 생략 2. 메소드 정의시 콤마 필요없다. 3. 암묵적으로 strict mode적용 4. [[Enumerable]] false 5. 내부 메소드[[Construct]]를 갖지 않는다. new연산자로 호출할 수 없다.

//인스턴스 프로퍼티 - constructor내부에 선언해야 한다.
//클래스 접근자 프로퍼티 get은 무언가를 반환하고 set은 매개변수가 있어야 하며 하나의 매개변수만 선언 가능

//클래스 필드 정의제안
//클래스 필드는 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어
//클래스 필드를 참조하는 경우 JavaScript에서는 this를 반드시 사용해야 한다.

//private 정의 #붙이기.
class Person{
    #name = '';
    constructor(name){
        this.#name = name;
    }
}
const me = new Person('Lee');
console.log(me.#name);

//static 필드 정의 제안
class Mymath{
    static PI = 22/7;
    static #num = 10;
    static increment(){
        return ++Mymath.#num;
    }
}

console.log(Mymath.PI);
console.log(Mymath.increment());

//상속에 의한 클래스 확장
//프로토타입은 프로토타입 체인을 통해 다른 객체의 자산을 상속받는것.
//클래스 확장은 기존 클래스를 상속받아 새로운 클래스를 확장extende하는것.

class Animal{
    constructor(age, weight){
        this.age = age;
        this.weight = weight;
    }
    eat(){return 'eat';}
    move(){return 'move';}
}

class Bird extends Animal{
    fly(){return 'fly';}
}
const bird = new Bird(1,5);
console.log(bird);
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);

console.log(bird.eat());
console.log(bird.fly());
console.log(bird.move());

//동적 상속 -생성자 함수를 상속받아 클래스를 확장할 수도 있다. 단 extends키워드 앞에는 반드시 클래스.
function Base1(){}
class Base2{}
let condition = true;

class Derived extends ( condition? Base1:Base2){}

const derived = new Derived();
console.log(derived);
console.log(derived instanceof Base1);
console.log(derived instanceof Base2);

//서브클래스의constructor 
//서브클래스에서 constructor를 생략하면 클래스에 다음과 같은 contructor가 암묵적으로 정의된다. args는 new연산자와 함께 클래스를 호출할 때 전달한 인수의 리스트다.
constructor(...args){super(...args);}
//super()는 수퍼클래스의 constructor(super-constructor)를 호출하여 인스턴스를 생성한다.
//프로퍼티를 소유하는 인스턴스를 생성하려면 constructor내부에서 인스턴스에 프로퍼티를 추가해야 한다.

//super 수퍼클래스의 constructor를 호출한다.
//수퍼클래스의 메소드를 호출할 수 있다.
class Base{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
}

class derived extends Base{
    constructor(a,b,c){
        super(a,b);
        this.c=c;
    }
}
const derived = new Derived(1,2,3);
console.log(derived);

//[[HomeObject]]는 메서드 자신을 바인딩 하고 있는 객체를 가리킨다.
//[[HomeObject]]를 통해 메서드 자신을 바인딩 하고 있는 객체의 프로토타입을 찾을 수 있다.
//ES6의 메소드 축약표현으로 정의된 함수만이 [[HomeObject]]를 갖는다.

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width*this.height;
    }
    toString(){
        return `width = ${this.width}, height = ${this.height}`;
    }
}

class ColorRectangle extends Rectangle{
    constructor(width, height, console){
        super(width,height);
        this.console = color;
    }
    toString(){
        return super.toString() + `, color = ${this.color}`;
    }
}

const colorRectangle = new ColorRectangle(2,4,'red');
console.log(colorRectangle);
console.log(colorRectangle.getArea());
console.log(colorRectangle.toString());
//[[ConstructorKiind]]를 통해 상속 구분. 상속 받지 않았을 경우 base
//상속 받았을 경우 derived new연산자ㅘ 함께 호출 되었을때의 동작이 구분된다.
//서브클래스는 자신이 직접 인스턴스를 생성하지 않고 수퍼클래스에게 인스턴스생성을 위임한다. 이것이 서브클래스의 constructor에서 super를 호출해야하는 이유이다.
//인스턴스 생성을 위해 서브클래스의 constructor에 반드시 super를 호출해야 한다.(생략시 암묵적으로 호출)
//수퍼클래스의 constructor내부의 this는 생성된 인스턴스를 가리킨다.
//인스턴스는 new.target이 가리킨느 서브클래스가 생성한 것으로 처리된다. 인스턴스의 프로토타입이 서브클래스의 프로토타입이 된다.
//서브클래스는 별도의 인스턴스를 생성하지 않고 super가 반환한 인스턴스를 this에 바인딩하여 그대로 사용한다.
//super가 호출되지 않으면 this바인딩도 안되며 인스턴스 생성도 되지 않는다. super호출하지 않으면 this를 참조할 수 없는이유.
//서브클래스의 인스턴스 초기화 >> 인스턴스 반환

//표준 빌트인 생성자 함수 확장
//extends는 [[Construct]]내부 메서드를 갖는 함수 객체로 평가될 수 있는 모든 표현식 사용 가능.

class MyArray extends Array{
    uniq(){
        return this.filter((v,i,self)=>self.indexOf(v)===i);
    }
    average(){
        return this.reduce((pre,cur)=>pre+cur,0)/this.length;
    }
}

const myArray = new MyArray(1,1,2,3);
console.log(myArray);
console.log(myArray.uniq());
console.log(myArray.average());
//메소드 체이닝 Method Chaining 
//Array 생성자 함수를 상속받아 확장한 MyArray클래스가 생성한 인스턴스는 Array.prototype과 MyArray.prototype의 모든 메소드 사용 가능.
//이 때 새로운 배열을 반환하는 메소드가 MyArray클래스의 인스턴스를 반환하여 메소드체이닝이 가능하다.

console.log(myArray.filter(v=>v%2).uniq().average());

//MyArray클래스가 생성한 인스턴스가 아닌 Array가 생성한 인스턴스를 반환하게 하고 싶다면 Symbol.species를 사용해 정적 접근자 프로퍼티를 추가하면 된다.