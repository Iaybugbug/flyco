<?php 
mysql_connect('127.0.0.1','root','123456');
mysql_query('use sz1904'); 
$username = $_POST['username'];
$password = $_POST['password']; 
$sql = "insert into zc(username,pwd) values('$username','$password')";
mysql_query($sql);
$num = mysql_affected_rows();
if($num > 0){
    $response = [
        "code" => 200,
        "message"=> 'ok',
    ];
}else{
    $response = [
        "code"=>-1,
        "message"=>"false"
    ];
}
echo json_encode($response);
 ?>