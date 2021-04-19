//7번쨰 데이터타입 심볼 Symbol
//다른 값과 중복되지 않는 유일무이한 값. 주로 이름 충돌위험이 없는 유일한 프로퍼티 키를 만들기 위해 사용
const mySymbol = Symbol();
console.log(typeof mySymbol);//symbol
console.log(mySymbol);//Symbol() 
//new연산자로 호출하지 않는다.
//심벌 갑에 대한 설명의 용도로 문자열을 인수로 전달할 수 있다.
//객체처럼 접근하면 암묵적으로 래퍼객체를 생성한다.
console.log(mySymbol.description);
console.log(mySymbol.toString());
//불리언타입으로 타입변환 된다.
console.log(!!mySymbol);
if (mySymbol) console.log('mySymbol is not empty');

Symbol.for();//인수로 전달받은 문자열을 키로 사용하여 키와 심벌값의 쌍들이 저장되어 있는 전역 심벌 레지스트리에서 해당 키와 일치하는 심벌값을 검색한다.
//검색 성공시 - 검색된 심볼값을 반환
//검색 실패시 - 새로운 심볼값 생성. 인수로 전달된 키로 전역 심벌 레지스트리에 저장, 생성된 심벌 값 반환.
Symbol.keyFor();//전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출할 수 있다.
const s1 = Symbol.for('mySymbol');
Symbol.keyFor(s1);
const s2 = Symbol('foo');//Symbol함수를 호출하여 생성한 심볼 값은 전역 심볼 레지스트리에 등록되어 관리되지 않는다.
Symbol.keyFor(s2);

//심벌과 상수
//변경,중복 될 가능성이 있는 무의미한 상수 대신 중복될 가능성이 없는 유일무이한 심벌값을 사용할 수 있다.
const Direction = {
    UP: 1,         //UP : Symbol('up'),
    DOWN: 2,       //DOWN : Symbol('down'),
    LEFT: 3,       //LEFT : Symbol('left'),
    RIGHT: 4,      //RIGHT : Symbol('right'),
};
const myDirection = Direction.UP;
if (myDirection === Direction.UP) console.log('You are going UP');

//JavaScript에선 enum을 구현하기 위해 Object.freeze()와 심볼을 이용한다.

//심벌과 프로퍼티 키 - 심벌값을 프로퍼티 키로 사용하려면 프로퍼티 키로 사용할 심벌 값에 대괄호를 사용해야 한다. 프로퍼티에 접근할 때도 대괄호를 사용해야 한다.
const obj = {
    [Symbol.for('mySymbol')]: 1,
};
obj[Symbol.for('mySymbol')]; // 1

//심볼로 프로퍼티를 만들 경우 프로퍼티를 은닉할 수 있다. for...in, Object.Keys, Object.getOwnPropertyNames으로 찾을 수 없다.
console.log(Object.getOwnPropertySymbols(obj));//getOwnPropertySymbols 메소드는 인수로 전달한 객체의 심볼 프로퍼티 키를 배열로 반환한다.
const symbolKey1 = Object.getOwnPropertySymbols(obj);//심벌 값도 찾을 수 있다.

//심볼값 프로퍼티로 키를 생성하여 표준 빌트인 객체를 확장할 경우, 심볼은 유일한 값이기에 충돌 없이안전하게 표준 빌트인 객체를 확장할 수 있다.
Array.prototype[Symbol.for('sum')] = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};
[1, 2][Symbol.for('sum')]();

//Well-known Symbol
//자바스크립트가 기본 제공하는 빌트인 심벌 값. 자바스크립트 엔진의 내부 알고맂ㅁ에 사용된다.
//이터레이션 프로토콜. 일반객체를 이터러블처럼 동작하게 하고싶다면 이터레이션 프로토콜을 따르면 된다.
const iterable = {
    //Symbol.iterator메소드를 구현하여 이터러블 프로토콜을 준수
    [Symbol.iterator]() {
        let cur = 1;
        const max = 5;
        //Symbol.iterator메소드는 next메소드를 소유한 이터레이터를 반환.
        return {
            next() {
                return { value: cur++, done: cur > max + 1 };
            }
        };
    }
};

