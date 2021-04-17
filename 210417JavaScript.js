//배열이란?
const arr = ['apple','banana','orange'];
//배열은 객체타입
typeof arr//object
//베열리터럴, Array생성자함수, Array.of, Array.from 메소드로 생성 가능
arr.constructor ===Array
Object.getPrototypeOf(arr)===Array.prototype

//JavaScript의 배열은 희소배열 sparse array   //밀집배열 dense array도 있다. 동일크기 메모리 공간 연속 나열된 자료구조
//배열의 요소가 연속적으로 위치하지 않고 일부가 비어 있는 배열, 배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 가진다.
//접근은 밀집배열에 비해 느리나, 검색,삽입,삭제에 효율적

//length프로퍼티의 값은 0~2^32-1(약 43억) 최대 인덱스는 2^32-2
//Array.from 유사 배열 객체, 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.
//두 번째 인수로 전달한 콜백 함수를 통해 값ㅇ르 만들면서 요소를 채울 수 있다.

//정수 이외의 값을 인덱스 처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다. 이때 추가된  프로퍼티는 length프로퍼티값에 영향을 주지 않는다.
//배열 요소의 추가
const arr=[];
arr[0]=1;
//프로퍼티 추가
arr['1']=2;
arr['foo'] = 3;
arr.bar=4;
arr[1.1]=5;
arr[-1]=6;

//삭제시 객체의 프로퍼티를 삭제하는 delete를 사용하면 희소배열이 되므로 사용하지 않는것이 좋다.
// Array.prototype.splice메소드 사용 (삭제를 시작한 인덱스, 삭제할 요소 수)
const arr=[1,2,3];
//arr[1]부터 1개의 요소를 제거
arr.splice(1,1);
console.log(arr);
console.log(arr.length);

//원본 배열(배열 메소드를 호출한 배열, 즉 배열 메소드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경하는 메소드와
//원본 배열을 직접 견경하지 않고 새로운 배열을 생성하여 반환하는 메소드가 있다. 
//대부분 원본배열을 직접 변경하지 않지만 초창기 배열 메소드는 원본 배열을 직접 변경하는 경우가 많다.(부수효과에 주의)
Array.isArray()//인수가 배열이면 true 배열이 아니면 false 유사배열false
Array.prototype.indexOf()//원본배열에 인수로 전달 된 요소를 검색하여 인덱스 반환. 있으면 첫번째 인덱스, 없으면 -1반환
                        // Array.prototype.includes사용시 가독성시 더 좋다(ES7에서 도입)
Array.prototype.push()//인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가, 변경된 length 프로퍼티값 반환. 성능면에서 별로.                   ✔✔✔✔✔✔원본배열 직접변경✔✔✔✔✔✔ 
                      //length사용하여 마지막요소 직접 추가 가능하며, 더 빠르다. ES6의 스프레드 문법 사용시 부수효과없이 추가 가능.
const arr = [1,2];
arr[arr.length]=3;

Array.prototype.pop()//원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다. 원본 배열이 빈 배열이면 undefined를 반환한다.                   ✔✔✔✔✔✔원본배열 직접변경✔✔✔✔✔✔
Array.prototype.unshift()//인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고, 변경된 length프로퍼티 값을 반환한다.                       ✔✔✔✔✔✔원본배열 직접변경✔✔✔✔✔✔
Array.prototype.shift()//원본 배열에서 첫 번쨰 요소를 제거하고 제거한 요소를 반환한다. 빈 배열이면 undefined를 반환한다.                            ✔✔✔✔✔✔원본배열 직접변경✔✔✔✔✔✔
Array.prototype.concat()//인수로 전달된 값들(배열 또는 원시값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
                        //push와 unshift는 인수로 전달받은 값이 배열일 경우 배열 그대로 원본배열의 요소로 추가한다.
                        //결론적으로 push/unshift메소드가 concat메소드 대신 ES6의 스프레드 문법을 일관성 있게 사용하는것을 권장.
Array.prototype.splice()//원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 사용한다.                                            ✔✔✔✔✔✔원본배열 직접변경✔✔✔✔✔✔
                        //첫번째 인수 : start 원본배열의 요소를 제거하기 시작할 인덱스. -1이면 마지막요소, -n이면 마지막에서 n번째, start만 지정하면 start부터 모든 요소 제거
                        //두번째 인수 : deleteCount start부터 제거할 요소의 개수 0이면 제거하지 않는다.
                        //세번째 인수 : 제거한 위치에 삽입할 요소들의 목록 생략하면 원본 배열에서 요소들을 제거하기만 한다.
                        //indexOf - 특정요소 인덱스를 취득해 인수로 사용 가능
                        //filter - 특정 요소 제거 가능
