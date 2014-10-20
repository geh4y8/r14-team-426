
$(document).ready(function() {
	$("#submit-email").on('click', function() {
		var formData = new FormData();
		formData.append("email", $('#email').val())
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
		xhr.open("POST", 'http://whispering-basin-2393.herokuapp.com/apiuser', true);
		xhr.send(formData);
	});

	// $.ajax({
	// 	method: 'POST',
 //  		url: "http://whispering-basin-2393.herokuapp.com/apiuser",
 //  		data: {email: $('#email').val()}
	// }).done(function() {
 //  		$('body').html("<h2>YOEOEO</h2>");
	// });

	function handleStateChange (data) {
		if(data.target.status === 200) {
			newData = JSON.parse(data.target.response);
			chrome.storage.local.set({id: newData.id})
			$('body').html("<h3>Successfully logged in</h3>")
			setInterval(function(){
				checkBadges();		
			}, 30000);

			chrome.storage.onChanged.addListener(function(changes, namespace) {
        		for (key in changes) {
          			if(key === "badges"){
          			  alert("new badge");
          			}
        		}
      		});
	
			// 	if(chrome.storage.local.get("badges") > previousBadges) {
			// 		var count=30;

			// 		var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

			// 		function timer() {
			// 		  	count=count-1;
			// 		  	if (count < 0)
			// 		  	{
			// 		     	clearInterval(counter);
			// 		     	//counter ended, do something here
			// 		     	return;
			// 		  	}
			// 		  	chrome.browserAction.setBadgeText({text: count.toString()});
			// 		  	chrome.storage.local.set({timer: count});
			// 		}
			// 	}
			// }, 30000)

		}
		// } else {
		// 	alert("user not found");
		// }
	};

	function checkBadges () {
		var formData = new FormData();
		formData.append("id", chrome.storage.local.get("id"));
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
		xhr.open("GET", 'http://whispering-basin-2393.herokuapp.com/api', true);
		xhr.send(formData);
	};
});