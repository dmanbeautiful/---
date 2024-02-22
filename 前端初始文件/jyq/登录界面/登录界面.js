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
                alert('验证通过');
            }else{
                n++;
                alert('验证错误，还剩' + (3 - n) + '次机会');
            }
        }else{
            alert('请十分钟后再试');
            setTimeout(function(){
                n = 0;
            },10000); 
        }
    }
}
})