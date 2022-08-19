/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* browser.js v1.0 | @ajlkn | MIT licensed */
  var browser=function(){"use strict";var e={name:null,version:null,os:null,osVersion:null,touch:null,mobile:null,_canUse:null,canUse:function(n){e._canUse||(e._canUse=document.createElement("div"));var o=e._canUse.style,r=n.charAt(0).toUpperCase()+n.slice(1);return n in o||"Moz"+r in o||"Webkit"+r in o||"O"+r in o||"ms"+r in o},init:function(){var n,o,r,i,t=navigator.userAgent;for(n="other",o=0,r=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],i=0;i<r.length;i++)if(t.match(r[i][1])){n=r[i][0],o=parseFloat(RegExp.$1);break}for(e.name=n,e.version=o,n="other",o=0,r=[["ios",/([0-9_]+) like Mac OS X/,function(e){return e.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(e){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(e){return e.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null],["linux",/Linux/,null],["bsd",/BSD/,null],["unix",/X11/,null]],i=0;i<r.length;i++)if(t.match(r[i][1])){n=r[i][0],o=parseFloat(r[i][2]?r[i][2](RegExp.$1):RegExp.$1);break}e.os=n,e.osVersion=o,e.touch="wp"==e.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),e.mobile="wp"==e.os||"android"==e.os||"ios"==e.os||"bb"==e.os}};return e.init(),e}();!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e.browser=n()}(this,function(){return browser});
/* breakpoints.js v1.0 | @ajlkn | MIT licensed */
var breakpoints=function(){"use strict";function e(e){t.init(e)}var t={list:null,media:{},events:[],init:function(e){t.list=e,window.addEventListener("resize",t.poll),window.addEventListener("orientationchange",t.poll),window.addEventListener("load",t.poll),window.addEventListener("fullscreenchange",t.poll)},active:function(e){var n,a,s,i,r,d,c;if(!(e in t.media)){if(">="==e.substr(0,2)?(a="gte",n=e.substr(2)):"<="==e.substr(0,2)?(a="lte",n=e.substr(2)):">"==e.substr(0,1)?(a="gt",n=e.substr(1)):"<"==e.substr(0,1)?(a="lt",n=e.substr(1)):"!"==e.substr(0,1)?(a="not",n=e.substr(1)):(a="eq",n=e),n&&n in t.list)if(i=t.list[n],Array.isArray(i)){if(r=parseInt(i[0]),d=parseInt(i[1]),isNaN(r)){if(isNaN(d))return;c=i[1].substr(String(d).length)}else c=i[0].substr(String(r).length);if(isNaN(r))switch(a){case"gte":s="screen";break;case"lte":s="screen and (max-width: "+d+c+")";break;case"gt":s="screen and (min-width: "+(d+1)+c+")";break;case"lt":s="screen and (max-width: -1px)";break;case"not":s="screen and (min-width: "+(d+1)+c+")";break;default:s="screen and (max-width: "+d+c+")"}else if(isNaN(d))switch(a){case"gte":s="screen and (min-width: "+r+c+")";break;case"lte":s="screen";break;case"gt":s="screen and (max-width: -1px)";break;case"lt":s="screen and (max-width: "+(r-1)+c+")";break;case"not":s="screen and (max-width: "+(r-1)+c+")";break;default:s="screen and (min-width: "+r+c+")"}else switch(a){case"gte":s="screen and (min-width: "+r+c+")";break;case"lte":s="screen and (max-width: "+d+c+")";break;case"gt":s="screen and (min-width: "+(d+1)+c+")";break;case"lt":s="screen and (max-width: "+(r-1)+c+")";break;case"not":s="screen and (max-width: "+(r-1)+c+"), screen and (min-width: "+(d+1)+c+")";break;default:s="screen and (min-width: "+r+c+") and (max-width: "+d+c+")"}}else s="("==i.charAt(0)?"screen and "+i:i;t.media[e]=!!s&&s}return t.media[e]!==!1&&window.matchMedia(t.media[e]).matches},on:function(e,n){t.events.push({query:e,handler:n,state:!1}),t.active(e)&&n()},poll:function(){var e,n;for(e=0;e<t.events.length;e++)n=t.events[e],t.active(n.query)?n.state||(n.state=!0,n.handler()):n.state&&(n.state=!1)}};return e._=t,e.on=function(e,n){t.on(e,n)},e.active=function(e){return t.active(e)},e}();!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.breakpoints=t()}(this,function(){return breakpoints});

