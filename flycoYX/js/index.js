$(function () {
  // .weixin .pic:hover{
  //   display: block;
  // }
  //图片显示
  $(".weixin").on('mouseover', function () {
    //  $(".pic")[0].style.block = 'block';
    // $(this)[0].children(".pic").style.block = 'block';
    $(this).find('img').show();
  }).on('mouseout', function () {
    // $(".pic")[0].style.block = 'none';
    // $(this)[0].children(".pic").style.block = 'none';
    $(this).find('img').hide();
  })

  //头部购物车
  $(".cart-section").on('mouseenter', function () {
    $(this).children("div").show().css({ "background": "#fff", "color": 'blue' });
  })
  $(".cart-section").on('mouseleave', function () {
    $(this).children("div").hide();
  })

  //输入框
  $(".txt").on('focus', function () {
    $(this).val('');
    $(this).attr("placeholder", '');
    $(".hot-words")[0].style.display = "none";
  })
  $(".txt").on('blur', function () {
    // $(this).val('');
    $(".hot-words")[0].style.display = "block";
    $(this).attr("placeholder", '剃须刀');
  })

  $(".txt").attr("placeholder", '');


  //搜索框
  $('.btn').on('click', function () {
    //跳转去搜索列表页，并且需要带上关键字
    // var key = $.trim($('.txt').val());
    var key = $(".txt").val();
    console.log(key);
    if (!key) {
      // mui.toast('请输入关键字');
      return false;
    }
    //如果合法；
    //searchList.html?key = xxxx
    location.href = 'searchList.html?key=' + key;

  })
  $(".c-list").on('mouseenter', function () {
    $(this).siblings().show();
  })
  $(".c-list").on('mouseleave', function () {
    $(this).siblings().hide();
  })
  $(".c-list >li").on('mouseenter', function () {
    $(this).css("background-color", "blue")
  }).on('mouseleave', function () {
    $(this).css("background-color", '');
  })

  var index = 0;
  var timer = setInterval(autoPlay, 1500);
  function autoPlay() {
    index++;
    $("#box > li").eq(index).fadeIn(500).siblings().fadeOut(500);
    $("ol > li").eq(index).addClass('current').siblings().removeClass('current');
    //判断下标是否越界
    if (index == $("#box > li").length - 1) {
      index = -1;
    }
  }

  $("ol > li").mouseover(function () {
    //鼠标悬浮
    //轮播图不可以在走动，清除定时器
    // clearInterval(timer);
    clearInterval(timer);
    //获取当前所在的索引
    index = $(this).index() - 1;
    autoPlay();
  }).mouseout(function () {
    timer = setInterval(autoPlay, 1500);
  });
  $("#box> li").mouseover(function () {
    //鼠标悬浮
    //轮播图不可以在走动，清除定时器
    // clearInterval(timer);
    clearInterval(timer);
    //获取当前所在的索引
    index = $(this).index() - 1;
    autoPlay();
  }).mouseout(function () {
    timer = setInterval(autoPlay, 1500);
  });



  // 热卖单品交互
  // $.ajax({
  //   url: '../php/index.php',
  //   dataType: "json",
  //   success: function (res) {
  //     // console.log(res)
  //     if (res.code == 200) {
  //       var data = res.data[0];
  //       console.log(data);
  //       var str = ``;
  //       // for (var i = 0; i < data.length; i++) {

  //         str = `
           
  //          <div class="hot-goods">
  //            <div class="goods-list">
  //                <div class="msg">
  //                    <h3 class="title">${data.title}</h3>
  //                    <p class="desc">${data.content}</p>
  //                    <p class="price"><span class="num">${data.price}</span>元 <span class="cal-price">339元</span> </p>
  //                </div>
  //                <div class="figure">
  //                    <a href="#">
  //                        <img src="${data.pic}" alt="">
  //                    </a>
  //                </div>
  //            </div>
  //        </div>
  //          `;
  //       // }

  //       $(".hot-bg").html(str);

  //     }
  //   }
  // })
  $.ajax({
    url: '../php/index.php',
    dataType: "json",
    success: function (res) {
      console.log(res)
      if (res.code == 200) {
        var data = res.data;
        console.log(data);
        var str = ``;
        for (var i = 0; i < data.length; i++) {

          str = `
           
          <div class="hot-goods">
            <div class="goods-list">
                <div class="msg">
                    <h3 class="title">${data[i].title}</h3>
                    <p class="desc">${data[i].content}</p>
                    <p class="price"><span class="num">${data[i].price}</span>元 <span class="cal-price">339元</span> </p>
                </div>
                <div class="figure">
                    <a href="#">
                        <img src="${data[i].pic}" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="item">
            <p class="title">${data[i].title} </p>
            <p class="month-num"><span class="num">${data[i].content}</span> </p>
            <p class="price"> <span class="num">${data[i].price}</span>元</p>
            <div class="figure">
                <a href="#">
                    <img src="${data[i].pic}" alt="">
                </a>
            </div>
        </div>
        <div class="item">
            <p class="title">${data[i].title} </p>
            <p class="month-num"><span class="num">${data[i].content}</span> </p>
            <p class="price"> <span class="num">${data[i].price}</span>元</p>
            <div class="figure">
                <a href="#">
                    <img src="${data[i].pic}" alt="">
                </a>
            </div>
        </div>
           `;
        }

        $(".hot-bg").html(str);

      }
    }
  })
});