
window.addEventListener("load",function(){
    var btnPrint = document.getElementById("btn-print")
    alert("안녕하세요2");

    
    btnPrint.onclick = function printResult() {
        var x = prompt("x값을 입력하세요", 0);
        var y = prompt("y값을 입력하세요", 0);
        
        btnPrint.value = x + y;
    }
});