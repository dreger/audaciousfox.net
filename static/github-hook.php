<?php 
	// $secret = $_ENV("SECRET_TOKEN");
	 
	// $headers = getallheaders();
	// $hubSignature = $headers['X-Hub-Signature'];

	// // Split signature into algorithm and hash
	// list($algo, $hash) = explode('=', $hubSignature, 2);
	 
	// // Get payload
	// $payload = file_get_contents('php://input');
	 
	// // Calculate hash based on payload and the secret
	// $payloadHash = hash_hmac($algo, $payload, $secret);

	// echo $hash;
	// echo "\n";
	// echo $payloadHash;
	 
	// // Check if hashes are equivalent
	// if ($hash !== $payloadHash) {
	//     // Kill the script or do something else here.
	//     die('Bad secret');
	// }
	 
	// Your code here.
	// $data = json_decode($payload);
	exec('cd /var/www/audaciousfox.net ; git pull ; ./hugo ;', $output, $return); 
?>