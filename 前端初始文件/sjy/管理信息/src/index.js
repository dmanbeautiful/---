//创建数组，目标是根据数组数据个数动态生成按钮，将数组的值赋给响应标签
var objArray = [
    { name: "张三", number: "123456", direction: "全栈" },
    { name: "李四", number: "234567", direction: "全栈" },
    { name: "李四", number: "234567", direction: "全栈" },
    { name: "李四", number: "234567", direction: "全栈" },
    { name: "李四", number: "234567", direction: "全栈" },
    { name: "李四", number: "234567", direction: "全栈" },
    { name: "李四", number: "234567", direction: "全栈" },
    { name: "张三", number: "123456", direction: "全栈" },
    { name: "李四", number: "234567", direction: "全栈" },
];

//设置每页的元素个数，perPage可以用var设置为全局变量
//注意，当前页面currentPage不可以设置为全局变量，因为它会不断变化  
//应该在函数内用 let 声明 currentPage
var perPage = 6;

//计算最大页码
var totalPages = Math.ceil(objArray.length / perPage);

var list = document.querySelector('.studentList');
//清空class = studentList 标签内的内容
list.innerHTML = ' ';
    
console.log(list.innerHTML);

// 渲染页面中的列表  
function renderList(currentPage) {
    let startIndex = (currentPage - 1) * perPage;
    let endIndex = startIndex + perPage;
    if (endIndex > objArray.length) {
        endIndex = objArray.length;
    }

    //先跳过console
    
    for (let i = startIndex; i < endIndex; i++) {
        //创建一个标签模板，用来显示数组中的数字
        
        let divStudentMessage = document.createElement('div');
        divStudentMessage.className = "studentMessage";
        
        let img = document.createElement('img');
        img.src ="https://sunjiayu19.oss-cn-beijing.aliyuncs.com/ai-image@3x.png";
        img.className = "portrait";

        let spanMessage= document.createElement('span');
        spanMessage.className = "message";

        let divName = document.createElement('div');
        divName.className = "name";

        let divNumber = document.createElement('div');
        divNumber.className = "number";

        let divDirection = document.createElement('div');
        divDirection.className = "direction";

        divName.innerHTML = objArray[i].name;
        divNumber.innerHTML = objArray[i].number;
        divDirection.innerHTML = objArray[i].direction;
        
        //利用appendChild向span1中添加子节点，一次只能添加一个
        spanMessage.appendChild(divName);
        spanMessage.appendChild(divNumber);
        spanMessage.appendChild(divDirection);
        
        let spanButton= document.createElement('span');
        spanButton.className = "button";
        let Reset= document.createElement('a');
        Reset.className = "buttonReset";
        Reset.innerHTML = "重置";
        let Alter= document.createElement('a');
        Alter.className = "buttonAlter";
        Alter.innerHTML = "修改";
        let Delete= document.createElement('a');
        Delete.className = "buttonDelete";
        Delete.innerHTML = "删除";

        //利用appendChild向span2中添加子节点，一次只能添加一个
        spanButton.appendChild(Reset);
        spanButton.appendChild(Alter);
        spanButton.appendChild(Delete);

        //利用appendChild向div2中添加子节点,div2就是集合所有内容的节点
        divStudentMessage.appendChild(img);
        divStudentMessage.appendChild(spanMessage);
        divStudentMessage.appendChild(spanButton);
            
        //以上，节点模板书写完成
        list.appendChild(divStudentMessage);
    }
}
// 渲染分页按钮  
function renderPagination() {
    // 清空分页控件  
    var pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    //声明当前页面
    let currentPage = 1;

    for (var i = 1; i <= totalPages; i++) {
        button = document.createElement('button'); button.innerHTML = i;
        pagination.appendChild(button);
        
        // 必须为每个按钮添加**独立**的事件监听器
        button.addEventListener('click', function () {
            list.innerHTML = '';

            // console.log(typeof button.innerHTML) ==> string
            //利用parseInt将button上的内容由字符串转换为整型数字，赋值给当前页面

            renderList(parseInt(this.innerHTML));
        });
    }
  
}
//先用一个renderList显示第一页列表，再切换
renderList(1);
//调用分页函数，控制页面数
renderPagination();


//检查List函数中current处逻辑


document.addEventListener('DOMContentLoaded',function () {
    var fb = document.getElementsByClassName('fb')
        fb[0].onclick = function () {
            location.href = "../../../jyq/管理端发布界面/管理端发布界面.html";
        }
})