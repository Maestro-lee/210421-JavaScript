//Number
//원시 타입인 숫자를 다룰 떄 유용한 프로퍼티와 메소드를 제공한다.
//Number객체는 생성자 함수 객체다. new연산자와 함께 호출하여 Number인스턴스를 생성할 수 있다.
//숫자가 아닌 값을 인수로 전달하ㅏ면 인수를 강제로 숫자로 변환하여 [[NumberData]내부 슬롯에 변환도니 숫자를 할당한 Number객체를 생성한다.
//인수를 숫자로 변환할 수 없다면 NaN을 [[NumberData]]내부 슬롯에 할당한 Number래퍼 객체를 생성한다.
let numObj = new Number(10);
numObj = new Number('Hello');

//Number프로퍼티 
Number.EPSILON //1과 1보다 큰 숫자중 가장 작은 숫자와의 차이.
function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}
isEqual(0.1 + 0.2, 0.3);//부동소수점을 IEEE754표준에 따라 2진법으로 변환 할 경우 무한소수가 되어 미세한 오차가 발생하므로 오차를 해결하기 위해 사용한다.

Number.MAX_VALUE//JavaScript에서 표현할 수 있는 가장 큰 양수, infinity가 더 크다.
Number.MIN_VALUE//JavaScript에서 표현할 수 있는 가장 작은 수, 0이 더 작다.
Number.MAX_SAFE_INTEGER//JavaScript에서 안전하게 표현할 수 있는 가장 큰 정수값
Number.MIN_SAFE_INTEGER//JavaScript에서 안전하게 표현할 수 있는 가장 작은 정수값
Number.POSITIVE_INFINITY//양의 무한대 Infinity
Number.NEGATIVE_INFINITY//음의 무한대 -Infinity
Number.NaN//숫자가 아님을 나타낸다. Number.NaN은 window.NaN과 같다.

//Number 메소드
Number.isFinite()//ES6도입 인수로 전달된 숫자값이 정상적인 유한수, Infinity도는 -Infinity가 아닌지 검사하여 결과를 불리언 값으로 반환한다.
                //빌트인 전역함수 isFinite는 전달받은 인수를 숫자로 암묵적 타입 변환하지만, Number.isFinite는 인수를 숫자로 암묵적 타입 변환 하지 않는다.
                //숫자가 아닌 인수가 주어졌을 경우 반환값은 언제나 false다.
Number.isInteger()//인수로 전달된 숫자값이 정수integer인지 검사하여 그 결과를 불리언 값으로 반환한다. 
                //인수를 숫자로 암묵적 타입변환 하지 않는다.
Number.isNaN()//인수로 전달된 숫자값이 NaN인지 검사하여 그 결과를 불리언 값으로 반환한다.
            //빌트인 전역 함수 isNaN은 전달받은 인수를 숫자로 암묵적 탕비 변환하여 검사를 수행한다. Number.isNaN은 암묵적 타입 변환 하지 않는다.
Number.isSafeInteger()//인수로 전달된 숫자값이 안전한 정수인지 검사하여 결과를 불리언 값으로 반환한다.                
                //인수를 숫자로 암묵적 타입변환 하지 않는다. Infinity는 정수가 아니다.


                Number.prototype.toExponential()//숫자를 지수 표기법으로 변환하여 문자열로 반환한다. 
//77.toExponential();//숫자뒤에 .을 부동소수점 숫자의 소수구분 기호로 해석한다. 
(77).toExponential();//두 가지 방법이 허용되긴 하나, 그룹 연산자를 사용할 것을 권장한다.
77. .toExponential();
Number.prototype.toFixed()//숫자를 반올림하여 문자열로 반환한다. 소수점 이하 자릿수 0~20사이의 정수값을 인수로 전달할 수 있다. 생략이 기본값은 0이다.
Number.prototype.toPrecision()//인수로 전달받은 전체 자릿수 까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환. 지수 표기법으로도 결과를 반환한다. 0~21, 기본값 0
Number.prototype.toString()//숫자를 문자열로 변환하여 반환한다. 진법을 나타내는 2~36사이의 정수값을 인수로 전달할 수 있다. 기본값은 10진법이다.