(function() {
 
	var	$window = window,
		$head = document.querySelector('head'),
		$body = document.querySelector('body');

	// Breakpoints.
	breakpoints({
		xlarge:   [ '1281px',  '1680px' ],
		large:    [ '981px',   '1280px' ],
		medium:   [ '737px',   '980px'  ],
		small:    [ '481px',   '736px'  ],
		xsmall:   [ '361px',   '480px'  ],
		xxsmall:  [ null,      '360px'  ],
		'xlarge-to-max':    '(min-width: 1681px)',
		'small-to-xlarge':  '(min-width: 481px) and (max-width: 1680px)'
	});

	// Stops animations/transitions until the page has ...

		// ... loaded.
		$window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-preload');
			}, 100);
		});

	// ... stopped resizing.
		var resizeTimeout;

		$window.addEventListener('resize', function() {

			// Mark as resizing.
				$body.classList.add('is-resizing');

			// Unmark after delay.
				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {
					$body.classList.remove('is-resizing');
				}, 100);

		});

	// Fixes.

	// Object fit images.
	if (!browser.canUse('object-fit')
	||	browser.name == 'safari')
		document.querySelector('.image.object').each(function() {

			var $this = document.querySelector(this),
				$img = $this.children('img');

			// Hide original image.
				$img.css('opacity', '0');

			// Set background.
				$this
					.css('background-image', 'url("' + $img.attr('src') + '")')
					.css('background-size', $img.css('object-fit') ? $img.css('object-fit') : 'cover')
					.css('background-position', $img.css('object-position') ? $img.css('object-position') : 'center');

		});
			
	// Sidebar.
	var $sidebar = document.querySelector('#sidebar'),
	$sidebar_inner = $sidebar.querySelectorAll(':scope > .inner'),
	$sidebar_a = $sidebar.querySelectorAll(':scope a');

	var innerwidth = window.innerWidth;
	var outerwidth = window.outerWidth; 

		// Inactive by default on <= large.
		breakpoints.on("<=large", function() {
			$sidebar.classList.add("inactive")
		});
		breakpoints.on(">large", function() {
			$sidebar.classList.remove("inactive")
		});
		

	// Hack: Workaround for Chrome/Android scrollbar position bug.
		if (browser.os == 'android'
		&&	browser.name == 'chrome'){
			// Element into which appending will be done
			var element = document.querySelector("#main-container");

			// The HTML string to be appended
			var html = '<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>';

			// append
			$head.insertAdjacentHTML('beforeend', html);
		}
		

	// Toggle.
		
		// The HTML string to be appended
		var html = '<a id="togglebtn" href="#sidebar" class="toggle"><div></div><div></div><div></div></a>';

		// append
		$sidebar.insertAdjacentHTML('beforeend', html);
		document.getElementById("togglebtn").addEventListener('click', function(event) {

			// Prevent default.
				event.preventDefault();
				event.stopPropagation();

			// Toggle.
				$sidebar.classList.toggle('inactive');

		});

	// Events.

		// Link clicks.
		$sidebar_a.forEach(sba => {
			sba.addEventListener('click', function handleClick(event) {

				// >large? Bail.
					if (breakpoints.active('>large'))
						return;

				// Vars.
					var $a = document.querySelector(this),
						href = $a.attr('href'),
						target = $a.attr('target');

				// Prevent default.
					event.preventDefault();
					event.stopPropagation();

				// Check URL.
					if (!href || href == '#' || href == '')
						return;

				// Hide sidebar.
					$sidebar.classList.add('inactive');

				// Redirect to href.
					setTimeout(function() {

						if (target == '_blank')
							window.open(href);
						else
							window.location.href = href;

					}, 500);

			})});

		// Prevent certain events inside the panel from bubbling.
			$sidebar.addEventListener('click touchend touchstart touchmove', function(event) {

				// >large? Bail.
					if (breakpoints.active('>large'))
						return;

				// Prevent propagation.
					event.stopPropagation();

			});

		// Hide panel on body click/tap.
			$body.addEventListener('click touchend', function(event) {

				// >large? Bail.
					if (breakpoints.active('>large'))
						return;

				// Deactivate.
					$sidebar.classList.add('inactive');

			});

	// Scroll lock.
	// Note: If you do anything to change the height of the sidebar's content, be sure to
	// trigger 'resize.sidebar-lock' on $window so stuff doesn't get out of sync.

		$window.addEventListener('load.sidebar-lock', function() {

			var sh, wh, st;

			// Reset scroll position to 0 if it's 1.
				if ($window.scrollTop == 1)
					$window.scrollTop(0);

			$window
				.addEventListener('scroll.sidebar-lock', function() {

					var x, y;

					// <=large? Bail.
						if (breakpoints.active('<=large')) {

							$sidebar_inner
								.data('locked', 0)
								.css('position', '')
								.css('top', '');

							return;

						}

					// Calculate positions.
						x = Math.max(sh - wh, 0);
						y = Math.max(0, $window.scrollTop - x);

					// Lock/unlock.
						if ($sidebar_inner.data('locked') == 1) {

							if (y <= 0)
								$sidebar_inner
									.data('locked', 0)
									.css('position', '')
									.css('top', '');
							else
								$sidebar_inner
									.css('top', -1 * x);

						}
						else {

							if (y > 0)
								$sidebar_inner
									.data('locked', 1)
									.css('position', 'fixed')
									.css('top', -1 * x);

						}

				})
				.addEventListener('resize.sidebar-lock', function() {

					// Calculate heights.
						wh = $window.height();
						sh = $sidebar_inner.outerHeight() + 30;

					// Trigger scroll.
						$window.trigger('scroll.sidebar-lock');

				})
				.trigger('resize.sidebar-lock');

			});

