<<<<<<< HEAD
(function(){var requirejs,require,define,__inflate;(function(e){function a(e,t){var n=t&&t.split("/"),i=r.map,s=i&&i["*"]||{},o,u,a,f,l,c,h;if(e&&e.charAt(0)==="."&&t){n=n.slice(0,n.length-1),e=n.concat(e.split("/"));for(l=0;h=e[l];l++)if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))return!0;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}if((n||s)&&i){o=e.split("/");for(l=o.length;l>0;l-=1){u=o.slice(0,l).join("/");if(n)for(c=n.length;c>0;c-=1){a=i[n.slice(0,c).join("/")];if(a){a=a[u];if(a){f=a;break}}}f=f||s[u];if(f){o.splice(0,l,f),e=o.join("/");break}}}return e}function f(t,n){return function(){return u.apply(e,s.call(arguments,0).concat([t,n]))}}function l(e){return function(t){return a(t,e)}}function c(e){return function(n){t[e]=n}}function h(r){if(n.hasOwnProperty(r)){var s=n[r];delete n[r],i[r]=!0,o.apply(e,s)}if(!t.hasOwnProperty(r))throw new Error("No "+r);return t[r]}function p(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=a(e.slice(0,i),t),e=e.slice(i+1),r=h(n),r&&r.normalize?e=r.normalize(e,l(t)):e=a(e,t)):e=a(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function d(e){return function(){return r&&r.config&&r.config[e]||{}}}var t={},n={},r={},i={},s=[].slice,o,u;o=function(r,s,o,u){var a=[],l,v,m,g,y,b;u=u||r,typeof o=="string"&&(o=__inflate(r,o));if(typeof o=="function"){s=!s.length&&o.length?["require","exports","module"]:s;for(b=0;b<s.length;b++){y=p(s[b],u),m=y.f;if(m==="require")a[b]=f(r);else if(m==="exports")a[b]=t[r]={},l=!0;else if(m==="module")v=a[b]={id:r,uri:"",exports:t[r],config:d(r)};else if(t.hasOwnProperty(m)||n.hasOwnProperty(m))a[b]=h(m);else if(y.p)y.p.load(y.n,f(u,!0),c(m),{}),a[b]=t[m];else if(!i[m])throw new Error(r+" missing "+m)}g=o.apply(t[r],a);if(r)if(v&&v.exports!==e&&v.exports!==t[r])t[r]=v.exports;else if(g!==e||!l)t[r]=g}else r&&(t[r]=o)},requirejs=require=u=function(t,n,i,s){return typeof t=="string"?h(p(t,n).f):(t.splice||(r=t,n.splice?(t=n,n=i,i=null):t=e),n=n||function(){},s?o(e,t,n,i):setTimeout(function(){o(e,t,n,i)},15),u)},u.config=function(e){return r=e,u},define=function(e,t,r){t.splice||(r=t,t=[]),n[e]=[e,t,r]},define.amd={jQuery:!0}})(),__inflate=function(name,src){var r;return eval(["r = function(a,b,c){","\n};\n//@ sourceURL="+name+"\n"].join(src)),r},define("lib/api/events",["require","exports","module"],function(e,t,n){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}}),define("lib/api/getters",["require","exports","module"],function(e,t,n){n.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}}),define("lib/api/setters",["require","exports","module"],function(e,t,n){n.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}),define("lib/api/api",["require","exports","module","lib/api/events","lib/api/getters","lib/api/setters"],function(e,t,n){function m(e){return!!(e===""||e&&e.charCodeAt&&e.substr)}function g(e){return!!(e&&e.constructor&&e.call&&e.apply)}function y(e){return!!e&&e.nodeType===1&&e.nodeName.toUpperCase()==="IFRAME"}function b(e){var t=!1,n;for(n in i)if(i.hasOwnProperty(n)&&i[n]===e){t=!0;break}return t}function w(e){var t,n,r;for(t=0,n=f.length;t<n;t++){r=e(f[t]);if(r===!1)break}}function E(e){var t="",n,r,i;e.substr(0,2)==="//"&&(e=window.location.protocol+e),i=e.split("/");for(n=0,r=i.length;n<r;n++){if(!(n<3))break;t+=i[n],n<2&&(t+="/")}return t}function S(e){return e.contentWindow?e.contentWindow:e.contentDocument&&"parentWindow"in e.contentDocument?e.contentDocument.parentWindow:null}function x(e){var t=[],n;for(n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}function T(e,t,n){n.callbacks[e]=n.callbacks[e]||[],n.callbacks[e].push(t)}function N(e,t){var n=!0,r;return t.callbacks[e]=[],w(function(t){r=t.callbacks[e]||[];if(r.length)return n=!1,!1}),n}function C(e,t,n){var r=S(n),i,s;if(!r.postMessage)return!1;i=n.getAttribute("src").split("?")[0],s=JSON.stringify({method:e,value:t}),i.substr(0,2)==="//"&&(i=window.location.protocol+i),i=i.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),r.postMessage(s,i)}function k(e){var t;return w(function(n){if(n.instance===e)return t=n,!1}),t}function L(e){var t;return w(function(n){if(S(n.element)===e)return t=n,!1}),t}function A(e,t){return function(n){var r=g(n),i=k(this),s=!r&&t?n:null,o=r&&!t?n:null;return o&&T(e,o,i),C(e,s,i.element),this}}function O(e,t,n){var r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r],e[s]=A(s,n)}function M(e,t,n){return e+"?url="+t+"&"+_(n)}function _(e){var t,n,r=[];for(t in e)e.hasOwnProperty(t)&&(n=e[t],r.push(t+"="+(t==="start_track"?parseInt(n,10):n?"true":"false")));return r.join("&")}function D(e,t,n){var r=e.callbacks[t]||[],i,s;for(i=0,s=r.length;i<s;i++)r[i].apply(e.instance,n);if(b(t)||t===o.READY)e.callbacks[t]=[]}function P(e){var t,n,r,i,s;try{n=JSON.parse(e.data)}catch(u){return!1}t=L(e.source),r=n.method,i=n.value;if(!t||H(e.origin)!==H(t.domain))return!1;r===o.READY&&(t?(t.isReady=!0,D(t,l),N(l,t)):a.push(e.source)),r===o.PLAY&&!t.playEventFired&&(t.playEventFired=!0),r===o.PLAY_PROGRESS&&!t.playEventFired&&(t.playEventFired=!0,D(t,o.PLAY,[i])),s=[],i!==undefined&&s.push(i),D(t,r,s)}function H(e){return e.replace(h,"")}var r=e("lib/api/events"),i=e("lib/api/getters"),s=e("lib/api/setters"),o=r.api,u=r.bridge,a=[],f=[],l="__LATE_BINDING__",c="http://wt.soundcloud.dev:9200/",h=/^http(?:s?)/,p,d,v;window.addEventListener?window.addEventListener("message",P,!1):window.attachEvent("onmessage",P),n.exports=v=function(e,t,n){m(e)&&(e=document.getElementById(e));if(!y(e))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(n=n||{},e.src=M(c,t,n));var r=L(S(e)),i,s;return r&&r.instance?r.instance:(i=a.indexOf(S(e))>-1,s=new p(e),f.push(new d(s,e,i)),s)},v.Events=o,window.SC=window.SC||{},window.SC.Widget=v,d=function(e,t,n){this.instance=e,this.element=t,this.domain=E(t.getAttribute("src")),this.isReady=!!n,this.callbacks={}},p=function(){},p.prototype={constructor:p,load:function(e,t){if(!e)return;t=t||{};var n=this,r=k(this),i=r.element,s=i.src,a=s.substr(0,s.indexOf("?"));r.isReady=!1,r.playEventFired=!1,i.onload=function(){n.bind(o.READY,function(){var e,n=r.callbacks;for(e in n)n.hasOwnProperty(e)&&e!==o.READY&&C(u.ADD_LISTENER,e,r.element);t.callback&&t.callback()})},i.src=M(a,e,t)},bind:function(e,t){var n=this,r=k(this);return r&&r.element&&(e===o.READY&&r.isReady?setTimeout(t,1):r.isReady?(T(e,t,r),C(u.ADD_LISTENER,e,r.element)):T(l,function(){n.bind(e,t)},r)),this},unbind:function(e){var t=k(this),n;t&&t.element&&(n=N(e,t),e!==o.READY&&n&&C(u.REMOVE_LISTENER,e,t.element))}},O(p.prototype,x(i)),O(p.prototype,x(s),!0)}),window.SC=window.SC||{},window.SC.Widget=require("lib/api/api")})()
=======
/**
 * main.js v1.0
 * Syrena admin template
 *
 * License:
 * For License Information check out - https://wrapbootstrap.com
 * 
 * Copyright 2013, Stilearning
 * http://stilearning.com
 */

