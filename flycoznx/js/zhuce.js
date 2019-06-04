$("#yan").blur(function(){
    var suiji = $("h3").val()
    var yan  =$("#yan").val()
    if(yan ==""){
        $("#yan_ti").html('请输入验证码')
    }
    if(yan=="suiji"){
        alert('ok')
    }
})
$("#phone").blur(function(){
    var yan  =$("#yan").val()
    if(yan ==""){
        $("#phone_ti").html('请输入手机号')
    }
})
$("#yan_phone").blur(function(){
    var yan  =$("#yan").val()
    if(yan ==""){
        $("#yan_phone_ti").html('请输入手机验证码')
    }
})
$("#pwd").blur(function(){
    var yan  =$("#yan").val()
    if(yan ==""){
        $("#pwd_ti").html('请输入密码')
    }
})
$("#yan_pwd").blur(function(){
    var yan  =$("#yan").val()
    if(yan ==""){
        $("#yan_pwd_ti").html('请输入密码')
    }
})
// 随机数生成
    var code;
    function createCode(){
        //首先默认code为空字符串
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
        codeV.value = code;
    }
$("#huan").click(function(){
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


    console.log(code)
})