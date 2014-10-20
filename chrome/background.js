// setInterval(function(){
// 	$.ajax()
// }, 30000)

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


// $("#submit-email").on('click', function() {
// 	// var xhr = new XMLHttpRequest();
// 	// xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
// 	// xhr.open("GET", chrome.extension.getURL('/config_resources/config.json'), true);
// 	// xhr.send();
//  //  	$('body').html("<h2>YOEOEO</h2>");
// });