for (const num of iterable) {
    console.log(num);
}
//중복되지 않는 상수값의 생성, 기존에 작성된 코드에 영향을 주지 않고 새로운 프로퍼티를 추가하기 위해, 하위 호환성을 보장하기 위해 도입되었다.

//34장 이터러블
//이터러블 - 이터러블 프로토콜을 준수한 객체.Symbol.iterator를 프로퍼티 키로 사용한 메소드 구현 or 프로토타입 체인을 통해 상속받은 객체
//이터레이터 - 이터러블의 Symbol.iterator 메소드를 호출하면 ㅣ터레이터 프로토콜을 준수한 이터레이터를 반환한다. 이터러블의 Symbol.iterator메소드가 반환한 메소드는 next()메소드를 갖는다.
//next메소드를 호출하면 이터러블을 순차적으로 한 단게씩 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체 iterator result object를 반환한다. next메소드는 value와 done프로퍼티를 갖는다.
//이터레이션 프로토콜 - 순회가능iterable 데이터 컬렉션(자료구조)을 만들기 위해 ECMPScript사양에 정의하여 미리 약속한 규칙, 데이터 소비자와 데이터 공급자를 연결하는 인터페이스 역할
//순회가능한 데이터 컬렌션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 for...of문, 스프레드 문법, 배역 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화.
//이터러블이면서 이터레이터인 객체를 생성하면 Symbol.iterator메서드를 호출하지 않아도 된다. 
{
    [Symbol.iterator](){ return this; }.
    next(){
        return { value: any, done: boolean };
    }
}


//35장 스프레드 문법
console.log(...[1, 2, 3]); //1 2 3
console.log(... 'Hello');// H e l l o
console.log(... new Map([['a', '1'], ['b', '2']]));//['a','1'] ['b','2']
console.log(... new Set([1, 2, 3]));// 1 2 3
console.log(...{ a: 1, b: 2 });//이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다.
//스프레드 문법의 결과는 변수에 할당할 수 없다.

//1. 함수 호출문의 인수 목록에서 사용하는 경우.
const arr = [1, 2, 3];
var max = Math.max(...arr);//[1,2,3]을 1,2,3으로 펼쳐서 전달
//Rest파라미터와 스프레드문법은 서로 반대의 개념이다.

//2. 배열 리터럴 내부에서 사용하는 경우
var arr = [1, 2].concat([3, 4]);
const arr = [...[1, 2], ...[3, 4]];//concat대신 스프레드를 이용한 배열 결합

var arr1 = [1, 4];
var arr2 = [2, 3];
arr1.splice(1, 0, arr2); //[1,[2,3]4]
Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));//[1,2,3,4]
arr.splice(1, 0, ...arr2); //[1,2,3,4]//스프레드를 활용해 간결하게 표현

var origin = [1, 2];
var copy = origin.slice();
console.log(copy);
console.log(copy === origin);//false
var origin = [1, 2];
var copy = [...origin];
console.log(copy);
console.log(copy === origin);//false 원본 배열은 각 요소를 얕은 복사 shallow copy하여 복사본을 생성하므로 false

//ES5
function sum() {
    //이터러블이면서 유사 배열 객체인 arguments를 배열로 반환
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}
function sum() {            //스프레드 문법을 활용한 간략화
    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}
const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);//Rest파라미터 args는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

//3. 객체 리터럴 내부에서 사용되는 경우 
const obj = { x: 1, y: 2 };
const copy = { ...obj };
console.log(copy);//{1,2}
console.log(obj === copy);//false

const merge = { 1: 2, y: 2, ...{ a: 3, b: 4 } };//객체 병합
const merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });//Object.assign메소드를 사용한 병합, 특정 프로퍼티 변경or추가

const merge = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };//프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const added = { ...{ x: 1, y: 2 }, z: 0 };//스프레드 문법을 활용하여 병합, 추가


//36장 디스트럭처링 할당 destructuring assignment
//구조화된 배열과 같은 이터러블, 객체를 destructuring하여 1개 이상의 변수에 개별적으로 할당하는것. 필요한 값만 추출하여 변수에 할당할 때 유용하다.

//1. 배열 디스트럭처링 할당 할당의 대상(할당문의 우변)은 이터러블이어야 함, 할당 기주는 배열의 인덱스이다.
const arr = [1, 2, 3];
const [one, two, three] = arr;//왼쪽에 값을 할당받을 변수를 배열 리터럴로 선언한다.
console.log(one, two, three);// 1 2 3

