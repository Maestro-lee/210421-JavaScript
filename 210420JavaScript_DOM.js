//DOM
//1. 노드
    //DOM은 HTML문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API. 프로퍼티와 메소드를 제공하는 트리 자료구조다.
    //HTML문서의 구성 요소인 HTML요소를 객체화한 모든 노드 객체들을 트리 자료구조로 구성한다.
    //문서노드-12개 종류 노드가 있다.
        //요소노드 - 어트리뷰트 노드     //개행. 공백은 텍스트노드가 된다.
        //텍스트노드

    //문서노드 - 루트노드. 자바스크립트 코드는 window의 document프로퍼티에 바인딩 되어 있는 하나의 document객체를 바라본다. HTML문서당 document객체는 유일하다. DOM트리의 노드들에 접근하기 위한 진입점 역할을 담당한다.
    //요소노드 - HTML간의 중첩에 이한 부자관계를 가지며 정보를 구조화한다. 문서의 구조를 표현한다고 할 수 있다.
    //어트리뷰트 노드 - 요소노드와 형제관계를 가진다. 문서노드와 연결되어있지 않다. 요소노드에 접근하여야 변경, 참조할 수 있다.
    //텍스트 노드 - DOM트리의 최종단이다. 문서의 정보를 표현한다.

    // DOM을 구성하는 노드 객체는 브라우저 환경에서 추가 제공하는 호스트객체 이다. 노드객체도 자바스크립트 객체이므로 프로토타입에 의한 상속 구조를 갖는다.
    //input 요소 노드객체는 프로토타입 체인에 있는 모든 트로토타입의 프로퍼티나 메소드를 상속받아 사용할 수 있다.
    // <!Doctype html>
    // <html>
    //     <body>
    //         <input type = "text">
    //             <script>
    //                 const $input = docoument.querySelector('input');
    //                 console.log(
    //                     Object.getPrototype($input) ===HTMLInputElement.prototype,
    //                     Object.getPrototype(HTMLInputElement.prototype) === HTMLElement.prototype,
    //                     ...
    //                     Object.getPrototype(EventTarget.prototype) === Object.prototype,
    //                 );//모두 true
    //             </script>
    //     </body>
    // </html>
    //input요소 노드 객체는 상속을 통해 기능을 제공받는다.
    //공통 기능일수록 상위 프로토타입 체인, 개별 고유기능일수록 하위 프로토타입 체인에 구축한다.

    //모든 노드 객체는 이벤트관련 기능, 트리 탐색 기능, 정보 제공 기능을 제공받는다.
    //DOM은 html문서의 계층적 구조와 정보를 표현하며, 노드 객체의 종류.타입에 따라 필요한 기능을 프로퍼티와 메소드의 집합인 DOM API (Application Programming interface)로 제공한다.
    //DOM API를 통해 HTML의 구조나 내용 또는 스타일 등을 동적으로 조작할 수 있다.

    //HTML을 DOM과 연관 지어 바라볼 줄 알아야 한다.

