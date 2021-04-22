//43장 Ajax
//1. Ajax란?
//Asynchronous JavaScript and XML - js를 사용하여 브라우저가 서버에 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식.
//XMLHttpRequest는 HTTP비동기 통신을 위한 메소드/프로퍼티를 제공한다.
    //1. 필요한 데이터만 전송받아 불필요한 데이터 통신 발생X
    //2. 변경 필요 없는부분 다시 렌더링 하지 않는다. 깜빡이는 현상 제거
    //3. 비동기 방식 동작하기때문에 블로킹이 발생하지 않는다.

//2.JSON
//클라이언트와 서버간의 HTTP통신을 위한 텍스트 포맷. 언어 독립형 데이터 포맷으로, 대부분의 프로그래밍 언어에서 사용 가능하다.
    //1. JSON표기방식
    const obj = {
        "name" : "Lee",
        "Age" : 20,
        "alive" : true,
        "hobby" : ["traveling","tennis"]        
    };
    //객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트이다. 문자열은 반드시 큰 따옴표로 묶어야 한다.

    //2.JSON.stringify
    JSON.stringify();//객체를 JSON포맷의 문자열로 변환한다.
    //직렬화 - 클라이언트가 서버로 객체를 전형하려 할 때, 객체를 문자열화 하는것.
    const json = JSON.stringify(obj);
    console.log(typeof json, json);

    const prettyJson = JSON.stringify(obj, null, 2);//문자열로 변환하여 들여쓰기
    console.log(typeof prettyJson, prettyJson);

    function filter(Key, Value){
        return typeof value ==='number'? undefined : value;
    }
    const strFilteredObject = JSON.stringify(obj, filter, 2);//(value, replacer, space)
    console.log(typeof strFilteredObject, strFilteredObject);

    //JSON.stringify는 배열도 JSON포맷의 문자열로 변환한다.
    const todos = [
        {id : 1, content = 'HTML' , compleeted : false},
        {id : 2, content = 'CSS' , compleeted : true},
        {id : 3, content = 'JavaScript' , compleeted : false},
    ];
    const json = JSON.stringify(todos, null, 2);
    console.log(typeof json, json)

    //3. JSON.parse
    JSON.parse();//JSON포맷의 문자열을 객체로 변환. 서버로부터 클라이언트에 전송된 JSON데이터는 문자열이다.
    //역직렬화 - JSON포맷의 문자열을 객체화 하는것

    const parsed = JSON.parse(json);
    console.log(typeof parse, parsed);

    //배열이 JSON포맷의 문자열로 변환되어 있는 경우, JSON.parse는 문자열을 배열 객체로 변환한다.
    const parsed = JSON.parse(json);
    console.log(typeof parsed, parsed);

