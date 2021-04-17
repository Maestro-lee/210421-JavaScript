//Math
//표준빌트인 객체 Math 수학적인 상수와 함수를 위한 프로퍼티와 메소드를 제공. 생성자 함수가 아니다. 정적 프로퍼티와 정적 메소드만 제공한다.


//Math 프로퍼티
Math.PI//원주율 PI값을 반환한다.

//Math 메소드
Math.abs()//인수로 전달된 숫자의 절대값 absolute value을 반환한다. 반드시 0 또는 양수.null > 0 ,undefiend > NaN , {} > NaN
Math.round()//인수로 전달된 숫자의 소수점 이하를 반올림한 정수 반환
Math.ceil()//인수로 전달된 숫자의 소수점 이하를 올림한 정수 반환
Math.floor()//인수로 전달된 숫자의 소수점 이하를 내림한 정수 반환. 음수인 경우 소수점 이하를 떼어버린 후 -1을 더해 반환한다.
Math.sqrt()//인수로 전달된 숫자의 제곱근 반환. 음수NaN ''> 0
Math.random()//임의의 난수를 반환. 0에서 1 미만의 실수이다. 1은 포함되지 않는다.
Math.pow()//첫번째 인수를 밑으로, 두번째 인수를 지수로 거듭제곱한 결과를 반환한다. ES7에서 도입된 지수연산자를 사용하면 가독성이 더 좋다.
Math.max()//전달받은 인수 중에서 가장 큰 수를 반환한다. 인수가 전달되지 않으면 -Infinity를 반환한다.
//배열을 인수로 전달받을 경우 Function.prototype.apply 메소드 또는 스프레드 문법을 사용해야 한다.
Math.min()//전달받은 인수 중에서 가장 작은 수를 반환한다. 인수가 전달되지 않으면 Infinity를 반환한다.
//배열을 인수로 전달받을 경우 Function.prototype.apply 메소드 또는 스프레드 문법을 사용해야 한다.




// Date
//표준 빌트인 객체 Date는 날짜와 시간(연, 월, 일, 시 , 분, 초, 밀리초)을 위한 메소드를 제공하는 빌트인 객체이면서 생성자 함수이다.
//UCT(협정 세계시 Coordinated Universal Time) - 국제표준시. GMT(Greenwich Mean Time)과 초의 소수점단위 차이나 일상 혼용. 1970년 1월 1일 00:00:00(UTC) 기준
//현재 날짜와 시간은 자바스크립트 코드가 실행된 시스템의 시게에 의해 결정된다.

//Date 생성자 함수로 객체 생성하는 방법
new Date();
Date();//new 연산자 없이 호출시 Date객체가 아닌 날짜와 시간 정보를 나타내는 문자열을 반환한다.

new Date(miliseconds);//밀리초를 인수로 전달시 1970 1.1 00:00:00으로부터 인수만큼 경과한 날짜와 시간을 나타내는 Date객체를 반환한다.
new Date(dateString);//날짜와 시간을 나타내는 문자열 인수로 전달시 지정된 날짜와 시간의 Date객체 반환. 인수는 Date.parse에 의해 해석 가능한 형식 이어야 한다.
new Date(year, month[day, hour, minute, second, millisecond]);//인수로 지정된 날짜와 시간을 나타내는 Date객체 반환.연,월은 반드시 지정해야 한다. 월은 0~11로 지정한다.

//Date 메소드
Date.now();//현재 시간까지 경과한 밀리초를 숫자로 반환한다.
Date.parse();//인수로 전달된 지정시간(new Date(dateString)의 인수와 동일한 형식) 까지의 밀리초를 숫자로 반환.
Date.UTC();//인수로 전달된 지정 시간 까지의 밀리초를 숫자로 반환. UTX기준, 년,월 지정 필수

Date.prototype.getFullYear();//객체의 연도를 나타내는 정수를 반환.
Date.prototype.setFullYear();//Date 객체에 연도를 나타내는 정수를 설정. 옵션으로 월, 일도 설정할 수 있다.
Date.prototype.getMonth();//객체의 월을 나타내는 0~11의 정수를 반환한다.
Date.prototype.setMonth();//객체의 월을 나타내는 0~11의 정수를 설정한다. 옵션으로 월, 일도 설정할 수 있다.
Date.prototype.getDate();//Date객체의 날짜 1~31 를 나타내는 정수를 반환한다.
Date.prototype.setDate();//Date객체에 날짜 1~31 를 나타내는 정수를 설정한다.
Date.prototype.getDay();//요일 0~6의 정수 반환. 일요일이 0이다.
Date.prototype.getHours();//0~23 시간을 나타내는 정수 반환/설정
Date.prototype.setHours();//옵션으로 분, 초, 밀리초 설정 가능
Date.prototype.getMinutes();
Date.prototype.setMinutes();
Date.prototype.getSeconds();
Date.prototype.setSeconds();
Date.prototype.getMilliseconds();
Date.prototype.setMilliseconds();

Date.prototype.getTime();//1970.1.1 00:00:00 기점 경과된 밀리초 반환
Date.prototype.setTime();//밀리초 설정
Date.prototype.getTimezoneOffset();//locale시간과의 차이를 분 단위로 반환. UTC = KST-9h이다.

Date.prototype.toDateString();//사람이 읽을 수 있는 형식의 문자열로 Date객체의 날짜 반환
Date.prototype.toTimeString();//사람이 읽을 수 있는 형식으로 Date객체의 시간을 표현한 문자열 반환
Date.prototype.toISOString();//ISO 8601형식으로 Date객체의 날짜와 시간을 표현한 문자열을 반환.
today.toISOString().slice(0, 10);

Date.prototype.toLocaleDateString();//인수로 전달한 로컬을 기준으로 Date객체의 날짜와 시간을 '표현'한 문자열을 반환. 생략시 브라우저가 동작 중인 시스템의 로컬 적용
Date.prototype.toLocaleTimeString();//인수로 전달한 로컬을 기준으로 Date객체의 시간을 표현한 문자열을 반환. 생략시 브라우저가 동작 중인 시스템의 로컬 적용

(function printNow() {
    const today = new Date();

    const dayNames = [
        '(일요일)',
        '(월요일)',
        '(화요일)',
        '(수요일)',
        '(목요일)',
        '(금요일)',
        '(토요일)',
    ];
    const day = daynames[today.getDay()];

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    hour %= 12;
    hour = hour || 12;

    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    const now = `${year}년` `${month}월` `${date}일` `${day}` `${hour}` `${minute}` `${second}` `${ampm}`;
    console.log(now);
    setTimeout(printNow, 1000);//1초마다 printNow함수를 재귀 호출한다.
}());