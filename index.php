<?php
if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
$uri = 'https://';
} else {
$uri = 'http://';
}
$uri .= $_SERVER['HTTP_HOST'];
header('Location: '.$uri.'./docs');
exit;

/* put this out of php script :-*/
/* Something is wrong with the XAMPP installation :-*/

?>
Something is wrong with the XAMPP installation :