//3. XMLHttpRequest
    //js를 이용하여 HTTP요청을 전송하려면 XMLHttpRequest객체를 사용한다. Web API인 XMLHttpRequest객체는 HTTP요청 전송과 HTTP응답 수신을 위한 다양한 메소드/프로퍼티를 제공한다.
    //1. XMLHttpRequest 객체 생성
    const xhr = new XMLHttpRequest();//XMLHTTPRequest객체는 XMLHTTPRequest생성자 함수를 호출하여 생성한다.브라우저 환경에서만 정상적으로 실행된다.

    //2.XMLHTTPRequest객체의 프로퍼티, 메소드
    //  프로토타입 프로퍼티
    status //HTTP요청에 대한 응답 상태 
    //  이벤트 핸들러 프로퍼티
    //  객체의 메소드
    // 객체의 정적 프로퍼티

    //3. HTTP요청 전송
    //HTTP요청을 전송하는 경우 순서
        //1. XMLHTTPRequest.prototype.open 메소드로 HTTP요청 초기화
        //2. 필요에 따라 XMLHTTPRequest.prototype.setRequestHeader 메소드로 특정 HTTP요청 헤더값 설정
        //3. XMLHTTPRequest.prototype.send 메소드로 HTTP요청 전송
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/users');//HTTP요청 초기화
        xhr.setRequestHeader('content-type','application/json');//HTTP요청 헤더 설정, 클라이언트가 서버로 전송할 데이터의 MIME 타입지정 : JSON
        xhr.send();//HTTP 요청 전송
            
            //XMLHTTPRequest.prototype.open
            xhr.open(method,url[,async]);//서버에 전송할 HTTP요청 초기화 클라이언트가 서버에게 요청의 종류와 목적(리소스에 대한 행위)을 알리는 방법.

            //XMLHTTPRequest.prototype.send
            //open메소드로 초기화된 HTTP요청을 서버에 전송. 서버로 전당하는 데이터는 GET, POST 요청 메소드에 따라 전송 방식에 차이가 있다.
            //GET 요청 - 데이터를 URL의 일부분인 쿼리 문자열query string로 서버에 전송
            //POST 요청 - 데이터(페이로드 payload)을 요청 몸체request body에 담아 전송

            //요청 몸체에 담아 전송할 데이터(페이로드)를 인수로 전달할 수 있다. 페이로드가 객체인 경우 반드시 JSON.stringify로 직렬화 한 다음 전달해야한다.
            //HTTP요청 메소드가 GET인 경우 send메소드에 페이로드로 전달한 인수는 무시되고 요청 몸체는 null로 설정된다.

            //XMLHTTPRequest.prototype.setRequestHeader
            //특정 HTTP요청의 헤더값을 설정한다. 반드시 open메소드 호출 이후에 호출해야한다. Content-type과 Accept 요청헤더를 자주 사용한다
            const xhr = new XMLHTTPRequest();
            xhr.open('POST','/usrs');
            //클라이언트가 서버로 전송할 데이터의 MIME타입 지정 : json
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.send(JSON.stringify({id : 1, content : 'HTML', compleeted : false}));
            //HTTP클라이언트가 서버에 요청할 때 서버가 응답할 데이터의 MIME타입을 Accept로 지정할 수 있다.
            xhr.setRequestHeader('accept', 'application/json')
            //Accept헤더를 설정하지 않으면 send메소드 호출시 Accept헤더가 */*로 전송된다.

    //4. HTTP 응답처리
        //서버가 전송한 응답을 처리하려면 XMLHttpRequest객체가 발생시키는 이벤트를 캐치해야 한다.
        //HTTP요청을 전송하고 응답을 받으려면 서버가 필요하다. 
        const xhr = new XMLHttpRequest();
        xhr.open('GET','');
        xhr.send();
        //HTTP요청의 현재 상태를 나타내는 readyState프로퍼티가 변경될 때 마다 발생
        xhr.onreadystatechange = () =>{
            if(xhr.readyState !==XMLHttpRequest.DONE) return;
            if(xhr.status===200){
                console.log(JSON.parse(xhr.response));
            }else{
                console.error('Error',xhr.status, xhr.statusText);
            }
        };

        //이벤트를 통해 HTTP요청의 현재상태 확인. readyState프로퍼티가 변경될 때 마다 readystatechange이벤트 발생
        //할당한 이벤트핸들러를 통해 응답 완료 확인
        //xhr.status 통해 정상처리와 에러처리 구분. 200이 아닌경우 에러처리.
        

//44장 REST API
//REpresentational State Transfer 
//REST - HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처. 
//REST API - REST를 기반으로 서비스 API를 구현한것
    //1. REST API의 구성
    //자원resource, 행위verb, 표현representations  자체표현구조 self-descriptiveness로 구성되어 REST API만으로 HTTP요청의 내용을 이해할 수 있다.
    //자원, 자원에 대한 행위, 자원에 대한 행위의 구체적 내용

    //2. REST API설계 원칙
        //1. URI는 리소스를 표현해야 한다.
        //리소스를 식별할 수 있는 이름은 동사보다는 명사를 사용한다. 이름에 get같은 행위에 대한 표현이 들어가서는 안된다.
        #bad
        GET / getTodos/1
        GET / Todos/show/1
        
        #good
        GET/todos/1
        //2. 리소스에 대한 행위는 HTTP 요청 메소드로 표현한다.
        //URI에는 표현하지 않는다.
        #bad 
        GET / todos/ delete/1
        #good
        DELETE/todos/1

