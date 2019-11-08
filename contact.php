<?php

    $recipients = [
        'curtis@focustime.ca',
        'vlad@focustime.ca',
        'curtisupshall@gmail.com'
    ];

    header("Access-Control-Allow-Origin: *");

    $json = file_get_contents("php://input");
    $_POST = json_decode($json, true);

    if (empty($_POST['name']) && empty($_POST['email']))
        die;

    if ($_POST) {
        http_response_code(200);
        $subject = strlen($_POST['message']) > 78 ? substr($_POST['message'], 0, 75). '...' : $_POST['message'];
        $from = $_POST['email'];

        // Headers
        $headers = "MIME-Version: 1.0\r\n";
        $headers.= "Content-type: text/html; charset=UTF-8\r\n";
        $headers.= "From: <" . $from . ">";
        
        foreach ($recipients as $recipient) {
            mail($recipient, $subject, $msg, $headers);
        }

        echo json_encode([ 'message' => 'Message sent successfully.' ]);
    } else {
        echo json_encode([ 'message' => 'Your message could not be sent.' ]);
    }
