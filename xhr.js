// var XMLHttpRequest;
// XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var Httpclient = function() {
	this.get = (url, callback) => {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4 && xhr.status == 200)
				callback(xhr);
		};
		xhr.open("GET", url, true);
		xhr.send(null);
	};

	this.post = (url, callback) => {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4 && xhr.status == 200)
				callback(xhr);
		};
		xhr.open("GET", url, true);
		xhr.send(JSON.stringify({"name": "aakash"}));
	};
};

var url = "http://localhost:8000";

var client = new Httpclient();

/*client.get(url, function (text){
	var d = this.document;
	var b = d.body;
	var p = b.appendChild(d.createElement("p"));
	p.innerText = text.responseText;
	// console.log(Object.getOwnPropertyNames(text));
	console.log(text.responseText);
});*/
