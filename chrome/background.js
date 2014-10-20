var badgeData;

// chrome.local.storage.set({timer: 0});
chrome.storage.onChanged.addListener(function(changes, namespace) {
debugger;
	console.log("listening");
	for (key in changes) {
		console.log(key);
		if(key === "id"){
			
			checkBadges();
			setInterval(function(){
				checkBadges();
			},20000);

			chrome.storage.onChanged.addListener(function(changes, namespace) {
				alert("in here")
        		for (key in changes) {
          			if(key === "badges"){
          			  	alert("new badge");
          			  	
          			  	var count=30;

						var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

						function timer() {
						  	count=count-1;
						  	if (count < 0)
						  	{
						     	clearInterval(counter);
						     	//counter ended, do something here
						     	return;
						  	}
						  	chrome.browserAction.setBadgeText({text: count.toString()});
						  	chrome.storage.local.set({timer: count});
						}			
          			}
        		}
			});
		
		}
	}
});

function checkBadges () {
	chrome.storage.local.get("id", function(id) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = handleBadgeChange; // Implemented elsewhere.
		xhr.open("GET", 'http://epicodus-2014.r14.railsrumble.com/api/' + id.id.toString(), true);
		xhr.send();
	});
};

function handleBadgeChange (data) {
	badgeData = JSON.parse(data.target.response)
	chrome.storage.local.set({badges: badgeData.sum})
};

function timer() {
  	count=count-1;
  	if (count < 0)
  	{
     	clearInterval(counter);
     	//counter ended, do something here
     	return;
  	}
  	chrome.browserAction.setBadgeText({text: count.toString()});
  	chrome.storage.local.set({timer: count});
};