const [a, b] = [1, 2];
const [c, d] = [1];        //변수의 개수와 이터러블의 요소 개수가 반드시 일치할 필요는 없다.
console.log(c, d);// 1 undefined
const [e, f] = [1, 2, 3];
const [g, , h] = [1, 2, 3];
console.log(g, h);//1 3

const [a, b, c = 3] = [1, 2];//기본값 설정 가능하나, 기본값 보다 할당된 값이 우선한다.
const [e, f = 10, g = 3] = [1, 2];//1 2 3
console.log(e, f, g);

//URL을 파싱하여 protocol, host, path프로퍼티를 갖는 객체를 반환한다.
function parseURL(url = '') {
    const parseURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parseURL);
    if (!parseURL) return {};
    const [, protocol, host, path] = parseURL;
    return { protocol, host, path };
}
const parseURL = parseURL(https://github.com/Maestro-lee/210421-JavaScript);
    console.log(parseURL);

//배열 디스트럭처링 할당의 Rest요소 사용
const [x, ...y] = [1, 2, 3];//Rest요소는 Rest 파라미터와 마찬가지로 반드시 마지막에 위치해야 한다.
console.log(x, y); //1 [ 2 , 3 ]

//2. 객체 디시트럭처링 할당
const user = { firstName: 'Ungmo', secondName: 'Lee' };
const { lastName, firstName } = user; //프로퍼티 키를 기준으로 하여 할당이 이루어진다.

const { firstName = 'Ungmo', lastName } = { lastName: 'Lee' };//객체 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.

const str = 'Hello';
const { length } = str;//5 프로퍼티 키로 필요한 값만 추출하여 변수에 할당하고자 할 때 유용하다.
const todo = { id: 1, content: HTML, completed: true };
const { id } = todo;
console.log(id);//1

//객체를 인수로 전달받는 함수의 매개변수에도 사용할 수 있다.
function printTodo(todo) {
    console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'} 상태입니다.`);
}
printTodo({ id: 1, content: HTML, completed: true });//할일 HTML은 완료 상태입니다.

//배열의 요소가 객체인 경우 혼용
const todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JS', completed: false },
];
const [, { id }] = todos;//배열은 인덱스로 구분하므로 두번째, 객체 디스트럭처링 할당에 의해 id프로퍼티로 2할당. 1인덱스의 id프로퍼티 값 추출

//중첩객체
const user = {
    name: 'Lee',
    address: {
        zipCode: '103924',
        city: 'Seoul'
    }
};
//address프로퍼키 키로 객체를 추출하고 이 객체의 city프로퍼티 키로 값을 추출한다. 이중추출
const { address: { city } } = user;

//Rest프로퍼티 2007 TC39 프로세스 stage4단계 제안
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x, rest);//1 {y:2 z:3}

//37장 Set과 Map
//Set객체는 중복되지 않는 유일한 값들의 집합이다. 수학적 집합의 특성과 일치한다. 교집합, 합집합, 차집합, 여집합 등을 구현할 수 있다.
const set = new Set();
console.log(set);//Set(0){} 인수를 전달하지 않으면 빈 Set객체가 생성된다.

const set1 = new Set([1, 2, 3, 3]);//set생성자 함수는 이터러블을 인수로 전달받아 Set객체를 생성한다. 중복된 값은 Set객체에 요소로 저장되지 않는다.
console.log(set1);//Set(3) {1,2,3}
const set2 = new Set(['Hello']);
console.log(set2);//Set(4) {'H', 'e', 'l', 'o'}

//요소 개수 확인
const { size } = new Set([1, 2, 3, 3]);
console.log(size);//3 size프로퍼티는 setter함수 없이 getter함수만 존재하는 접근자 프로퍼티이다.

//요소 추가 - Set.prototype.add메소드사용
const set = new Set();
console.log(set); //Set(0){}
set.add(1);
console.log(set); //Set(1){1}
set.add(2).add(3);
set.add(2).add(3).add(3);//중복 요소를 추가할 경우 에러없이 무시된다.
Set.add(NaN).ADD(NaN);//NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.

