// PREVIEW
if (window.self == window.top) {
	$('body').addClass('day');

	$(document).on('keypress', function(e) {
			if (e.which == 68) {
				$('body').addClass('day');
				$('body').removeClass('night');
			}
			if (e.which == 78) {
				$('body').addClass('night');
				$('body').removeClass('day');
			}
		});
}

// BACK and FORWARD 
window.addEventListener(
	"message",
	function (event) {
	if (event.data != "day" && event.data != "night") {
		var goCounter = event.data + 0;
		if (goCounter < 0) { 	$('span#nav-forward').addClass('on');	} 
		else {	$('span#nav-forward').removeClass('on');	}
	}	
	},
	false
	)			

$(document).ready(function() {
	$('h1').wrapInner('<span id="topic-title"></span>');
	$('h1').prepend('<span id="nav-back" class="on" onclick="btnBack()"></span><span id="nav-divider"></span><span id="nav-forward" class="" onclick="btnForward()"></span>');
});

function btnBack() {
window.parent.postMessage("goBack", "*");
history.back();
}

function btnForward() {
window.parent.postMessage("goForward", "*");
history.forward();
}



// BACK TO TOP
(function () {
		if ($(".body-container").length === 1) {
			var bodyContainer = $('.body-container')[0];
			var mybutton = document.createElement("button");  		
			var textnode = document.createTextNode("Top");  		
			mybutton.appendChild(textnode);							
			mybutton.setAttribute("id", "backToTop");				
			mybutton.addEventListener("click", topFunction);		
		
			bodyContainer.appendChild(mybutton);	

			// appear when user scrolls down 20px
			bodyContainer.onscroll = function() {scrollFunction()};
			window.onscroll = function() {scrollFunctionx()};

			function scrollFunction() {

				//			$('div#subHeadList').hide();
				//			$('button.topBurger').removeClass("is-active");
	
				if (bodyContainer.scrollTop > 20 || document.documentElement.scrollTop > 20) { 
					mybutton.style.display = "block";
				} else {
					mybutton.style.display = "none";
				}
			}
	
			function scrollFunctionx() {
				if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
					mybutton.style.display = "block";
				} else {
					mybutton.style.display = "none";
				}
			}

			// scroll to top when user clicks
			function topFunction() {
				$('html, body').animate({ scrollTop: 0 }, "smooth");
				$('html, documentElement').animate({ scrollTop: 0 }, "smooth");
				$('.body-container').animate({ scrollTop: 0 }, "smooth");
			}
		}
	})();



// ADD QUICK LINKS
/*
$(document).ready(function() {
	if ($('div.topic-section h1').length) {
		$('div#go-back').prepend('<div id="subHeadControls"><button class="topBurger" type="button"><span class="topBurger-box"><span class="topBurger-inner"></span></span></button></div><div id="subHeadList"></div>');

		if ($('div.header-scroller-wrapper').length) { 	
				$('div.intro-artificial-cols').appendTo($('#subHeadList'));
		}
	
		else {
			var linkList = '<div class="intro-artificial-cols">';
			$('div.topic-section h1').each(function(i) {
				$(this).before('<a id="ql' + i + '"></a>'); 
				linkList += '<a href="#ql' + i + '" class="intro-toc-button w-button">' + $(this).text() + '</a>';
			});
			linkList += '</div>';
			$('#subHeadList').append(linkList);
		}
	
		$('div#go-back').append('<div id="borderBar"></div>');

		var bodyWidth = $('div.body-container').width();
		$('#subHeadList').width(bodyWidth);

		$(".topBurger").click(function() {
			$(".topBurger").toggleClass("is-active");
			$('#subHeadList').slideToggle('400');
		});

		$('#subHeadListPeek').click(function() {
			$(".topBurger").toggleClass("is-active");
			$('#subHeadList').slideToggle('400');
			});

		$('div.topic-section').click(function() {
			$(".topBurger").removeClass("is-active");
			$('#subHeadList').hide();
		});
	
		$('div#subHeadList').click(function() {
			$(".topBurger").removeClass("is-active");
			$('#subHeadList').slideToggle('400');
		});	

		$('div.topic-section').on("touchmove", function() {
			$(".topBurger").removeClass("is-active");
			$('#subHeadList').slideUp('400');
		});
	}
});
*/


// ADD SEARCH DESCRIPTION LINKS 
$(document).ready(function() {
		setTimeout(function() {
				$('div.description').each(function() {
						var url = $(this).parent().find('a').attr('href');
						$(this).wrap('<a href="' + url + '"></a>');
					});
			}, 1000);
	});


// ADD SEARCH CLEAR
$(document).ready(function() {
		$('input.search-field').after('<input type="reset" value="" alt="clear" />');
	});


// ONE MENU ITEM
$(document).ready(function() {
		$('.menu.sidenav').on('loaded', function () {	
				$('a[role=button]').each(function(i) {
						$(this).wrapInner('<span onclick="oneItem(' + i + ')" data-one="' + i + '"></span>');
					});
			});
	});

function oneItem(curItem) {
	curItem.toString();
	if ($('span.submenu-toggle-container[aria-expanded="true"]').length) {
		if ($('span.submenu-toggle-container[aria-expanded="true"]').closest('span[data-one]').attr('data-one') != curItem) {
			$('span.submenu-toggle-container[aria-expanded="true"]').closest('span[data-one]').click();
		}
	}
}


// PREVENT CONTEXT MENU
$(document).ready(function(){
	$(document).contextmenu(function() {
//			return false;
	});
});