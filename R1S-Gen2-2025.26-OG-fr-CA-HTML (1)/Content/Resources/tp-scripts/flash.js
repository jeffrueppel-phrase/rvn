window.addEventListener(
  "message",
	function (event) {
	var eData = String(event.data);
	if (eData == "day") eData = "light";
	if (eData == "night") eData = "blue-night";
	if (eData.indexOf('theme_') != -1) {
		$('html').removeClass (function (index, className) {
				return (className.match (/\btheme_\S+/g) || []).join(' ');
		});

		$('body').removeClass (function (index, className) {
				return (className.match (/\btheme_\S+/g) || []).join(' ');
		});

		$('html').addClass(eData); 
		$('body').addClass(eData); 
	} },
	false
	)