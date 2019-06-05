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
    $.post('../php/log.php',{"username":username,"password":password},function(res){
        console.log(res)
        if(res.code == 200){
            alert(res.message);
        }else{
            alert(res.message)
        }
    },'json')
})

$(".land").click(function(){
    event.preventDefault()
    event.stopPropagation()
    $(this).addClass('clo').siblings().removeClass('clo')
    var index = $(this).index()
    console.log(index)
    $(".huan").eq(index).addClass('blank').siblings().removeClass('blank')



})
