<?php
    header('Content-Type: text/html; charset=utf-8');
    if(isset($_POST['envoyer'])){
        
        $servername = 'sql313.epizy.com';
        $username = 'epiz_27733213';
        $password = 'lAvlHVO5nJuO';
        $dbname = 'epiz_27733213_aymane';
    
        $conn = new mysqli($servername, $username, $password, $dbname);

        if(!$conn){
            die("Connection failed ". mysqli_connect_error());
        }

        mysqli_set_charset($conn, 'utf8');
        
        $nom = mysqli_real_escape_string($conn, $_POST['nom']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $message = mysqli_real_escape_string($conn, $_POST['message']);
        
        
        $query = "INSERT INTO `demande`(`nom`, `email`, `message`) VALUES ('$nom','$email','$message')";

        $result = mysqli_query($conn, $query);

        if($result){
            echo'Thank you '.'<b>'.$nom.'</b>'. '<br>Your message has been sent successfully,<br> we will get back to you as soon as possible';
        }else{
            echo 'Message has not been sent. '. mysqli_error($conn);
        }
        if(isset($result) && is_resource($result)){
            mysqli_free_result($result);
        }
        mysqli_close($conn);
    }
    if(isset($_POST["email"])){
    $nom = $_POST['nom'];
    $to = 'a.chnaif2010@gmail.com';
    $from = $_POST['email'];
    $subject = 'Your message';
    $subject_2 = 'Your message';
    $message = $nom . 'has write a message'. $_POST['message'];
    $message_2 = 'A copy from your message'.$nom.'\n\n'. $_POST['message'];
    $header = 'From'. $from;
    $header_2 = 'From'. $to;
    mail($to, $subject, $message, $header);
    mail($from, $subject_2, $message_2, $header_2);
    }

?>
