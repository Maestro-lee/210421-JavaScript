//이벤트
//1. 이벤트 드리븐 프로그래밍 Event Driven Programing
    //이벤트 핸들러 - 이벤트가 발생했을 때 호출될 함수
    //이벤트 핸들러 등록 - 브라우저에게 이벤트 핸들러의 호출을 위임하는것
    //window, Document, HTMLElement타입 객체  특정 이벤트 대응 이벤트핸들러 프로퍼티 보유

//2. 이벤트 타입 
    //이벤트 종류를 나타내는 문자열 약 200여가지💕

//3. 이벤트 핸들러 등록
    //1. 이벤트 핸들러 어트리뷰트 방식
    //on접두사 + 이벤트 타입으로 이루어져 있다.
    //이벤트 핸들러 어트리뷰트 값으로 함수 호출문 등의 💕문을 할당하면 이벤트 핸들러가 등록된다.
    //이벤트 핸들러 어트리뷰트 값을 암묵적으로 생성될 이벤트 핸들러의 함수 몸체를 의미한다. 파싱되어 함수 암묵적 생성, 동일 이름 키 이벤트 핸들러 프로퍼티에 할당.
    //오래되서 잘 쓰지 않는다. CBD Component Based Development에서는 이 방식을 사용.

    //2. 이벤트 핸들러 프로퍼티 방식
    //이벤트 핸들러 프로퍼티에 함수를 바인딩 하면 이벤트 핸들러가 등록된다.
    //이벤트 타깃, 이벤트 타입, 이벤트 핸들러 지정 해야한다. $button.onclick() = funcntion(){...}
    //단점 - 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만 바인딩 가능하다.

    //3. addEventListener 메소드 방식
        //EventTarget.addEventLisstener('eventType', function, [,useCapture]);
        //첫번째 인수 이벤트 타입 - on접두사 붙이지 않는다
        //두번째 인수 이벤트 핸들러 
        //세번째 인수 이벤트 전파 단계(캡처링 or 버블링)
        //이벤트 핸들러를 인수로 전달한다. 바인딩X  하나 이상의 이벤트 핸들러를 등록할 수 있다. 등록 순서대로 호출된다.
        
        //바인딩 - 식별자와 값을 연결하는 과정.
        //식별자 - 어떤 값을 구별해서 식별할 수 있는 고유한 이름. 값이 아닌 메모리 주소를 기억한다. 

//4, 이벤트 핸들러 제거
EventTarget.prototype.removeEventListener();//이벤트 핸들러 제거, addEeventListenter과 전달 인수는 동일, 인수 일치하지 않으면 제거되지 않는다.
$button.addEventListener('click', ()=> console.log('button click'));//무명함수 - 등록한 이벤트 핸들러 참조 불가하므로 지울 수 없다.

$button.addEventListener('click', function foo(){                   //기명함수를 이벤트 핸들러로 등록, 이벤트 핸들러는 한번만 호출된다,.
    console.log('button click');
    $button.removeEventListener('click',foo);
});

$button.addEventListener('click', function() {                   //무명함수 이벤트 핸들러로 등록, arguments.callee를 사용(함수 자신을 가리킨다) 코드최적화 방해
    console.log('button click');                                    //이벤트 핸들러의 참조를 변수나 자료구조에 저장하여 제거하는것이 좋다.
    $button.removeEventListener('click',arguments.callee);
});

//이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러는 이벤트 핸들러 프로퍼티에 null을 할당한다.

