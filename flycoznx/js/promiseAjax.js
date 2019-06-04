function promiseAjax(params){
    return new Promise(function(success,error){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status==200){
                success (this.responseText);
            }
        }
            if(params.method == 'get' && params.data){
                xhr.open(params.method,params.url+"?"+params.data,true);
            }else{
                xhr.open(params.method,params.url,true);
            }
            if(params.method == 'get' ){
               xhr.send(null);
            }else{
                xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                xhr.send(params.data ||'');
            }
    })
}

// // promiseAjax({
// //     "method":"get",
// //     "url":"./data.php",
// //     "data":"a=1&b=2"
// // });



//使用promise封装ajax对象
// function promiseAjax(params) {
//     return new Promise(function (success, error) {
//         var xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 success(this.responseText);
//             }
//         }
//         //判断请求方式
//         if (params.method == 'get' && params.data) {
//             xhr.open(params.method, params.url + "?" + params.data, true);
//         } else {
//             xhr.open(params.method, params.url, true);
//         }
//         //判断请求方式
//         if (params.method == 'get') {
//             xhr.send(null);
//         } else {
//             //post
//             xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//             xhr.send(params.data || '');
//         }


//     });
// }




//调用
// promiseAjax({
// 	"method":"get",
// 	"url":"./data1.php",
// 	"data":"a=1&b=2"
// });