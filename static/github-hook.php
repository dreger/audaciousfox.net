

<?php
exec('cd /var/www/audaciousfox.net ; git pull ; hugo ;', $output, $return);

// Return will return non-zero upon an error
if (!$return) {
    echo "PDF Created Successfully";
    echo $output;
} else {
    echo "PDF not created";
    echo $output;
}
?>