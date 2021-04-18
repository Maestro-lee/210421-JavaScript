//정규표현식 RegExp
//일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어
//가독성이 좋지 않다.
//정규 표현식 리터럴 : /패턴/플래그 
const target ='Is that is all there is?';
const regexp = /is/i;
regexp.test(target);

//RegExp 메소드
RegExp.prototype.exec();//인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다. g플래그 지정해도 첫번 째 매칭 결과만 반환한다.
RegExp.prototype.test();//인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
String.prototype.match();//대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환한다. g플래그 지정시 모든 매칭 결과를 배열로 반환한다.

//플래그
//i ignore case 대소문자를 구별하지 않고 패턴을 검색한다.
//g Global 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
//m Multi line 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.
const target1 = 'Is this all there is?';
target1.match(/is/);
target1.match(/is/i);
target1.match(/is/g);
target1.match(/is/ig);//하나 이상의 플래그 동시 설정 가능. 플래그 없을시 대소문자 구별해서 패턴 검색. 첫번째 매칭한 대상만 검색하고 종료한다.

//패턴 pattttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttern
//패턴은 문자열의 일정한 규칙을 표현하기 위해 사용한다. 메타문자 또는 기호로 표현할 수 있다. 
//1. 문자열 검색

//2. 임의의 문자열 검색
const target = 'Is this all there is?';
const regExp = /.../g;//.은 임의의 문자 한개를 의미한다. 문자의 내용과 상관없이 3자리 문자열과 매치한다.
target.match(RegExp);//["is ", "thi", "s a", ................]

//3.반복검색{m,n} 최소 m번 최대 n번 반복되는 문자열 콤마 뒤에 공백시 정상동작 하지 않는다.
const target = "A AA B BB Aa Bb AAA";
const regExp = /A{1,2}/g;
target.match(RegExp);//["A", "AA","A", "AA" "A"]

const regExp = /A{2}/g;//{n}은 앞선 패턴이 n번 반복되는 문자열을 의미한다. {n,n}과 같다.
target.match(regExp);//[]

const regExp = /A{2,}/g;//{n,}앞선 패턴이 최소 n번 이상 반복되는 문자열
const regExp = /A+/g;//+는 앞선 패턴이 최소 한번 이상 반복되는 문자열 {1,}과 같다. A+는 패턴이 한번 이상 반복되는 문자열.

//? 앞선 패턴이 최대 한번 이상 반복되는 문자열을 의미한다. {0,1}과 같다.
const target = 'color, colour';
const regExp = /colou?r/g;//'colo' 다음 u가 최대 한번(0번 포함)이상 반복되고 r로 이어지는 문자열

//4. Or검색 |은 or의 의밀르 찾는다./A|B/ 'A'또는 'B'를 뜻한다.
const regExp = /[AB]+/g;//[]내의 문자는 or로 동작한다.
const regExp = /[A-Z]+/g;//[]내의 -는 범위를 지정한다.
const regExp = /[A-Za-z]+/g;//[]내의 알파벳 대소문자 구분없이 검색
const regExp = /[0-9]+/g;//숫자 검색.
const regExp = /[0-9,]+/g;//'0'~'9' 또는 ,가  한 번 이상 반복되는 문자열 전역 검색.
let regExp = /[\d,]+/g;// \d는 [0~9]와 같다. 
regExp = /[\D,]+/g;///D는 문자를 의미한다.
let regExp = /[\w,]+/g;// \w는 알파벳 숫자, 언더스코어 [A-Za-z0-9_]와 같다. 
let regExp = /[/W,]+/g;// \W는 알파벳 숫자, 언더스코어가 아닌 문자를 의미한다.

//5. NOT검색
const regExp =/[^0-9]+/g;//[]내의 ^는 not의 의미를 같는다. \d 는 ^\D와 같고 /W는 ^\W와 같다.

//6. 시작 위치 검색
const regExp = /^heeps/g;//[]밖의 ^는 문자열의 시작을 의미한다.

//7. 마지막 위치 검색
const regExp = /com$/;//문자열의 마지막을 의미한다.

