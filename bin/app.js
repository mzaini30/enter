$input = $(".input");
$output = $(".output");

$input.on('keyup', function(){
	$output.val($input.val().replace(/\n\n/g, "hdgvsgsgsg"));
	$output.val($output.val().replace(/\n/g, " "));
	$output.val($output.val().replace(/hdgvsgsgsg/g, "\n"));
});