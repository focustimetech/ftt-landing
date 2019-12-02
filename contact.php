<?php

    $recipients = [
        'curtis@focustime.ca',
        'vlad@focustime.ca',
        'curtisupshall@gmail.com'
    ];

    header("Access-Control-Allow-Origin: *");

    $json = file_get_contents("php://input");
    $body = json_decode($json, true);
    echo "raw post data =\n";
    echo $HTTP_RAW_POST_DATA;
    die;

    if (empty($body['name']) && empty($body['email']))
        echo json_encode([ 'message' => 'Message is missing sender information.' ]);
        die;

    if ($body) {
        http_response_code(200);
        $subject = strlen($body['message']) > 75 ? substr($body['message'], 0, 72). '...' : $body['message'];
        $from = $body['email'];

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
