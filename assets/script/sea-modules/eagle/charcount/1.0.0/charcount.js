define("eagle/charcount/1.0.0/charcount",["gallery/jquery/1.8.0/jquery"],function(e,n){var t=e("gallery/jquery/1.8.0/jquery"),l={allowed:140,warning:25,css:{normal:"counter",warning:"warning",exceeded:"exceeded"},tips:{counterElement:"span",normal:"还可以输入{available}字",exceeded:"已经超过{exceeded}字"},label:"",half:!0,capture:!0,initKey:!1,closed:!1,callbacks:{common:function(){},crisis:function(){}}};n.init=function(e,n,r){function a(){return h?g.text():g.val()}function c(e){return h?g.text(e):g.val(e)}function i(){var e=a();if(!r.half)return c(e.substring(0,r.allowed)),void 0;for(var n=0,t="",l=0;e.length>l;l++){var i=e.charCodeAt(l);if(n+=i>=0&&128>=i?.5:1,n>r.allowed)break;t+=e.substr(l,1)}c(t)}function o(e){if(0==arguments.length)return null;var n=Array.prototype.slice.call(arguments,1);return e.replace(/\{(\d+)\}/g,function(e,t){return"function"==typeof n[t]?n[t]():n[t]})}function u(e,n,t,l){var a=r.tips[e]?r.tips[e]:r.tips.normal,c=[],i="";c.push("<"),c.push(r.tips.counterElement),c.push(' class="{0}"'),c.push(">"),c.push("{1}"),c.push("</"+r.tips.counterElement+">"),i=c.join(""),a=a.replace(/\{already\}/g,function(){return o(i,function(){return"warning"==e?r.css.normal+" "+r.css.warning:r.css.normal},n)}),a=a.replace(/\{available\}/g,function(){return o(i,function(){return"warning"==e?r.css.normal+" "+r.css.warning:r.css.normal},t)}),a=a.replace(/\{exceeded\}/g,function(){return o(i,function(){return"exceeded"==e?r.css.normal+" "+r.css.exceeded:r.css.normal},l)}),a=a.replace(/\{allowed\}/g,function(){return o(i,r.css.normal,r.allowed)}),p.html(a)}function s(){function e(){n=m.getAlready(),t=m.getAvailable(),l=m.getExceeded()}if(!r.closed){var n=0,t=0,l=0;e(),f.call(),l>0?(r.capture?(i(),e(),u("warning",n,0,l)):u("exceeded",n,t,l),d.call()):r.warning>=t?u("warning",n,t,l):u("normal",n,t,l)}}var r=t.extend(!0,{},l,r||{}),f=r.callbacks.common,d=r.callbacks.crisis,g=t(e),p=t(n),h="true"==g.attr("contentEditable");if(!g.length||!p.length)return null;var m={options:r,getAlready:function(){var e=a(),n=0;if(""!=t.trim(r.label)){var l=RegExp("^"+r.label);l.test(e)&&(e=e.replace(l,""))}return n=r.half?e.replace(/[^\x00-\xff]/g,"aa").length/2:e.length,Math.ceil(n)},getAvailable:function(){return r.allowed>this.getAlready()?r.allowed-this.getAlready():0},getExceeded:function(){return this.getAlready()>r.allowed?this.getAlready()-r.allowed:0},calculate:function(){s()},open:function(){r.closed=!1,p.show(),this.calculate()},close:function(){r.closed=!0,p.hide()}};return r.initKey&&s(),""!=t.trim(r.label)&&""==a()&&c(r.label),g.off(".cc").on("propertychange.cc input.cc keydown.cc keyup.cc change.cc",s),g.off(".cf").on("focus.cf",function(){""!=t.trim(r.label)&&t.trim(r.label)==t.trim(a())&&c("")}),g.off(".cb").on("blur.cb",function(){""!=t.trim(r.label)&&""==a()&&c(r.label)}),m}});