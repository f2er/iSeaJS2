define("gallery/swfobject/2.2.0/swfobject",[],function(){var e=function(){function t(){if(!U){try{var e=P.getElementsByTagName("body")[0].appendChild(m("span"));e.parentNode.removeChild(e)}catch(t){return}U=!0;for(var n=H.length,a=0;n>a;a++)H[a]()}}function n(e){U?e():H[H.length]=e}function a(e){if(typeof V.addEventListener!=k)V.addEventListener("load",e,!1);else if(typeof P.addEventListener!=k)P.addEventListener("load",e,!1);else if(typeof V.attachEvent!=k)g(V,"onload",e);else if("function"==typeof V.onload){var t=V.onload;V.onload=function(){t(),e()}}else V.onload=e}function i(){D?r():o()}function r(){var e=P.getElementsByTagName("body")[0],t=m(B);t.setAttribute("type",x);var n=e.appendChild(t);if(n){var a=0;(function(){if(typeof n.GetVariable!=k){var i=n.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),Z.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}else if(10>a)return a++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),n=null,o()})()}else o()}function o(){var e=W.length;if(e>0)for(var t=0;e>t;t++){var n=W[t].id,a=W[t].callbackFn,i={success:!1,id:n};if(Z.pv[0]>0){var r=h(n);if(r)if(!w(W[t].swfVersion)||Z.wk&&312>Z.wk)if(W[t].expressInstall&&l()){var o={};o.data=W[t].expressInstall,o.width=r.getAttribute("width")||"0",o.height=r.getAttribute("height")||"0",r.getAttribute("class")&&(o.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(o.align=r.getAttribute("align"));for(var f={},u=r.getElementsByTagName("param"),p=u.length,v=0;p>v;v++)"movie"!=u[v].getAttribute("name").toLowerCase()&&(f[u[v].getAttribute("name")]=u[v].getAttribute("value"));c(o,f,n,a)}else d(r),a&&a(i);else C(n,!0),a&&(i.success=!0,i.ref=s(n),a(i))}else if(C(n,!0),a){var y=s(n);y&&typeof y.SetVariable!=k&&(i.success=!0,i.ref=y),a(i)}}}function s(e){var t=null,n=h(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=k)t=n;else{var a=n.getElementsByTagName(B)[0];a&&(t=a)}return t}function l(){return!X&&w("6.0.65")&&(Z.win||Z.mac)&&!(Z.wk&&312>Z.wk)}function c(e,t,n,a){X=!0,T=a||null,I={success:!1,id:n};var i=h(n);if(i){"OBJECT"==i.nodeName?(N=f(i),S=null):(N=i,S=n),e.id=$,(typeof e.width==k||!/%$/.test(e.width)&&310>parseInt(e.width,10))&&(e.width="310"),(typeof e.height==k||!/%$/.test(e.height)&&137>parseInt(e.height,10))&&(e.height="137"),P.title=P.title.slice(0,47)+" - Flash Player Installation";var r=Z.ie&&Z.win?"ActiveX":"PlugIn",o="MMredirectURL="+(""+V.location).replace(/&/g,"%26")+"&MMplayerType="+r+"&MMdoctitle="+P.title;if(typeof t.flashvars!=k?t.flashvars+="&"+o:t.flashvars=o,Z.ie&&Z.win&&4!=i.readyState){var s=m("div");n+="SWFObjectNew",s.setAttribute("id",n),i.parentNode.insertBefore(s,i),i.style.display="none",function(){4==i.readyState?i.parentNode.removeChild(i):setTimeout(arguments.callee,10)}()}u(e,t,n)}}function d(e){if(Z.ie&&Z.win&&4!=e.readyState){var t=m("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(f(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(f(e),e)}function f(e){var t=m("div");if(Z.win&&Z.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(B)[0];if(n){var a=n.childNodes;if(a)for(var i=a.length,r=0;i>r;r++)1==a[r].nodeType&&"PARAM"==a[r].nodeName||8==a[r].nodeType||t.appendChild(a[r].cloneNode(!0))}}return t}function u(e,t,n){var a,i=h(n);if(Z.wk&&312>Z.wk)return a;if(i)if(typeof e.id==k&&(e.id=n),Z.ie&&Z.win){var r="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));var s="";for(var l in t)t[l]!=Object.prototype[l]&&(s+='<param name="'+l+'" value="'+t[l]+'" />');i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+s+"</object>",G[G.length]=e.id,a=h(e.id)}else{var c=m(B);c.setAttribute("type",x);for(var d in e)e[d]!=Object.prototype[d]&&("styleclass"==d.toLowerCase()?c.setAttribute("class",e[d]):"classid"!=d.toLowerCase()&&c.setAttribute(d,e[d]));for(var f in t)t[f]!=Object.prototype[f]&&"movie"!=f.toLowerCase()&&p(c,f,t[f]);i.parentNode.replaceChild(c,i),a=c}return a}function p(e,t,n){var a=m("param");a.setAttribute("name",t),a.setAttribute("value",n),e.appendChild(a)}function v(e){var t=h(e);t&&"OBJECT"==t.nodeName&&(Z.ie&&Z.win?(t.style.display="none",function(){4==t.readyState?y(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function y(e){var t=h(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function h(e){var t=null;try{t=P.getElementById(e)}catch(n){}return t}function m(e){return P.createElement(e)}function g(e,t,n){e.attachEvent(t,n),J[J.length]=[e,t,n]}function w(e){var t=Z.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function b(e,t,n,a){if(!Z.ie||!Z.mac){var i=P.getElementsByTagName("head")[0];if(i){var r=n&&"string"==typeof n?n:"screen";if(a&&(L=null,j=null),!L||j!=r){var o=m("style");o.setAttribute("type","text/css"),o.setAttribute("media",r),L=i.appendChild(o),Z.ie&&Z.win&&typeof P.styleSheets!=k&&P.styleSheets.length>0&&(L=P.styleSheets[P.styleSheets.length-1]),j=r}Z.ie&&Z.win?L&&typeof L.addRule==B&&L.addRule(e,t):L&&typeof P.createTextNode!=k&&L.appendChild(P.createTextNode(e+" {"+t+"}"))}}}function C(e,t){if(z){var n=t?"visible":"hidden";U&&h(e)?h(e).style.visibility=n:b("#"+e,"visibility:"+n)}}function E(e){var t=/[\\\"<>\.;]/,n=null!=t.exec(e);return n&&typeof encodeURIComponent!=k?encodeURIComponent(e):e}function A(e){var t=h(e),n=m("a");return n.className="object-unsupported",n.setAttribute("href",t.getAttribute("data-download-flashplayer")||"http://get.adobe.com/cn/flashplayer/"),n.setAttribute("title","点击安装Flash Player插件"),n.innerHTML=['<span class="object-unsupported-ctn">',"请先安装Flash Player插件","<br />","让你的浏览器与我们的精彩同步！","</span>"].join(""),t.parentNode.replaceChild(n,t),n}var N,S,T,I,L,j,k="undefined",B="object",O="Shockwave Flash",F="ShockwaveFlash.ShockwaveFlash",x="application/x-shockwave-flash",$="SWFObjectExprInst",M="onreadystatechange",V=window,P=document,R=navigator,D=!1,H=[i],W=[],G=[],J=[],U=!1,X=!1,z=!0,Z=function(){var e=typeof P.getElementById!=k&&typeof P.getElementsByTagName!=k&&typeof P.createElement!=k,t=R.userAgent.toLowerCase(),n=R.platform.toLowerCase(),a=n?/win/.test(n):/win/.test(t),i=n?/mac/.test(n):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof R.plugins!=k&&typeof R.plugins[O]==B)l=R.plugins[O].description,!l||typeof R.mimeTypes!=k&&R.mimeTypes[x]&&!R.mimeTypes[x].enabledPlugin||(D=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof V.ActiveXObject!=k)try{var c=new ActiveXObject(F);c&&(l=c.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(d){}return{w3:e,pv:s,wk:r,ie:o,win:a,mac:i}}();return function(){Z.w3&&((typeof P.readyState!=k&&"complete"==P.readyState||typeof P.readyState==k&&(P.getElementsByTagName("body")[0]||P.body))&&t(),U||(typeof P.addEventListener!=k&&P.addEventListener("DOMContentLoaded",t,!1),Z.ie&&Z.win&&(P.attachEvent(M,function(){"complete"==P.readyState&&(P.detachEvent(M,arguments.callee),t())}),V==top&&function(){if(!U){try{P.documentElement.doScroll("left")}catch(e){return setTimeout(arguments.callee,0),void 0}t()}}()),Z.wk&&function(){return U?void 0:/loaded|complete/.test(P.readyState)?(t(),void 0):(setTimeout(arguments.callee,0),void 0)}(),a(t)))}(),function(){Z.ie&&Z.win&&window.attachEvent("onunload",function(){for(var t=J.length,n=0;t>n;n++)J[n][0].detachEvent(J[n][1],J[n][2]);for(var a=G.length,i=0;a>i;i++)v(G[i]);for(var r in Z)Z[r]=null;Z=null;for(var o in e)e[o]=null;e=null})}(),{registerObject:function(e,t,n,a){if(Z.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=a,W[W.length]=i,C(e,!1)}else a&&a({success:!1,id:e})},getObjectById:function(e){return Z.w3?s(e):void 0},embedSWF:function(e,t,a,i,r,o,s,d,f,p){var v={success:!1,id:t};Z.w3&&!(Z.wk&&312>Z.wk)&&e&&t&&a&&i&&r?(C(t,!1),n(function(){a+="",i+="";var n={};if(f&&typeof f===B)for(var y in f)n[y]=f[y];n.data=e,n.width=a,n.height=i;var h={};if(d&&typeof d===B)for(var m in d)h[m]=d[m];if(s&&typeof s===B)for(var g in s)typeof h.flashvars!=k?h.flashvars+="&"+g+"="+s[g]:h.flashvars=g+"="+s[g];if(w(r)){var b=u(n,h,t);n.id==t&&C(t,!0),v.success=!0,v.ref=b}else{if(o&&l())return n.data=o,c(n,h,t,p),window.console&&console.log("showExpressInstall"),void 0;C(t,!0),A(t)}p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){z=!1},ua:Z,getFlashPlayerVersion:function(){return{major:Z.pv[0],minor:Z.pv[1],release:Z.pv[2]}},hasFlashPlayerVersion:w,createSWF:function(e,t,n){return Z.w3?u(e,t,n):void 0},showExpressInstall:function(e,t,n,a){Z.w3&&l()&&c(e,t,n,a)},removeSWF:function(e){Z.w3&&v(e)},createCSS:function(e,t,n,a){Z.w3&&b(e,t,n,a)},addDomLoadEvent:n,addLoadEvent:a,getQueryParamValue:function(e){var t=P.location.search||P.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return E(t);for(var n=t.split("&"),a=0;n.length>a;a++)if(n[a].substring(0,n[a].indexOf("="))==e)return E(n[a].substring(n[a].indexOf("=")+1))}return""},expressInstallCallback:function(){if(X){var e=h($);e&&N&&(e.parentNode.replaceChild(N,e),S&&(C(S,!0),Z.ie&&Z.win&&(N.style.display="block")),T&&T(I)),X=!1}}}}();return window.swfobject=e,e});