//5. 이벤트 객체
//이벤트 발생시 이벤트 객체 동적 생성. 이벤트에 관련한 다양한 정보를 담고있다. 💕이벤트 핸들러의 첫 번째 인수로 등록된다.
//이벤트 핸들러 어트리뷰트 방식으로 등록시 매개변수 이름 event로 해야한다. - 암묵적 생성되는 이벤트 핸들러의 함수 몸체를 의미하기 때문.
    //1. 이벤트 객체의 상속 구조
    //이벤트 타입에 따라 다양한 타입의 이벤트 객체가 생성되며, 상속 구조(생성자 함수로 이루어진)를 갖는다. 
    //생성자 함수를 호출하여 이벤트 객체를 생성할 수 있다.
    //생성자 함수와 더불어 생성되는 프로토타입으로 구성된 프로토타입 체인의 일원이 된다. 일부는 사용자 행위에 의해, 일부는 JS코드에 의해 인위적으로 생성된다.
    //Event 인터페이스 - DOM내에서 발생한 이벤트에 의해 생성되는 이벤트 객체를 나타낸다.
    //모든 이벤트 객체의 공통 프로퍼티가 정의되어 있으며, 하위 인터페이스에는 이벤트 타입에 따라 고유한 프로퍼티가 정의되어 있다.

    //2. 이벤트 객체의 공통 프로퍼티
    //Event인터페이스 - Event.prototype에 정의되어 있는 이벤트관련 프로퍼티는 모든 파생 이벤트 객체에 상속된다.
    //💕target은 이벤트를 발생시킨 DOM요소, currentTarget은 이벤트 핸들러가 바인딩된 DOM요소를 가리킨다. 일반적으로 동일한 DOM요소를 가리킨다. 
    //이벤트 위임에서는 이벤트 객체의 target과 currentTarget프로퍼티가 서로 다른 DOM요소를 가리킬 수 있다.

    //3. 마우스 정보 취득
    //뷰포트 - 웹페이지의 가시영역
    //이벤트가 발생하면 생성되는 MouseEvnet 타입의 이벤트 객체는 다음 고유 프로퍼티를 갖는다.
    // 마우스 포인터의 좌료 정보를 나타내는 프로퍼티 - screenX/screenY, clientX/clientY , pageX/pageY, offsetX/offsetY
    // 버튼 정보를 나타내는 프로퍼티 - altKey, ctrlKey, shiftKey, button
    //이벤트와, 이벤트객체의 고유 프로퍼티를 이용하여 드래그 등의 기능을 구현할 수 있다.

    //4. 키보드 정보 취득
    //이벤트가 발생하면 생성되는 KeyboardEvent 타입의 이벤트 객체는 고유 프로퍼티를 갖는다.
    //altKey, ctrlKey, metaKey, Key, KeyCode 등
    //Key 프로퍼티 - 입력한 키 값을 문자열로 반환한다.  엔터키의 경우 'Enter'를 반환한다.
    //이벤트와 이벤트객체의 프로퍼티를 이용하여 문자열 입력 등의 구현이 가능하다.
    
//6. 이벤트 전파
    //DOM트리 상에 존재하는 DOM요소 노드에서 발생한 이벤트가 DOM트리를 통해 전파되는 것.
    //생성된 이벤트 객체는 이벤트를 발생시킨 DOM요소인 이벤트 타깃을 중심으로 DOM트리를 통해 전파된다.
    //캡처링 단계 - 이벤트가 상위요소에서 하위 요소 방향으로 전파
    //타깃 단계  - 이벤트가 이벤트 타깃에 도달
    //버블링 단계 - 이벤트가 하위 요소에서 상위 요소방향으로 전파

    //이벤트 핸들러 어트리뷰트/프로퍼티 방식으로 등록한 이벤트 핸들러는 타깃 단계, 버블링 단계에서만 캐치가 가능하다.
    //addEventListener로 등록한 이벤트 핸들러는 캡처링, 타깃, 버블링 단계 모두 캐치 가능하다.
    //이벤트는 이벤트를 발생시킨 타깃은 물론 상위DOM요소에서도 캐치할 수 있다.

    //focus/blur            load/unload/abort/error               mouseenter/mouseleave는 버블링되지 않는다. event.bubbles 인수 false

//7. 이벤트 위임
    //여러 개의 하위DOM요소에 각각 이벤트 핸들러를 등록하는 대신 하나의 상위 DOM요소에 이벤트 핸들러를 등록하는 방법.
    //상위 DOM요소에 바인딩 된 이벤트 핸들러는 자신은 물론 하위 요소중 이벤트 발생시킨 모든 DOM요소에 반응한다. 
    Element.prototype.matches();//따라서 이벤트에 반응이 필요한 DOM요소에 한정하여 이벤트 핸들러가 실행되도록 이벤트타깃을 검사할 필요가 있다.
    //이벤트 위임을 할 경우 target과 currentTarget이 다른 DOM요소를 가리킬 수 있다.

