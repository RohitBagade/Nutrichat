<?php
// error_reporting(0);
$host = "localhost";
$username = "root";
$password = "";
$name = "mysql";

$con = mysqli_connect($host, $username, $password, $name);

$no = $_POST['no'];

echo json_encode(prods($con, $no));

function prods($con, $a){
    $sql = "select * from diet where no = '$a'";
    
    $result = mysqli_query($con, $sql);

    $ans = "";
    
    while($row = mysqli_fetch_assoc($result))
    {
        $ans = "_".$row['product']."_".$row['protein']."_".$row['carbs']."_".$row['fat']."_".$row['unit']."_".$row['quantity']."_";
    }

    return $ans;
}

?>





