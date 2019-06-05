window.FC = {};
FC.getparamsByUrl = function(){
    var params = {};
    var search = location.search;
    if(search){
        search = search.replace('?','');
        var arr = search.split('&');
        arr.forEach = (function (item,i ){
            var itemArr = item.split('=');
            params[itemArr[0]]=paramsArr[1];
        })
    }
    return params;
}