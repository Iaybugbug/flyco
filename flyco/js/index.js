//点击某商品，跳转到该商品详情页面，一种商品一个页面？
//相同样式页面的商品也独有一张页面？或者是？就一个页面然后，后台请求数据，覆盖其他商品？
//实现点击跳转到商品详情页面，发送ajax请求，把数据库信息加载到页面
var shavers = document.getElementsByClassName("shaver")[0];
var lis = shavers.children;
var names = document.getElementsByClassName("name");
for(var i = 0; i < lis.length; i++){
    lis[i].setAttribute("index",i);
    lis[i].onclick = function(){
        var name = encodeURI(encodeURI(names[this.getAttribute("index")].innerText));
        location.href = "./product.html?name="+name;
    }
}