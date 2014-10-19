$("#submit").on('click', function(e) {
	e.preventDefault();
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
	xhr.open("GET", chrome.extension.getURL('/config_resources/config.json'), true);
	xhr.send();
  	$('body').html("<h2>YOEOEO</h2>");
	});
});

function handleStateChange (data) {
	alert(data);
};