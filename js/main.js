// build time:Wed Apr 22 2020 16:13:13 GMT+0800 (中国标准时间)
function scrollToElement(o,n){var t=$(o).offset();$("body,html").animate({scrollTop:t.top+(n||0),easing:"swing"})}function debounce(o,n,t){var a;return function(){var r=this,e=arguments;var s=function(){a=null;if(!t)o.apply(r,e)};var l=t&&!a;clearTimeout(a);a=setTimeout(s,n);if(l)o.apply(r,e)}}function navbarScrollEvent(){var o=$("#navbar");if(o.offset().top>0){o.addClass("navbar-custom");o.removeClass("navbar-dark")}$(window).scroll(debounce(function(){$(".scrolling-navbar")[o.offset().top>50?"addClass":"removeClass"]("top-nav-collapse");if(o.offset().top>0){o.addClass("navbar-custom");o.removeClass("navbar-dark")}else{o.addClass("navbar-dark")}},20));$("#navbar-toggler-btn").on("click",function(){$(".animated-icon").toggleClass("open");$("#navbar").toggleClass("navbar-col-show")})}function parallaxEvent(){var o=$('#background[parallax="true"]');var n=function(){var n=$(window).scrollTop()/5;var t=parseInt($("#board").css("margin-top"));var a=96+t;if(n>a){n=a}o.css({transform:"translate3d(0,"+n+"px,0)","-webkit-transform":"translate3d(0,"+n+"px,0)","-ms-transform":"translate3d(0,"+n+"px,0)","-o-transform":"translate3d(0,"+n+"px,0)"});var r=$("#toc");if(r){$("#toc-ctn").css({"padding-top":n+"px"})}};if(o.length>0){n();$(window).scroll(n)}}function scrollDownArrowEvent(){$(".scroll-down-bar").on("click",function(){scrollToElement("#board",-$("#navbar").height())})}function scrollTopArrowEvent(){var o=$("#scroll-top-button");if(!o){return}var n=false;var t=false;var a=function(){var a=document.getElementById("board").getClientRects()[0].right;var r=document.body.offsetWidth;var e=r-a;n=e>=50;o.css({bottom:n&&t?"20px":"-60px",right:e-64+"px"})};a();$(window).resize(a);var r=$("#board").offset().top;$(window).scroll(debounce(function(){var a=document.body.scrollTop+document.documentElement.scrollTop;t=a>=r;o.css({bottom:n&&t?"20px":"-60px"})},20));o.on("click",function(){$("body,html").animate({scrollTop:0,easing:"swing"})})}$(document).ready(function(){navbarScrollEvent();parallaxEvent();scrollDownArrowEvent();scrollTopArrowEvent();$(".ripple-effect").rkmd_rippleEffect()});(function(o){o.fn.rkmd_rippleEffect=function(){var n,t,a,r,e,s,l,i;n=o(this).not("[disabled], .disabled");n.on("mousedown",function(n){t=o(this);if(n.button===2){return false}if(t.find(".ripple").length===0){t.prepend('<span class="ripple"></span>')}a=t.find(".ripple");a.removeClass("animated");l=t.outerWidth();i=t.outerHeight();r=Math.max(l,i);a.css({width:r,height:r});e=parseInt(n.pageX-t.offset().left)-r/2;s=parseInt(n.pageY-t.offset().top)-r/2;a.css({top:s+"px",left:e+"px"}).addClass("animated");setTimeout(function(){a.remove()},800)})}})(jQuery);
//rebuild by neat 