<?php
error_reporting(0);
$host = "localhost";
$username = "root";
$password = "";
$name = "mysql";

$con = mysqli_connect($host, $username, $password, $name);

$foodtype = $_POST['foodtype'];
$allergy = $_POST['allergy'];
$disease = $_POST['disease'];
$meal = $_POST['meal'];

if($meal == 'breakfast')
{
    echo prods($con, $foodtype, $allergy, $disease, $meal);
}
else if($meal == 'lunch')
{
    echo prods($con, $foodtype, $allergy, $disease, $meal);
}
else if($meal == 'dinner')
{
    echo prods($con, $foodtype, $allergy, $disease, $meal);
}
else if($meal == 'bworkout')
{
    echo prods($con, $foodtype, $allergy, $disease, $meal);
}
else if($meal == 'aworkout')
{
    echo prods($con, $foodtype, $allergy, $disease, $meal);
}


function prods($con, $foodtype, $allergy, $disease, $meal){
    $sql = "select * from diet where " . $foodtype . " = 'yes' and allergies != '" . $allergy . "' and " . $disease . " = 'yes' and ".$meal. "= 'yes'";
    
    $result = mysqli_query($con, $sql);

    $ans = "";
    
    while($row = mysqli_fetch_assoc($result))
    {
        $ans .= $row['no'] . "] " . $row['product'] . "<br>";
    }
    return $ans;
}

?>



