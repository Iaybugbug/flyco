<?php
//接收请求数据，与数据库进行匹配，响应互相匹配的数据
header("Content-type:text/html;charset=utf8");
mysql_connect("localhost","root","root");
mysql_query("use flyco");
// $name = $_GET["name"];
$name = $_POST["name"];
$sql = "select * from hotSale where name = '$name'";
$result = mysql_query($sql);
$row = mysql_fetch_assoc($result);
if($row){
    echo json_encode($row);
}else{
    echo json_encode(["msg" => "没有该数据"]);
}
?>