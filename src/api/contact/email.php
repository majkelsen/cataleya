<?php


	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);

	$errors = array();
	if ($_SERVER['REQUEST_METHOD'] === "POST") {

//VARIABLES VALIDATORS

//email validator
		if (empty($_POST['email'])) {
			$errors[] = 'Email jest pusty';
		} else {
			$email = $_POST['email'];
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
					$errors[] = 'Email jest niepoprawny';
			}
		}

//message validator
		if (empty($_POST['message'])) {
			$errors[] = 'Wiadomość jest pusta';
		} else {
			$message = $_POST['message'];
		}


//EMAIL CONTENT - if there is no errors
		if (empty($errors)) {
			$date = date('j, F Y h:i A');
			
//email content
			$emailBody = "
			<body>
				<div style=\"padding:20px;\">
					Date: <span style=\"color:#888\">$date</span>
					<br>
					Email: <span style=\"color:#888\">$email</span>
					<br>
					Message: <div style=\"color:#888\">$message</div>
				</div>
			</body>
			";

//email headers
			$headers = "Content-type: text/html; charset=utf-8; \r\n";
			$headers.= "MIME-Version: 1.0; \r\n";
			$headers.= "Reply-To: $email; \r\n";
			// $headers.= "From: $email; \r\n";

//email receiver
			$to = 'simpro@vp.pl';

//email subject
			$subject = "Zapytanie z formularza, od - $email";
			
//EMAIL SENDING FUNCTION
			if (@mail($to, $subject, $emailBody, $headers)) {
				$sent = true;	
			}
		}
	}
?>


<?php if (!empty($errors)) : ?> 

{
"status": "fail",
"error":  <?php echo json_encode($errors) ?>
}
<?php endif; ?>


<?php if (isset($sent) && $sent === true) : ?> 

{
"status": "success",
"message": "Email został wysłany poprawnie"
}
<?php endif; ?>