//8. DOM요소의 기본 동작의 조건
    //1. DOM요소의 기본 동작 중단
    //이벤트 객체의 preventDefault 메소드 - DOM요소의 기본 동작을 중단시킨다.
    document.querySelector('a').onclick = e=>{
        e.preventDefault();//a요소의 href 기본 동작을 중단시켜서 링크로 이동하지 못한다.
    }
    document.querySelector('input[type=checkbox]').onclick = e=>{
        e.preventDefault();//check박스의 체크기능을 해체
    }

    //2. 이벤트 전파 방지
    //stopPropagation(); 이벤트 전파를 중지시킨다. 하위 DOM요소의 이벤트를 개별적으로 처리하기 위해 이벤트의 전파를 중단시킨다.
    document.querySelector('.container').onclick = e=>{                 //상위 DOM요소 container에 이벤트 위임. 클릭된 하위 버튼 요소의 color변경한다.
        if(!target.matches('.container>button')) return;
        target.style.color = 'red';
    };

    document.querySelector('.btn2').onclick = e =>{                     //이벤트를 전파하지 않으므로 상위 요소에서 이벤트를 캐치할 수 없다.
        e.stopPropagation();
        e.target.style.color = blue;
    }

//9. 이벤트 핸들러 내부의 this
    //1. 이벤트 핸들러 어트리뷰트 방식
    //이벤트 핸들러 어트리뷰트의 값으로 지정한 문자열은 암묵적 행성되는 이벤트 핸들러의 문이 된다 >> 일반 함수로 호출되며, 이 때 this는 전역객체를 가리킨다.
    //단, 이벤트 핸들러를 호출할 때 인수로 전달한 this는 이벤트를 바인딩한 DOM요소를 가리킨다.

    //2. 이벤트 핸들러 프로퍼티 방식과 addEventListener 메소드 방식
    //이벤트 핸들러 프로퍼티 / addEventListener메소드 - 이벤트 핸들러 내부의 this는 이벤트 객체의 currentTarget프로퍼티와 같다.
    //화살표 함수 - 자체의 this바인딩을 갖지 않으므로 상위 스코프의 this를 가리킨다.
    //클래스에서 이벤트 핸들러를 바인딩 하는 경우
    increase(){
        this.$button.textContent = ++this.count; //this는 이벤트를 바인딩한 DOM요소를 가리키기에 this.$button을 가리킨다. 
    }
    //increase메소드를 이벤트 핸들러로 바인딩 할 떄 bind메소드를 사용해 this를 전달하여 increase메소드 내부의 this클래스가 생성할 인스턴스를 가리키도록 해야한다.
    //클래스 필드에 할당한 화살표 함수를 이벤트 핸들러로 등록하여 이벤트 핸들러 내부의 this가 인스턴스를 가리키도록 할 수도 있다. 이 때 increase는 프로토타입 메소드가 아닌 인스턴스 메소드가 된다.

//10. 이벤트 핸들러에 인수 전달
    //인수는 함수를 호출할 때 전달해야 한다. 
    //어트리뷰트 방식은 함수 호출문을 사용할 수 있기에 인수 전달이 가능하다.
    //프로퍼티, addEventListenter방식은 브라우저에서 호출하기에 함수 호출문이 아닌 함수 자체를 등록해야하므로 인수를 전달할 수 없다.
        // 대안 1)  이벤트 핸들러 내부에서 함수를 호출하면서 인수를 전달한다.
    const checkUserNameLength = min =>{
        $msg.textContent = $input.value.length <min ? `이름은 ${min}자 이상 입력해주세요` : '';
    };
    $input.onblur = () =>{
        checkUserNameLength(MIN_USER_NAME_LENGTH);              //이벤트 핸들러 내부에서 함수를 호출하면서 인수를 전달한다.
    };
    //내부 함수 호출 or 함수의 반환
        // 대안 2) 이벤트 핸들러를 반환하는 함수를 호출하면서 인수를 전달한다.
    //checkUserNameLength함수는 함수를 반환한다. $input.onblur에는 결국 checkUserNameLength함수가 반환하는 함수가 바인딩된다.
    const checkUserNameLength = min => e=>{
        $msg.textContent = $input.value.length < min? `이름은 ${min}자 이상 입력해 주세요`: '';
    };

    $input.onblur = checkUserNameLength(MIN_USER_NAME_LENGTH);//이벤트 핸들러를 반환하는 함수를 호출하면서 인수를 전달.

