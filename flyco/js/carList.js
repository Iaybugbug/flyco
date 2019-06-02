//从其它页面跳转进购物车，开始从本地存储获取数据，并显示在购物车上；
//判断本地存储不为空，不然JSON.parse会出错
if(localStorage.getItem("localList")){
    var localList =  JSON.parse(localStorage.getItem("localList"));
    var str = ``;
    for(var i = 0; i < localList.length; i++){
        var productPrice = localList[i].count * localList[i].price;
        str += `
            <ul class="productList">
                <li>
                    <input type="checkbox">
                </li>
                <li>
                    <img src='${localList[i].imgSrc}' >
                    <span class="name">${localList[i].name}</span>
                </li>
                <li class="delete edit">删除</li>
                <li style="color: #5791db">&yen;<span class="priceCounts" style="float:none">${productPrice}</span></li>
                <li class="num">
                    <span class="minus">-</span><input class="priceNum" style="float:left" value="${localList[i].count}"><span class="add">+</span>
                </li>
                <li >&yen;<span class="priceCount" style="float:none">${localList[i].price}</span></li>
            </ul> 
        `
    }
    var productsLists = document.getElementsByClassName("productsLists")[0];
    productsLists.innerHTML  += str;
}
var checkAll = document.getElementById("checkAll");
var inputs = document.querySelectorAll("input");
//checkAll被选中时，所有input被选中,否则，input都不被选中
checkAll.onclick = function(){
    for(var i = 1; i < inputs.length; i++){
        this.checked ? inputs[i].checked = true 
        : inputs[i].checked = false;
    }
}
//input都被选中，checkALL被选中，否则不被选中
//刚开始选中时，checkAll没被选中问题待解决
for(var i = 1; i < inputs.length; i++){
    inputs[i].onclick = function(){
        if(this.checked){
            var flag = true;
            for(var j = 1; j < inputs.length; j++){
                if(!inputs[j].checked){
                    flag = false;
                }
            }
            if(flag){
                checkAll.checked = true;
            }
        }else{
            this.checked = false;
            checkAll.checked = false;
        }
    }
}
//点击加减，数量对应递加递减
var minus = document.getElementsByClassName("minus");
var adds = document.getElementsByClassName("add");
var nums = document.getElementsByClassName("priceNum");
var prices = document.getElementsByClassName("priceCount"); 
var counts = document.getElementsByClassName("priceCounts"); 
for(var i = 0; i < minus.length; i++){
    minus[i].onclick = function(){
        this.nextSibling.value--;
        if(this.nextSibling.value < 1){
            if(!confirm("确定删除该商品？")){
                this.nextSibling.value = 1;
                return;
            }
            this.parentNode.parentNode.remove();
        }
        priceCount();
        pricesSum();
    }
}
for(var i = 0; i < adds.length; i++){
    adds[i].onclick = function(){
        this.previousSibling.value++;
        priceCount();
        pricesSum();
    }
}
//计算单类商品价格
function priceCount(){
    for(var i = 0; i < prices.length; i++){
        counts[i].innerText = prices[i].innerText * nums[i].value;
    }
}
priceCount();
//按删除按钮，删除该项商品,并清除该商品在本地的存储
var deletes = document.getElementsByClassName("delete");
var names = document.getElementsByClassName("name");
var sum = document.getElementsByClassName("sum")[0];
for(var i = 0; i < deletes.length; i++){
    deletes[i].setAttribute("index",i);
    deletes[i].onclick = function(){
        if(!confirm("确定删除该商品？")){
            return;
        }
        var index = this.getAttribute("index");
        for(var j = 0; j < localList.length; j++){
            if(names[index].innerText == localList[j].name){
                localList.splice(j,1);
                localStorage.setItem("localList",localList);
            }
        }
        this.parentNode.remove();
        pricesSum();
    }
}
//点击清空购物车，清空购物车,并清空本地的存储
var clearList = document.getElementsByClassName("clearList")[0];
var productLists = document.getElementsByClassName("productList");
clearList.onclick = function(){
    if(!confirm("确定删除所有商品？")){
        return;
    }
    for(var i = 0; i < productLists.length; i++){
        productLists[i].remove();
        i = -1;
    }
    localList = [];
    localStorage.setItem("localList",localList);
    pricesSum();
}
//点击删除选中商品，删除选中商品,并清除该商品在本地的存储
var checkDelete = document.getElementsByClassName("checkDelete")[0];
checkDelete.onclick = function(){
    //点击时，先遍历是否有被选中,如果都没有，提示没有商品删除
    //如果有再进行删除被选中商品
    var inputs = document.querySelectorAll("input");
    var flag = false;
    for(var i = 1 ; i < inputs.length; i++){
        if(inputs[i].checked){
            flag = true;
        }
    }
    if(!flag){
        alert("没有任何商品可删除！！");
    }else{
        if(!confirm("确定删除该商品？")){
            return;
        }
        for(var i = 1; i < inputs.length; i++){
            if(inputs[i].checked){
                for(var j = 0; j < localList.length; j++){
                    if(names[i-1].innerText == localList[j].name){
                        localList.splice(j,1);
                        localStorage.setItem("localList",localList);
                    }
                }
                inputs[i].parentNode.parentNode.remove();
            }
        }
        pricesSum();
    }
}
//总价计算，每类商品的总价之和
function pricesSum(){
    var priceSum = 0;
    for(var i = 0; i < counts.length; i++){
        priceSum += Number(counts[i].innerText); 
    
    }
    sum.innerHTML = "&yen;" + priceSum;
}
pricesSum();
//继续购物跳转到首页
var shopping = document.getElementsByClassName("shopping")[0];
shopping.onclick = function(){
    location.href = "index.html";
}
//点击结算，如果没登录，先跳转到登录界面
var pay = document.getElementsByClassName("pay")[0];

//如果已登录，跳转到支付页面
//将被清空的商品移除出购物车
