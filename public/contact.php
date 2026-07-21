<?php
// contact.php

// Allow cross-origin requests (useful if testing locally)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid JSON data"]);
    exit;
}

$fullName = isset($data['fullName']) ? trim($data['fullName']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$companyName = isset($data['companyName']) ? trim($data['companyName']) : '';
$service = isset($data['service']) ? trim($data['service']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($fullName) || empty($email)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Full Name and Email are required."]);
    exit;
}

$to = "info@buraqdispatchllc.com";
$subject = "New Contact Form Submission from " . $fullName;

$htmlContent = "
<html>
<head><title>New Contact Request</title></head>
<body>
    <h2>New Contact Request</h2>
    <p><strong>Name:</strong> " . htmlspecialchars($fullName) . "</p>
    <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
    <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
    <p><strong>Company Name:</strong> " . htmlspecialchars($companyName) . "</p>
    <p><strong>Service:</strong> " . htmlspecialchars($service) . "</p>
    <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: info@buraqdispatchllc.com" . "\r\n"; // Sending FROM your domain
$headers .= "Reply-To: " . $email . "\r\n"; // Replying goes to the customer

if(mail($to, $subject, $htmlContent, $headers)) {
    echo json_encode(["success" => true, "message" => "Email sent successfully!"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Failed to send email."]);
}
?>