//자주 사용하는 정규표현식
//1. 특정 단어로 시작or끝나는지 검사
/^https?:\/\//.test();
/html$/.test();
//2. 숫자로만 이루어 졌는가.
/^\d+$/.test();
//3. 하나 이상의 공백으로 이루어 졌는가.
/^[\s]+/.test();//\s는 여러가지 공백 문자(스페이스, 탭 등)를 의미한다. \t \r \n \v \f와 같은 의미이다.
//4. 아이디로 사용 가능한지
/^[A-Za-z0-9]{4,10}$/.test();//4~10자리로 이루어진 알파벳 대소문자 또는 숫자 의미
//5. 메일 주소 형식에 맞는지 검사
/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test();
//6. 핸드폰 번호 형식에 맞는지 검사
/^\d{3}-\d{3,4}-\d{4}$/.test();
//7. 특수 문자 포함 여부 검사
(/[^A-Za-z0-9]/gi).test();
(/[\/\/\!@#%!#^#$<>]/gi).test();//특수문자 선택적 검사 가능.


//32장 String
//래퍼객체 문자열, 숫자, 불리언 값에 대해 객체처럼 접근 할 경우 생성되는 임시객체 프로퍼티에 접근하거나 메소드를 호출하고 다시 원시값으로 되돌린다.
//표준 빌트인 객체 String 원시 타입인 문자열을 다룰 떄 유요한 프로퍼티와 메서드를 제공한다.
//String생성자 함수에 인수를 전달하지 않고 new연산자와 함께 호출하면 [[StringData]] 내부 슬롯에 빈 문자열을 할당한 String래퍼객체를 생성한다.
//String래퍼 객체는 배열과 마찬가지로 length프로퍼티와 인덱스를 나타내늣 숫자 형식의 문자열을 프로퍼티 키로, 각 문자를 프로퍼티 값으로 갖는 유사 배열 객체이면서 이터러블이다.
//문자열은 원시값이므로 변경 불가하며, 에러가 발생하지 않는다.
//문자열이 아닌 값을 인수로 전달시 강제로 문자열로 변환 후, [[StringData]]내부 슬롯에 변환된 문자열을 할당한 String래퍼 객체를 생성한다.

//new연산자를 사용하지 않고 String생성자 함수를 호출하면 String인스턴스가 아닌 문자열을 반환한다. 이를 이용하여 명시적으로 타입을 변환하기도 한다.

//Length 프로퍼티 문자열의 문자 개수를 반환한다.

//String메소드
//String객체에는 원본 String래퍼 객체를 직접 변경하는 메소드는 존재 하지 않는다. 언제나 새로운 문자열을 반환한다. String래퍼 객체도 읽기전용 객체로 제공된다.

String.prototype.indexOf();//대상 문자열 에서 인수로 전달 받은 문자열을 검색하여 첫 번째 인덱스를 반환. 검색에 실패시 -1 반환
str.indexOf('l',3);//검색을 시작할 인덱스 전달 가능
if(str.indexOf('Hello')!==-1){}//대상 문자열에 특정 문자열이 존재하는지 확인할 떄 유용
if(str.icludes('Hello')){}//includes사용시 가독성이 더 좋다.

String.prototype.search();//인수로 전달받은 정규 표현식과 매치하는 문자열을 검색. 일치하는 무자열의 인덱스 반환. 실패시 -1 반환
String.prototype.includes();//대상 문자열에 인수로 전달받은 문자열이 포함되어 있는지 확인하여 true false로 반환, 두번째 인수로 검색을 시작할 인덱스 전달 가능
String.prototype.startsWith();//대상 문자열이 인수로 전달받은 문자열로 시작하는지 확인하여 결과를 true false로 반환, 두번째 인수로 검색을 시작할 인덱스 전달 가능
String.prototype.endsWith();//대상 문자열이 인수로 전달받은 문자열로 끝나는지 확인하여 결과를 true false로 반환, 두번쨰 인수 검색할 문자열의 길이 전달 가능
String.prototype.charAt();//인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환, 인덱스가 문자열의 범위를 벗어난 정수인 경우 빈 문자열 반환.
String.prototype.charCodeAt(); String.prototype.codePointAt();//유사한 문자열 메소드
String.prototype.substring();//첫번쨰 인수로 전달받은 인덱스에 위치하는 문자부터 두번쨰 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지의 부분 문자열 반환
                             //String.prototype.indexOf메소드와 사용시 특정 문자열을 기준으로 앞뒤에 위치한 부분 문자열 취득 가능
                             //두번째 인수 생략시 첫 인덱스로부터 문자열 반환
                             //첫번째 인수 > 두번째 인수 인 경우 숫자 교환, 인수<0 or NaN인 경우 0, str.length보다 큰 경우 str.length로 취급
String.prototype.slice();//substring과 동일하게 동작. 단 인수를 음수로 전달할 경우 가장 뒤에서 시작하여 문자열을 잘라내어 반환
const str = 'Hello World!';
str.slice(-5);//뒤에서 5자리를 잘라내어 반환 'world'

String.prototype.toUpperCase();//대상 문자열을 모두 대문자로 변경한 문자열을 반환
String.prototype.toLowerCase();//대상 문자열을 모두 소문자로 변경한 문자열을 반환
String.prototype.trim();//대상 문자열 앞뒤에 공백 문자가 있을 경우 이를 제거한 문자열 반환
String.prototype.trimStart(); String.prototype.trimEnd();//문자열 앞 또는 뒤에 공백 문자를 제거한 문자열 반환
str.replace(/\s/g,'')//String.prototype.replace메소드에 정규 표현식을 인수로 전달하여 공백 문자를 제거할 수도 있다.
String.prototype.repeat();//인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열 반환 0이면 빈 문자열, 음수이면 RangeError를 일으킨다. 생략시 기본값 0
String.prototype.replace();//첫번쨰 인수로 전달받은 문자열 또는 정규 표현식을 검색하여 두번쨰 인수로 전달한 문자열로 치환한 문자열 반환.
const str = 'Hello World world';
str.replace('world', 'Lee');//검색된 문자열이 여럿일 경우 첫 번째로 검색된 문자열만 치환.
const str = 'Hello world';
str.replace('world', '<strong>$&<strong>');//특수한 교체 패턴을 사용할 수 도 있다. $&는 검색된 문자열을 의미한다. 
//두 번쨰 인수로 치환 함수를 전달할 수 있다. 카멜케이스를 스네이크 케이스로, 스네이크 케이스를 카멜케이스로 변경하느 함수 가능.

String.prototype.split();//첫번쨰 인수로 전달한 문장려 또는 정규 표현식을 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환.
                        //인수로 빈 문자열을 전달시 각 문자를 모두 분리한다. 인수를 생략시 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
str.split(' ',3)        //두번쨰 인수로 배열의 길이를 지정할 수 있다.;
                        //split메소드는 배열을 반환하므로 Array.prototype.reverse, Array.prototype.join메서드와 함꼐 사용시 문자열을 역순으로 뒤집을 수 있다.

