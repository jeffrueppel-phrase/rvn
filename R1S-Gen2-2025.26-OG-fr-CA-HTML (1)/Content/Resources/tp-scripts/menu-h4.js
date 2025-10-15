// set iframe size and highlight h4 in quick links
// test with onload vs timeout
$(document).ready(function() {
setTimeout(function() { 
	window.parent.postMessage(document.getElementById("mc-main-content").scrollHeight + 100, "*");
},100);

var url = window.location.pathname;

var h4Open = location.search;
if (h4Open.indexOf('&h4=') != -1) { h4Open = "?" + h4Open.substring(h4Open.indexOf('&h4=')+1,); }

if (url.indexOf('OG/') != -1) { var h4Check = url.substring(url.indexOf('Content/OG/'),); }
else { var h4Check = url.substring(url.indexOf('Content/'),); }
h4Check = h4Check.match(/\//g).length;

if (h4Check > 3) {

	url = decodeURIComponent(url.split('/').pop());
//	window.parent.postMessage(url + h4Open, "*");

//	if (window.parent == window.top) { /* setup for iframe inside iframe */
if (window.name == "fContent") {
		$('body#h4').css('display','none');

		setTimeout(function() {
			parentUrl = $('.selected').closest('.sub-menu').parent().find('a').attr('href');
			if (parentUrl != undefined) {
				if (parentUrl.indexOf('javascript') == -1) {
					parentUrl = parentUrl.split("/").pop();
					parentUrl = decodeURIComponent(parentUrl);
//					parentUrl = "../" + parentUrl + "&h4=" + url;
					parentUrl = parentUrl + "&h4=" + url;
					window.location = parentUrl;
			}	}
		}, 500);
	}
}
});