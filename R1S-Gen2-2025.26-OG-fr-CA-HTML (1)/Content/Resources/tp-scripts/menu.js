
// move quicklinks below h1
$(document).ready(function() {
		$('h1:first-of-type').after($('div.intro-artificial-cols'));
	});

// get and send filename
$(document).ready(function() {
		var url = window.location.pathname;
		url = decodeURIComponent(url.split('/').pop());
		window.parent.postMessage(url, "*");			
	});

// check for h4 and load iframe
$(document).ready(function() {
	$('div.intro-artificial-cols').on('loaded', function () {
		var urlParams = new URLSearchParams(window.location.search);
		var h4Url = urlParams.get('h4');
		h4Url = encodeURIComponent(h4Url);
		if (h4Url == "null") { 
			h4Url = $('.selected').parent().find('.sub-menu a').attr('href');
		} 

		// show iframe if quicklinks
		if ($('div.intro-artificial-cols a').length != 1) { 
			$('div#rivn-menu').after('<iframe src="' + h4Url + '" name="h4iframe" id="h4iframe" onload="activateTheme()" scrolling="no" style="width: 100vw; overflow: hidden; border: none; margin-left: -78px"></iframe>');
			$('div.intro-artificial-cols a').attr("target", "h4iframe"); 		
		}
	});
});


				
window.addEventListener(
	"message",
	function (event) {
		if (event.data > 1) {	
			$('iframe#h4iframe').css('height', (parseInt(event.data)));
		}
		else if (String(event.data).indexOf('.htm') > -1) {
			$('div.intro-artificial-cols a').removeClass('on');
			$('div.intro-artificial-cols a[href*="' + "/" + String(event.data) + '"]').addClass('on');
		}
		else if (String(event.data) == 'day' || String(event.data) == 'night' || String(event.data).indexOf('theme_') > -1) {
			var iframe = document.getElementById("h4iframe");
			if (iframe && iframe.contentWindow) {
				iframe.contentWindow.postMessage(String(event.data), "*")
			}
		}
	},
	false
)
					
			
function activateTheme() {
	var theme = $('body').attr('class');
	var iframe = document.getElementById("h4iframe");
	if (iframe && iframe.contentWindow) {
		iframe.contentWindow.postMessage(theme, "*")
	}
}
			
/*
	$(document).ready(function() {

	setTimeout(function() {
		$('li.is-accordion-submenu-parent > a').on("click", function() {

			var curr = $(this).parent();
			$('selector').each(function() {
			if ($(this).parent() != curr) { $(this).css('display','none'); }
*/