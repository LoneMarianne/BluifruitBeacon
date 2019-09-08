//https://www.tutorialspoint.com/cordova/cordova_inappbrowser.htm
function test(){
	var url='https://placering.000webhostapp.com';
	
	openBrowser(url);
}

function openBrowser(url) {
   //var url = 'https://cordova.apache.org';
   var target = '_blank';
   var options = "location = no"
   var ref = cordova.InAppBrowser.open(url, target, options);
}