// Menu.
	var $menu = document.querySelector('#menu');
	var $menu_openers = $menu.querySelectorAll(':scope ul .opener');

	// Openers.
	$menu_openers.forEach(opener => {
		opener.addEventListener('click', function handleClick(event) {
		

				// Prevent default.
					event.preventDefault();

				// Toggle.
					$menu_openers.not($this).classList.remove('active');
					$this.classList.toggle('active');

				// Trigger resize (sidebar lock).
					$window.triggerHandler('resize.sidebar-lock');

			});

		});

})();


// Publii Staff
// Share buttons pop-up
(function () {
	// share popup
	let shareButton = document.querySelector('.js-post__share-button');
	let sharePopup = document.querySelector('.js-post__share-popup');

	if (shareButton) {
		 sharePopup.addEventListener('click', function (e) {
			  e.stopPropagation();
		 });

		 shareButton.addEventListener('click', function (e) {
			  e.preventDefault();
			  e.stopPropagation();
			  sharePopup.classList.toggle('is-visible');
		 });

		 document.body.addEventListener('click', function () {
			  sharePopup.classList.remove('is-visible');
		 });
	}

	// link selector and pop-up window size
	var Config = {
		 Link: ".js-share",
		 Width: 500,
		 Height: 500
	};
	// add handler links
	var slink = document.querySelectorAll(Config.Link);
	for (var a = 0; a < slink.length; a++) {
		 slink[a].onclick = PopupHandler;
	}
	// create popup
	function PopupHandler(e) {
		 e = (e ? e : window.event);
		 var t = (e.target ? e.target : e.srcElement);
		 // hide share popup
		 if (sharePopup) {
			  sharePopup.classList.remove('is-visible');
		 }
		 // popup position
		 var px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
			  py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
		 // open popup
		 var link_href = t.href ? t.href : t.parentNode.href;
		 var popup = window.open(link_href, "social",
			  "width=" + Config.Width + ",height=" + Config.Height +
			  ",left=" + px + ",top=" + py +
			  ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
		 if (popup) {
			  popup.focus();
			  if (e.preventDefault) e.preventDefault();
			  e.returnValue = false;
		 }

		 return !!popup;
	}
})();

// Responsive embeds script
(function () {
	let wrappers = document.querySelectorAll('.post__video, .post__iframe');

	for (let i = 0; i < wrappers.length; i++) {
		let embed = wrappers[i].querySelector('iframe, embed, video, object');

		if (!embed) {
			continue;
		}

        if (embed.getAttribute('data-responsive') === 'false') {
            continue;
        }

		let w = embed.getAttribute('width');
		let h = embed.getAttribute('height');
		let ratio = false;

		if (!w || !h) {
			continue;
		}
		
		if (w.indexOf('%') > -1 && h.indexOf('%') > -1) { // percentage mode
			w = parseFloat(w.replace('%', ''));
			h = parseFloat(h.replace('%', ''));
			ratio = h / w;
		} else if (w.indexOf('%') === -1 && h.indexOf('%') === -1) { // pixels mode
			w = parseInt(w, 10);
			h = parseInt(h, 10);
			ratio = h / w;
		}

		if (ratio !== false) {
			let ratioValue = (ratio * 100) + '%';
			wrappers[i].setAttribute('style', '--embed-aspect-ratio:' + ratioValue);
		}
	}
})();