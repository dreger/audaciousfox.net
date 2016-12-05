<?php 
  exec('cd /var/www/audaciousfox.net ; git pull ; hugo ;', $output);
  var_dump($output);
?>