//2. 노드 취득
    //요소 노드의 취득은 HTML요소를 조작하는 시작점이다. DOM은 요소 노드를 취득할 수 있는 다양한 메소드를 제공한다.
        //1. id를 이용한 요소 노드 취득
        document.getElementByID //- 인수로 전달한 id어트리뷰트 값을 갖는 💕하나의 요소노드를 탐색하여 반환한다. Document.prototype의 프로퍼티이므로 문서노드인 document를 호출해야 한다.
        //중복시 첫번째 요소 노드만, id값이 없을경우 null반환
        //HTML요소에 id어트리뷰트 부여시 id값과 동일한 이름의 전역 변수가 암묵적으로 선언된다. id값과 동일한 이름의 전역변수가 이미 선언되어 있을경우 재할당되지 않는다.
        
        //2. 태그 이름을 이용한 요소 노드 취득
        Dobument.prototype/Element.prototype.getElementsByTagName// 인수로 전달한 태그 이름을 갖는 💕모든 요소 노드들을 탐색하여 반환한다.
        //getElementsById 메소드가 반환하는 DOM컬렉션 객체인 HTMLCollection객체는 유사 배열 객체이면서 이터러블이다.
        //모든 요소 노드륵 취득하려면 인수로 *를 전달한다. const $all = document.getElementsByTageName(*);
        //Document.prototype.getElementsByTagName - DOM의 루트노드인 문서노드. DOM전체에서 요소 노드를 탐색하여 반환한다.
        //Element.prototype.getElementsByTagName - 특정 요소 노드를 통해 호출하며, 특성 요소노드의 자손 노드중 요소 노드를 탐색하여 반환한다.
        //태그이름 요소가 없을시 빈 HTMLCollection객체를 반환한다.

        //3. class를 이용한 요소 노드 취득
        Document.prototype/Elment.prototype.getElementsByClassName// 인수로 전달한 class어트리뷰트 값을 갖는 💕모든 요소 노드들을 탐색하여 반환.
        //getElementsByClassName 메소드는 여러 개의 요소 노드 객체를 갖는 DOM컬렉션 객체인 HTMLCollection객체를 반환한다.
        //Document.prototype.getElementsByClassName - DOM의 루트노드인 문서노드. DOM전체에서 요소 노드를 탐색하여 반환한다.
        //Element.prototype.getElementsByClassName - 특정 요소 노드를 통해 호출하며, 특성 요소노드의 자손 노드중 요소 노드를 탐색하여 반환한다.
        //태그이름 요소가 없을시 빈 HTMLCollection객체를 반환한다.

        //4. CSS선택자를 이용한 요소 노드 취득
        Document.prototype/Element.prototype.querySelector// 인수로 전달한 CSS선택자를 만족시키는 💕하나의 요소 노드를 탐색하여 반환한다. 없을경우 null
        //querySelectorAll 메소드는 여러개의 요소 노드 객체를 갖는 DOM컬렉션 객체인 NodeList를 반환한다. 유사 배열 객체이면서 이터러블이다.
        //인수 CSS선택자가 문법에 맞지 않는 경우 DOMException에러 발생
        //Document - DOM 전체에서 요소노드를 탐색하여 반환 Element - 특정 요소 노드 통해 호출, 특정 요소 노드의 자손 노드 중에서 요소노드 탐색하여 반환.
        //구체적인 요조건으로 요소 노트 취득 가능, 일관된 방식으로 요소 노드 취득 가능.

        //5. 특정 요소 노드를 취득할 수 있는지 확인
        Element.prototype.matches// 인수로 전달한 CSS선택자를 통해 특정 요소 노드를 취득할 수 있는지 확인. 이벤트 위임 사용시 유용

        //6. HTMLCollection과 NodeList
        //DOM API가 여러개의 결과값을 반환하기 위한 DOM 컬렉션 객체. 유사 배열 객체이며 이터러블이다. 
        //노드 객체의 상태 변화를 실시간으로 반영하는 살아있는 객체이다.
            HTMLCollection
            //class name이 변경되어 제거 >>실시간 반영으로 인덱스 변화 >>객체의 상태 변화
            //for문을 역방향으로 순회하는 방법으로 회피 가능. or while문을 이용해 HTMLCollection객체에 노트 객체가 남아 있지 않을 때까지 무한 반복 방법 가능
            //배열로 변환하여 사용시 부작용 없음. 고차함수도 사용 가능.

            NodeList
            //실시간으로 노드 객체의 상태변경을 반영하이 않는 non-live객체다.
            //NodeList.prototype.forEach - Array와 같이 foreach사용 가능. item, entrie, keys, values등 메소드 제공
            //childNodes프로퍼티가 반환하는 NodeList객체는 live객체로 동작하므로 주의
        //노드 객체의 상태 변경과 상관없이 안전하게 DOM컬렉션을 사용하려면 HTMLCollection이나 NodeList객체를 배열로 변환하여 사용하는것을 권장. 고차함수도 사용 가능.

