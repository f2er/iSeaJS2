define("jquery/mousewheel/3.1.3/mousewheel",["$"],function(e,t,n){var o=e("$");(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof t?n.exports=e:e(o)})(function(e){function t(t){var l,i=t||window.event,s=[].slice.call(arguments,1),h=0,u=0,a=0,r=0,d=0;return t=e.event.fix(i),t.type="mousewheel",i.wheelDelta&&(h=i.wheelDelta),i.detail&&(h=-1*i.detail),i.deltaY&&(a=-1*i.deltaY,h=a),i.deltaX&&(u=i.deltaX,h=-1*u),void 0!==i.wheelDeltaY&&(a=i.wheelDeltaY),void 0!==i.wheelDeltaX&&(u=-1*i.wheelDeltaX),r=Math.abs(h),(!n||n>r)&&(n=r),d=Math.max(Math.abs(a),Math.abs(u)),(!o||o>d)&&(o=d),l=h>0?"floor":"ceil",h=Math[l](h/n),u=Math[l](u/o),a=Math[l](a/o),s.unshift(t,h,u,a),(e.event.dispatch||e.event.handle).apply(this,s)}var n,o,l=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],i="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];if(e.event.fixHooks)for(var s=l.length;s;)e.event.fixHooks[l[--s]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=i.length;e;)this.addEventListener(i[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=i.length;e;)this.removeEventListener(i[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})});