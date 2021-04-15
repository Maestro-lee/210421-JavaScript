//클로저
const x = 1;

function outerFun() {
    const x = 10;
    function innerFunc() {
        console.log(x);
    }
    innerFunc();
}
outerFun();

const x = 1;

function outerFun() {
    const x = 10;
    innerFunc();
}
function innerFunc() {
    console.log(x);
}
outerFun();
//렉시컬 스코프를 따르기 때문에 innerFunc가 outerFunc의 중첩함수가 아니라면 outerFunc함수의 변수에 접근할 수 없다.
//렉시컬 환경의 "외부 렉시컬 환경에 대한 참조"에 저장할 참조값, 즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경(위치)에 의해 결정된다.

//함수는 자신의 내부슬롯[[Environment]]에 자신이 정의된 환경, 즉 상위 스코프의 참조를 저장한다.
//함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
//외부 렉시컬 환경에 대한 참조에는 함수 객체의 내부 슬롯[[Environment]]에 저장된 렉시컬 환경의 참조가 할당된다. 함수 객체의 내부 슬롯[[Environment]]에 저장된 렉시컬 환경의 참조는 함수의 상위 스코프를 의미한다.
//이것이 함수 정의 위치에 따라 상위 스코프를 결정하는 렉시컬 스코프 이다.

const x = 1;
function outer() {
    const x = 10;
    const inner = function () { console.log(x) };
    return inner();
}

const innerFunc = outer();
innerFunc();
//외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첩 함수를 클로저closure라고 한다.
//outer함수의 실행 컨텍스트는 실행 컨텍스트에서 제거되지만 outer함수의 렉시컬 환경까지 소멸하는 것은 아니다.
//outer함수의 렉시컬 환경은 inner함수의 [[Environment]]에 의해 참조되고 있기 때문에 가비지컬렉션의 대상이 되지 않는다.
//중첩함수가 외부함수보다 오래 유지 되더라도, 상위 스코프의 어떤 식별자도 참조하지 않으면 클로저가 아니다. 바로 소멸하는 경우에도 클로저라고 하지 않는다.

//자유변수 - 클로저에 의해 참조되는 상위 스코프의 변수

//클로저는 상태를 안전하게 변경하고 유지하기 위해 사용한다.
let num = 0;
const increase = function () {
    return ++num;
}
console.log(increase());
console.log(increase());
console.log(increase());
//1. num이 increase가 호출되기 전 까지 변경없이 유지되어야 한다.
//2. 카운트상태는 increase함수만이 변경할 수 있어야 한다.

const increase = (function () {
    let num = 0;
    //클로저
    return function () {
        return ++num;
    };
}());
console.log(increase());
console.log(increase());
console.log(increase());
//클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다.

//생성자 함수로 표현하기
const Counter = (function () {
    let num = 0;
    function Counter() {

    }
    Counter.prototype.increase = function () {
        return ++num;
    };
    Counter.prototype.decrease = function () {
        return num > 0 ? --num : 0;
    };
    return Counter
}());

const counter = new Counter();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
//자유변수 counter를 연동하여 증감이 가능한 카운터를 만들려면 렉시컬 환경을 공유하는 클로저를 만들어야 한다. 이를 위해서는 makeCounter함수를 두 번 호출하지 말아야 한다.
const counter =(function(){
    let counter = 0;
    return function(predicate){
        counter = predicate(counter);
        return counter;
    };
}());
function increase(n){
    return ++n;
}
function decrease(n){
    return --n;
}

console.log(counter(increase));
console.log(counter(increase));
console.log(counter(decrease));
console.log(counter(decrease));

//JavaScript는 public, private, protected같은 접근 제한자를 제공하지 않는다.
//객체의 모든 프로퍼티와 메소드는 기본적으로 public이다.