//45장 프로미스
    //비동기 처리 콜백 함수 사용... 에러 및 콜백헬
    //프로미스 - 전통적인 콜백 패턴이 가진 단점 보완, 비동기 처리 시점을 명확하게 표현할 수 있다.
    //1. 비동기 처리를 위한 콜백 패턴의 단점
        //1. 콜백 헬 
        const get = url=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET',url);
            xhr.send();

            xhr.onload = ()=>{
                if(xhr.status === 200){
                    console.log(JSON.parse(xhr.response));
                }else{
                    console.log(`${xhr.status} ${xhr.statusText}`);
                }
            };
        };
        get('~~~~/post/1');
        //비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았더라도 기다리지 않고 즉시 종료된다.
        //비동기 함수 내부의 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 완료된다.
        //비동기 함수 내부의 비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 기대한 대로 동작하지 않는다.

        //GET함수도 비동기 함수이다. GET함수 내부에 onload이벤트 핸들러가 비동기로 동작하기 때문이다.
        xhr.onload();//이벤트 핸들러 프로퍼티에 바인딩한 이벤트 핸들러는 언제나 console.log가 종료된 이후에 호출된다. 

        //서버로부터 응답이 도착하면 xhr객체에서 load이벤트가 발생한다. xhr.onload이벤트 핸들러는 load이벤트가 발생하면 일단 태스크 큐에 저장되어 대기하다가, 
        //콜스택이 비면 이벤트 루프에 의해 콜스택으로 푸시되어 실행된다.
        //xhr.onload이벤트 핸들러에서 상위 스코프의 변수에 서버의 응답 결과를 할당하기 이전에 console.log가 먼저 호출되어 undefined가 출력된다.💕

        //이처럼 비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에도 할당할 수 없다.
        //따라서 비동기 함수의 처리 결과(서버의 응답 등)에 대한 후속 처리는 비동기 함수 내부에서 수행해야 한다..
        //이때 비동기 함수를 범용적으로 사용하기 위해 비동기 함수에 비동기 처리 결과에 대한 후속처리를 수행하는 콜백 함수를 전달하는 것이 일반적이다.
        //필요에 따라 비동기 처리가 성고아면 호출될 콜백 함수와 비동기 처리가 실패하면 호출될 콜백 함수를 전달할 수 있다.
        const get = (url,successCallback, failureCallback)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();

            xhr.onload = ()=>{
                if(xhr.status === 200){
                    successCallback(JSON.parse(xhr.response));//서버의 응답을 콜백 함수에 인수로 전달하면서 호출하여 응답에 대한 후속처리를 한다.
                }else{
                    failureCallback(xhr.status);//에러 정보를 콜백 함수에 인수로 전달하면서 호출하여 에러처리를 한다.
                }
            };
        };
        get('/post/1', console.log,console.error);
        //callback hell - 비동기 처리 결과에 대한 후속처리 수행하는 비동기 함수가 처리결과를 가지고 다시 비동기 함수 호출... 콜백함수 호출이 중첩되어 복잡도가 높아지는 현상 발생

        //2. 에러 처리의 한계
        //비동기 처리를 위한 콜백 패턴의 문제점... 에러처리가 곤란하다. 에러를 캐치하지 못하기 때문에.
        //에러는 호출자caller방향으로 전파된다.

    //2 프로미스 생성
    //Promise생성자 함수를 new연산자와 함께 호출하면 프로미스(Promise 객체)ㅡㄹ 생성한다. 비동기 처리를 수행할 콜백함수를 인수로 전달받는다.
    //resolve, reject함수를 인수로 전달받는다.
    const promise = new Promise((resolve, reject)=>{
        if(/*비동기 처리 성공*/){
            resolve('reslove');
        }else/*비동기 처리 실패*/{
            reject('failure reason');
        }
    });
    //프로미스는 현재 비동기 처리가 어떻게 진행되고 있는지 나타내는 상태 정보를 갖는다.기본적으로 pending상태. 💕비동기 처리 상태와 처리 결과를 관리하는 객체이다.
    //resolve또는 reject함수를 호출하는 것으로 상태가 결정된다.
    //resolve - fulfilled상태로 변경 reject - rejected상태로 변경,   이를 settled상태라고 한다.
    //비동기 처리 성공시 pending >> fulfilled, 1을 값으로 갖는다.
    //비동기 처리 실패시 pending >> rejected, Error객체 값으로 갖는다.

    
    //3.프로미스의 후속 처리 메소드
    //프로미스의 비동기 처리 상태가 변화하면 후속 처리 메소드에 인수로 전달한 콜백 함수가 선택적으로 호출된다. then, catch, finally
    //모든 후속 처리 메소드는 프로미스를 반환, 비동기로 동작
        //1. Promise.prototype.then
        //then메소드는 두 개의 콜백함수를 인수로 전달받는다.
        // 첫번째 - 프로미스가 fulfilled상태가 되면 호출. 프로미스의 비동기 처리 결과를 인수로 전달받는다.
        // 두번째 - 프로미스가 rejected상태가 되면 호출. 프로미스의 에러를 인수로 전달받는다.
        new Promise(resolve => resolve('fulfilled')).then(v => console.log(v), e => console.error(e));
        new Promise((_, reject) => reject(new Error('rejected'))).then(v => console.log(v), e => console.error(e));
        //then메소드는 언제나 프로미스를 반환한다.

        //2. Promise.prototype.catch
        //한개의 콜백함수를 인수로 전달받는다. rejected상태인 경우에만 호출된다.
        new Promise((_, reject) => reject(new Error('rejected'))).catch(e => console.log(e));
        //언제나 프로미스를 반환한다.

        //3. Promise.prototype.finally
        //한개의 콜백 함수를 인수로 전달받는다. fulfilled, rejected상관없이 무조건 한번 호출된다.
        //프로미스의 상태와 상관없이 공통적으로 수행해야 할 처리 내용이 있을 때 유용하다.
        new Promise(()=>{}).finally(()=>console.log('finally'));

    //4. 프로미스의 에러 처리
    //비동기 처리에서 발생한 에러는 then메소드의 두 번째 콜백함수로 처리할 수 있다.
    const wrongUrl = '/XXX/1';
    promiseGet(wrongUrl).then(
        res=>console.log(res),
        err => console.log(err),
    );
    
    //비동기 처리에서 발생한 에러는 프로미스의 후속 처리 메소드 catch를 사용해 처리할 수도 있다.
    //catch메소드를 호출하면 내부적으로 then(undefined, onRejected)을 호출한다.
    promiseGet('fasiofmsodafmsoafmoa/todos/1')
    .then(res =>console.xxx(res))
    .catch(err =>console.error(err));
    //then메소등 두 번째 콜백 함수를 전달하는 것보다 catch메소드를 사용하는 것이 가독성이 좋고 명확하다. 
    //에러처리는 then메소드가 아닌 catch메소드에서 하는것이 좋다.
    //then 두번사용시 - 첫번째 콜백 함수에서 발생한 에러 캐치 못하며 코드가 복잡해져 가독성이 좋지 않다.

    //5. 프로미스 체이닝
    //then, catch, finally후속 처리 메소드는 언제나 프로미스를 반환하므로 연속적으로 호출할 수 있다.
    //프로미스는 체이닝을 통해 비동기 처리 결과를 전달받아 후속처리 하므로 콜백 헬이 발생하지 않는다. 콜백함수를 사용하지 않는것은 아니다.
    //콜백 패턴은 가독성이 좋지 않다. 이를 async/await를 통해 해결할 수 있다. 프로미스를 기반으로 동작한다.

    //6. 프로미스의 정적 메속드
        //Promise는 주로 생성자 함수로 사용되지만, 함수도 객체이므로 메소드를 가지를 수 있다.
        //1.Promise.resolve/ Promise.reject 인수로 전달받은 값을 reslove/reject하는 프로미스를 생성한다.
        
        //2.Promise.all 여러 개의 비동기 처리를 모두 병렬parallel처리할 때 사용한다.
        const requestData1 = ()=>
            new Promise(resolve => setTimeout(() => resolve(1), 3000));
        const requestData2 = () =>
            new Promise(resolve => setTimeout(() => resolve(1), 1000));
        const requestData3 = () =>
            new Promise(resolve => setTimeout(() => resolve(1), 2000));
        Promise.all([requestData1(), requestData2(), requestData3()])
            .then(console.log)
            .catch(console.error);
        //Promise.all메소드는 프로미스를 요소로 갖는 배열등의 이터러블을 인수로 전달받는다.
        //전달받은 모든 프로미스가 모두 fulfilled상태가 되면 모든 처리결과를 배열에 저장해 새로운 프로미스를 반환한다.
        //처리순서가 보장된다.
        //인수로 전달받은 배열의 프로미스가 하나라도 rejecteed상태가 되면 나머지 프로미스가 fulfilled상태가 되는것을 기다리지 않고 즉시 종료한다.

        //3.Promise.race
        //프로미스를 요소로 갖는 배열등의 이터러블을 인수로 전달받는다.
        //가장 먼저 fulfilled상태가 된 프로미스의 처리 결과를 resolve하는 새로운 프로미스를 반환한다.
        //프로미스가 rejected상태가 되면 Promise.all메소드와 동일하게 처리된다.

        //4.Promise.Settled
        //프로미스를 요소로 갖는 배열등의 이터러블을 인수로 전달받는다.
        //전달 받은 프로미스가 모두 settled상태가 되면 처리 결과를 배열로 반환한다.
        //프로미스가 fulfilled상태인 경우 status프로퍼티와 처리결과를 나타내는 value프로퍼티를 갖는다.
        //프로미스가 rejected상태인 경우 status프로퍼티와 에러를 나타내는 reason프로퍼티를 갖는다.

    //5. 마이크로태스크 큐
    //프로미스의 후속처리 메소드의 콜백함수는 태스크 큐가 아닌 마이크로태스큐 큐에 저장된다. 마이크로태스크 큐는 태스크큐 보다 우선순위가 높다.
        setTimeout(()=>console.log(1),0);
        promise.resolve()
            .then(() => console.log(2))
            .then(() => console.log(3));
        // 2>3>1 순서로 출력된다.

    //6. fetch
    //XMLHttpRequest객체와 마찬가지로 HTTP요청 전송 기능을 제공하는 사이드 WebAPI이다.
    //XMLHttpRequest객체 보다 사용법이 간단하며, 프로미스를 지원하기에 비동기 처리를 위한 콜백 패턴의 단점에서 자유롭다.
    //HTTP요청을 전송할 url, HTTP요청 메소드, HTTP요청 헤더, 페이로드 등을 설정한 객체를 전달한다.
    const promise = fetch(url[,options]);
    //fetch함수는 HTTP응답을 나타내는 Response객체를 래핑한 Promise객체를 반환한다.
    //fetch함수에 첫 번째 인수로 HTTP요청을 전송할 URL만 전달하면 GET요청을 전송한다.

    const request = {
        get(url) {
            return fetch(url);
        },
        post(url, payload) {
            return fetch(url, {                 //두 번째 인수로 HTTP요청메소드, HTTP요청 헤더, 페이로드 등 설정한 객체 전달
                method: 'POST',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        },
        patch(url, payload) {
            return fetch(url, {
                method: 'PATCH',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        },
        delete(url) {
            return fetch(url, { method: 'DELETE' });
        }
    };

    //GET 요청
    request.get('URL')
        .then(response => response.json())
        .then(todos => console.log(todos))
        .catch(err => console.error(err));

    //POST요청
    request.post('URL', {
        userId: 1,
        titleL: 'JavaScript',
        completed: false
    }).then(response => response.json())
        .then(todos => console.log(todos))
        .catch(err => console.error(err));

    //PATCH요청
    request.patch('URL', {
        completed: true
    }).then(response => response.json())
        .then(todos => console.log(todos))
        .catch(err => console.error(err));

    //DELETE요청
    request.delete('URL')
    .then(response=>response.json())
    .then(todos=>console.log(todos))
    .catch(err=>console.error(err));

//46장 제너레이너와 async/await
    //1. 제너레이터란
    //코드블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수.
        //1. 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다. - 함수의 제어권을 함수가 독점하는 것이 아니라, 함수 호출자에게 양도yield할 수 있다.
        //2. 제널이터 함수는 함수 호출자로 함수의 상태를 주고받을 수 있다. - 함수 호출자와 양방향으로 함수의 상태를 주고받을 수 있다.
        //3. 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다. - 호출시 함수코드를 실행하는 것이 아니라 이터러블이면서 이터레이터인 제너레이터 객체를 반환한다.
    
    //2. 제너레이터 함수의 정의
        //키워드로 선언, 하나 이상의  yield표현식을 포함한다.
        //제너레이터 함수 선언문
        function* genDcFunc() {
            yield 1;
        }
        //제너레이터 함수 표현식
        const getExpFunc = function*(){
            yield 1;
        }
        //제너레이터 메서드
        const obj = {
            *getObjMethod(){
                yield 1;
            }
        };
        //제너레이터 클래스 메소드
        class MyClass{
            *genClsMethod(){
                yield 1;
            }
        }
        //애스터리스트(*) 위치는 키워드와 이름 사이라면 상관 없다.
        //제너레이터 함수는 화살표 함수로 정의할 수 없다.💕

    //3. 제너레이터 객체
    //Symbol.iterator메소드를 상속받는 이터러블이며, value, done프로퍼티를 갖는 이터레이터 리절트 객체를 반환하는 next메소드를 소유하는 이터레이터이다.
    //이터레이터의 next메소드 이외에 return, throw메소드를 갖는다.
    function* getFunc(){
        try{
            yield 1;
            yield 2;
            yield 3;
        }catch(e){
            console.log(e);
        }
    }
    const generator = getFunc();
    
    console.log(generator.next());//{value : 1, done : false}
    console.log(generator.return('End!')); //{value : "End!", done : true}
    console.log(generator.throw("Error!"));
    //next - 제너레이터 함수의 yield표현식 까지 코드 블록을 실행하고 yield된 값을 value프로퍼티 값으로, false를 done프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환한다.
    //return - 인수로 전달받은 value프로퍼티 값으로 true를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체 반환
    //throw - 인수로 전달받은 에러를 발생시키고 undefined를 value프로퍼티 값으로, true를 done프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환.

//4. 제너레이터의 일시 중지와 재개
    //yield키워드는 제너레이터 함수의 실행을 일시 중지시키거나 yield키워드 뒤에 오는 표현식의 평과 결과를 제너레이터 함수 호출자에게 반환한다.
    //제너레이터 객체의 next메소드를 호출하면 yield표현식 까지 실행되고 일시 중지suspend된다. 이때 함수의 제어권이 호출자로 양도yield된다.
    //이 때 next메소드가 반환한 이터레이터 리절트 객체의 value프로퍼티는 yield표현식에서 yield된 값, done프로퍼티는 제너레이터 함수가 끝까지 실행 되었는지를 나타내는 불리언 값이 할당된다.
    //제너레이터 객체의 next메소드에 전달한 인수는 제너레이터 함수의 yield표현식을 할당받는 변수에 할당된다.

    function* getFunc(){
        const x = yield 1;
        const y = yield(x+10);
        return x+y;
    }
    const generator = genFunc(0);

    let res = generator.next();//{value : 1, done : false}
    res = generator.next();//{value : 20, done : false}
    res = generator.next();//{value : 30, done : true}

    //next메서드를 통해 yield표현식까지 함수를 실행시켜 제너레이터 객체가 관리사는 상태(yield값)을 꺼내올 수 있고
    // next메소드에 인수를 전달하여 제너레이터 객체에 상태(yield표현식을 할당받는 변수)를 밀어넣을 수 있다.
    //이를 통해 비동기 처리를 동기처럼 구현할 수 있다.

//5. 제너레이터의 활용
    //1. 이터러블의 구현
    //이터레이션 프로토콜을 준수하므로 이터러블을 생성하는 방식보다 간단히 이터러블을 구현할 수 있다.
    const infiniteFibonacci = (function* () {
        let [pre, cur] = [0, 1];

        while (true) {
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    }());

    for(const num of infiniteFibonacci){
        if(num>10000)break;
        console.log(num);
    }

    //2. 비동기 처리
    //프로미스를 사용한 비동기 처리를 동기처럼 구현할 수 있다.
    //877page💕💕💕💕💕💕설명을 봐도 어렵다.

//6.async//await
//제너레이터보다 간단하고 가독성 좋게 비동기 처리를 동기 처리처럼 동작하도록 구현할 수 있는 asunc/await 도입 되었다. 프로미스를 기반으로 동작한다.
const fetch = require('');
async function fetchTodo(){
    const url = 'URL';
    const response = await fetch(url);
    const todo = await response.json();
    console.log(todo);
}
fetchTodo();

    //1. async함수
    //await키워드는 반드시 async함수 내부에서 사용해야 한다. async함수는 언제나 프로미스를 반환한다.💕
    //async함수 선언문
    async function foo(n) { return n }
    foo(1).then(v => console.log(v));
    //async함수 표현식
    const bar = async function (n) { return n };
    bar(2).then(v => console.log(v));
    //async화살표 함수
    const baz = async n => n;
    baz(3).then(v => console.log(v));
    //async 메소드
    const obj = {
        async foo(n) { return n; }
    };
    obj.foo(4).then(v => console.log(v));
    //async클래스 메소드
    class MyClass {
        async bar(n) { return n; }
    }
    const myClass = new MyClass();
    myClass.bar(5).then(v => console.log(v));

    //2. await 키워드
    //프로미스가 settled상태가 될 때 까지 대기하다가 settled상태가 되면 프로미스가 resolve한 처리 결과를 반환한다.
    async function foo(){
        const res = await promise.all([
            new promise(resolve => setTimeout(() => resolve(1), 3000)),
            new promise(resolve => setTimeout(() => resolve(1), 3000)),
            new promise(resolve => setTimeout(() => resolve(1), 3000)),
        ]);
        console.log(res);
    }

    //3. 에러처리
    //비동기 함수의 콜백함수를 호출한것은 비동기 함수가 아니기 때문에 try...catch문을 사용해 에러를 캐치할 수 없다.
    try{
        setTimeout(() => { throw new Error('Error!'); }, 1000);
    }catch(e){
        console.error('캐치한 에러', e);
    }

    //async함수 내에서 catch문을 사용해서 에러 처리를 하지 않으면 async함수는 발생한 에러를 reject하는 프로미스를 반환한다.
    //따라서 async함수를 호출하고 Promise.prototype.catch후속 처리 메소드를 사용해 에러를 캐치할 수도 있다.

//47장 에러 처리
    //1. 에러 처리의 필요성
    //예외적인 상황이 발생하면 반환하는 값(null 또는 -1)을 if문이나 단축 평가 또는 옵셔널 체이닝 연산자를 통해 확인해서 처리하는 방법
    //에러 처리 코드를 미리 등록해 두고 에러가 발생하면 에러 처리 코드로 점프하도록 하는 방법  error handling
    //에러를 방치하면 프로그램은 강제 종료된다. try...catch문을 사용해 발생한 에러에 적절하게 대응하면 프로그램이 강제 종료되지 않고 코드를 실행시킬 수 있다.
    try{
        foo();
    }catch(error){
        console.error('[에러발생]',error);
    }
    //에러나 예외적인 상황은 너무나 다양하기에 아무런 조치 없이 프로그램이 강제 종료된다면 원인을 파악하여 대응하기 어렵다.
    //에러나 예외적인 상황이 발생할 수 있다는 전제하에 이에 대응하는 코드를 작성하는 것이 중요하다.
    
    //2. try..catch...finally문💕
    try{
        //실행할 코드(에러가 발생할 가능성이 있는 코드)
    }catch(err){
        //try코드 블록에서 에러가 발생시 이 코드 블록의 코드가 실행된다.
        //err에는 try코드 블록에서 발생한 Error객체가 전달된다.
    }finally{
        //에러 발생과 상관없이 반드시 한 번 실행된다.
    }

    //3.Error객체
    const error = new Error('invalid');//Error생섬자 함수는 에러 객체를 생성한다. 에러를 상세히 설명하는 에러메시지를 인수로 전달할 수 있다.
    //message프로퍼티, stack프로퍼티를 갖는다.
    //message - Error생성자 함수에 인수로 전달한 에러 메세지
    //stack - 에러를 발생시킨 솔스택의 호출 정보를 나타내느 문자열. 디버깅 목적으로 사용
    //JS는 7가지의 에러 객체를 생성할 수 있는 Error생성자 함수를 제공한다.
    //에러객체의 프로토타입은 모두 Error.prototype을 상속받는다.

    //4. throw문
    //에러 객체 생성과 에러 발생은 의미가 다른다.
    //에러를 발생시키려면 try코드 블록에서 throw문으로 에러 객체를 던져야 한다.
    //에러를 던지면 catch문의 에러 변수가 생성되고 던져진 에러 객체가 할당된다.
    try {
        throw new Error('something wrong');
    } catch (error) {
        console.log(error);
    }
    //5. 에러의 전파
    //에러는 호출자 방향으로 전파된다. 콜 스택의 아래 방향(실행 중인 실행 컨텍스트가 푸시되기 직전에 푸시된 실행 컨텍스트 방향)으로 전파된다.
    //비동기 함수인 setTimeout이나 프로미스 후속 처리 메서드의 콜백 함수는 호출자가 없다. 태스크 큐나 마이크로 태스크 큐에 일시 저장되었다가 콜스택이 비면 이벤트 루프에 의해 
    //콜 스택으로 푸시되어 실행된다.

//48장 모듈
    //1. 모듈의 일반적 의미
    //애플리케이션을 구성하는 개별적 요소로서 재사용 가능한 코드 조각을 말한다. 일반적으로 기능을 기준으로 파일 단위로 구분한다.
    //모듈이 성립하려면 자신만의 파일 스코프(모듈 스코프)를 가질 수 있어야 한다.
    //모듈은 공개가 필요한 자산에 한정하여 명시적으로 선택적 공개가 가능하다.이를 export라 한다.
    //모듈 사용자는 모듈이 공개한 자산 중 일부 또는 전체를 선택해 자신의 스코프 내로 불러들여 재사용할 수 있다. - import
    //코드의 단위를 명확히 분리하여 애플리케이션을 구성할 수 있고, 재사용성이 좋아서 개발 효율성과 유지보수성을 높일 수 있다.

    //2. 자바스크립트와 모듈
    //CommonJS와 AMD 두 진영으로 나뉘었다가 JS런타임 환경인 Node.js는 CommonJS를 채택했다. Node.js환경에서는 파일별로 독립적인 파일 스코프(모듈  스코프)를 갖는다.

    //3. ES6모듈(ESM)
    <script type = 'module' src='app.mjs'></script>//type = 'module어트리뷰트 추가시 로드된 js파일은 모듈로 동작.파일 확장자는 mjs를 사용할것을 권장.
    //기본적으로 stricmode가 적용된다.
        //1. 모듈 스코프
        //개별의 script라도 전역변수를 공유한다. ESM은 파일 자체의 독자적인 모듈 스코프를 제공한다.
        //모듈 내에서 var키워드로 선언한 변수는 전역변수가 아니며, window객체의 프로퍼티도 아니다.

        //2. export 키워드
        //export키워드는 선언문 앞에 사용한다. 변수, 함수, 클래스 등 모든 식별자를 export할 수 있다.

        //3. import 키워드
        //import키워드를 사용하여 다른 모듈에서 공개한 식별자를 자신의 모듈 스코프 내부로 로드한다.
        //다른 export한 식별자 이름으로 import해야하며 ESM의 경우 파일 확장자를 생략할 수 없다.
        //as 뒤에 지정한 이름의 객체에 프로퍼티로 모아 import할 수 있다.
        //as로 이름을 바꿀 수 도 있다.
        //하나의 값만 export한다면 default키워드를 사용할 수 있다. 기본적으로 이름 없이 하나의 값을 export한다.
        export default x => x*x;//default키워드 사용시 var, let, const키워드 사용할 수 없다., {}없이 임의의 이름으로 import한다.