Array.prototype.slice()//인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다. 인수 생략이 원본배열의 복사본을 생성하여 반환. 얕은복사를 통해 생성.
                        //첫번째 인수 : start 복사를 시작할 인덱스. 음수의 경우 끝에서의 인덱스 e.g.)slice(-2)는 배열의 마지막 두개의 요소 복사하여 배열로 반환
                        //두번째 인수 : end 복사를 종료할 인덱스. 인덱스에 해당하는 요소는 복사되지 않는다.생략시 기본값은 length프로퍼티값
                        //복사본을 생성하는 것을 이용하여 slice, from메소드를 사용하여 유사 배열 객체(arguments, HTMLCollection, NodeList 등)을 배열로 변환할 수 있다.
Array.prototype.join()//원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열 (구분자)로 연결한 문자열을 반환한다. 기본구분자는 콤마 , 다
Array.prototype.reverse();//원본 배열의 순서를 반대로 뒤집는다.                                                                                  ✔✔✔✔✔✔원본배열 직접변경✔✔✔✔✔✔
Array.prototype.fill()//인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.                                                                ✔✔✔✔✔✔원본배열 직접변경✔✔✔✔✔✔
                        //첫번째 인수 : 변경될 인수
                        //두번째 인수 : 시작 인덱스
                        //세번째 인수 : 멈출 인덱스
                        //fill메소드를 사용하면 배열을 생성하면서 특정 값으로 요소를 채울 수 있다. Array.form메소드와 콜백함수를 사용해 요소값을 만들면서 배열을 채울 수 있다.
Array.prototype.includes//배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false반환
                        //첫번째 인수 : 검색할 대상
                        //두번째 인수 : 검색 시작할 인덱스 전달 가능, 생략시 0, 음수 전달시 (length+index)를 시작 인덱스로 설정.
                        //indexOf메서드 사용시 반환값이 -1인지 확인해 보아야 하며, 배열이 NaN이 포함되어 있는지 확인할 수 없다.
Array.prototype.flat()//ES10에서 도입. 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화. 기본값은 1이며, 인수로 Infinity전달시 중첩 배열 모두를 평탄화 한다.
[1,[2,[3,[4,[5]]]]].flat();
[1,[2,[3,[4,[5]]]]].flat(Infinity);
[1,[2,[3,[4,[5]]]]].flat().flat();//두 번 평탄화 한 것과 같다.
//스택 - push, pop을 이용해 구현이 가능하다
//큐 = push,shift를 이용해 구현이 가능하다



//배열 고차 함수 Higher-Order Function HOF
//함수를 인수로 전달받거나 함수를 반환하는 함수, 불변성immutability을 지향하는 함수형 프로그래밍에 기반을 둔다.
//함수형 프로그래밍은 순수 함수를 통해 부수 효과를 최대한 억제하여 오류를 피하고 프로그램 안정성을 높이려는 노력의 일환.

Array.prototype.sort//배열의 요소를 정렬한다. 기본 오름차순. 내림차순은 reverse후 sort                                                             ✔✔✔✔✔✔원본배열 직접변경✔✔✔✔✔✔
                    //숫자는 유니코드 포인트로 변환 후 순서에 따르므로 정렬 순서를 정의하는 비교 함수를 인수로 전달해야 한다.
const points = [40,100,1,5,2,25,10];
points.sort((a,b)=>a-b);//비교함수의 반환값이 0보다 작으면 첫번째, 0이면 정렬X, 0보다 크면 두번째 인수 우선하여 정렬
console.log(points);//[1,2,5,10,25,40,100]
points.sort((a,b)=>b-a);//내림차순 정렬

const todos = [
    {id : 4, content : 'JavaScript'},
    {id : 1, content : 'HTML'},
    {id : 2, content : 'CSS'},
]
function compare(key){
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));//음수면 첫번째, 0이면 정렬x, 양수면 두번째 인수 우선 정렬
}
todos.sort(compare('id'));
console.log(todos);

