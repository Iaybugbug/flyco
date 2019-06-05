<?php
header("Content-type:text/html;charset=utf8");
mysql_connect('127.0.0.1','root','root');
mysql_query('use sz1902');
$sql = "select * from goods";
$result = mysql_query($sql);
// $row  = mysql_fetch_row($result);
// if($row){
//     $response = [
//         "code"=>200,
//         "data" =>$row
//     ];
// }else{
//     $response =  [
//         "code" => -1,
//         "data" => ''
//     ];
// }
// echo json_encode($response);
$rows = [];
while($row = mysql_fetch_assoc($result)){
    $rows[] = $row;
}
if($rows){
    $response = ['code'=>200,'message'=>'成功',"data"=>$rows];
}else{
    $response = ['code'=>-1,'message'=>'失败',"data"=>''];
}
echo json_encode($response);
