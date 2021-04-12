//모던 자바스크립트 154p~232p 12장 함수, 13장 스코프, 14장 전역 변수의 문제점, 15장 let const 키워드와 블록 레벨 스코프 16장 프로퍼티 어트리뷰트
//12장 함수
//함수 - 일련의 과정은 문(statement)으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한것, 함수는 객체이다.

//함수 선언문 - 호이스팅OK
function add(x, y) {
    return x + y;
}

//함수 표현식
var add = function add(x, y) {
    return x + y;
};

//Function 생성자 함수 -사용 지양
var add = new Function('x', 'y', 'return x+y');

//화살표 함수, 무명함수 
var add = (x, y) => x + y;


// 함수 선언문은 이름을 생략할 수 없다.
// 함수 선언문은 표현식이 아닌 문이다.
// 선언문의 식별자와 함수 이름은 동일하다.

//즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

//콜백 함수
function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}

var logAll = function (i) {
    console.log(i);
};

var logOdds = function (i) {
    if (i % 2) console.log(i);
};

repeat(5, logAll);
repeat(5, logOdds);

//순수함수 - 부수효과가 없는 함수
//비순수함수 - 부수효과가 있는 함수


//13장 스코프
//모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)가 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효범위.
//스코프는 네임스페이스이다.
//렉시컬 스코프 함수를 어디서 정의했는지에 따라 상위  스코프를 결정한다.

//14장 전역 변수의 문제점
//전역변수 최소화 하고 지역변수 사용 지향해야 한다.
//1. 즉시 실행 함수 2. 네임스페이스 객체 3. 모듈 패턴 4. ES6 모듈

//15장 let, const 키워드와 블록 레벨 스코프 
//var의 문제점 
//1. 변수 중복 선언 허용 2. 함수 레벨 스코프 3. 변수 호이스팅

//let 1. 변수 중복 선언 금지 2. 블록 레벨 스코프 3. 변수 호이스팅 4. 전역객체
//const  1. 선언과 초기화 동시 2.재할당 금지 3. 상수 4.객체 할당시 값 변경 가능
//const위주 사용, let 재할당 필요시 한정

//16장 프로퍼티 어트리뷰트
//내부 슬롯, 내부 메소드 제한적 접근 가능
//프로퍼티 어트리뷰트, 디스크립터 객체
//프로퍼티 - 데이터 프로퍼티와 접근자 프로퍼티

//데이터 프로퍼티의 정의
const person = {};

Object.defineProperty(person, 'firstName', {
    value: '',
    writable: '',
    enumerable: '',
    configurable: '',
});
Object.defineProperty(person, 'lastName', {
    value: '',
    writable: '',
    enumerable: '',
    configurable: '',
});
Object.defineProperty(person, 'fullName', {
    get() {
        return;
    },
    set(name) {
        this.name;
    },
    enumerable: true,
    configurable: true,
});

//객체 변경 방지 - 객체확장금지 - preventExtensions, 객체 밀봉 - seal, 객체 동결 - freeze