//객체나 배열과 같이 자바스크립트의 모든 값을 요소로 저장할 수 있다.
const set = new Set();
set
    .add(1)
    .add('a')
    .add(true)
    .add(undefined)
    .add(null)
    .add({})
    .add([])
    .add(() => { })
console.log(set);//Set(8) {1, 'a', true, undefined, null, {}, [], ()=>{}}

//요소 존재여부 확인 Set.prototype.has
console.log(set.has(2));//특정 요소의 존재 여부를 나타내는 불리언 값 반환

//요소 삭제 Set.prototype.delete 삭제하려는 요소를 인수로 전달해야한다. 인덱스를 갖지 않기 때문에.
const set = new Set([1, 2, 3]);
set.delete(1);
set.delete(2);
set.delete(0);//존재하지 않는 Set객체의 요소를 삭제하려 하면 에러 없이 무시된다.
set.delete(1).delete(2);//삭제 성공 여부를 불리언값으로 반환한다. 연속적으로 호출이 불가하다.

//요소 일괄삭제 Set.prototype.clear 언제나 undefined를 반환한다.
const set = new Set([1, 2, 3]);
set.clear(set);//set(0) {}

//요소 순회 - Set객체는 이터러블이다. 스프레드문법, 디스트럭처링 할당 모두 가능. 이터러블의 순회와 호환성을 유지하기 위해 Set객체를 순회하는 순서는 요소가 추가된 순서를 따른다.
const set = new Set([1, 2, 3]);
set.forEach((v, v2, set) => console.log(v, v2, set));

//집합의 연산
Set.prototype.intersection() = {};
Set.prototype.union() = {};
Set.prototype.difference() = {};
Set.prototype.isSuperset() = {};

//Map 키와 값의 쌍으로 이루어진 컬렉션. 객체와 유사하지만 차이 있다.
const map = new Map(); //Map 객체는 Map 생성자 함수로 생성한다. 
console.log(map);//Map(0) {} 
//이터러블을 인수로 전달받아 Map객체를 생성한다. 이때 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야 한다.
const map1 = new Map([['Key1', 'value1'], ['Key2', 'value2']]);
console.log(map1);//Map(2) {'Key1 => 'value1 , 'key2 => value2}
//요소 개수 확인 - Map.prototype.size Set과 동일하게 getter함수만 존재하는 접근자 프로퍼티이다.

//요소추가 - Map.prototype.set
const map = new Map();
map.set('key1', 'value1');
const map = new Map();
map
    .set('key1', 'value1')//연속적인 호출이 가능하다.
    .set('key2', 'value2')
    .set('key2', 'value2');//중복된 키를 갖는 요소는 허용되지 않는다. 에러없이 무시된다.
    
map.set(NaN, 'value1').set(NaN,'value2');//NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.

//객체는 문자열 또는 심벌값만 키로 사용 가능하나, Map객체는 키타입에 제한이 없다.객체를 포함한 모든 값을 키로 사용할 수 있다.
Map.prototype.get();//인수로 키를 전달하면 Map객체에서 인수로 전달한 키를 갖는 값을 반환한다. 존재하지 않으면 undefined반환
Map.prototype.has();//특정 요소의 존재 여부를 나타내는 불리언 값을 반환.
Map.prototype.delete();//삭제 성공 여부를 불리언 값으로 반환한다. 존재하지 않는 키는 에러없이 무시된다. 연속적으로 호출할 수 없다.
Map.prototype.clear();//요소를 일괄 삭제한다. 언제나 undefined를 반환한다.

//요소순회
Map.prototype.forEach(( , , )=>( , , ));//첫번째 - 현재 순회중인 요소값 // 두번째 - 현재 순회중인 요소 키 // 세 번째 - 현재 순회 중인 Map 객체자체
//Map객체는 이터러블이다. 스프레드 문법과 배열 디스트럭처링 할당의 대상이 될 수 있다.

Map.prototype.keys();//Map객체에서 요소키를 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다.
Map.prototype.values();//Map객체에서 요소값을 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다.
Map.prototype.entries();//Map객체에서 요소키와 요소값을 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다.
//이터러블의 순회와 호환성을 유지하기 위해 Map객체를 순회하는 순서는 요소가 추가된 순서를 따른다.