//3. 노드 탐색
    //DOM트리 상의 노드를 탐색할 수 있도록 Node, Element 인터페이스는 트리 탐색 프로퍼티를 제공한다. 노드 탐색 프로퍼티는 모두 접근자 프로퍼티다. 단 getter만 존재하여 참조만 가능하다.
        //1. 공백 텍스트 노드
        //공백 문자는 공백 텍스트 노드를 생성한다. 노드 탐색시 주의해야한다.

        //2. 자식 노드 탐색
        Node.prototype.childNodes();//childNodes 프로퍼티가 반환한 NodeList에는 요소노드 뿐만 아니라 텍스트 노드도 포함되어 있을 수 있다.
        Element.prototype.children();//children프로퍼티가 반환환 HTMLCollection에는 텍스트노드가 포함되지 않는다.
        Node.prototype.firstChild();//첫번째 자식노드 반환. firstChild프로퍼티가 반환한 노드는 텍스트노드 이거나 요소노드이다.
        Node.prototype.lastChild();//마지막 노드를 반환. 넥스트 노드이거나 요소 노드이다.
         Element.prototype.firstElementChild();//첫번째 자식노드 반환. 요소노드만 반환한다.
        Element.prototype.lastElementChild();//마지막 자식노드 반환. 요소노드만 반환한다.

        //3. 자식 노드 존재 확인
        Node.prototype.hasChildNodes();//자식 노드가 존재하면 true, 존재하지 않으면 false 텍스트노드를 포함한다.
        children.length(); Element.prototype.childElementCount//텍스트 노드가 아닌 자식 노드의 존재여부 확인.

        //4. 요소 노드의 텍스트 노드 탐색
        ////요소노드의 텍스트 노드는 firstChild프로퍼티로 접근할 수 있다.

        //5. 부모 노드 탐색
        Node.prototype.parentNode();//부모노드가 텍스트 노드인 경우는 없다.

        //6.형제 노드 탐색
        //어트리뷰트 노드는 형제노드 이지만 부모 노드가 같은 형제 노드가 아니기 때문에 반환되지 않는다.
        Node.prototype.previousSibling();// 부모 노드가 같은 형제노드 중에서 자신의 이전 형제노드를 탐색하여 반환. 요소노드 뿐 아니라 텍스트노드일 수도 있다.
        Node.prototype.nextSibling();//자신의 다음 형제 노드를 탐색하여 반환. 요소노드 분 아니라 텍스트 노드일 수도 있다. 
        Element.prototype.previousElementSibling();//이전 형제 요소 노드 탐색하여 반환. 요소 노드만 반환한다.
        Element.prototype.nextElementSibling();//다음 형제 요소 노드를 탐색하여 반환. 요소 노드만 반환한다.

 //4. 노드 정보 취득
    Node.prototype.nodeType();//노드 객체의 종류, 노드 타입을 나타내는 상수 반환. 노드 타입 상수는 Node에 정의되어 있다.
        Node.ELEMENT_NODE//요소 노드 타입을 나타낸다. 상수 1반환
        Node.TEXT_NODE//텍스트 노드 타입을 나타낸다. 상수 3반환
        Node.DOCUMENT_NODE//문서 노드 타입을 나타낸다. 상수 9반환
    Node.prototype.nodeName();//노드의 이름을 문자열로 반환
            //요소노드 - 대문자 문자열로 태그이름을 반환 ("UL" ,"LI" 등)
            //텍스트 노드  - 문자열 "#text"반환
            //문서노드 - #'document' 반환
        
//5. 요소 노드의 텍스트 조작
    Node.prototype.nodeValue();//setter와 getter모두 존재하는 접근자 프로퍼티.
    //문서 노드나 요소노드의 nodeValue프로퍼티를 참조하면 null을 반환한다.
    //1. 텍스트 변경할 요소 노드 취득, 요소 노드의 텍스트 노드 탐색.
    //2. 탐색한 텍스트 노드의 nodeValue프로퍼티를 사용하여 텍스트 노드의 값을 변경.

    Node.prototype.textContent();//setter 와 getter 모두 존재하는 접근자 프로퍼티.
    //요소노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다.
    //문자열 할당시 요소노드의 모든 자식 노드가 제거되고 할당한 문자열이 텍스트로 취급된다. 이 때 HTML마크업이 포함 되어 있더라도 파싱되지 않는다.

