//22.this
//자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기참조변수. 프로퍼티나 메소드를 참조할 수 있다.
//this바인딩은 함수호출방식에 의해 동적으로 결정된다.
//객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메소드를 하나의 논리적인 단위로 묶은 복합적인 자료구조 이다.
//객체 리터럴 - 재귀적 참조 가능
const circle = {
    radius: 5,
    getDiameter() {
        return 2 * circle.radius;
    }
};
//하지만 자신이 속한 객체의 재귀적 참조방식은 일반적이지 않으며 바람직하지도 않다.
console.log(circle.getDiameter());

//함수 방식의 인스턴스 생성
function Circle(radius) {
    //????.radius = radius;
}
Circle.prototype.getDiameter = function () {
    //return 2 *????.radius;
};
// const circle = new Circle(5);

//22-2 함수 호출 방식과 this바인딩
//1. 일반함수   기본적으로 this에는 전역객체가 바인딩 된다.
function foo() {
    console.log("foos's this : ", this);
    function bar() {
        console.log("bar's this : ", this);
    }
    bar();
}
foo();
//strict mode 사용시에는 undefined가 바인딩 된다.
//어떤 함수라도 일반함수로 호출되면 this에 전역객체가 바인딩 된다.
//외부 메소드, 중첩 함수, 콜백함수의 this바인딩을 메소드의 this바인딩과 일치 시키기 위한 방법 
// that에 this를 할당한다, Function.prototype.call/bind//apply를 사용한다. 화살표 함수를 사용해 this 바인딩을 일치시킬 수 있다.
var value = 1;
const obj = {
    value: 100,
    foo() {
        setTimeout(function () {
            console.log(this.value);
        }.bind(this), 100);
    }
};
obj.foo();//bind메소르를 사용한 this바인드

//2. 메소드 호출
//메소드 내부의 this는 메소드를 소유한 객체가 아닌 메소드를 호출한 객체에 바인딩 된다. this에 바인딩 될 객체는 호출시점에 결정된다.
const anotherPerson = {
    name: 'Kim',
};

//메소드 할당, 호출한 객체의 name 프로퍼티가 this에 bind된다.
anotherPerson.getName = person.getName;
console.log(anotherPerson.getName());

const getName = person.getName;
console.log(getName());

//프로토타입 메소드 내부에서 사용된 this도 해당 매소드를 호출한 객체에 바인딩 된다.
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    return this.name;
};

const me = new Person('Lee');
console.log(me.getName());
Person.prototype.name = 'Kim';

console.log(Person.prototype.getName());

//3. 생성자 함수 호출
//생성자함수 내부의 this에는 생성자 함수가 (미래에)생성할 인스턴스가 바인딩된다.
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);
console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

const circle3 = Circle(15);
console.log(circle3.getDiameter());

//4. Function.prototype.call//bind//aplly 메소드에 의한 간접호출 
function getThisBinding() {
    consol.log(arguments);
    return this;
}

const thisArg = { a: 1 };
//getThisBinding함수를 호출하며 인수로 전달한 객체를 getThisBinding함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));//배열형식
console.log(getThisBinding.call(thisArg, 1, 2, 3));//리스트 형식

const person = {
    name : 'Lee',
    foo(callBack){
        //bind메소드로 callback함수 내부의 this바인딩을 전달
        setTimeout(callBack.bind(this),100);
    },
};

person.foo(function(){
    console.log(`Hi! my name is ${this.name}.`);
})

//23 실행 컨텍스트
//식별자(변수, 함수, 클래스 등의 이름)를 등록하고 관리하는 스코프와 코드실행 관리 순서를 구현한 내부 메커니즘. 모든 코드는 실행 컨텍스트를 통해 실행되고 관리된다.
//식별자와 스코프 >> 렉시컬 환경, 코드 실행순서 >> 실행 컨텍스트 스택

//JavaScript의 동작 원리를 담고 있는 핵심개념. 전역코드, 함수코드, eval코드, 모듈코드
//소스코드 평가 (실행 컨텍스트 생성, 변수, 함수 선언문 실행하여 생성된 변수, 함수 식별자를 키로 실행컨텍스트가 관리하는 스코프(렉시컬환경의 환경레코드스)에 등록) 이후 런타임이 시작한다.
//소스코드 평가(선언문) >(런타임)> 실행컨텍스트(실행에 필요한 정보 검색)>소스코드의 실행>>실행결과 실행 컨텍스트로 반환

//1. 전역 코드 평가 var키워드로 선언된 전역 변수와 함수 선언문으로 정의된 전역 함수는 전역 객체의 프로퍼티와 메소드가 된다.
//2. 전역 코드 실행 전역 변수에 값이 할당되고 함수가 호출된다. 함수가 호출되면 전역코드의 실행을 일시중단 하고 코드 실행 순서를 변경하여 함수 내부로진입한다.
//3. 함수 코드 평가 실행 이전 함수 코드 평가과정을 진해. 매개변수, 지역변수 선언문이 실행된다. 지역 스코프에 등록된다. arguments객체 생성되어 지역스코프에 등록되고, this바인딩도 결정된다.
//4. 함수 코드 실행 매개변수, 지역변수 값이 할당된다. 식별자, 스코프체인을 이용해 함수코드를 실행하고, 종료되면 함수 호출 이전으로 되돌아가 전역코드 실행을 게속한다.
//선언에 의해 생성된 모든 식별자(변수 ,함수, 클래스 등)를 스코프를 구분하여 등록하고, 상태변화(식별자에 바인딩된 값의 변화)를 지속적으로 관리할 수 있어야 한다.
//스코프 체인을 통해 상위 스코프로 이동하며 식별자를 검색할 수 있어야 한다.
//실행중인 코드의 실행순서를 변경할 수 있어야 하며, 되돌아 갈 수도 있어야한다.
//선언>>할당>>실행>>선언>>할당>>실행
//스택방식으로 실행 순서를 관리한다. 스택의 최상위에 존재하는 실행 컨텍스트는 언제나 현재 실행 중인 실행 컨텍스트라 부른다.

