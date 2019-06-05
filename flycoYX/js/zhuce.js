//随机数生成
var getRand = function(){
    code = '';
    //设置长度，这里看需求，我这里设置了4
    var codeLength = 4;
    var codeV = document.getElementById('code');
    //设置随机字符
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
    //循环codeLength 我设置的4就是循环4次
    for(var i = 0; i < codeLength; i++){
        //设置随机数范围,这设置为0 ~ 36
         var index = Math.floor(Math.random()*36);
         //字符串拼接 将每次随机的字符 进行拼接
         code += random[index]; 
    }
    //将拼接好的字符串赋值给展示的Value
    // codeV.value = code;
    $("h3").html(code)
}
$("#huan").click(getRand);
getRand();
// 输入验证

$("#yan").blur(function(){
   
    var suiji = $("h3").text()
    var yan  =$("#yan").val()
   
    if(yan ==""){
        $("#yan_ti").html('请输入验证码')
    }else if(yan == suiji){
        $("#yan_ti").html('输入正确').css("color","blur")
    }
})
$("#phone").blur(function(){
    var phone  =$("#phone").val()
    var reg = /^1[34578]\d{9}$/
    if(!(reg.test(phone))){
        $("#phone_ti").html('请正确输入手机号')
    }else if(phone ==""){
        $("#phone_ti").html('请输入手机号')
    }else{
        $("#phone_ti").html('输入正确') 
    }
})
$("#yan_phone").blur(function(){
    var yan_phone  =$("#yan_phone").val()
    if(yan_phone ==""){
        $("#yan_phone_ti").html('请输入手机验证码')
    }
})
$("#pwd").blur(function(){
    var pwd  =$("#pwd").val()
    if(pwd ==""){
        $("#pwd_ti").html('请输入用户名')
        return false
    }
})
$("#yan_pwd").blur(function(){
    var yan_pwd  =$("#yan_pwd").val()
    if(yan_pwd ==""){
        $("#yan_pwd_ti").html('请输入密码')
        return false
    }
})
// 注册请求
$("#btn").click(function(){
var username = $("#pwd").val()
var password = $("#yan_pwd").val()
if(username == "" || password == ""){
    // $("#err").html('请输入密码或用户名').css('color', 'red')
    alert("请输入用户名或密码")
    return
}
promiseAjax({
    "method":"post",
    "url":"../php./zhuce.php",
    "data":"username="+username+"&password="+password
}).then(function(res){
    var result = JSON.parse(res);
    if(result.code == 200){
        alert( result.message );
        location.href = "../html./log.html";
    }else{
        console.log(111);
        errEle.innerHTML = result.message;
        errEle.style.color = "red";
    }
});
})