//6. DOM조작
    //새로운 노드를 생성하여 DOM에 추가하거나 기존 노드를 삭제 또는 교체하는것. 리플로우와 리페인트가 발생하는 원인이 된다.
        //1. innerHTML
        //setter, getter모두 존재하는 접근자 프로퍼티. HTML마크업을 취득하거나 변경한다. 요소노드의 콘텐츠 영역 내에 포함된 모든 HTML마크업을 문자열로 반환한다.
        //innerHTML프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열에 포함되어 있는 HTML마크업이 파싱되어 요소노드의 자식노드로 DOM에 반영된다.
        //단점 1. 사용자로부터 입력받은 데이터를 그대로 할당하는것은 크로스 사이트 스크립팅 공격(XSS : Cross-Site Scripting Attacks)에 취약 - HTML 새니티제이션 sanitization DOMPurify 라이브러리 사용
        //단점 2. 자식 노드를 모두 제거.
        //단점 3. 삽입될 위치 지정 할수 없음.

        //2. insertAdjacentHTML();
        Element.prototype.insertAdjacentElement(position, DOMString)//기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소 삽임
        //두번째 인수 HTML 문자열을 파싱, 생성된 노드를 첫번쨰 인수로 전달한 위치에 삽입. 💕'beforebegin' 'afterbegin' 'beforeend' 'afterend'
        //innerHTML과 마찬가지로 XSS에 취약하다.
        
        //3. 노드 생성과 추가
        //노드를 직접 생성/삽입/삭제/치환 하는 메소드
        const $li = Document.prototype.createElement(tagName);//요소 노드를 생성하여 반환. 태그 이름을 나타내는 문자열 인수로 전달. 생성된 요소노드를 DOM에 추가하는 처리가 별도로 필요하다.
        const textNode = Document.prototype.createNodeIterator(text);//텍스트 노드 생성하여 반환.텍스트 노드를 요소 노드에 추가하는 처리가 별도로 필요하다.
        Node.prototype.appendChild(childNode);//인수로 전달한 노드를 appendChild메소드를 호출한 노드의 마지막 자식 노드로 추가한다.
        $li.appendChild(textNode);//텍스트 노드를 $li요소 노드의 자식 노드로 추가.
        $fruits.Node.prototype.appendChild($li);//텍스트 노드와 부자관계로 연결한 요소 노드를 #fruits요소 노드의 마지막 자식 요소로 추가한다.
        //요소 노드를 생성하여 DOM에 한번 추가하므로 DOM은 한 번 변경된다. 리플로우와 리페인트가 실행된다.

        //4.복수의 노드 생성과 추가
        //컨테이너 요소를 미리 생성한 다음 DOM에 추가해야 할 3개의 요소 노드를 컨테이너 요소에 자식 노드로 추가하고, 컨테이너 요소를 #fruits요소에 자식으로 추가하면 DOM은 한번만 변경된다.
        //컨테이너 요소(div)가 DOM에 추가되는 부작용... 💕Document Fragment를 통해 해결 가능하다.
        DocumentFragment//노드 객체의 일종. DOM과 별로도 존재한다. 서브DOM을 구성하여 기존 DOM에 추가하기 위한 용도로 사용한다(컨테이너) DocumentFreagment를 DOM에 추가시 기존 DOM에 어떤 변경 없이 자식노드만 추가된다.

        //5. 노드 삽입
        Node.prototype.appendChild();//인수로 전달받은 노드를 자신을 호출한 노드의 마지막 자식 노드로 DOM에 추가. 위치 지정불가
        Node.prototype.insertBefore(newNode,childNode);//첫 번째 인수 노드를 두 번째 인수 노드 앞에 삽입. 두 번째 인수 노드가 null인 경우 마지막 자식 노드로 추가. appendChild로 동작.

        //6. 노드 이동
        //appendChild 또는 insertBefore 메소드 사용하여 DOM에 다시 추가하면 노드를 제거하고 새로운 위치에 추가한다.

        //7. 노드 복사
        Node.prototype.cloneNode([deep : true|false]);//노드의 사본을 생성하여 반환.
                                                        //true인수 전달시 깊은복사하여 모든 자손노드가 포함된 사본 생성
                                                        //false 전달시 얕은복사 하여 노드 자신만의 사본 생성, 이 때 자손노드를 복사하지 않으므로 텍스트 노드도 없다.
        
        //8. 노드 교체
        Node.prototype.replaceChild(newChild, oldChild);//자신을 호출한 노드의 자식 노드를 다른 노드로 교체. newChild - 교체할 노드 oldChild- 교체될 노드 oldChild는 DOM에서 제거된다.

        //9. 노드 삭제
        Node.prototype.removeChild(child);//child매개변수에 인수로 전달한 노드를 DOM에서 삭제한다.