//11. 커스텀 이벤트
    //1. 커스텀 이벤트 생성
    //이벤트 생성자 함수를 호출하여 명시적으로 생성한 이벤트 객체는 임의의 이벤트 타입을 지정할 수 있다.
    //이벤트 생성자 함수는 첫번째 인수로 이벤트 타입을 나타내는 문자열을 전달받는다.
    //기존 이벤트타입 | 기존 이벤트 타입이 아닌 임의의 문자열 사용 가능. .💕일반적으로 CustomEvent이벤트 생성자 함수를 사용한다.
    const KeyboardEvent = new KeyboardEvent('keyup');
    console.log(KeyboardEvent.type);//keyup

    const CustomEvent = new CustomEvent('foo');
    console.log(CustomEvent.type);//foo

    //생성된 커스템 이벤트 객체는 버블링되지 않으며 preventDefualt 메소드로 취소할 수도 없다.
    //bubbles, cancelable프로퍼티 true설정 하려면 이벤트 생성자 함수 두번째 인수로 bubbles 또는 cancelable프로퍼티를 갖는 객체를 전달한다.
    const CustomEvent = new MouseEvent('click',{
        bubbles : true,
        cancelable : true
    });

    //이벤트 타입에 따라 가지는 이벤트 💕고유의 프로퍼티 값을 지정할 수 있다. 객체 고유의 프로퍼티 값을 지정하려면 이벤트 생성자 함수의 두 번째 인수로 프로퍼티를 전달한다.
    const CustomEvent = new MouseEvent('click',{
        bubbles : true,
        cancelable : true,
        clientX : 50,
        clientY : 100,
    });

    //이벤트 생성자 함수로 생성한 커스텀 이벤트는 isTrusted프로퍼티 값이 언제나 false다.
    //커스텀 이벤트가 아닌 사용자의 행위에 의해 발생한 이벤트에 의해 생성된 이벤트 객체의 isTrusted프로퍼티 값은 언제나 true다.

    //2. 커스텀 이벤트 디스패치
    //생성된 커스텀 이벤트는 dispatchEvent메소드로 💕디스패치(이벤트를 발생시키는 행위)할 수 있다.
    dispatchEvent();//이벤트 객체를 인수로 전달하면서 호출하면 인수로 전달한 이벤트 타입의 이벤트가 발생한다. 이벤트 핸들러를 동기 처리 방식으로 호출한다.
    //일반적으로 이벤트 핸들러는 비동기 처리 방식으로 동작한다.
    //💕dispatchEvent메소드를 호출하면 커스템 이벤트에 바인딩된 이벤트 핸들러를 직접 호출하는 것과 같다. 따라서 커스텀 이벤트를 처리할 이벤트 핸들러를 등록해야한다.

    //CustomEvent이벤트 생성자 함수에 두번쨰 인수로 이벤트와 함꼐 전달하고자 하는 정보를 담은 detail프로퍼티를 포함하는 객체를 전달할 수 있다.
    //이 정보는 이벤트 객체의 detail프로퍼티에 담겨 전달된다.

    //이벤트 타입을 지정하여 커스템 이벤트 객체 생성시 반드시 addEventListener메소드로 등록해야 한다.
    //어트리뷰트 / 프로퍼티 방식은 'on+이벤트 타입'으로 이루어진 어트리뷰트/ 프로퍼티 가 요소 노드에 존재하지 않기 때문에.
    //foo 임의 이벤트 타입으로 커스텀 이벤트 생성시 'onfoo' 핸들러 어트리뷰트. 프로퍼티가 요소 노드에 존재하지 않기 때문에 이벤트 핸들러 어트리뷰트/프로퍼티 방식으로 이벤트 핸들러를 등록할 수 없다.

