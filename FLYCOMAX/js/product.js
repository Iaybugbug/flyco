//发送ajax请求，加载响应数据
// var goodsName = getQueryString("name");
// var name = decodeURI(goodsName);
// ajax({
//     "method" : "post",
//     "url" : "../php/index.php",
//     "data" : "name="+name,
//     "callback" : function(res){
//        console.log(res);
//     }
// })
// function getQueryString(name){
//     var reg = new RegExp("(^|&)" + name + "=([^|&]*)(&|$)","i");
//     var r = window.location.search.substr(1).match(reg);
//     if(r != null) return unescape(r[2]);return null;
// }
//点击小图，在上方显示大图
var imgs = document.querySelectorAll("img[alt]");
var dt = document.getElementsByTagName("dt")[0];
var imgArr = [
    "../images/FS808_000_01.jpg",
    "../images/FS808_000_021.jpg",
    "../images/FS808_000_03 (1).jpg",
    "../images/FS808_000_04 (1).jpg",
    "../images/FS808_000_05 (1).jpg"
];
var firstImg = dt.children[0];
for(var i = 0; i < imgs.length; i++){
    //将大图充当小图的属性，利用this的属性小图关联大图
    imgs[i].setAttribute("big-pic",imgArr[i]);
    imgs[i].onclick = function(){
        dt.innerHTML = "";
        var img = document.createElement("img");
        img.src = this.getAttribute("big-pic");
        dt.appendChild(img);
        firstImg = dt.children[0];
        magnify();
        //右边大图，有一定的宽，高，足够大，
        //大图得在小窗口显示出来,读取对应放大镜中的图片
        // detailIMG.src = firstImg.src ;
    }
}
//放大镜
//鼠标移进图片，放大镜出现在鼠标的位置，大图开始显示
//在放大镜的移动中，大图的左右，上下距离开始移动，并且是比例式，同向移动
//放大镜在往下，往右移动，有时到达不了最下，最右，存在空隙，待解决（已解决，是边界变化，及到达最大边界设置问题）
function magnify(){
    firstImg.onmouseenter = function(e){
        var div = document.createElement("div");
        div.setAttribute("class","magnifying");
        dt.appendChild(div);
        var magnifying = document.querySelector(".magnifying");
        var detailImg = document.createElement("div");
        detailImg.setAttribute("class","detail-img");
        document.getElementsByClassName("product")[0]
        .insertBefore(detailImg,document.getElementsByClassName("detail")[0]);
        var detailIMG = document.createElement("img");
        detailIMG.src = firstImg.src;
        detailImg.appendChild(detailIMG);
        //规定放大镜刚出现的左右位置
        e.offsetX <= 74 ? magnifying.style.left = 0 
        : e.offsetX <= 300 ? magnifying.style.left = e.offsetX - 74 + "px"
        : magnifying.style.left = 226 + "px" ;
        //规定放大镜刚出现的上下位置
        e.offsetY <= 64 ? magnifying.style.top = 0 
        : e.offsetY <= 304 ?  magnifying.style.top = e.offsetY - 64 + "px"
        : magnifying.style.top = 240 + "px";
        //放大镜显示同时，商品大图也显示
        detailImg.style.display = "block";
        //规定放大镜刚出现大图在窗口的左右位置
        e.offsetX <= 74 ? detailIMG.style.left = 0 : detailIMG.style.left = - 480 + "px";
        //规定放大镜刚出现大图在窗口的上下位置
        e.offsetY <= 64 ? detailIMG.style.top = 0 : detailIMG.style.top = - 520 + "px";
        magnifying.onmousemove = function(e){
            //移动距离要减去盒子距离页面left,top，及放大镜本身宽高一半
            //规定放大镜左右移动界线
            e.pageX <= 127 ? magnifying.style.left = 0 
            : e.pageX <= 351 ? magnifying.style.left = e.pageX - 127 + "px" 
            : magnifying.style.left = 226 + "px" ;
            //规定放大镜上下移动界线
            e.pageY <= 148 ? magnifying.style.top = 0 
            : e.pageY <= 386 ?  magnifying.style.top = e.pageY - 147 + "px" 
            : magnifying.style.top = 240 + "px";
            //商品详情图片也显示
            //规定大图在窗口的左右移动界线
            e.pageX <= 127 ? detailIMG.style.left = 0 
            : e.pageX <= 351 ? detailIMG.style.left =  - (e.pageX - 127) * 2 + "px" 
            :  detailIMG.style.left = - 480 + "px" ;
            //规定大图在窗口的上下移动界线
            e.pageY <= 148 ? detailIMG.style.top = 0 
            : e.pageY <= 386 ? detailIMG.style.top = - (e.pageY - 147) * 2 + "px" 
            : detailIMG.style.top = - 520 + "px" ;
        }
        //鼠标离开放大镜，放大镜消失，大图区域消失
        magnifying.onmouseleave = function(){
            this.remove();
            detailImg.remove();
        }
    }
}
magnify();
//点击加，减，对应加减数量
var minus = document.getElementsByClassName("minus")[0];
var number = document.getElementsByClassName("number")[0];
var add = document.getElementsByClassName("add")[0];
minus.onclick = function(){
    number.value--;
    number.value <= 0 ? number.value = 0 : number.value = number.value;
}
add.onclick = function(){
    number.value++;
}
//点击立即购买，跳转到核对订单信息页面
//点击加入购物车，提示成功加入购物车，可选择关闭提示页面，或去购物车结算
var join = document.getElementsByClassName("join")[0];
var localList = [];
join.onclick = function(e){
    e.preventDefault();
    alert("已成功加入购物车！！");
    //利用本地存储完成购物车，将商品图片地址，商品名，价格，数量保存
    //先设置一个购物车数组，保存每项商品信息，商品信息以对象格式设置
    var product = {
        "imgSrc" : firstImg.getAttribute("src"),
        "name" : document.getElementById("title").innerText,
        "price" : document.getElementsByClassName("dis-price")[0].innerText,
        "count" : parseInt(document.getElementsByClassName("number")[0].value)
    }
    var productCount = product.count;
    //加入购物车时，从购物车中获取商品进行对比，如果添加类型相同，数量相加，否则直接添加商品
    localStorage.setItem("localList",JSON.stringify(localList));
    localList = JSON.parse(localStorage.getItem("localList"));
    for(var i = 0; i < localList.length; i++){
        if(product.name == localList[i].name){
            product.count = localList[i].count + productCount;
            localList.splice(i,1);
        }
    }
    localList.push(product);
    localStorage.setItem("localList",JSON.stringify(localList));
    location.href = "./carList.html";
}