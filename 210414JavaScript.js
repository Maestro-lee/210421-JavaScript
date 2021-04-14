//생성된 프로토타입의 프로토타입은 언제나 Object.prototype이다.
//전역객체란? 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 생성되는 특수한 객체.
//객체 생성방식과 프로토타입의 결정
//프로토타입을 상속받아 메소드 보유
const obj = new Object();
obj.x = 1;

console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));

//일반객체인 Person.prototype은 Contructor만, 표준 빌트인 객체인 Object생성자 함수, Object.prototype은 다양한 메서드를 갖는다.
function Person(name) {
    this.name = name;
}
const me = new Person('Lee');
//일반객체와 같은 프로토타입에도 프로퍼티를 추가/삭제 할 수 있다. 이는 프로토타입 체인에 즉각 반영된다.
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log(`Hi my name is ${this.name}`);
};

const me = new Person('Lee');
const you = new Person('Kim');

me.sayHello();
you.sayHello();
//이상 객체 생성방식과 그에 따른 프로토타입의 결정
//프로토타입 체인
//Object - 최상위 prototype, 모든 prototype의 prototype은 Object.prototye이다. JavaScript가 상속을 구현하는 매커니즘 이다.
//call메소드 this로 사용할 객체를 전달하면서 함수를 호출한다.
//프로토타입체인 종점인 Object.prototype에서도 메소드 검색이 안 될 경우 undefined를 반환한다.

me.hasOwnProperty('name');
//스코프체인에서 me식별자 검색 >> me객체 프로토타ㅣㅂ 체인에서 hasOwnProperty메소드 검색
//스코프체인과 프로토타입 체인은 서로 협력하여 식별자와 프로퍼티를 검색하는데 사용된다.

//오버라이딩과  - 프로토타입 프로퍼티와 같은 이름 프로퍼티 >>인스턴스 프로퍼티로 추가.
//섀도잉 - 오버라이딩에 의해 프로퍼티가 가려지는 현상
//오버로딩 ? 함수 이름은 동일하나 매개변수 타입,개수에 따라 메소드를 구별하여 호출하는 방식.

//프로토타입의 프로퍼티를 변경 또는 삭제하려면 프로토타입에 직접 접근해야한다.
//하위 객체에서 get허용 set비허용
Person.prototype.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
};
me.sayHello();
delete Person.prototype.sayHello;
me.sayHello();

//프로토타입은 동적으로 변경할 수 있다. 생성자 함수 또는 인스턴스에 의해 교체가 가능하다.
const Person = (function () {
    function Person(name) {
        this.name;
    }
})
//생성자 함수에 의한 방법과 인스턴스에 의한 방법 - 생성자 함수가 교체된 프로토타입을 가리키느냐 가리키지 않느냐의 차이.

//instance of 연산자
//우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평과되며, 아닐경우 false로 평가된다.
//생성자 함수의 prototype에 바이딩 된 객체가 프로토타입 체인 상에 존재하는지 확인한다.
function Person(name) {
    this.name = name;
}
const me = new Person('Lee');
console.log(me instanceof Person);
console.log(me instanceof Object);

const Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype = {
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };
    return Person;
}());

const me = new Person('Lee');
//constructor프로퍼티와 생성자 함수 간의 연결이 파괴되어도 instanceof는 아무런 영향을 받지 않는다.
console.log(me.constructor === Person);
console.log(me instanceof Person);
console.log(me instanceof Object);

//Object.create 첫 번째 매개변수에 전달한 객체의 프로토타입 체인에 속하는 객체를 생성한다.

//정적 메소드는 인스턴스를 생성하지 않아도 호출할 수 있다.

//프로퍼티 존재 확인
//in ,  Object.prototype.hasOwnProperty
//in 객체 내에 특정 프로퍼티가 존재하는지 여부 확인 key in object object가 상속받은 모든 프로토타입의 프로퍼티를 확인하므로 주의
const Person = {
    name: 'Lee',
    address: 'Seoul',
};
console.log('name' in Person);
console.log('address' in Person);
console.log('age' in Person);
//객체 고유의 프로퍼티 키인 경우에만 true반환, 상속받은 프로토타입의 프로퍼티 키인경우 false를 반환한다.
console.log(person.hasOwnProperty('name'));

//프로퍼티 열거 for...in           for(변수 선언문 in 객체){...}
const Person = {
    name: 'Lee',
    address: 'Seoul',
};
for (const key in Person) {
    console.log(key + ' ; ' + person[key]);
}
//Object.prototype.string 프로퍼티의 프로퍼티 어트리뷰트[[Enumerable]]이 false이기 때문에 for...in으로 열거할 수 없다.
//for...in문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트[[Enumerble]]이 true인 프로퍼티를 순회하며 열거Enumeration한다.

//고유 프로퍼티만 보기를 원할 경우 Object.keys/values/entries메소드 사용 권장
//Object.keys/values 열거가능한 프로퍼티를 배열로 반환
//Object.entries 키,값을 배열로 반환