//41장 타이머
//1. 호출 스케줄링
    //호출 스케줄링 scheduling a call - 일정 시간이 경과된 이후에 호출되도록 함수 호출을 예약하려면 타이머 함수를 사용한다
    //setTimeout - 일정 시간이 경과된 이후 콜백 함수가 호출된다. 한번만 호출한다.
    //setInterval - 일정시간이 경과될 때 마다 콜백함수가 호출된다.
    //JS엔진은 싱글스레드로 동작하기 때문에 비동기 처리 방식으로 동작한다.

//2. 타이머 함수
    //1. setTimeout/clearTimeout
    //const timeoutId = setTimeout(func | code[, delay, param1, param2, ...])
    setTimeout(() => console.log('Hi!'), 1000);
    setTimeout(name => console.log(`Hi! ${name}.`),1000, 'Lee');
    
    //setTimeout함수가 반환한 💕타이머id는 브라우저완경 - 숫자 Node.js - 객체이다. clearTimeout함수의 인수로 전달하여 타이머를 취소할 수 있다.
    const timerId = setTimeout(() => console.log('Hi!'), 1000);
    clearTimeout(timerId);
    
    
    //2. setInterval/clearInterval
    setInterval// 두 번째 인수로 전달받은 시간으로 반복 도작하는 타이머 생성, 첫 번째 인수로 전달받은 콜백함수 반복 호출
    const timerId = setintrval(func|code [,delay, param1, param2, ...]);
    //setInterval 함수는 생성된 타이머를 식별할 수 있는 💕고유한 타이머id를 반환한다. 브라우저 환경의 경우 숫자, Node.js환경인 경우 객체이다.

    //setInterval함수가 반환한 타이머id를 clearInterval함수의 인수로 전달하여 타이머를 취소할 수 있다.
    let count = 1;
    const timeoutId = setInterval(()=>{
        console.log(count);
        if(count++ ===5)clearInterval(timeoutId);
    },1000);

    
    //3. 디바운스와 스로틀
    //짧은 시간 간격으로 연속해서 발생하는 이벤트를 그룹화 해서 과도한 이벤트 핸들러의 호출을 방지하는 프로그래밍 기법. 이벤트를 처리할 때 매우 유용하다.
        //1. 디바운스
        //짧은 시간 간격으로 이벤트 연속 발생시 호출하지 않다가, 일정 시간이 경과한 이후 이벤트 핸들러가 한 번만 호출되도록 한다.
        const debounce = (callback, delay) => {
            let timerId;
            return event =>{
                if(timerId) clearTimeout(timerId);
                timerId = setTimeout(callback, delay, event);
            };
        };
        
        //debounce함수가 반환하는 클로저가 이벤트 핸들러로 등록된다.
        $input.oninput = debounce(e =>{
            $msg.textContent = e.target.value;
        },300);

        //resize이벤트, input요소에 입력된 값으로 ajax요청하는 입력 필드 자동완성UI구현, 버튼 중복 클릭 방지처리 등에 유용하다.
        //💕실무에서는 Underscore의 debounce함수나 Lodash의 debounce함수를 사용하는 것을 권장한다.

        //2. 스로틀
        //짧은 시간 간격으로 연속에서 발생하는 이벤트를 그룹화 해서 일정 시간 단위로 이벤트 핸들러가 호출되도록 호출 주기를 만든다.

        const throttle = (callback, delay) => {
            let timerId;
            //throttle함수는 💕itmerId를 기억하는 클로저 반환.
            return event => {
                //delay경과시 이벤트가 발생하면 새로운 타이머 재설정
                if (timerId) return;
                timerId = setTimeout(() => {
                    callback(event);
                    timerId = null;
                }, delay, event);
            };
        };

        let normalCount = 0;
        $container.addEventListener('scroll',()=>{
            $normalCount.textContent = ++normalCount;
        });

        let throttleCount = 0;
        //throttle함수가 반환하는 클로저가 이벤트 핸들러로 등록된다.
        $container.addEventListener('Scroll',throtle(()=>{
            $throttleCount.textContent = ++throttleCount;
        },100));
        //scroll이벤트 처리나 무한 스크롤 UI구현 등에 유용하게 사용된다.
        //실무에서는 UnderScore의 throttle함수나 Lodash의 throttle함수를 사용하는 것을 권장한다.

        //클로저를 이용해 호출 주기를 조절하는 프로그래밍 방법.


