$(document).ready(function($){var k=-1,o="",p="";$("#menu").find("ul").find("li").each(function(){for(var text=$(this).text(),url=$(this).find("a").attr("href"),x=0,z=0;z<text.length&&(x=text.indexOf("_",x),-1!=x);z++)x++;if(level=z,level>k&&(o+="<ul>",p+="<ul>"),level<k){offset=k-level;for(var z=0;z<offset;z++)o+="</ul></li>",p+="</ul></li>"}text=text.replace(/_/gi,""),o+="<li><a href='"+url+"'>"+text+"</a>",p+="<li><a href='"+url+"'>";for(var z=0;z<level;z++)p+="";p+=text+"</a>",k=level});for(var x=0;k>=x;x++)o+="</ul>",p+="</ul>",0!=x&&(o+="</li>",p+="</li>");$("#menu .LinkList").html(p),$("#menu > .LinkList > ul").attr("id","nav"),selectnav('nav'),$("#menu ul > li > ul").parent("li").addClass("parent"),$("#menu .widget").attr("style","display:block!important;"),$("#menu ul > li").first().addClass("hub-home")});$(function(){selectnav('nav1');$(".post-body img").parent("a").css("margin","0 auto!important")});$(".PopularPosts ul li img").attr("src",function($this,img){if(img.match("hqdefault.jpg")){return img.replace("/hqdefault.jpg","/mqdefault.jpg")}else if(img.match("default.jpg")){return img.replace("/default.jpg","/mqdefault.jpg")}else if(img.match("s72-c")){return img.replace("/s72-c","/s100-c")}else if(img.match("w72-h72-p-nu")){return img.replace("/w72-h72-p-nu","/s100-c")}else if(img.match("w72-h72-p-k-no-nu")){return img.replace("/w72-h72-p-k-no-nu","/s100-c")}else{return img.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png")}});$(".comments .avatar-image-container img").attr("src",function($this,img){if(img.match("hqdefault.jpg")){return img.replace("/hqdefault.jpg","/mqdefault.jpg")}else if(img.match("default.jpg")){return img.replace("/default.jpg","/mqdefault.jpg")}else if(img.match("s35-c")){return img.replace("/s35-c","/s100-c")}else if(img.match("s72-c")){return img.replace("/s72-c","/s100-c")}else if(img.match("w72-h72-p-nu")){return img.replace("/w72-h72-p-nu","/s100-c")}else{return img.replace("http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png")}});$(document).ready(function(){var n=$("#sidetabs #tabside1 .widget h2").text();$(".menu-tab .item-1 a").text(n);var u=$("#sidetabs #tabside2 .widget h2").text();$(".menu-tab .item-2 a").text(u);var p=$("#sidetabs #tabside3 .widget h2").text();$(".menu-tab .item-3 a").text(p);$("#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title").remove();$(this).find(".menu-tab li").addClass("hide-tab");$(".sidetabs").tabslet({mouseevent:"click",attribute:"href",animation:true});if(0===$(".sidetabs .widget").length)$(".sidetabs").remove()});$(document).ready(function(){$('.ty-ran-yard span').each(function(){$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:'get',dataType:"jsonp",success:function(t){t=t.feed.entry.length-3,t=Math.floor(Math.random()*(t-0+1))+0,0==t&&(t=Math.floor(Math.random()*(t-0+1))+1),t==0&&(t==1),$.ajax({url:"/feeds/posts/default?alt=json-in-script&start-index="+t+"&max-results=1",type:'get',dataType:"jsonp",success:function(data){var url="";var rlink='';for(var i=0;i<data.feed.entry.length;i++){for(var j=0;j<data.feed.entry[i].link.length;j++){if(data.feed.entry[i].link[j].rel=="alternate"){url=data.feed.entry[i].link[j].href;break}}rlink+='<a class="ran-sym" href="'+url+'"></a>'}$('.ty-ran-yard span').html(rlink)}})}})})});$(".Label a,.post-labels a,.breadcrumbs span a,.label-head a").attr("href",function($this,href){return href.replace(href,href+"?&max-results="+perPage)});var s="[full_width]";var o="[left_sidebar]";$(".post *").replaceText(s,"<style>@media screen and (min-width: 980px){.item #main-wrapper{width:100% !important;max-width:100%!important;float:none!important;border-right:0!important;border-left:0!important}.item #sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}}</style>");$(".post-body *").replaceText(o,"<style>@media screen and (min-width: 980px){.item #main-wrapper{float:right!important;border-right:0!important;margin-right: 0px !important;}.item #sidebar-wrapper{float:left!important;padding-left:0!important;}}</style>");window.onload=function(){var e=document.getElementById("mycontent");if(e==null){window.location.href="http://www.way2themes.com/"}e.setAttribute("href","http://www.hesen-huseynli.blogspot.com.com/");e.setAttribute("rel","dofollow");e.setAttribute("title","Dizayner");e.setAttribute("style","display: inline-block!important; font-size: inherit!important; color: #3cc091!important; visibility: visible!important; opacity: 1!important;");e.innerHTML="Həsən Hüseynli"}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             