//렉시컬 환경 - 스코프와 식별자의 관리
//실행 컨텍스트는 LexicalEnvironment, VariableEnvironment컴포넌트로 구성된다. 각각 렉시컬환겨을
//스코프를 구분하여 식별자를 등록하고 관리하는 저장소 역할. 식별자를 키로 등록, 바인딩 된 값을 관리한다.

//렉시컬 환경의 두가지 컴포넌트
//1. 환경 레코드 EnvironmentRecord
//식별자를 등록하고, 바인딩된 값을 관리 소스코드 타입에 따라 관리하는 내용에 차이가 있다.
//2. 외부 렉시컬 환경에 대한 참고 Outer Lexical Environment Reference
//상위 스코프를 가리킨다.해당 컨텍스트를 생성한 소스코드를 포함하는 상위 코드의 렉시컬 환경. 단방향 링크드 리스트 스코프체인을 구현한다.

//전역 환경 레코드 - 객체 환경 레코드, 선언적 환경 레코드로 구성된다. var와 let,const의 선언 차이로 인함.
//객체환경 레코드 - BindingObject객체와 연결된다. var키워드로 선언된 전역 변수, 함수 선언문으로 정의된 함수가 전역객체를 가리키는 식별자 없이 전역객체의 프로퍼티를 참조할 수 있는 이유.

//let, const키워드 선언 전역변수는 개념적인 블랙내의 존재... 개념적인 블록 >>전역 환경 레코드의 선언적 환경 레코드이다.
//선언 단계와 초기화 단계가 분리되어 진행된다. 초기화단계, 즉 런타임에 실행 흐름이 변수 언언문에 도달하기 전까지 일시적 사각지대Temporal Dead Zone에 빠지게 된다.
//this바인딩은 전역 환경 레코드와 함수 환경 레코드에ㅏㄴ 존재한다.

//식별자 결정 - 변수 할당문 또는 함수 호출문을 실행하기 위해 식별자를 확인하는것

// 렉시컬 스코프를 구현하는 메커니즘 -함수 객체의 내부슬롯 [[Environment]]에 저장. 렉시컬 환경의 외부렉시컬 환경에 대한 참조에 할당 되는것이 상위 스코프를 가리키는 함수 객체의 내부 슬롯[[Environment]]에 저장된 렉시컬환경의 참조다.
// 실행중인 실행 컨텍스트의 렉시컬 환경에서 식별자를 검색. 해당 렉시컬 환경에 없으면 외부 렉시컬 환경에 대한 참조가 가리키는 렉시컬 환경으로 이동해서 검색

//스코프체인은 현재 실행중인 실행 컨텍스트의 렉시컬 환경에서 시작하여 외부 렉시컬 환경에 대한 참조로 이어지는 렉시컬 환경의 연속이다.

//console식별자 검색을 위해 현재 실행중인 실행 컨텍스트에서 검색, 없으면 외부 렉시컬 환경에 대한 참조로 이어지는 렉시컬 환경으로의 연속. 
//console식별자를 BindingObject를 통해 전역객체에서 찾기 성공
//console의 프로토타입 체인을 통해 log메소드 검색.
//a식별자는 foo함수 렉시컬 환경에서, b식별자는 bar함수 렉시컬 환경에서, x,y는 foo함수 렉시컬 환경에서 z식별자는 bar함수 렉시컬 환경에서 검색된다.
//this value는 전역객체로. 

//bar 함수 실행 컨텍스트가 pop되어 제거 되지만, 렉시컬 환경을 누군가 참조하고 있다면 bar함수 렉시컬 환경은 소멸하지 않는다. 렉시컬 환경은 실행 컨텍스트에 의해 참조되기는 하지만, 독립적인 객체이다.
//객체를 포함한 모든 값은 누군가에 의해 참조되지 않을 때 비로소 가비지 컬렉터에 의해 메모리 공간의 확보가 해제되어 소멸한다.

//블록 렉시컬 환경과 전역 렉시컬 환경을 if문이 실행되는 경우마다 변경하여 참조.
//코드블록내에서 정의된 함수가 있다면 이 함수의 상위 스코프는 for문의 코드 블록이 생성한 렉시컬 환경이다.
//이때 함수의 상위 스코프는 for문의 코드 블록이 반독해서 실해될 때 마다 식별자의 값을 유지해야 한다. 이를 위해 for문의 코드 블록이 반복해서 실행될 때 마다 독립적인 렉시컬 환경을 생성하여 식별자의 값을 유지한다.
//이에 대해서 클로저에서 알아본다.