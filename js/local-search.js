// build time:Mon Mar 30 2020 21:28:03 GMT+0800 (中国标准时间)
var searchFunc=function(e,t,a){"use strict";var i=document.getElementById(t);var r=document.getElementById(a);r.innerHTML="<div class='m-auto text-center'><div class='spinner-border' role='status'><span class='sr-only'>Loading...</span></div><br/>Loading...</div>";$.ajax({url:e,dataType:"xml",success:function(e){var t=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();r.innerHTML="";i.addEventListener("input",function(){var e="";var a=this.value.trim().toLowerCase().split(/[\s\-]+/);r.innerHTML="";if(this.value.trim().length<=0){return}t.forEach(function(t){var i=true;var r=[];if(!t.title||t.title.trim()===""){t.title="Untitled"}var n=t.title.trim();var l=n.toLowerCase();var s=t.content.trim().replace(/<[^>]+>/g,"");var c=s.toLowerCase();var o=t.url;var v=-1;var u=-1;var f=-1;if(c!==""){a.forEach(function(e,t){v=l.indexOf(e);u=c.indexOf(e);if(v<0&&u<0){i=false}else{if(u<0){u=0}if(t===0){f=u}}})}else{i=false}if(i){e+="<a href='"+o+"' class='list-group-item list-group-item-action font-weight-bolder search-list-title'>"+n+"</a>";var d=s;if(f>=0){var h=f-20;var p=f+80;if(h<0){h=0}if(h===0){p=100}if(p>d.length){p=d.length}var m=d.substring(h,p);a.forEach(function(e){var t=new RegExp(e,"gi");m=m.replace(t,"<span class='pink-text'>"+e+"</span>")});e+="<p class='search-list-content'>"+m+"...</p>"}}});if(e.indexOf("list-group-item")===-1){return $("#local-search-input").addClass("invalid").removeClass("valid")}$("#local-search-input").addClass("valid").removeClass("invalid");r.innerHTML=e})}});$(document).on("click","#local-search-close",function(){$("#local-search-input").val("").removeClass("invalid").removeClass("valid");$("#local-search-result").html("")})};var getSearchFile=function(e){searchFunc(e,"local-search-input","local-search-result")};
//rebuild by neat 