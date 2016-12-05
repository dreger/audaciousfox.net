<?php
if(exec('echo EXEC') == 'EXEC'){
    echo 'exec works';
}
    exec('cd /var/www/audaciousfox.net ; git pull ; hugo');
?>

