<?php 
$head = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/head.html');
$block1 = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/block1.html');
$block2 = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/block2.html');
$block3 = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/block3.html');
$block4 = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/block4.html');
$form = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/form.html');


$scripts = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/templates/scripts.html');

ob_start();
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
		<?php echo($head) ?>
</head>
<body>
		<?php echo($block1) ?>
		<?php echo($block2) ?>
		<?php echo($block3) ?>
		<?php echo($block4) ?>
		<?php echo($form) ?>



</body>
<?php echo $scripts ?>
</html>

<?php 
file_put_contents($_SERVER['DOCUMENT_ROOT'].'/index.html', ob_get_contents());
 ?>