//封装ajax请求
function ajax(params){
    var xhr = getXhr();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            params.callback(this.responseText);
        }
    }
    if(params.method == "get"){
        xhr.open("get",params.url+"?"+params.data,true);
        xhr.send(null);
    }else{
        xhr.open("post",params.url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params.data);
    }

}
//兼容创建xhr
function getXhr(){
    return new XMLHttpRequest() ? new XMLHttpRequest : new ActiveXObject(Microsoft.XMLHTTP);
}