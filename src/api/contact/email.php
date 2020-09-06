<?php

	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);

	$errors = array();
	if ($_SERVER['REQUEST_METHOD'] === "POST") {
//VARIABLES VALIDATORS

//name validator
if (empty($_POST['name'])) {
	$errors[] = 'Your Name is empty';
} else {
	$name = $_POST['name'];
	if (strlen($name) > 30) {
			$errors[] = 'Name must be shorter than 30 letters';
	} 
	if (strlen($name) < 3) {
		$errors[] = 'Name must be larger than 3 letters';
	}
}

//phone validator
	
	if (empty($_POST['phone'])) {
		$phone = '---';
	} else {
		$phone = $_POST['phone'];
		if (strlen($phone)<9 || strlen($phone)>12){
			$errors[] = 'Phone number should contain 9-12 digit';
		}
	}

//email validator
		if (empty($_POST['email'])) {
			$errors[] = 'Email address is empty';
		} else {
			$email = $_POST['email'];
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
					$errors[] = 'Email address is incorrect';
			}
		}

//message validator
		if (empty($_POST['message'])) {
			$errors[] = 'Message is empty';
		} else {
			$message = $_POST['message'];
			if (strlen($message) > 400) {
				$errors[] = 'Message must be shorter than 400 letters';
		}
		}


//EMAIL CONTENT - if there is no errors
		if (empty($errors)) {
			$date = date('j, F Y h:i A');
			
//email content
			$emailBody = "
			<body>
				<div style=\"padding:20px;color:#888;\">
					Date: <span style=\"color:black\">$date</span>
					<br>
					Email: <span style=\"color:black\">$email</span>
					<br>
					Phone: <span style=\"color:black\">$phone</span>
					<br>
					Message: <div style=\"color:black\">$message</div>
				</div>
			</body>
			";

//email headers
			$headers = "Content-type: text/html; charset=utf-8; \r\n";
			$headers.= "MIME-Version: 1.0; \r\n";
			$headers.= "Reply-To: $email; \r\n";
			$headers.= "From: Cataleya; \r\n";

//email receiver
			$to = 'simpro@vp.pl, info@inannalab.net';

//email subject
			$subject = "Form inquiry, from - $email";
			
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
"message": "Email have been sent successfully"
}
<?php endif; ?>