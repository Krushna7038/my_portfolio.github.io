<?php
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "portfolio";

$conn = mysqli_connect($servername,$username,$password,$databasename);

//connectivity

if(!$conn)
{
    die("Connection failed :" . mysqli_connect_error());
}
echo "";

if(isset($_POST['send'])){
    $fname = $_POST['fname'];
    $femail = $_POST['femail'];
    $fsubject = $_POST['fsubject'];
    $fmess = $_POST['fmess'];

    $sql = "INSERT INTO `portfolio_messages`(`Name`, `Email`, `Subject`, `Message`) VALUES ('$fname','$femail','$fsubject','$fmess')";

    if(mysqli_query($conn, $sql)){
        echo "Thank You for messaging me. I will response you very soon !";
    }
    else{
        echo "Error :" . $sql . "" .mysqli_error($conn);
    }
}
mysqli_close($conn);

?>