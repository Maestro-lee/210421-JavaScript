//ES6 함수의 추가 기능
//호출할 수 있는 함수 객체 [[Callable]] 인스턴스를 생성할 수 있는 객체 constructor 인스턴스를 생성할 수 없는 객체 non-constructor
//바인딩 된 함수를 생성자 함수로 호출 가능한 것이 문제. 객체에 바인딩 된 함수가 connstructor라는 것은 prototype프로퍼티를 가지며, 프로토타입 객체도 생성한다는 의미 이기 때문
//일반 함수는 constructor이지만 ES6의 메소드, 화살표함수는 non-constructor이다.


//메소드 - 메소드 축약 표현으로 정의된 함수
const obj = {
    x: 1,
    foo() { return this.x; },
    bar: function () { return this.x; },
};
console.log(obj.foo());
console.log(obj.bar());//ES6에서 정의한 메서드는 생성자 함수로서 호출할 수 없다.
//이에 따라 prototype프로퍼티가 없고 프로토타입도 생성하지 않는다.

//표준 빌트인 객체가 제공하는 모든 메소드는 non-constructor다.
//ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부슬롯 [[HomeObject]]를 갖는다.

const base = {
    name: 'Lee',
    sayHi() {
        return `Hi! ${this.name}`;
    }
};

const derived = {
    __proto__: base,
    //sayHi는 ES6메소드 이다. ES6메소드는 [[HomeObject]]를 갖는다.
    //sayHi의 [[HoeObject]]는 derived.prototype을 가리키고
    //super는 sayHi의 [[HomeObject]]의 프로토타입인 base.prototype을 가리킨다.
    sayHi() {
        return `${super.sayHi()}. how are you doing?`;
    }
};

console.log(derived.sayHi());


//화살표 함수 fat arrow =>
//콜백 함수 내부에서 this가 전역객체를 가리키는 문제를 해결하기 위한 대안으로 유용하다.
//함수 선언문으로 정의할 수 없다. 함수 표현식으로 정의해야 한다.
const multiply = (x, y) => x * y;
multiply(2, 3);
//매개변수가 없는경우 소괄호 생략 가능
const arrow = () => { };
//함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략 가능하다.
//표현식이 문의 중괄호 {}를 생략할 경우 에러. 표현식이 아닌 문은 반환할 수 없기 때문
//함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식이라면 암묵적으로 변환된다.
const power = x => x ** 2;
const power = x => { return x ** 2 };//동일

//객체 리터럴 반환시 객체 리터럴을 소괄호 ()로 감싸주어야 한다.
const create = (id, content) => ({ id, content });
create(1, 'JavaScript');
const create = (id, content) => { return { id, content } }; //동일

//화살표 함수의 즉시실행함수
const person = (name => ({
    sayHi() { return `Hi? My name is ${name}`; }
}))('Lee');
console.log(person.sayHi());

//콜백 함수로서 정의
[1, 2, 3].map(function (v) {
    return v * 2;
});
[1, 2, 3].map(v => v * 2);//훨씬 간결하게 표현이 가능하다.

//일반함수의 기능을 간략화 했으며 this도 편리하게 설계된 화살표 함수. 한번 알아볼까요?! 출발! 부우우우우우웅!

//1.non-structor 2.중복 매개변수이름 선언 불가
//3. 자체 this,arguments, super, new.target을 갖지 않는다.

//화살표함수의 this
//this는 함수를 호출 할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.
//화살표 함수는 함수 자체의 this바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다. 
//이를 Lexical this라고 한다.
() => this.x;
(function () { return this.x; }).bind(this);//동일

//화살표 함수가 전역함수라면 화살표 안의 this는 전역 객체를 가리킨다. 전역함수의 상위스코프는 전역이고, 전역에서 this는 전역 객체를 가리키기 때문이다.
const foo = () => console.log(this);
foo();//window

//메소드를 화살표 함수로 정의할 경우 this는 상위스코프를 가리키므로 ES6메소드 축약 표현으로 메소드를 정의하고 사용한는것이 좋다.
//프로토타입 객체의 프로퍼티에 경우도 마찬가지.

//this, super, arguments 화살표함수에서 상위스코프를 가리킨다.

//Rest 파라미터(나머지 매개변수)
//함수에 전달된 인수들의 목록을 배열로 전달받는다. ,단 하나만 선언할 수 있다, 마지막에 선언해야 한다. 함수객체의 length프로퍼티에 영향을 주지 않는다.
function foo(...rest) {
    console.log(rest);
}
foo(1, 2, 3, 4, 5);

function foo(param1, ...rest) {
    console.log(rest);
}
foo(1, 2, 3, 4, 5);
//arguments객체는 함수 호출시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용할 수 있다.
//Function.prototype.call이나 Funcion.prototype.appl메서드를 사용해 배열로 변환해야하는 번거로웅이 있다.
function sum() {
    var array = Array.prototype.slice.call(arguments);

    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}
console.log(sum(1, 2, 3, 4, 5));
//rest는 가변인자 함수의 인수 목록을 배열로 직접 전달받을 수 있다.
function sum(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5));

//매개변수 기본값
//매개변수에 인수가 전달되지 않을경우 undefined로 할당된다. 오류 방지를 위한 방어코드 필요.
function sum(x,y){
    x = x||0;
    y = y||0;
    return x+y;
}
//매개변수 기본값은 매개변수에 인수를 전달하지 않은 경우와 undefined를 전달한 경우에만 유효

//Rest파라미터는 기본값을 지정할 수 없다.
//매개변수 기본값은 함수 정의시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티와 arguments 객체에 아무런 영향을 주지 않는다.