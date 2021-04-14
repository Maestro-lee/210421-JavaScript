//strict mode
//암묵적 전역에 의한 오류를 방지하기 위해 사용한다.
'use strict';
function foo() {
    x = 10;
}
foo();

function foo() {
    'use strict';//해당 함수와 중첩함수에 적용
    x = 10;
}
foo();

function foo() {
    x = 10;
    'use strict';//제대로 작동하지 않는다.
}
//전역에 strict mode 적용, 함수단위 strict mode적용 피할것
// 즉시실행 함수의 선두에 strict mode사용하도록 한다. 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.

//에러1. 암묵적 전역 2. 변수, 함수, 매개변수의 삭제 3. 매개변수 이름의 중복

//일반함수의 this
(function () {
    'use strict';

    function foo() {
        console.log(this);
    }
    foo();

    function Foo() {
        console.log(this);
    }
    new Foo();
}());
//argumets객체 - strict mode에서는 매개변수에 전달된 인수를 재할당 하여 변경해도 arguments객체에 반영되지 않는다.
(function (a) {
    'use strict';
    a = 2;
    console.log(arguments);
}(1));


//21장 빌트인 객체
//1. 표준 빌트인 객체
const strObj = new String('Lee');
console.log(Object.getPrototypeOf(strObj) === String.prototype);
//표준 빌트인 객체는 인스턴스 없이도 호출 가능한 빌트인 정적 메소드를 제공한다.

const numOjb = new Number(1.5);
console.log(numOjb.toFixed());
console.log(Number.isInteger(0.5));

//원시객체와 래퍼객체
//문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시객체를 래퍼객체wrapper object라 한다.
const str = 'hi';
console.log(str.length);
console.log(str.toUpperCase());
//래퍼객체로 프로퍼티에 접근하거나 메소드를 호출 한 후, 다시 원시값으로 되돌린다.
//내부슬롯에 값을 할당 한 후 아무도 참조하지 않는 상태가 되면 가비지 컬렌션의 대상이 된다.
console.log(typeof str);
//null,undefined값을 객체처럼 사용하면 에러가 발생한다.(래퍼객체를 생성하지 않기때문에)

//전역객체
//코드가 실행되기 이전 단게에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되며, 어떤 색체에도 속하지 않는 최상위 객체이다.
window.parseInt('F', 16);
parseInt('F', 16);
window.parseInt === parseInt;

//전역객체와 빌트인 프로퍼티, 함수

const x = 1;
function foo() {
    'use strict';
    eval('var x=2; console.log(x);');
    console.log(x);
}

foo();
console.log(x);
//eval 사용금지
//encodeURI/decodeURI encodeURIComponent deccodeURIComponent URI를 인코딩,디코딩한다 
//__Component함수는 쿼리스트링 구분자로 사용되는 =, ?, &은 인코딩하지 않는다.
//인코딩이란? uri문자들을 이스케이프 처리 하는것
//이스케이프 처리란 네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋으로 변환하는것

//암묵적 전역
//변수선언 없이 전역객체의 프로퍼티로 추가되어 사용. 변수가 아니므로 변수 호이스팅 발생하지 않는다.

//this
//자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기참조변수. 프로퍼티나 메소드를 참조할 수 있다.
//this바인딩은 함수호출방식에 의해 동적으로 결정된다.
//객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메소드를 하나의 논리적인 단위로 묶은 복합적인 자료구조 이다.
//객체 리터럴 - 재귀적 참조 가능
const circle = {
    radius = 5,
    getDiameter() {
        return 2 * circle.radius;
    }
};
//하지만 재귀적 참조방식은 일반적이지 않으며 바람직하지도 않다.
console.log(circle.getDiameter());

//함수 방식의 인스턴스 생성
function Circle(radius) {
    ????.radius = radius;
}
Circle.prototype.getDiameter = function () {
    return 2 *????.radius;
};
const circle = new Circle(5);