var newData;

$(document).ready(function() {
	$("#submit-email").on('click', function() {
		var formData = new FormData();
		formData.append("email", $('#email').val())
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = pitchToBackground; // Implemented elsewhere.
		xhr.open("POST", 'http://whispering-basin-2393.herokuapp.com/apiuser', true);
		xhr.send(formData);
	});

	function pitchToBackground (data) {
		if(data.target.status === 200) {
			newData = data.target.response;
			chrome.storage.local.set({id: newData.id});
			$('body').html("<h3>Successfully logged in</h3>");
		}
	};	
});