/*function exchange() {
    //下面写代码使得页面切换到新的管理员的界面
    window.location.href = 'new-maneger.html';
}

function forgotPassword() {
    //下面写代码使网页地址跳转到忘记密码重置密码的页面
    window.location.href = 'forgot_password.html';
}
*/
function logout() {
    //提示注销账号
    alert('您已退出登录，即将返回登陆首页面');
    //下面写代码使网页地址跳转到登录首页面
    window.location.href = '../../jyq/登录界面-again/登录界面.html';
}

//排他思想实现鼠标经过文字时变色和对应内容跳转的功能
const as = document.querySelectorAll('.head a')
for (let i = 0; i < as.length; i++) {
    as[i].addEventListener('mouseenter', function () {
        document.querySelector('.head .active').classList.remove('active')
        this.classList.add('active')

        document.querySelector('.content .active').classList.remove('active')
        //对应序号添加active类
        document.querySelector(`.content .part:nth-child(${i + 1})`).classList.add('active')
    })
}