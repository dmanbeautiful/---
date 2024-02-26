// // 获取容器元素
// let container = document.querySelector('.studentList');

// // 将新的 div 元素追加到容器元素中
// container.appendChild(div2);

//创建数组，目标是根据数组数据个数动态生成按钮
let objArray = [
    { name: "李四", number: "123456", direction: "全栈" },
    { name: "张三", number: "234567", direction: "全栈" },
];

// 每页显示的项目数量  
let itemsPerPage = 6;

// 当前页码  
let currentPage = 1;

// 渲染列表  
function renderList(items, start, end) {

//先清空列表  
    let list = document.querySelector('.studentList');
    list.innerHTML = ''; 

//for循环遍历添加元素，start为0，end为每页显示的项目数量itemsPerPage,满足小于6且小于数组长度时进行
    for (let i = start; i < end && i < items.length; i++) {

        //此处将创建的新元素绑定为studentMessage
        //  let container = document.createElement('');
        // 分别创建元素
        let div1 = document.createElement('div');
        div1.className = "studentList";

        let div2 = document.createElement('div');
        div2.className = "studentMessage";

        let img = document.createElement('img');
        img.className = "portrait";

        let span1= document.createElement('span');
        span1.classaName = "message";

        let div3 = document.createElement('div');
        div3.className = "name";

        let div4 = document.createElement('div');
        div4.className = "number";

        let div5 = document.createElement('div');
        div5.className = "direction";
        //利用appendChild向span1中添加子节点，一次只能添加一个
        span1.appendChild(div3);
        span1.appendChild(div4);
        span1.appendChild(div5);
        div3.textContent = items[i].name;
        div4.textContent = items[i].number;
        div5.textContent = items[i].direction;
        let span2= document.createElement('span');
        span2.className = "button";
        let span3= document.createElement('span');
        span3.className = "buttonReset";
        let span4= document.createElement('span');
        span4.className = "buttonAlter";
        let span5= document.createElement('span');
        span5.className = "buttonDelete";

        //利用appendChild向span2中添加子节点，一次只能添加一个
        span2.appendChild(span3);
        span2.appendChild(span4);
        span2.appendChild(span5);

        //利用appendChild向div2中添加子节点,div2就是集合所有内容的节点
        div2.appendChild(img);
        div2.appendChild(span1);
        div2.appendChild(span2);
        
        list.appendChild(div2);
    }
}

// 渲染分页按钮  
function renderPagination(totalPages) {
    var pagination = document.querySelector('.pagination');
    pagination.innerHTML = ''; // 清空分页控件  

    for (var i = 1; i <= totalPages; i++) {
        var button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', function () {
            currentPage = parseInt(this.textContent);
            renderList(objArray, (currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        });
        pagination.appendChild(button);
    }
}

// 初始渲染  
renderList(objArray, 0, itemsPerPage);
renderPagination(Math.ceil(objArray.length / itemsPerPage));

