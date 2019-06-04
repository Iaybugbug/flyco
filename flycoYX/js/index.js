// $(function(){
  // .weixin .pic:hover{
  //   display: block;
  // }
  //图片显示
  $(".weixin").on('focus',function(){
   $(".pic")[0].style.block = block;
  }).on('blur',function(){
    $(".pic")[0].style.block = none;
  })
  
  //头部购物车
    $(".cart-section").on('mouseenter',function(){
        $(this).children("div").show().css({"background":"#fff","color":'blue'});
    })
    $(".cart-section").on('mouseleave',function(){
        $(this).children("div").hide();
    })
   
    //输入框
    $(".txt").on('focus',function(){
      $(this).val('');
      $(this).attr("placeholder",'');
      $(".hot-words")[0].style.display = "none";
    })
    $(".txt").on('blur',function(){
        // $(this).val('');
        $(".hot-words")[0].style.display ="block";
        $(this).attr("placeholder",'剃须刀');
    })
   
    $(".txt").attr("placeholder",'');


    //搜索框
    $('.btn').on('click',function(){
        //跳转去搜索列表页，并且需要带上关键字
        // var key = $.trim($('.txt').val());
        var key = $(".txt").val();
        console.log(key);
        if(!key){
            // mui.toast('请输入关键字');
            return false;
        }
        //如果合法；
        //searchList.html?key = xxxx
        location.href = 'searchList.html?key='+key;
       
    })
    $(".c-list").on('mouseenter',function(){
        $(this).siblings().show();
    })
    $(".c-list").on('mouseleave',function(){
        $(this).siblings().hide();
    })
    $(".c-list >li").on('mouseenter',function(){
        $(this).css("background-color","blue")
    }).on('mouseleave',function(){
        $(this).css("background-color",'');
    })

    var index = 0;
    var timer = setInterval(autoPlay,2500);
    function autoPlay(){
      index++;
      $("#box > li").eq(index).fadeIn(800).siblings().fadeOut(800);
      $("ol > li").eq(index).addClass('current').siblings().removeClass('current');
      //判断下标是否越界
      if(index == $("#box > li").length - 1){
        index = -1; 
      }
    }
  
    $("ol > li").mouseover(function(){
      //鼠标悬浮
      //轮播图不可以在走动，清除定时器
      // clearInterval(timer);
      clearInterval(timer);
      //获取当前所在的索引
      index = $(this).index() -1;
      autoPlay();
    }).mouseout(function(){
      timer = setInterval(autoPlay,2500);
    });
    $("#box> li").mouseover(function(){
      //鼠标悬浮
      //轮播图不可以在走动，清除定时器
      // clearInterval(timer);
      clearInterval(timer);
      //获取当前所在的索引
      index = $(this).index() -1;
      autoPlay();
    }).mouseout(function(){
      timer = setInterval(autoPlay,2500);
    });

// });