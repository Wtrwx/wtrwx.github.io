// build time:Fri Apr 10 2020 12:13:11 GMT+0800 (中国标准时间)
!function(n,o,t){var i=function(){var n="";n+='<button class="copy-btn" data-clipboard-snippet="">';n+='<i class="far fa-copy"></i><span>Copy</span>';n+="</button>";$("pre.highlight").wrap($('<div class="code-block"></div>'));$(".code-block").prepend(n);var o=new ClipboardJS(".copy-btn",{target:function(n){return n.nextElementSibling}});o.on("success",function(o){showSnackbar("复制成功");setTimeout(function(){o.trigger.outerHTML=n},2e3)})};var a=window.onload;window.onload=function(){i();a&&a()}}(window,document);
//rebuild by neat 