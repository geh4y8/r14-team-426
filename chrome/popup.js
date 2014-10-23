var newData;

$(document).ready(function() {
	$("#submit-email").on('click', function() {
		var email = $('#email').val()
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = pitchToBackground; // Implemented elsewhere.
		xhr.open("POST", 'http://epicodus-2014.r14.railsrumble.com/apiuser?email=' + email, true);
		xhr.send();
	});

	function pitchToBackground (data) {
		if(data.target.status === 200) {
			newData = data.target.response;
			storeData(newData)

			$('body').html("<h3>Successfully logged in</h3>");
		}
	};

	function storeData(newData){
		if(newData !== ""){
			newData = JSON.parse(newData)
		}
		chrome.storage.local.set({id: newData.id});

	}
});