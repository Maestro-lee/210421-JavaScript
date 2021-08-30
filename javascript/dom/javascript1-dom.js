
// Ex 6: childNodes 이용한 노드 & CSS선택 
window.addEventListener("load", function () {
    var section = document.querySelector("#section6");
    
    let titleInput = section.querySelector(".title-input");
    let menuListUl = section.querySelector(".menu-list");

    let addButton = section.querySelector(".add-button");
    let delButton = section.querySelector(".del-button");

    addButton.onclick = function(){
        var title = titleInput.value;
        
        var html = '<a href="">' + title + '</a>'
        var li = document.createElement("li");
        li.appendChild(html);
        menuListUl.appendChild("li");

        // let title = titleInput.value;
        // let txtNode = document.createTextNode(title);
        
        // let aNode = document.createElement("a");
        // aNode.href = "";
        // aNode.appendChild(txtNode);
        
        // let liNode = document.createElement("li");
        // liNode.appendChild(aNode);
        
        // menuListUl.appendChild(liNode);
    };
    delButton.onclick = function(){
        // let liNode = menuListUl.children[0];
        // menuListUl.removeChild(liNode);

        liNode.remove();
    };

});

// Ex 5: childNodes 이용한 노드 & CSS선택 
window.addEventListener("load", function () {
    var section = document.querySelector("#section5");
    let srcinput = section.querySelector('.src-input')
    let imgSelect = section.querySelector('.img-select')

    let changeBtn = section.querySelector('.change-btn')
    let img = section.querySelector('.img')

    let colorInput = section.querySelector(".color-input");
    changeBtn.onclick = function(){
        img.src = "images/"+srcinput.value;

        // img.style.border = "10px dashed blue";

        img.style["border-color"] = colorInput.value;

        console.log(img.className);
    }
});

//Ex 4: childNodes 이용한 노드 선택 
window.addEventListener("load", function () {
    var section4 = document.getElementById("section4");
    
    let box = section4.querySelector(".box");

    let input1 = box.children[0];
    let input2 = box.children[1];

    input1.value = "hello";
    input2.value = "ok";
});


// Ex 3: 엘리먼트 선택방법 개선하기
window.addEventListener("load", function () {
    var section3 = document.getElementById("section3");
    var txtX = section3.querySelector("input[name='txt-x']");
    var txtY = section3.querySelector(".txt-y")[0];
    var btnAdd = section3.querySelector(".btn-add")[0];
    var txtSum = section3.querySelector("txt-sum")[0];

    btnAdd.onclick = function () {
        txtSum.value = parseInt(txtX.value) + parseInt(txtY.value);
        console.log(typeof txtSum.value)
    }
});

// Ex 2: 엘리먼트 선택방법 개선하기
window.addEventListener("load", function () {
    var section2 = document.getElementById("section2");
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];
    // var section2 = document.getElementById("section2");
    // var inputs = section2.getElementsByTagName("input");


    // var txtX = inputs[0]
    // var txtY = inputs[1]
    // var btnAdd = inputs[2]
    // var txtSum = inputs[3]
    btnAdd.onclick = function () {
        txtSum.value = parseInt(txtX.value) + parseInt(txtY.value);
        console.log(typeof txtSum.value)
    }
});

// Ex 1: 계산기 프로그램
window.addEventListener("load", function () {
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function () {
        txtSum.value = parseInt(txtX.value) + parseInt(txtY.value);
        console.log(typeof txtSum.value)
    }
});