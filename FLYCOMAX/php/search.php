<?php
header("Content-type:text/html;charset=utf8");
mysql_connect('127.0.0.1','root','root');
mysql_query('use sz1902');
 $key = $_GET['title'];

// $key = '吹风机';
$sql = "select * from flyco where title ='$key'";
// echo $sql;die;
$result = mysql_query($sql);
$row = mysql_fetch_assoc($result);
if($row){
    $response =[
        "code" =>200,
        'data' => $row
    ];
}else{
    $response = [
        "code"=>-1,
        "data"=>''
    ];
}
echo json_encode($response);