//42장 비동기 프로그래밍
//1. 동기 처리와 비동기 처리
    //💕이벤트 루프와 태스크 큐와 깊은 관계가 있다.
    //함수는 호출된 순서대로 스택 자료구조인 실행 컨텍스트에 푸시되어 실행된다.
    //싱글 스레드 - 자바스크립트 엔진은 단 하나의 실행 컨텍스트 스택을 갖는다.

    //동기처리 synchromous - 현재 실행중인 태스크가 종료할 때까지 다음에 실행될 태스크가 대기하는 방식
    //실행 순서 보장의 장점, 앞선 태스크 종료시까지 블로킹 단점

    //비동기 처리-asynchronous - 현재 실행중인 태스크가 종료되지 않은 상태라 해도 다음 태스크를 곧바로 실행하는 방식
    //실행 순서 보장이 되지 않는다. 블로킹이 발생되지 않는 장점이 있다.
    //전통적으로 콜백 패턴을 사용한다. 콜백 헬 발생에 주의 .프로미스
    //타이머 함수인 setTimeout과 setInterval, HTTP요청, 이벤트 핸들러는 비동기 처리 방식으로 동작한다.

//2.이벤트 루프와 태스크 큐💕
    //이벤트 루프 - JS의 동시성concurrency을 지원하는 것

    //콜스택 - 실행 컨텍스트 스택이 콜스택이다.아아아아아아아아아아아아아아아아아아아아아

    //힙 - 객체가 저장되는 메모리 공간. 콜 스택의 요소인 실행 컨텍스트는 힙에 저장된 객체를 참조한다.
    //객체는 원시값과 달리 할당해야 할 메모리 공간의 크기를 런타임에 동적할당 해야 한다. 힙은 구조화 되어있지 않다.
    //비동기 처리에서 소스코드의 평가와 실행을 💕💕제외한 모든 처리는 자바스크립트 엔진을 구동하는 환경인 브라우저 또는 Node.js가 담당한다.

    //태스크 큐 task queue/event queue/ callback queue
    //비동기 함수의 콜백 함수 또는 이벤트 핸들러가 일시적으로 보관되는 영역. 
    //별도의 마이크로 태스크큐도 존재한다.

    //이벤트루프 event loop
    //콜스택이 비어 있고 태스크 큐에 대기중인 함수가 있다면 💕이벤트 루프는 FIFO으로 태스크 큐에 대기중인 함수를 콜 스택으로 이동시킨다.

    //💕비동기 함수인 setTimeout의 콜백함수는 태스크 큐에 푸시되어 대기하다가 콜스택이 비게 되면, 전역 노드 및 명시적으로 호출 된 함수가 모두 종료하면 비로소 콜 스택에 푸시되어 실행된다.
    //js는 싱글 스레드 방식으로 동작한다. 이때 싱글 스레드 방식으로 동작하는 것은 브라우저가 아닌 브라우저에 내장된 js엔진이다. 
    //js엔진은 싱글 스레드로 동작하지만, 브라우저는 멀티 스레드로 동작한다.💕

    //브라우저는 js엔진, 렌더링엔진, Web API를 제공한다.
    //setTimeout함수의 두가지 기능은 타이머 설정과 타이머가 만료하면 콜백함수를 태스크 큐에 등록하는 처리는 js엔진이 아닌 브라우저가 실행한다. 
    //브라우저와 js엔진이 협력하여 비동기 함수인 setTimeout함수를 실행한다.