$("#btn").click(function (){

    var username = $("#nusername").val();
    var password = $("#pwd").val();
    if (username == "" || password == ""){
        
        if(username == ""){
              $("#username_txt").html('请正确输入密码').css('color', 'red')
             return
        }else{
            $("#pwd_txt").html('请正确输入密码啊').css('color', 'red')
             return
        }            
    }

    promiseAjax({
        "method":"post",
        "url":"../php./log.php",
        "data":"username="+username+"&password="+password
    }).then(function(res){
        console.log(res);
        var result = JSON.parse(res);
        if(result.code == 200){
            alert( result.message );
            location.href = "./zhuce.html";
        }else{
            console.log(111);
            errEle.innerHTML = result.message;
            errEle.style.color = "red";
        }
    });
    // var yanzheng = $("#yanzheng").val();
    // var phone = $("#phone").val();
    // var phone_yan = $("#phone_yan").val();
    // if (yanzheng == "" || phone == ""){            
    //     if(yanzheng == ""){
    //           $(".yanzheng").html('请正确输入密码').css('color', 'red')
    //          return
    //     }else{
    //         $(".phone").html('请正确输入密码啊').css('color', 'red')
    //          return
    //     }            
    // }


})
$(".land").click(function(){
    event.preventDefault()
    event.stopPropagation()
    $(this).addClass('clo').siblings().removeClass('clo')
    var index = $(this).index()
    console.log(index)
    $(".huan").eq(index).addClass('blank').siblings().removeClass('blank')



})