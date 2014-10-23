chrome.storage.local.get('timer', function(items) {
	if(items.timer < 1 || items.timer === undefined) {
		$('body').html("<div style='height: 180px' class='alert alert-danger alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert'><span aria-hidden='true' style='font-size:50px;'>&times;</span><span class='sr-only'>Close</span></button><p style='font-size: 50px; text-align: center; top: 50%;'><strong>Hold Your Horses!</strong><br />You need to <a href= 'http://www.khanacademy.org' class='alert-link'>earn a badge</a> to go here!</p></div>")
	}
});






