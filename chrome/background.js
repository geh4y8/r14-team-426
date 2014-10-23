var badgeData;

// chrome.local.storage.set({timer: 0});
chrome.storage.onChanged.addListener(function(changes, namespace) {
	console.log("listening");
	for (key in changes) {
		if(key === "id"){
		    console.log('gottheid');
			checkBadges();
			setInterval(function(){
				checkBadges();
			},20000);

			chrome.storage.onChanged.addListener(function(changes, namespace) {
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
		console.log(id)
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = handleBadgeChange; // Implemented elsewhere.
		xhr.open("GET", 'http://epicodus-2014.r14.railsrumble.com/api/' + id.id.toString(), true);
		xhr.send();
	});
};

function handleBadgeChange (data) {
	if(data.target.status === 200){
		badgeData = data.target.response;
		storeBadgeData(badgeData)
	}
};

function storeBadgeData(badgeData){
	if(badgeData !== ""){
		badgeData =  JSON.parse(badgeData);
		chrome.storage.local.set({badges: badgeData.sum})
	}
};

function timer() {
  	count = count-1;
  	if (count < 0)
  	{
     	clearInterval(counter);
     	//counter ended, do something here
     	return;
  	}
  	chrome.browserAction.setBadgeText({text: count.toString()});
  	chrome.storage.local.set({timer: count});
};

