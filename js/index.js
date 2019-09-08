//https://www.tutorialspoint.com/cordova/cordova_inappbrowser.htm
function test(){
	var url='https://cordova.apache.org';
	var number = urlInput.value;
	if(number == 1) url ='http://www.kea.dk';
	if(number == 2) url ='https://www.dr.dk/';
	openBrowser(url);
}

function openBrowser(url) {
   //var url = 'https://cordova.apache.org';
   var target = '_blank';
   var options = "location = yes"
   var ref = cordova.InAppBrowser.open(url, target, options);
}



