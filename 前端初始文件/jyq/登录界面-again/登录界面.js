function getCode() {
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'];
    var str = ' ';
    for (let a = 0; a < 5; a++) {
        var num = Math.round(Math.random() * (21 - 0) + 0);
        str += arr[num];
    }
    return str;
}
var checkFlag = 'adm'
document.addEventListener('DOMContentLoaded', function () {
    window.onload = function () {
        var number = document.getElementById('number');
        var change = document.getElementById('change');
        var button = document.getElementById('button');
        var newCode = getCode();
        number.innerHTML = newCode;

        change.addEventListener('click', function () {
            newCode = getCode();
            number.innerHTML = newCode;
        })

        var stuLogEl = document.querySelector(".stuLog")
        var admLogEl = document.querySelector(".admLog")
        stuLogEl.addEventListener('click', function () {
            admLogEl.classList.remove('active');
            checkFlag = 'stu';
            this.classList.add('active');
        });

        admLogEl.addEventListener('click', function () {
            stuLogEl.classList.remove('active');
            checkFlag = 'adm';
            this.classList.add('active');
        });
        var n = 0;
        var isFlag = false;
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var rememberMe = document.getElementById('rememberMe').checked;
            var autoLogin = document.getElementById('autoLogin').checked;
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            if (rememberMe) {
                setCookie('rememberMe', 'true', 7);
                setCookie('username', encodeURIComponent(username), 7);
                setCookie('password', encodeURIComponent(password), 7);
            } else {
                deleteCookie('rememberMe');
                deleteCookie('username');
                deleteCookie('password');
            }

            if (autoLogin) {
                setCookie('autoLogin', 'true', 7);
            } else {
                deleteCookie('autoLogin');
            }
            var nameShowEl = document.querySelector(".nameShow")
            var passShowEl = document.querySelector(".passShow")
            if (checkFlag === 'adm') {
                instance.post("/admin/Login", {
                    admAcc: nameShowEl.value,
                    admPassword: passShowEl.value
                })
                    .then(function (response) {
                        if (response.data.code = 'ok') {
                            isFlag = true;
                            window.localStorage.setItem('Authorization', response.data.token);
                            yz();
                        }
                    })
                    .catch(function (erro) {
                        console.log(erro);
                    });
            } else {
                instance.post("/student/Login", {
                    admAcc: nameShowEl.value,
                    admPassword: passShowEl.value
                })
                    .then(function (response) {
                        if (response.data.code = 'ok') {
                            isFlag = true;
                            window.localStorage.setItem('Authorization', response.data.token);
                            yz();
                        }
                    })
                    .catch(function (erro) {
                        console.log(erro);
                    });
            }
        });

        var input = document.getElementsByTagName('input');
        input[0].onclick = function () {
            var yh = document.getElementById('yh');
            yh.style.top = '0';
            yh.style.transition = 'top 0.8s';
            yh.style.color = 'black';
        }
        input[1].onclick = function () {
            var mm = document.getElementById('mm');
            mm.style.top = '0';
            mm.style.transition = 'top 0.8s';
            mm.style.color = 'black';
        }
        input[0].onblur = function () {
            var yh = document.getElementById('yh');
            yh.style.top = ""
            yh.style.bottom = '0';
            yh.style.color = 'gray';
        }
        input[1].onblur = function () {
            var mm = document.getElementById('mm');
            mm.style.top = "";
            mm.style.bottom = '0'
            mm.style.color = 'gray';
        }

        input[0].oninput = function () {
            if (this.value) {
                this.onblur = null;
            } else {
                this.onblur = function () {
                    yh.style.top = "";
                    yh.style.bottom = '0';
                    yh.style.color = 'gray';
                }
            }
        }
        input[1].oninput = function () {
            if (this.value) {
                this.onblur = null;
            } else {
                this.onblur = function () {
                    mm.style.top = "";
                    mm.style.bottom = '0';
                    mm.style.color = 'gray';
                }
            }
        }
        function yz() {
            if (n < 2) {
                var inputCode = document.getElementById('yzm-input').value;
                var currentCode = number.innerHTML;
                if (inputCode === currentCode.trim()) {
                    //使用已经获取好的两个输入框内value向后端发送
                    if (isFlag) {
                        window.open("/Combat-projects/前端初始文件/qht/管理登录展示页面.html");
                    }

                    clearLock();
                } else if (!inputCode) {
                    alert('请输入验证码')
                } else {
                    n++;
                    alert('验证错误，还剩' + (3 - n) + '次机会');
                }
            } else {
                alert('请一分钟后再试');
                lockPage();
            }
        }
    }

})

let lockTimeout = null;
function lockPage() {
    document.querySelector(".nameShow").disabled = true;
    document.querySelector(".passShow").disabled = true;
    lockTimeout = setTimeout(function () {
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
document.addEventListener('DOMContentLoaded', function () {
    var rememberMe = getCookie('rememberMe');
    var autoLogin = getCookie('autoLogin');
    var username = getCookie('username');
    var password = getCookie('password');

    if (rememberMe === 'true') {
        document.getElementById('username').value = decodeURIComponent(username);
        document.getElementById('password').value = decodeURIComponent(password);
        document.getElementById('rememberMe').checked = true;
    }
});
function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