//7. 어트리뷰트
    //1.어트리뷰트 노드와 attributes프로퍼티💕
    Element.prototype.attributes//요소 노드의 모든 어트리뷰트 노드 취득 가능. getter만 존재하는 읽기전용 접근자 프로퍼티이다. 요소 노드의 모든 어트리뷰트 노드의 참조가 담긴 NameNodeMap객체를 반환한다.

    //2. HTML 어트리뷰트 조작
    Element.prototype.getAttribute();//어트리뷰트값 참조
    Element.prototype.setAttribute();//어트리뷰트값 변경
    Element.prototype.hasAttribute();//어트리뷰트 존재 확인
    Element.prototype.removeAttribute();//특정HTML어트리뷰트 삭제

    //3.HTML 어트리뷰트 vs DOM 프로퍼티💕
    //요소노드 객체에는 HTML어트리뷰트에 대응하는 프로퍼티 DOM프로퍼티가 존재한다.
    //HTML 어트리뷰트 역할은 HTML 요소의 초기 상태를 지정하는 것이다. HTML어트리뷰트 값은 HTML요소의 초기 상태를 의미하며 변하지 않는다.
    //첫 렌더링 끝난 시점 - HTML어트리뷰트. 
    //요소노드는 상태state를 가진다. 사용자의 입력에 의해 변경된 최신상태를 관리 해야 한다. 이는 DOM프로퍼티가 관리한다.
        //어트리뷰트 노드
        //HTML 어트리뷰트로 지정한 HTML요소의 초기 상태는 어트리뷰트 노드에서 관리한다. 사용자 입력에 의해 상태가 변경되지 않는다.
        getAttribute/setAttribute//메소드를 사용해 초기상태값을 취득/변경 할 수 있다. 취득값은 어트리뷰트 노드에서 관리하는 HTML요소에 저장한 어트리뷰트값. 초기상태이다.
        
        //DOM프로퍼티
        //사용자가 입력한 최신 상태를 DOM프로퍼티가 관리한다. 언제나 최신 상태를 유지한다. 단 사용자 입력에 의한 상태변화와 관계있는 DOM프로퍼티만 최산 상태 값을 관리한다.

        //HTML어트리뷰트와 DOM프로퍼티의 대응관계
        //HTML어트리뷰트와 DOM프로퍼티가 언제나 1:1 대응하는 것은 아니며, HTML어트리뷰트 이름과 DOM프로퍼티 키가 반드시 일치하는것도 아니다.

        //DOM프로퍼티 값의 타입
        getAttribute//언제나 문자열. DOM프로퍼티로 취득 최신상태값 - 문자열 아닐 수 있다.

    //4. data어트리뷰트와 d사ataset프로퍼티💕
        //HTML요소에 정의한 용자 정의 어트리뷰트와 js간에 데이터 교환을 할 수 있다.
        HTMLElement.dataset//프로퍼티로 data어트리뷰트 값을 취득할 수 있다. dataset프로퍼티는 HTML요소의 모든 data어트리뷰트의 정보를 제공하는 DOMStringMap객체를 반환한다.
        //data- 존재하지 않는 이름으로 dataset에 할당시 dataset프로퍼티에 추가한 카멜케이드의 키는 data-케밥 케이스로 자동 변경되어 추가된다.

//8. 스타일
    //1. 인라인 스타일 조작
    HTMLElement.prototype.style//setter와 getter 모두 존재 접근자 프로퍼티. 요소노드의 인라인 스타일을 취득 또는 추가/변경한다. CSSStyleDeclaration타입의 객체를 반환한다.
    //CSS프로퍼티는 케밥 케이스를 따른다. 대응하는 CSSStyleDeclaration객체의 프로퍼티 키는 카멜 케이스를 따른다.
    //케밥케이스 CSS프로퍼티 사용 원할기 []사용, px, em, %등 단위지정 하지 않을 경우 CSS프로퍼티 적용되지 않는다.

    //2. 클래스 조작
    //class어트리뷰트에 대응하는 DOM프로퍼티는 className과 classList이다.
        //className
        Element.prototype.className//getter, setter존재  class어트리뷰트 값을 문자열로 반환, 문자열 할당시 class어트리뷰트 값을 할당한 문자로 변환.
        //문자열을 반환하므로 공백으로 구분된 여러 개의 클래스를 반환하는 경우 다루기가 불편하다.

        //classList
        Element.prototype.classList//class어트리뷰트 정보를 담은 DOMTokenList객체 반환
        //DOMTokenList객체는 유용한 메소드를 제공한다. add, remove, item, contains, replace, toggle

    //3. 요소에 적용되어 있는 CSS스타일 참조
    window.getComputedStyle(element,[,pseudo]);//HTML요소에 적용되어 있는 모든 CSS스타일을 참조해야 할 경우 사용
        //element : 첫 번째 인수로 전달한 요소 노드에 적용되어 있는 평가된 스타일을 CSSStyleDeclaration객체에 담아 반환.
        //평가된 스타일 - 요소 노드에 적용되어 있는 모든 스타일이 조합되어 최종적으로 적용된 스타일이다.
        //pseudo : :after, :before같은 의사요소를 지정하는 문자열 전달. 의사요소가 아닌 일반요소의 경우 두번째 인수 생략.

//9. DOM표준
    //2018.4 구글, 애플, 마이크로소프트, 모질라로 구성된 whatwg이 단일 표준 내놓기로 WHATWG, W3C가 합의 레벨 1~4
        