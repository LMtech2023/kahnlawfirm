(function(){function c(n){return decodeURIComponent(n.replace(/\+/g,"%20"))}function t(n){return encodeURIComponent(String(n)).replace(/['"\(\)]/g,function(n){switch(n){case"'":return"%27";case'"':return"%22";case"(":return"%28";case")":return"%29";default:return n}})}function n(n,i,r){var o,h,e,s;if(!u)for(u={},o=document.cookie?document.cookie.split("; "):[],e=0;e<o.length;e++){var l=o[e].split("="),h=c(l.shift()),f=l.join("=");switch(f[0]){case"#":f=+f.substring(1);break;case":":f=new Date(+f.substring(1));break;case"!":f=f==="!!";break;case"'":f=c(f.substring(1));break;default:f=c(f)}u[h]=f}if(h=String(n),i===undefined)return u[h];if(i===null){document.cookie=n+"=; path=/; expires="+new Date(0).toUTCString();delete u[h];return}if(u[h]=i,typeof i=="number")i="#"+i;else if(typeof i=="boolean")i=i?"!!":"!";else if(i)if(i.constructor===Date)i=":"+i.getTime();else if(nt(i))if(i.length)if(typeof i[0]=="number"){for(o=new Array(i.length),e=0;e<i.length;e++)if(o[e]=parseFloat(i[e]),isNaN(o[e])){o=null;break}i=o?JSON.stringify(o):t(String(i))}else i=encode(String(i));else i="[]";else i=typeof i=="string"?t(i):typeof i=="object"?JSON.stringify(i):String(i);else i="";r?r.constructor===Date||(s=new Date,typeof r=="number"?s.setDate(s.getDate()+r):s.setDate(s.getDate()+30)):s=null;document.cookie=[h+"="+i,"; path=/",s?"; expires = "+s.toUTCString():"",p?"; domain="+p:""].join("")}function tt(n){var i,t;if(!s)for(s={},i=window.location.search.substr(1).split("&"),t=0;t<i.length;t++){var r=i[t++].split("="),u=r.shift().toLowerCase(),f=r.join("=");s[u]=c(f)}return s[String(n).toLowerCase()]}function l(n){if(window.navigator.sendBeacon){window.navigator.sendBeacon(n);return}var t=document.createElement("img");t.style.display="none";t.src="about:blank";document.body.appendChild(t);t.src=n}function e(t,i,r){if(t===undefined){var u=n("_sa");return+(u||0)}n("_sa",t);a(i);rt(t,r)}function a(n){if(typeof localStorage=="undefined")return null;if(n===undefined){var t=+localStorage._vid_;return isNaN(t)&&(t=0),t}n>0&&(localStorage._vid_=n)}function it(){var n=new Date,t=new Date(n.getFullYear(),0,1),i=new Date(n.getFullYear(),6,1);return Math.max(t.getTimezoneOffset(),i.getTimezoneOffset())/60}function v(){var n,t,r,i;if(document.getElementsByTagName)n=document.getElementsByTagName("a");else if(window.$)n=$("a");else return"";for(t=0,r=n.length;t<r;t++){var u=n[t],f=u&&u.getAttribute("href"),e=f&&/^tel:(.+)$/.exec(f);if(e&&(i=e[1].replace(/\D+/g,""),i&&i.length>=10))return i}return""}function et(){var n;if(window.Process&&window.Process.Phones)try{n=window.Process.Phones()}catch(t){}return n||""}function w(){var i,f,r,u,n;if(document.getElementsByClassName)i=document.getElementsByClassName("ui-track-version");else if(window.$)i=$(".ui-track-version");else return"";for(f={},r=[],u=0;u<i.length;u++)n=i[u].getAttribute("id"),n&&!f[n]&&(f[n]=!0,r.push(n));return r.length?t(r.join("|")):""}function ot(u,f){var e=document.createElement("script"),o=window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0,s=window.innerHeight||document.documentElement.offsetHeight||document.body.offsetHeight||0;e.type="text/javascript";e.async=!0;e.src=r+"/sa4.js?"+i+","+u+","+a()+","+f+","+o+"x"+s+","+it()+","+v()+","+t(window.location.href)+","+(n("L")||"0")+","+(w()||"0")+","+(n("SEOD")||"");document.head.appendChild(e)}function st(t,i,u,f,o,s,h,c,a,y,p,w,b,k){var nt,rt,ut,tt,d,g,it,ft,et;if(t&&i){for(e(t,i,u),nt={SPPC:u,PPCAD:f,PPCEX:o,PPCCMP:s,SEOD:h,SEOK:c,PPCP1:a,PPCP2:y,PPCTR:p,L:w},rt=!!document.body.getAttribute("data-location"),!rt&&w>0&&(ut=n("L"),w!=ut&&window.location.replace(window.location.pathname+"?L_="+w)),tt=Object.keys(nt),d=0;d<tt.length;d++)g=tt[d],it=nt[g],it?n(g,it,k||!0):n(g,null);if(window.Process){try{window.Process.Delayed()}catch(ot){}ft=v();ft!=b&&(et=r+"/sa6.js?"+__said+","+t+","+b+","+a,l(et))}}}function rt(t,i){if(t){if(g)return;if(location.search&&/&(?:testmode|scid|noshrt)=/.test(location.search))return;i===undefined&&(i=n("SPPC")||tt("SPPC")||"")}else return;if(i){var r="#~"+ut(parseInt(t));window.location.hash!=r&&(window.history&&window.history.replaceState?(window.location.search&&window.location.search.indexOf("SPPC=")>0&&(r=window.location.pathname+r),window.history.replaceState(undefined,undefined,r)):window.location.replace&&window.location.replace(r))}}function ut(n){var t,u,i=!1,r=1,e,o,s,f;if(typeof n=="number"){if(isNaN(n))return undefined;for(t=n,e=[];t>0;)u=i?r*62:r*10,i=!i,o=t%u,s=ht(o/r),e.push(s),t-=o,r=u;return e.join("")}if(typeof n=="string"){if(!n)return 0;for(t=0,f=0;f<n.length;f++)u=ct(n,f),t+=u*r,r*=i?62:10,i=!i;return t}return undefined}function ht(n){return n<10?String.fromCharCode(n+48):n<36?String.fromCharCode(n+55):String.fromCharCode(n+61)}function ct(n,t){var i=n.charCodeAt(t);return i<58?i-48:i<91?i-55:i-61}function b(n,t){var i,r;if(n&&n.closest)return n.closest(t);for(i=n;i&&i.parentNode&&i!==document.body&&i!==document.documentElement;){if(r=i.nodeName,r&&r.toLowerCase()===t)return i;i=i.parentNode}return null}function lt(n){var t=n&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length);return!!t}function at(n){var r,i,t;if(n&&n.getElementsByTagName)for(r=n.getElementsByTagName("input"),i=0;i<r.length;i++)if(t=r[i],t&&t.getAttribute("type")==="text"&&lt(t))return t.value;return null}function vt(n){var t=(n.getAttribute("class")||"").trim();return t?t.replace(/(\s+)|([^\w\-])/g,function(n,t,i){return t?".":i?"\\"+i:""}):""}function yt(n){for(var i=[],t=n,r,u,f;t&&t.parentNode&&t!==document.body&&t!==document.documentElement;)r=t.getAttribute("id"),r&&i.push({id:r,el:t}),u=vt(t),f=(t.nodeName||"").toLowerCase(),(u||f==="li"||!i.length)&&i.push({cls:u,node:f,el:t}),t=t.parentNode;return i}function pt(n){for(var t,i,e,o,s=yt(n),r=[],u=document,f=0;f<s.length;f++){if(t=s[f],t.id){r.unshift("#"+t.id);u=t.el;break}else i=t.cls?t.node+"."+t.cls:t.node;e=u.querySelectorAll(i);e.length>1&&(o=Array.prototype.indexOf.call(e,t.el),o>-1&&(i+=":nth-child("+(o+1)+")"));r.unshift(i);u=t.el}return r}function wt(n){var i=b(n.target,"a"),e=i&&i.getAttribute("href"),u=b(n.target,"button"),t=b(u,"form"),o=t&&t.getAttribute("action"),c=t&&t.getAttribute("method")==="post",r,f,s;if(i)r=i;else if(u)r=u,e=o;else if(n.target)r=n.target;else return;if(h)try{f=h(n)}catch(l){}else f=o&&t.getAttribute("data-search")&&at(t);return s=pt(r),{selector:s.join(" "),href:e||"",post:c?"1":"",search:f||""}}function bt(n,t,i){var f=window.jwplayer,u=n&&document.getElementById(n),r;u&&u.nodeName&&/video/i.test(u.nodeName)?r=u:f&&(r=f(n));r&&t&&i&&(r.sa||(r.sa={}),r.sa.vvid=t,r.sa.vpid=i)}function kt(){var u=document.createElement("script"),f=window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0,e=window.innerHeight||document.documentElement.offsetHeight||document.body.offsetHeight||0;u.type="text/javascript";u.async=!0;u.src=r+"/sa.js?"+i+","+ft+","+(n("SPPC")||"")+","+(n("SEOD")||"")+","+t(n("SEOK")||"")+","+f+"x"+e+","+it()+","+v()+","+t(window.location.href)+","+a()+","+(n("PPCAD")||"")+","+(n("PPCEX")||"")+","+(n("PPCCMP")||"")+","+(n("L")||"0")+","+(w()||"0")+","+(et()||"0");document.head.appendChild(u)}function dt(u){var f=r+"/sa2.js?"+i+","+u+","+v()+","+t(window.location.href)+","+(n("L")||"0")+","+(w()||"0");l(f)}function gt(u){var o=e(),f,s;o&&(f=wt(u),s=r+"/sa3.js?"+i+","+o+","+t(f.selector)+","+(window.innerWidth||document.documentElement.offsetWidth||document.body.offsetWidth||0)+","+(window.innerHeight||document.documentElement.offsetHeight||document.body.offsetHeight||0)+","+Math.max(document.documentElement.scrollTop,document.body.scrollTop)+","+(u.pageX||u.clientX||0)+","+(u.pageY||u.clientY||0)+","+t(f.href)+","+t(f.post)+","+t(f.search)+","+(n("L")||"0"),l(s))}function ni(u,f,o,s,h,c){var a=e(),l;a&&(l=document.createElement("script"),l.type="text/javascript",l.async=!0,l.src=r+"/va.js?"+i+","+a+","+u+","+t(o||"")+","+s+","+h+","+f+","+c+","+(n("L")||"0"),document.head.appendChild(l))}function ti(t,u,f,e){var o=r+"/va2.js?"+i+","+t+","+u+","+f+","+e+","+(n("L")||"0");l(o)}var i,g,r,nt,h,p,o,y,k,d;if(!(document.cookie.indexOf("COOK=NO!")>-1)&&(i=document.documentElement.getAttribute("data-sa"),g=!!document.documentElement.getAttribute("data-sd"),i&&!/google|bing|yahoo|spider|crawl|monitor|site24|bots\b|bot\b/i.test(window.navigator.userAgent||""))){var u=null,s=null,ft="https:"===window.location.protocol?"1":"",f=document.body.getAttribute("data-api")||"api";switch(f){case"dev-csx":f="dev";break;case"staging-csx":f="staging"}r=f==="api"?"https://sa.scorpion.co":"https://"+f+".scorpion.co/platform/analytics";nt=Array.isArray||function(n){return n&&n.constructor===Array};h=null;window.location.host&&window.location.host.indexOf("www.")===0&&(p=window.location.host.substr(3));window.SA={Cookie:n,Query:tt};window._said_=e;window._vaid_=a;window._raid_=st;window._vvid_=bt;window._sa_videoStart=ni;window._sa_videoPlay=ti;window._sa_overrideSearch=function(n){h=n};o=e();y=n("SPPC");!y&&window.location.hash&&(d=window.location.hash,d[1]==="~"&&(k=ut(d.substr(2))));k?(n("SPPC","true"),ot(o,k)):o?(dt(o),y&&rt(o,y),window.Process&&window.Process.Delayed()):(kt(),window.Process&&window.Process.Delayed());window.navigator.sendBeacon&&document.addEventListener&&document.addEventListener("click",gt,!0)}})();
$.widget("cms.simpleShowHide",{options:{className:"show",slider:!1,fader:!1,speed:500,htmlClass:!1},_create:function(){var t,n;this.element.attr({role:"dialog"});this.btn=this.element.find('[data-role="btn"]').attr({role:"button",tabindex:0,"aria-pressed":!1,"aria-haspopup":!1});this.panel=this.element.find('[data-role="panel"]').attr({"aria-hidden":!0});t=this._handleEvents.bind(this);this.btn.on("click keydown",t);n=this;$(document).on("keydown",function(t){t.keyCode===27&&n.element.is("."+n.options.className)&&n.hidePanel()})},_handleEvents:function(n){(n.type!=="keydown"||n.keyCode===13)&&(this.element.is("."+this.options.className)?this.hidePanel():this.showPanel())},hidePanel:function(){this.element.removeClass(this.options.className).trigger("hidepanel");this.options.htmlClass===!0&&$("html").removeClass(this.options.className);this.panel.attr({"aria-hidden":!0});this.btn.attr({"aria-pressed":!1});this.options.slider===!0?this.panel.slideUp(this.options.speed):this.options.fader===!0&&this.panel.fadeOut(this.options.speed);this.btn.length===1?this.btn.focus():this.btn.filter('[ data-type="open" ]').focus()},showPanel:function(){this.element.addClass(this.options.className).trigger("showpanel");this.options.htmlClass===!0&&$("html").addClass(this.options.className);this.panel.attr({"aria-hidden":!1});this.btn.attr({"aria-pressed":!0});this.options.slider===!0?this.panel.slideDown(this.options.speed):this.options.fader===!0&&this.panel.fadeIn(this.options.speed);this.panel.focus()}});window.register&&window.register("/includes/js/simple-show-hide-script.js");
rrequire(["/includes/js/simple-show-hide-script.js"],function(){var n=$(".accessibility-options.v1");n.simpleShowHide({htmlClass:!0,className:"options-available"})});
rrequire(["/includes/js/simple-show-hide-script.js","m/tabbable"],function(){var n=window.innerWidth-1025;n!==Math.abs(n)&&($("#HeaderV4").simpleShowHide({className:"menu-open",htmlClass:!0}),$("#HeaderV4 .el-tab-box").tabbable({siblings:!0,slider:!0,speed:500,closing:!0}))});
$.widget("cms.videoTranscript",{options:{},_create:function(){this.transcript=this.element.find('[data-role="transcript"]');this.content;this.transcriptData;this.html;this.video;this.timestamps;this.captions;$.get(this.transcript.data("transcription"),function(n){this.content=n;this.transcriptData=this._parseContent(this.content);this.html=this._getHtml();this.transcript.html(this.html);console.log(this.html);this._videoSetup()}.bind(this))},_getFragment:function(n,t,i,r){return i=r?i-4:i,n.substring(t,i).trim()},_parseContent:function(n){if(!n)return null;for(var y,w=n.length,t=0,i,e=!1,s=!1,h=!1,c=!1,l=!1,f=!1,r=[],u,o,p=null,a=null,v=null;t<w;){y=n[t];switch(y){case"0":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":l||f||(e?!e||h||c||(i=t,c=!0):(s&&(r[u].content=this._getFragment(n,i,t-1)),i=t,e=!0,h=!0,o=undefined));t+=1;break;case" ":e&&h&&(a=this._getFragment(n,i,t,!0),h=!1);t+=1;break;case"\n":e?c&&(v=this._getFragment(n,i,t-1,!0),c=!1,p=a+" --> "+v,r.push({range:p,start:a,end:v}),s=!1,i=t+1,u=r.length-1,e=!1):f&&(r[u].children[o].caption=this._getFragment(n,i,t),f=!1);t+=1;break;case"<":f?(r[u].children[o].caption=this._getFragment(n,i,t),f=!1):(l=!0,i=t,s=!1);t+=1;break;case">":l&&(o===undefined&&(r[u].children=[]),r[u].children.push({time:this._getFragment(n,i+1,t,!0)}),o=r[u].children.length-1,l=!1,f=!0,i=t+1);t+=1;break;default:t+=1}}return s?r[u].content=this._getFragment(n,i,t-1):f&&(r[u].children[o].caption=this._getFragment(n,i,t)),console.log(r),r},_getHtml:function(){var e=document.createElement("ul"),f=[],s=new RegExp("/[^0:].+/g"),u,r;for(i=0;i<this.transcriptData.length;i++){var n=this.transcriptData[i],o=n.start.slice(3),t=document.createElement("a"),u=document.createElement("p");t.setAttribute("class","timestamp fit");t.setAttribute("tabindex",0);t.setAttribute("data-role","timestamp");t.setAttribute("role","button");t.setAttribute("data-time",n.start);t.innerHTML=o;u.setAttribute("class","auto");n.children?u.innerHTML=this._addBlocks(n.children):n.content&&(u='<a class="caption-block fit" role="button" tabindex="0" data-role="caption" data-time="'+n.start+'">'+n.content+"<\/a>");r=document.createElement("li");r.setAttribute("class","flex-top");r.appendChild(t);r.appendChild(u);f.push(r)}for(k=0;k<f.length;k++)e.appendChild(f[k]);return e},_addBlocks:function(n){var t=[];for(j=0;j<n.length;j++)t.push('<a class="caption-block fit" role="button" tabindex="0" data-role="caption" data-time="'+n[j].time+'">'+n[j].caption+"<\/a>");return t.join(" ")},_videoSetup:function(){this.video=this.element.find("video");this.timestamps=this.element.find('[data-role="timestamp"]');this.captions=this.element.find('[data-role="caption"]');var n=this.timestamps;this.video.on("timeupdate",function(){this._checkCaptions(this.video[0].currentTime)}.bind(this));this.timestamps.add(this.captions).on("click keydown",function(n){if(n.type!=="keydown"||n.keyCode=="13"){var t=$(n.target).data("time").split(":");this.video[0].currentTime=+t[0]*3600+ +t[1]*60+ +t[2];this.video[0].play()}}.bind(this))},_checkCaptions:function(n){var u=new Date(null),r,t,i;for(u.setSeconds(n),r=u.toISOString().substr(11,8),t=0;this.transcriptData[t].end<=r;)if(t+=1,t===this.transcriptData.length-1)break;if(this.transcriptData[t].children){for(i=this.transcriptData[t].children.length-1;this.transcriptData[t].children[i].time>r;)if(i-=1,i===this.transcriptData[t].children.length-1)break;this.captions.filter('[data-time="'+this.transcriptData[t].children[i].time+'"]').is(".active")||(this.captions.filter(".active").removeClass("active"),this.captions.filter('[data-time="'+this.transcriptData[t].children[i].time+'"]').addClass("active"))}else this.timestamps.filter('[data-time="'+this.transcriptData[t].start+'"]').closest("li").is(".active")||(this.timestamps.closest("li").filter(".active").removeClass("active"),this.timestamps.filter('[data-time="'+this.transcriptData[t].start+'"]').closest("li").addClass("active"))}});window.register&&window.register("/includes/js/video-transcript-script.js");
rrequire(["/includes/js/video-transcript-script.js"],function(){var n=$("#BlogPostPageV1");n.find(".transcript-btn").click(function(){n.videoTranscript()})});