todos.sort(compare('content'));
console.log(todos);
Array.prototype.forEach()//내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백함수로 전달받아 반복 호출 한다. (요소값, 인덱스, this)
                        //foreach의 반환값은 언제나 undefined이다. 배열의 모든 요소를 빠짐없이 모수 순회하며, 중간에 순회를 중단할 수 없다.
                        //폴리필? 최신 사양의 기능을 지원하지 않는 브라우저를 위해 누락된 최신 사양의 기능을 추가하는 것
                        //두번째 인자로 콜백함수 내부에서 this로 사용할 객체를 전달할 수 있다.
Array.prototype.map()//자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출. 콜백함수의 반환값들로 구성된 새로운 배열 반환 매핑매핑매핑매핑
                        //foreach와의 차이점 - foreach는 undefined를 반환, map은 콜백 함수의 반환값으로 구성된 새로운 배열을 반환.
                        //map메소드가 생성하여 반환하는 새로운 배열의 lengh 프로퍼티 값은 map 메서드를 호출한 배열의 length 프로터티 값과 반드시 일치. 1:1 매핑한다.
                        //map메소드를 호출한 배열의(요소값, 인덱스, this)를 순차적으로 전달한다.
                        //두번째 인자로 콜백함수 내부에서 this로 사용할 객체를 전달할 수 있다.
[1, 2, 3].map((item, index, arr) => {
    console.log(`요소값 : ${item}, 인덱스 : ${index} , this : ${JSON.stringify(arr)}`);
});
Array.prototype.filter()//인수로 전달받은 콜백함수를 반복호출 한다. 콜백함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
                        //filter메소드가 생성하여 반환한 새로운 배열의 legnth프로퍼티 값은 filter메솓를 호출한 배열의 length프로퍼티 값과 같거나 작다.
                        //filter메소드를 호출한 배열의(요소값, 인덱스, this)를 순차적으로 전달한다.
const num = [1,2,3,4,5];
const odss = num.filter(item => time % 2);
console.log(num);

class Users{
    constructor(){
        this.users = [
            {id:1,name:'Lee'},
            {id:2,name:'Kim'},
        ];
    }
    findById(id){
        return this.users.filter(user=>user.id===id);
    }
    remove (id){
        this.users =  this.users.filter(user=>user.id !==id);
    }
}

const users = new Users();
//id를 사용해 id가 1인 유저를 찾는다.
let user = users.findById(1);
console.log(user);
//id가 1인 유저를 제거한다.
user.remove(1);
//제거되었으므로 빈 객체르 반환한다.
user=users.findById(1);
console.log(user);
//filter메소드를 사용해 특정 요소를 제거할 경우 특정 요소가 중복되어 있다면 중복된 요소가 모두 제거된다.

Array.prototype.reduce()//인수로 전달받은 콜백 함수를 반복 호출. 첫번째 인수로 콜백함수, 두번쨰 인수로 초기값을 전달 받는다. reduce메소드는 하나의 결과값을 반환한다.
const sum = [1,2,3,4].reduce((accumulator, currentValue, index, array) => accumulator+currentValue,0);//4개의 인수를 전달받아 배열의 length만큼 총 4회 호출된다.
//모든 배열의 고차함수는 reduce 메소드로 구현할 수 있다.
//reduce메소드를 호출할 떄는 언제나 초기값을 전달하는 것이 안전하다.

Array.prototype.some()//콜백 함수의 반환값이 단 한번이라도 참이면 true, 모두 거짓이면 false를 반환한다. 빈 배열일 경우 false반환.
Array.prototype.every()//콜백 함수의 반환값이 모두 참이면 true, 단 한번이라도 거짓이면 false를 반환한다.빈 배열일 경우 true반환.
Array.prototype.find()//콜백 함수의 반환값이 true인 첫 번쨰 요소를 반환. true요소가 존재하지 않으면 undefined를 반환 반환값은 언제나 배열, 하지만 반환값이 첫번째 요소이므로 결과값은 요소값이다.
Array.prototype.findIndex()//콜백 함수의 반환값이 true인 첫 번째 요소의 인덱스를 반환한다. true인 요소가 존재하지 않는다면 -1을 반환한다. 
Array.prototype.flatmap()//ES10에서 도입. map메소드를 통해 생성된 새로운 배열을 평탄화 한다. map메소드와 flat메소드를 순차적으로 실행하는 효과. 
                        //flat처럼 인수를 전달하여 평탄화 깊이를 지정할 수는 없고 1단계 평탄화한다. 
