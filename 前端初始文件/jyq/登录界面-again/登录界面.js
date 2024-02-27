function getCode(){
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','A','B','C','D','E','F'];
    var str = ' ';
    for(let a=0; a<5; a++){
        var num = Math.round(Math.random()*(21-0)+0);
        str += arr[num];
    }
    return str;
}
document.addEventListener('DOMContentLoaded',function () {
window.onload = function(){
    var number = document.getElementById('number');
    var change = document.getElementById('change');
    var button = document.getElementById('button');
    var newCode = getCode();
    number.innerHTML = newCode;     
   
    change.addEventListener('click', function(){
        newCode = getCode();
        number.innerHTML = newCode; 
        
    })
    
    var n = 0;

    button.addEventListener('click', function() {
            yz();
            //alert('请十分钟后再试');
    });

    function yz() {
        if (n < 2) {
            var inputCode = document.getElementById('yzm-input').value;
            var currentCode = number.innerHTML;
            if (inputCode === currentCode.trim()) {
                window.open("/qht/展示信息.html");
                clearLock();
            }else if(!inputCode){
                alert('请输入验证码')
            }else{
                n++;
                alert('验证错误，还剩' + (3 - n) + '次机会');
            }
        }else{
            alert('请一分钟后再试');
            lockPage();
        }
    }
}

var input = document.getElementsByTagName('input');
input[0].onclick = function (){
    var yh = document.getElementById('yh');
    yh.style.top  = '0';
    yh.style.transition = 'top 0.8s';
    yh.style.color = 'black';
    }
input[0].onblur = function () {
    var yh = document.getElementById('yh');
    yh.style.top=""
    yh.style.bottom  = '0';
    yh.style.color = 'gray';
}
input[1].onclick = function (){
    var mm = document.getElementById('mm');
    mm.style.top  = '0';
    mm.style.transition =  'top 0.8s';
    mm.style.color = 'black';
    }
    input[1].onblur = function () {
    var mm = document.getElementById('mm');
    mm.style.top  = "";
    mm.style.bottom = '0'
    mm.style.color = 'gray';
}
})

let lockTimeout = null;
function lockPage() {
    document.querySelector(".nameShow").disabled = true;
    document.querySelector(".passShow").disabled = true;
    lockTimeout = setTimeout(function() {   
        clearLock();  
    }, 60000);
}
function clearLock() {
    if (lockTimeout) {  
        clearTimeout(lockTimeout);  
        lockTimeout = null;  
        document.querySelector(".passShow").disabled = false;
        document.querySelector(".nameShow").disabled = false;
    }  
}