$(function(){

	'use strict';
	$.extend(verge); // enxtend verge (viewport reader, docs: https://github.com/ryanve/verge) to jquery


	// Progress autoatically with pace
	window.paceOptions = {
	  // Disable the 'elements' source
	  elements: false,

	  // Only show the progress on regular and ajax-y page navigation,
	  // not every request
	  restartOnRequestAfter: false
	}
	window.Pace.start();



	/**
	 * Bootstrap manual 
	 */
	$('[data-toggle="tooltip"]').tooltip();		// tooltips
	$('[data-toggle="popover"]').popover();		// popovers




	/**
	 * Search UI theme on side left rule
	 * @type {[type]}
	 */
	$('#smart-search > .form-control').on('focus', function(e){
		var $this = $(this),
			target = $this.attr('data-target');

		$(target).addClass('open').fadeIn();
	})
	.on('focusout', function(e){
		var $this = $(this),
			target = $this.attr('data-target');

		$(target).removeClass('open active').fadeOut();
		$this.val('');

		$('.side-wrapper-status').fadeIn(300);
		$('.side-wrapper-result').hide();
	})
	.on('keyup', function(e){
		var $this = $(this),
			target = $this.attr('data-target');

		if ($this.val() == '') {
			$(target).removeClass('active');

			$('.side-wrapper-status').fadeIn(300);
			$('.side-wrapper-result').hide();
		}
		else{
			$(target).addClass('active');

			$('.side-wrapper-status').hide();
			$('.side-wrapper-result').fadeIn(300);

			// call ajax search below here and place result in side-wrapper-result
		}
	});
	$('#smart-search').on('submit', function(e){
		e.preventDefault();
	});



	/**
	 * Side left Menu rule
	 */
	$('.side-nav-child').prev().on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			target = $this.attr('href');

		$(target).addClass('open');
	})
	$('.side-nav-back').on('click', function(e){
		e.preventDefault();
		var $this = $(this),
			target = $this.parent().parent();

		$(target).removeClass('open');
	})


	
	// visibility elements on different viewports
	var initVisibilityElms = function(){
		var viewport = $.viewportW();	// detect viewport with verge

		// large desktop
		if( viewport >= 1680 ){
			// action on large desktop
			if ($('.content-aside').length > 0) {
				$('.content-main').addClass('content-main-md');
			}
			$('.content-aside').addClass('open');
		}
		else{
			// callback
			$('.content-main').removeClass('content-main-md');
			$('.content-aside').removeClass('open');
		}

		// tablet viewport and less
		if( viewport <= 768){
			$('.content').addClass('content-lg');	// toggle content mode

			$('#toggle-search').addClass('hide');
			// place your elements with hide on tablet and small screen above
			// $(elements).toggleClass('hide');
		}
	}
	initVisibilityElms();		// init visibility elements on load
	// handle visibility elements on window resize
	$(window).on('resize', function() {
		// fixed mode type on tablet and phone
		var on_type = $('#smart-search').find('input').is(':focus');

		if (!on_type) {
			initVisibilityElms();	// handle visibility elements on window resize
		}
	});



	// toggle search
	$('#toggle-search').on('click', function(e){
		e.preventDefault();

		var brand = $('#brand'),
			form_search = $('#smart-search');

		brand.toggleClass('hide');
		form_search.toggleClass('hide').find('input').focus().val('');
		$(this).toggleClass('active');
	})
	// toggle content
	$('#toggle-content').on('click', function(e){
		e.preventDefault();
		
		var content = $('#content');

		// $(this).toggleClass('active');

		content.toggleClass('content-lg');

		// kiye kerjake!
		$('#toggle-search').toggleClass('hide'); // handle visibility search button 
	});



	
	// gesture event on #content for toggle content
	// if your device doesn't support touch event you can manually add data-swipe="true" on #content
	// var is_touch_device = 'ontouchstart' in document.documentElement,
	//	touch_content_selector = (is_touch_device) ? $('#content')  : $('#content[data-swipe="true"]') ;
	$('#content[data-swipe="true"]').swipe({
	  	swipeStatus:function(event, phase, direction, distance, duration, fingers){

	  		// default padding left
	  		var pl = 300;
	  		if(direction == 'right'){
	  			pl = distance;
	  		}
	  		else if(direction == 'left'){
	  			pl = pl - distance;
	  		}

	  		// handle padding left max/min value
	  		if(pl >= 300) 
	  			pl = 300;
  			else if(pl <= 0) 
  				pl = 0;


	  		if (phase == 'move') {
	  			// side left is close
		  		if( $(this).hasClass('content-lg') ){
			  		if(direction == 'right'){
			  			// going to open side left
				  		$(this).css({
			  				'left': pl +'px',
			  				'z-index': 3
			  			});
			  		}
		  		}
		  		// side left is open
		  		else{
		  			if(direction == 'left'){
		  				// going to close side left
				  		$(this).css({
			  				'left': pl +'px',
			  				'padding-left': 0,
			  				'z-index': 3
			  			});
			  		}
		  		}
	  		}
	  		else if (phase == 'end') {
  				$(this).css({
	  				'left': '0'	// setting pos left by default
	  			});

  				if(direction == 'right'){
  					if (pl < 200) {
  						// close side left
	  					$(this).addClass('content-lg').css({
	  						'padding-left': 0,
	  						'z-index': 3
	  					})
	  				}
	  				else{
	  					// open side left
	  					$(this).removeClass('content-lg').css({
	  						'padding-left': '300px',
	  						'z-index': 1
	  					})
	  				}
  				}
  				else if(direction == 'left'){
  					if (pl < 100) {
  						// close side left
	  					$(this).addClass('content-lg').css({
	  						'padding-left': 0,
	  						'z-index': 3
	  					})
	  				}
	  				else{
	  					// open side left
	  					$(this).removeClass('content-lg').css({
	  						'padding-left': '300px',
	  						'z-index': 1
	  					})
	  				}
  				}
  			};
	  	}
	});



	// toggle aside
	$('#toggle-aside').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			content_main = $('#content-main'),
			content_aside = $('#content-aside');

		$this.toggleClass('active');
		content_main.toggleClass('content-main-md');
		content_aside.toggleClass('open');
	})




	/*
	 *  Chats module demo
	 */
 	// toggle contact-chat
    $('.cm-contact-item').on('click', function(e){
        e.preventDefault();

        $('.cm-content').addClass('open');
        $('.cm-contact').addClass('hide');
    })
    $('.cm-content-heading').on('click', function(e){
        e.preventDefault();

        $('.cm-contact').removeClass('hide');
        $('.cm-content').removeClass('open');
    })


    // demo chat
    $('.cm-content-chats').animate({ scrollTop: $(this).scrollTop() + $(this).height() }, 300);
    // manually adding height of chat-in/out buble
    $('.chat-in, .chat-out').each(function(){
        var $this = $(this),
            msg_box_height = $this.find('.chat-msg').innerHeight();

        if (msg_box_height > 40) {  // couse min-height is 40px
            $this.css({
                'height' : msg_box_height + 'px'
            })
        };
    })

    // demo sending chat
    $('#frm-send-chat').on('submit', function(e){
        e.preventDefault();

        var $this = $(this),
            content_chats = $('.cm-content-chats'),
            msg = $('[name="chat-msg"]').val(),
            new_chat = '<div class="chat-out">'
                    +    '<div class="chat-avatar">'
                    +        '<img src="assets/app/img/avatar4.png" title="" />'
                    +    '</div>'
                    +    '<div class="chat-msg">'
                    +        '<p>'+ msg +'</p>'
                    +        '<time datetime="2013-12-13T20:00">Now</time>'
                    +    '</div>'
                    +'</div>';

        if ($.trim(msg) != '') {

            content_chats.append(new_chat);

            // set height for new_chat
            var new_chat_out = $('.cm-content-chats > div[class*="chat-"]').last(),
                new_chat_height = new_chat_out.find('.chat-msg').innerHeight();

            new_chat_out.css({
                'height': new_chat_height + 'px'
            });

            var scrollBottom = content_chats.scrollTop() + content_chats.height();
            content_chats.animate({ scrollTop: scrollBottom }, 300);

            // back to first rule
            $('[name="chat-msg"]').val('');
        }
        else{
        	// back to first rule
            $('[name="chat-msg"]').val('');
        }
    })
	



	/**
	 * Transition Layout - generate layout like a pagination with transition
	 */
	$(function(){
		var active_layout = $('.transition-layout.active').length;
		if (active_layout === 0) {
			$('.transition-layout').first().addClass('active');
		}
	});
	$('[data-toggle="transition-layout"]').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			parents = $('[data-toggle="transition-layout"]'),
			layouts = $('.transition-layout'),
			active_layout = $('.transition-layout.active'),
			target = $this.attr('href'),
			current = $(target).hasClass('active'),
			anim = $this.attr('data-anim'),
			In = 'scaleIn',
			Out = 'scaleOut';

			/** remove this command if you use slide effect for transition layout
			if (anim == 'slide') {
				In = 'scaleIn';
				Out = 'scaleOut';
			};
			*/

		if (parents.hasClass('btn')) {
			parents.removeClass('active');
			$(this).addClass('active');
		}
		else{
			parents.parent().removeClass('active');
			$(this).parent().addClass('active');
		}
		

		if (target.length !== 0) {
			if (!current) {
				// layouts.unbind();

				layouts.removeClass('active scaleIn scaleOut slideIn slideOut');

				active_layout.addClass(Out);

				$(target).addClass('active '+In);
					/*.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
						$(target).addClass('active')
					});*/
			};
		};
	})



	/**
	 * Magic Layout - generate with isotope 
	 * it's a awesome responsive layout for your awesome projects
	 * bootstrap is available grid layout, but static
	 * magic layout give you dynamically responsive layout for differents viewport
	 */
	// init magic layout with isotope
	$('.magic-layout').each(function(){
		var $container = $(this),
			parent = $container.parent(),
			data_col = $container.attr('data-cols'),
			viewport = $.viewportW(),
			cols, masonry;

		if(typeof data_col === undefined || data_col == '' ){
			data_col = 2;
		}

		if(data_col == '3'){
			cols = 'ml-col-3';
		}
		else if(data_col == '4'){
			cols = 'ml-col-4';
		}
		else{
			data_col = 2;
		}

		if (viewport <= 1280) {
			if (data_col > 2) {
				cols = '';
				data_col = 2;
			}
		}

		// add class for layout col
		$container.addClass(cols);

		// initialize masonry width
		masonry = $container.width() / data_col;

		$container.isotope({
		  itemSelector : '.magic-element',
		  // disable normal resizing
		  resizable: false, 
		  // set columnWidth to a percentage of container width
		  masonry: { columnWidth: masonry }
		});

		// update fixed with transition layout
		setTimeout(function(){
			masonry = $container.width() / data_col;
			// initialize Isotope
			$container.isotope({
			  // set columnWidth to a percentage of container width
			  masonry: { columnWidth: masonry }
			});
		}, 500);
		
		// update fixed with transition layout
		$('.transition-layout').bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
			masonry = $container.width() / data_col;
			// initialize Isotope
			$container.isotope({
			  // set columnWidth to a percentage of container width
			  masonry: { columnWidth: masonry }
			});
		})

		// update initialize if transition is running
		$("#content-aside").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
			var masonry = $container.width() / data_col;
			// initialize Isotope
			$container.isotope({
			  // set columnWidth to a percentage of container width
			  masonry: { columnWidth: masonry }
			});
		})

		// update columnWidth on window resize
		$(window).on('resize', function(){
			var viewport = $.viewportW();	// detect viewport with verge
			
			// if toggle aside in mode medium to small viewport
			if (viewport <= 1280) {
				if (data_col > 2) {
					cols = '';
					data_col = 2;
				}
			}
			else{
				// set to original data
				data_col = $container.attr('data-cols');
				if(typeof data_col === undefined || data_col == '' ){
					data_col = 2;
				}

				if(data_col == '3'){
					cols = 'ml-col-3';
				}
				else if(data_col == '4'){
					cols = 'ml-col-4';
				}
				else{
					data_col = 2;
				}
			}

			// update class
			$container.removeClass('ml-col-3 ml-col-4');
			$container.addClass(cols);

			// update masonry
			masonry = $container.width() / data_col;

			// update on resize
		  	$container.isotope({
			    // update columnWidth to a percentage of container width
			    masonry: { columnWidth: masonry }
		  	});

		  	// update columnWith after transition finished
			$("#content").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
				masonry = $container.width() / data_col;
				$container.isotope({
				    // update columnWidth to a percentage of container width
				    masonry: { columnWidth: masonry }
			  	});
			})
		}); // end window resize

		// update columnWidth on toggle aside
		$('#toggle-aside').on('click', function(e){
			$container.isotope('reLayout');
			
		}) // end toggle aside

		// update columnWidth on toggle aside
		$('#toggle-content').on('click', function(e){
			masonry = $container.width() / data_col;
			$container.isotope({
			    // update columnWidth to a percentage of container width
			    masonry: { columnWidth: masonry }
		  	});
		}) // end toggle content

		// update columnWidth on avtive content swipe
		$('#content[data-swipe="true"]').on('swipe', function(){
			masonry = $container.width() / data_col;
			$container.isotope({
			    // update columnWidth to a percentage of container width
			    masonry: { columnWidth: masonry }
		  	});
		})
	}) // end each magic-layout
	

	
	// panel controls
	// callback panel on finish actions
	var callback_panel = function(){
		$('.magic-layout').isotope('reLayout');
	};
	$('[data-toggle="tab"], [data-toggle="collapse"]').on('click', function(){
		var $this = $(this),
			target = $this.attr('href');

		$(target).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
			callback_panel();
		});
	})
	// close a panel
	$('.panel-actions [data-close]').on('click', function(e){
		e.preventDefault();
		var $this = $(this),
			panel = $this.attr('data-close');

		$(panel).hide(300, function(){
			$('.magic-layout').isotope('remove', $(this));
		});
	});
	// collapse a panel
	$('.panel-collapsed .panel-body').hide(100, callback_panel);
	$('.panel-collapsed .table').hide(100, callback_panel);
	$('.panel-collapsed .list-group').hide(100, callback_panel);
	$('.panel-actions [data-collapse]').on('click', function(e){
		e.preventDefault();
		var $this = $(this),
			panel = $this.attr('data-collapse'),
			panel_body = $(panel).children('.panel-body'),
			table = $(panel).children('.table'),
			list_group = $(panel).children('.list-group');

		$(panel).toggleClass('panel-collapsed');
		$(panel_body).slideToggle(200, callback_panel);
		$(table).slideToggle(200, callback_panel);
		$(list_group).slideToggle(200, callback_panel);
	});
	$('.panel > .panel-heading > .panel-icon').on('dblclick', function(e){
		e.preventDefault();
		var $this = $(this),
			panel = $this.parent().parent(),
			panel_body = panel.children('.panel-body'),
			table = panel.children('.table'),
			list_group = panel.children('.list-group');

		panel.toggleClass('panel-collapsed');
		panel_body.slideToggle(200, callback_panel);
		table.slideToggle(200, callback_panel);
		list_group.slideToggle(200, callback_panel);
	});
	// refresh panel
	$('.panel-actions [data-refresh]').on('click', function(e){
		e.preventDefault();
		var $this = $(this),
			panel = $this.attr('data-refresh'),
			target = $(panel).find('.panel-body');

		$(panel).append('<div class="panel-progress"><div class="panel-spinner"></div></div>')


		// Your ajax place here to remove panel-progress, we just use setTimeout to simple demo
		var lorem_text = [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quisquam dolorum quo aspernatur. Incidunt, corporis, explicabo, alias nostrum a rerum accusantium iste quas odio quasi itaque exercitationem similique maxime rem!',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, debitis, quaerat, nulla sed aliquam magnam ratione itaque error illum aliquid atque asperiores perspiciatis cumque consectetur?',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, nulla labore illo reiciendis aliquid harum ullam animi fugiat quasi maxime sequi debitis cumque voluptatem magni iusto molestias saepe consectetur deserunt iste voluptatibus! Impedit, a, quibusdam harum temporibus enim asperiores aperiam exercitationem laboriosam perferendis debitis voluptas neque expedita minus modi ullam!',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ipsa, commodi, et corporis harum quidem sit cupiditate perspiciatis deleniti numquam distinctio incidunt possimus nihil mollitia facere quaerat sequi amet unde vitae non illum saepe molestiae error eum minima! Quam, ducimus, nisi, sapiente, architecto nesciunt veritatis dignissimos esse cupiditate sed voluptatibus porro sint mollitia! Voluptates nisi laborum nesciunt deleniti vitae quam ratione possimus aliquam beatae officiis. Consequuntur, nulla, inventore voluptas veritatis optio sint corporis mollitia odio animi qui quos nam sapiente vel quod nihil hic quo vero quasi eligendi soluta! Dolores, natus omnis fugiat corporis doloribus aperiam magnam atque recusandae ipsam!',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo harum neque dolores esse expedita explicabo veniam enim! Ab, dolores, aspernatur, possimus adipisci atque dignissimos nam culpa velit architecto eveniet necessitatibus fugit facilis dolorum quae totam voluptate temporibus modi voluptatum odio consequuntur commodi nemo saepe sunt tenetur magnam quisquam mollitia assumenda voluptas at. Consequatur, fuga, nostrum, atque illum hic repudiandae non possimus placeat aliquid alias ab voluptatibus dolorum quod reprehenderit blanditiis quo autem esse eum impedit molestiae cupiditate reiciendis cum earum dolores laboriosam. Doloremque, dolorum, veritatis perferendis dolores repudiandae veniam temporibus consectetur placeat fuga totam corrupti enim nam impedit praesentium perspiciatis voluptates at pariatur laudantium possimus quaerat ipsam autem odio tempore ut dicta iste error. Delectus, possimus, veritatis quis placeat iusto aliquam eius expedita ducimus.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, praesentium, doloribus dolore quam assumenda enim voluptatem fugiat quos quis minima saepe labore incidunt nemo! Officiis, maxime, eos veritatis nulla error minima quos vel vero iste modi. Expedita, cum, labore, minus nesciunt est dolores ullam molestiae ut in doloribus maiores quasi architecto recusandae itaque consequuntur perferendis consequatur officia porro quidem rerum nemo eligendi ea illo amet ipsum blanditiis dolor quam velit ab alias error consectetur odit cupiditate maxime laborum quos quia deleniti. In, rem, voluptas, corrupti blanditiis nihil sed nisi rerum praesentium dicta hic unde fuga maiores architecto iste aperiam deleniti eius reiciendis odio esse obcaecati molestias natus beatae atque commodi id corporis aut quo. Quisquam, facere a consequatur cum optio dolores possimus commodi deserunt quod odit nam non doloribus sed officia laborum veritatis tempora. Quisquam, eos nam reiciendis suscipit et veniam cupiditate rerum iste ut doloremque natus ex non. Obcaecati.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, eligendi, debitis, aspernatur veritatis voluptatum fugiat iusto qui quia et architecto distinctio saepe tenetur aut est sunt. Fugiat, iste sed sint ut vero tempore temporibus repellat quis at porro! Enim, repellendus, unde exercitationem vero accusantium nisi ratione aut nobis beatae maxime blanditiis impedit voluptates laudantium reprehenderit tempore minus iure illum. Sit, maiores, aperiam, quos eligendi temporibus vero eveniet ea qui natus rerum neque necessitatibus nihil dolores corrupti ad dolorem libero nulla veniam accusantium illum mollitia deleniti obcaecati amet cupiditate fuga reiciendis labore corporis earum et perspiciatis est iusto asperiores laborum adipisci consectetur hic quis facilis. Libero, vitae quam unde impedit ducimus sapiente nihil iure. Mollitia, tenetur, consequatur unde sapiente ad cum repudiandae adipisci at labore voluptas quos aperiam ea voluptatum odio eum asperiores nulla hic quam voluptatibus nemo. Adipisci, neque, tempora distinctio non aliquid natus reiciendis ipsa enim. Vitae, molestias, alias porro perferendis maiores iure corporis facere ut vero reiciendis qui ipsam illo quisquam reprehenderit esse rerum incidunt iusto quae! Ducimus, omnis saepe similique eos harum.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, atque, sequi fuga rerum quia adipisci non dolores at cupiditate ullam laboriosam eveniet dolorum iste nemo eligendi eius quidem aspernatur mollitia animi laudantium quibusdam doloribus architecto perspiciatis corporis ut sapiente maiores quis deserunt voluptates obcaecati voluptate qui ducimus inventore cumque saepe repudiandae necessitatibus. Necessitatibus, minima, saepe pariatur ipsa tempora corporis sit molestias atque dolorum perferendis. Et, deleniti eius non quibusdam perspiciatis aliquid est sunt dolorum numquam dolor. Earum, rerum, magni fugit reprehenderit eius temporibus impedit praesentium eaque fuga non suscipit reiciendis laboriosam molestias quos soluta id deleniti! Libero, harum, voluptatibus et aliquam nihil qui accusamus totam numquam eligendi quisquam sunt nisi deleniti at dolorum eius illo commodi. Quis, commodi, aspernatur, consequuntur quo debitis quod totam atque harum magnam distinctio illum aliquam saepe tenetur architecto sed incidunt repudiandae voluptas optio vel minima deleniti. Odit, eaque ex ducimus aliquid voluptatem dicta ipsum. Blanditiis, deleniti asperiores quibusdam aspernatur reiciendis eius minima natus sit animi eveniet. Sequi, dolore, minima, officiis repellat totam perspiciatis veniam porro vitae consequuntur nisi accusamus animi ab facilis ipsa harum corporis rerum nemo quam. Harum magni vel blanditiis officiis sint illum voluptas. Quia, magni explicabo voluptatibus et obcaecati laborum porro earum.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ipsa, at, velit, voluptatibus ducimus fugit ea officiis doloribus beatae illo debitis necessitatibus atque maiores similique numquam sapiente dignissimos. Amet dignissimos voluptas libero maxime ipsum totam animi vitae esse. Libero, earum, dolores, debitis assumenda voluptatum in tempora iste quam blanditiis optio soluta laborum aperiam asperiores suscipit non minus quibusdam consequuntur recusandae placeat aspernatur? Dolor, ducimus, a id officiis sequi doloribus aut! Repellendus, voluptatem, consectetur, deleniti, animi blanditiis asperiores optio repellat numquam necessitatibus aspernatur officiis aliquam. Placeat, animi, aspernatur fugiat omnis repellendus distinctio ut magni iste ipsum aperiam laborum molestiae quos dignissimos accusantium iure repellat id accusamus nobis sapiente blanditiis at et voluptatum dolor tempore cum perferendis qui in. Similique, nulla labore sint unde vel est natus quasi voluptate aut odit mollitia eos ipsum deserunt debitis id dolore dicta at impedit ab illum deleniti eligendi quidem velit error perferendis obcaecati dignissimos aliquid quae eaque ipsa facilis tempora dolorum consectetur! Enim, voluptatibus magnam ullam dicta adipisci obcaecati vitae placeat modi rem a harum deserunt voluptates totam soluta repellendus ex aspernatur ab voluptatem quas suscipit eum error itaque mollitia non cum nulla officiis aliquam maiores pariatur quis. Error, eius, distinctio, architecto, provident non doloribus quisquam beatae illum maiores autem tempora quia aut eum nesciunt modi nam vitae libero possimus sunt saepe itaque inventore corporis vero voluptate quos unde quibusdam.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, neque earum fugit reiciendis tempora placeat animi expedita. Eius, recusandae, placeat voluptas quisquam id commodi quis vel distinctio perferendis impedit beatae deserunt ad porro cumque totam unde sint? Illum cum vel mollitia nesciunt deserunt? Voluptatem, error, repudiandae, temporibus officiis fuga molestiae facilis distinctio itaque quo animi debitis quidem laboriosam ullam nemo velit ex iusto odio tempora at quaerat. Numquam, at, vel, vero magnam ipsum similique adipisci odio a libero fugit voluptatem autem omnis dicta porro ab esse deserunt nisi quisquam enim consequatur repellat eaque delectus dolorem cupiditate reiciendis optio in repellendus! Provident, molestiae, consequuntur veritatis est tenetur reiciendis ab tempora commodi culpa cupiditate impedit deserunt autem quisquam eos inventore alias aliquid laborum adipisci amet similique modi repudiandae nostrum nisi eaque quo voluptatibus minus facere nam quod fugiat. Labore, fuga, ducimus a totam provident temporibus eligendi facilis dolores officiis cumque aut reiciendis sed fugiat. Nisi, perferendis, repellendus, corporis provident deleniti id ad necessitatibus est voluptatibus eligendi sit maxime soluta ipsa quidem magnam iure tenetur velit numquam esse voluptate suscipit nobis quis enim ratione voluptas. Reprehenderit, blanditiis, architecto iusto quas itaque magnam est exercitationem voluptatem officia sint doloremque incidunt esse commodi eum numquam illum aut cumque! Sint, itaque, animi deleniti natus quisquam laboriosam distinctio illum nam quas sed. Vel, maiores, amet, tempora, perspiciatis reprehenderit libero odit debitis fugit aut officia facilis nemo a fugiat voluptatum qui culpa neque inventore labore similique sapiente nostrum quisquam quis iure odio aliquam quod mollitia. Aperiam, iusto, rerum.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deleniti, quaerat, voluptas suscipit ea minima amet mollitia voluptates voluptatum cupiditate veniam natus repellat fuga esse accusantium tempore est nesciunt eius soluta aut enim dolorem maxime quia? Dolore, numquam consequuntur quisquam quos suscipit soluta eum dolor officiis fuga dolores iste veritatis ab asperiores nemo vitae ducimus voluptates dicta quis unde possimus. Possimus, mollitia, nam corporis temporibus quaerat esse aspernatur sed voluptatem porro eaque corrupti veritatis eveniet dolorum aperiam unde eligendi est blanditiis placeat nobis doloremque! Perspiciatis, perferendis, eligendi atque nesciunt molestiae voluptatem nulla aspernatur autem ipsam praesentium harum quaerat quasi suscipit magni velit incidunt tempore sunt impedit culpa laboriosam esse dolorem cumque nihil eius explicabo! Nulla, perspiciatis omnis odio dolor eum reiciendis voluptas commodi illum praesentium et vitae similique dolores est aliquam temporibus rem saepe blanditiis ducimus debitis aspernatur molestiae incidunt nobis repellat pariatur tempore doloremque quisquam officiis repudiandae ab obcaecati! Repellendus, reprehenderit, delectus soluta fugiat veritatis ipsam optio repudiandae quibusdam nihil quae officia autem. Consequatur, consequuntur, hic, eligendi placeat error qui reprehenderit unde accusamus eos dolorem vel reiciendis eveniet assumenda nobis iusto tenetur nulla nemo odio magni saepe atque molestias asperiores. Sint, veniam quod incidunt suscipit excepturi in perferendis unde tenetur illum obcaecati dolor ducimus voluptates perspiciatis quis minus! Facere, quibusdam perferendis veniam harum et delectus fugiat at. In, quos velit animi blanditiis deserunt quod iusto beatae dolore perferendis natus obcaecati nobis sapiente fugit dolor fugiat amet sit ut tenetur accusantium nisi ipsum nemo perspiciatis. Eius, odit, repellat, dolorum adipisci saepe veritatis expedita fugiat velit aspernatur ab similique quia esse repellendus recusandae nulla dolore quidem temporibus dolorem accusamus voluptates in!',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, necessitatibus, placeat, sapiente suscipit omnis voluptatem nam dolore animi eveniet aliquid veniam dolor. Illo, asperiores, iure, enim quidem quibusdam repudiandae similique ea minima explicabo ipsum soluta officia consequuntur maxime sunt vitae. Eos, sequi asperiores sapiente vel reiciendis veritatis itaque! Temporibus, doloribus, ipsa quo praesentium repudiandae iure deleniti dolor totam facilis inventore amet laboriosam corrupti. Dignissimos, rerum, quisquam, eos, asperiores quidem soluta ipsam distinctio dolore aliquid corrupti consequatur dolorum maiores iure vero neque dicta nesciunt nobis eum cumque temporibus? Ea, nam nesciunt beatae iure cupiditate iste consequuntur quis consectetur minima ipsum obcaecati qui soluta totam repellat iusto non pariatur eligendi odit commodi cum delectus accusamus adipisci deleniti similique doloremque modi vitae laborum quibusdam nemo harum quaerat aperiam odio voluptate illo magni quidem ut sed quo dolores amet! Veritatis, ipsam autem atque nihil numquam perspiciatis quia totam aut quidem laboriosam distinctio iure esse voluptatum. Architecto, amet, esse, beatae assumenda accusamus quasi ab nobis debitis pariatur quo officiis ad iste ut maiores eius sequi nihil. Perferendis, atque voluptatibus odit tempora at autem sit. Praesentium eligendi optio autem culpa magni? Quam, eaque recusandae hic nobis non incidunt nam nihil. Reiciendis, doloribus, at, laborum non nulla voluptates suscipit porro esse eligendi doloremque id veniam! Autem, nam, optio similique ratione culpa illum nihil ipsam eveniet. Rem, veniam, ex eius assumenda dicta iste cum quasi tempora mollitia distinctio error consequuntur blanditiis ducimus doloremque sit aliquid recusandae. Recusandae, nobis voluptates nemo praesentium aspernatur dignissimos impedit fugit sint hic tenetur repellendus similique magni asperiores soluta ratione eveniet voluptatem optio doloremque porro eligendi! Dignissimos, molestias, officia numquam consequuntur similique iusto est aspernatur libero quidem corrupti consequatur reiciendis id deserunt reprehenderit dolorum delectus ad sapiente ex ab repellat modi incidunt corporis aperiam rerum soluta rem enim temporibus nisi magnam doloribus saepe atque.'
		],
		lorem_text_select = lorem_text[ Math.floor(Math.random() * lorem_text.length) ];
		setTimeout(function(){
			target.html('<p>'+ lorem_text_select +'</p>')
			$(panel).find('.panel-progress').remove();
			callback_panel()
		}, 1000 );
	})
    // end tags input

});

	
	/*! Loader automatically plugin
	 *  http://github.hubspot.com/pace/ */
	/*! pace 0.4.16 */
	(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q=[].slice,R={}.hasOwnProperty,S=function(a,b){function c(){this.constructor=a}for(var d in b)R.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},T=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};s={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!1}},A=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?a:+new Date},C=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,r=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==C&&(C=function(a){return setTimeout(a,50)},r=function(a){return clearTimeout(a)}),E=function(a){var b,c;return b=A(),c=function(){var d;return d=A()-b,d>=33?(b=A(),a(d,function(){return C(c)})):setTimeout(c,33-d)},c()},D=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?Q.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},t=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?Q.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)R.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?t(b[a],e):b[a]=e);return b},o=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},v=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},null==window.Pace&&(window.Pace={}),B=Pace.options=t(s,window.paceOptions,v()),h=function(a){function b(){return O=b.__super__.constructor.apply(this,arguments)}return S(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(B.target),!a)throw new h;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace("pace-done",""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){h=a}return this.el=void 0},a.prototype.render=function(){var a,b;return null==document.querySelector(B.target)?!1:(a=this.getElement(),a.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||0|(this.lastRenderedProgress|0!==this.progress))&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?b="99":(b=this.progress<10?"0":"",b+=0|this.progress),a.children[0].setAttribute("data-progress",""+b)),this.lastRenderedProgress=this.progress)},a.prototype.done=function(){return this.progress>=100},a}(),g=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),L=window.XMLHttpRequest,K=window.XDomainRequest,J=window.WebSocket,u=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],null==a[d]&&"function"!=typeof e?f.push(a[d]=e):f.push(void 0)}catch(g){c=g}return f},y=[],Pace.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?Q.call(arguments,1):[],y.unshift("ignore"),c=b.apply(null,a),y.shift(),c},Pace.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?Q.call(arguments,1):[],y.unshift("track"),c=b.apply(null,a),y.shift(),c},G=function(a){var b;if(null==a&&(a="GET"),"track"===y[0])return"force";if(!y.length&&B.ajax){if("socket"===a&&B.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),T.call(B.ajax.trackMethods,b)>=0)return!0}return!1},i=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return G(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new L(b),a(c),c},u(window.XMLHttpRequest,L),null!=K&&(window.XDomainRequest=function(){var b;return b=new K,a(b),b},u(window.XDomainRequest,K)),null!=J&&B.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;return d=new J(a,b),G("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d},u(window.WebSocket,J))}return S(b,a),b}(g),M=null,w=function(){return null==M&&(M=new i),M},w().on("request",function(b){var c,d,e,f;return f=b.type,e=b.request,Pace.running||B.restartOnRequestAfter===!1&&"force"!==G(f)?void 0:(d=arguments,c=B.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,j,k;if(c="socket"===f?e.readyState<2:0<(i=e.readyState)&&4>i){for(Pace.restart(),j=Pace.sources,k=[],g=0,h=j.length;h>g;g++){if(b=j[g],b instanceof a){b.watch.apply(b,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],w().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d;return d=a.type,b=a.request,c="socket"===d?new l(b):new m(b),this.elements.push(c)},a}(),m=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2}),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100});else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),l=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100})}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},B.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=A(),b=setInterval(function(){var g;return g=A()-c-50,c=A(),e.push(g),e.length>B.eventLag.sampleCount&&e.shift(),a=o(e),++d>=B.eventLag.minSamples&&a<B.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),k=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=B.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=D(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=D(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/B.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,B.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+B.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),H=null,F=null,p=null,I=null,n=null,q=null,Pace.running=!1,x=function(){return B.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(N=window.history.pushState,window.history.pushState=function(){return x(),N.apply(window.history,arguments)}),null!=window.history.replaceState&&(P=window.history.replaceState,window.history.replaceState=function(){return x(),P.apply(window.history,arguments)}),j={ajax:a,elements:d,document:c,eventLag:f},(z=function(){var a,c,d,e,f,g,h,i,l;for(Pace.sources=H=[],h=["ajax","elements","document","eventLag"],d=0,f=h.length;f>d;d++)c=h[d],B[c]!==!1&&H.push(new j[c](B[c]));for(l=null!=(i=B.extraSources)?i:[],e=0,g=l.length;g>e;e++)a=l[e],H.push(new a(B));return Pace.bar=p=new b,F=[],I=new k})(),Pace.stop=function(){return Pace.running=!1,p.destroy(),q=!0,null!=n&&("function"==typeof r&&r(n),n=null),z()},Pace.restart=function(){return Pace.stop(),Pace.start()},Pace.go=function(){return Pace.running=!0,p.render(),q=!1,n=E(function(a,b){var c,d,e,f,g,h,i,j,l,m,n,o,r,s,t,u,v,w;for(j=100-p.progress,d=r=0,e=!0,h=s=0,u=H.length;u>s;h=++s)for(n=H[h],m=null!=F[h]?F[h]:F[h]=[],g=null!=(w=n.elements)?w:[n],i=t=0,v=g.length;v>t;i=++t)f=g[i],l=null!=m[i]?m[i]:m[i]=new k(f),e&=l.done,l.done||(d++,r+=l.tick(a));return c=r/d,p.update(I.tick(a,c)),o=A(),p.done()||e||q?(p.update(100),setTimeout(function(){return p.finish(),Pace.running=!1},Math.max(B.ghostTime,Math.min(B.minTime,A()-o)))):b()})},Pace.start=function(a){t(B,a),Pace.running=!0;try{p.render()}catch(b){h=b}return document.querySelector(".pace")?Pace.go():setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:B.startOnPageLoad&&Pace.start()}).call(this);


	/**
	 * author Christopher Blum
	 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
	 *    - forked from http://github.com/zuk/jquery.inview/
	 */
	(function ($) {
	  var inviewObjects = {}, viewportSize, viewportOffset,
	      d = document, w = window, documentElement = d.documentElement, expando = $.expando;
	
	  $.event.special.inview = {
	    add: function(data) {
	      inviewObjects[data.guid + "-" + this[expando]] = { data: data, $element: $(this) };
	    },
	
	    remove: function(data) {
	      try { delete inviewObjects[data.guid + "-" + this[expando]]; } catch(e) {}
	    }
	  };
	
	  function getViewportSize() {
	    var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };
	
	    // if this is correct then return it. iPad has compat Mode, so will
	    // go into check clientHeight/clientWidth (which has the wrong value).
	    if (!size.height) {
	      mode = d.compatMode;
	      if (mode || !$.support.boxModel) { // IE, Gecko
	        domObject = mode === 'CSS1Compat' ?
	          documentElement : // Standards
	          d.body; // Quirks
	        size = {
	          height: domObject.clientHeight,
	          width:  domObject.clientWidth
	        };
	      }
	    }
	
	    return size;
	  }
	
	  function getViewportOffset() {
	    return {
	      top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
	      left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
	    };
	  }
	
	  function checkInView() {
	    var $elements = $(), elementsLength, i = 0;
	
	    $.each(inviewObjects, function(i, inviewObject) {
	      var selector  = inviewObject.data.selector,
	          $element  = inviewObject.$element;
	      $elements = $elements.add(selector ? $element.find(selector) : $element);
	    });
	
	    elementsLength = $elements.length;
	    if (elementsLength) {
	      viewportSize   = viewportSize   || getViewportSize();
	      viewportOffset = viewportOffset || getViewportOffset();
	
	      for (; i<elementsLength; i++) {
	        // Ignore elements that are not in the DOM tree
	        if (!$.contains(documentElement, $elements[i])) {
	          continue;
	        }
	
	        var $element      = $($elements[i]),
	            elementSize   = { height: $element.height(), width: $element.width() },
	            elementOffset = $element.offset(),
	            inView        = $element.data('inview'),
	            visiblePartX,
	            visiblePartY,
	            visiblePartsMerged;
	        
	        // Don't ask me why because I haven't figured out yet:
	        // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
	        // Even though it sounds weird:
	        // It seems that the execution of this function is interferred by the onresize/onscroll event
	        // where viewportOffset and viewportSize are unset
	        if (!viewportOffset || !viewportSize) {
	          return;
	        }
	        
	        if (elementOffset.top + elementSize.height > viewportOffset.top &&
	            elementOffset.top < viewportOffset.top + viewportSize.height &&
	            elementOffset.left + elementSize.width > viewportOffset.left &&
	            elementOffset.left < viewportOffset.left + viewportSize.width) {
	          visiblePartX = (viewportOffset.left > elementOffset.left ?
	            'right' : (viewportOffset.left + viewportSize.width) < (elementOffset.left + elementSize.width) ?
	            'left' : 'both');
	          visiblePartY = (viewportOffset.top > elementOffset.top ?
	            'bottom' : (viewportOffset.top + viewportSize.height) < (elementOffset.top + elementSize.height) ?
	            'top' : 'both');
	          visiblePartsMerged = visiblePartX + "-" + visiblePartY;
	          if (!inView || inView !== visiblePartsMerged) {
	            $element.data('inview', visiblePartsMerged).trigger('inview', [true, visiblePartX, visiblePartY]);
	          }
	        } else if (inView) {
	          $element.data('inview', false).trigger('inview', [false]);
	        }
	      }
	    }
	  }
	
	  $(w).bind("scroll resize", function() {
	    viewportSize = viewportOffset = null;
	  });
	  
	  // IE < 9 scrolls to focused elements without firing the "scroll" event
	  if (!documentElement.addEventListener && documentElement.attachEvent) {
	    documentElement.attachEvent("onfocusin", function() {
	      viewportOffset = null;
	    });
	  }
	
	  // Use setInterval in order to also make sure this captures elements within
	  // "overflow:scroll" elements or elements that appeared in the dom tree due to
	  // dom manipulation and reflow
	  // old: $(window).scroll(checkInView);
	  //
	  // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
	  // intervals while the user scrolls. Therefore the inview event might fire a bit late there
	  setInterval(checkInView, 250);
	})(jQuery);	
>>>>>>> 0be350da5cdbd70c25f1ead0e39829f0a8079c67
