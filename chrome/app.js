
chrome.storage.local.get('timer', function(items) {
	if(items.timer < 1) {
		$('body').html("<h1>You need to earn a badge to go here!</h1><a href= 'http://www.khanacademy.org'>Go here to earn another badge: KhanAcademy</a>");
	}
});