<?php 
// error_reporting(0);
$host = "localhost";
$username = "root";
$password = "";
$name = "mysql";

$con = mysqli_connect($host, $username, $password, $name);

$username = $_POST['username'];
$password = $_POST['password'];

echo prods($con, $username, $password);

function prods($con, $username, $password){
    $sql = "insert into clientdata(username, password) values('$username','$password')";
    
    $result = mysqli_query($con, $sql);

    return $result;

}

?>