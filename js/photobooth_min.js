/**
*
* Photobooth.js version 0.7
*
* build Sun Dec 02 2012 18:07:12 GMT+0000 (GMT Standard Time)
*
* CSS
*/
window.addEventListener("load",function(){var s = document.createElement("style"); s.innerHTML=".photobooth{position:relative;font:11px arial,sans-serif;overflow:hidden;user-select:none;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none}.photobooth canvas{position:absolute;left:0;top:0}.photobooth .blind{position:absolute;left:0;top:0;opacity:0;width:100%;height:100%;background:#fff;z-index:1}.photobooth .blind.anim{transition:opacity 1500ms ease-out;-o-transition:opacity 1500ms ease-out;-moz-transition:opacity 1500ms ease-out;-webkit-transition:opacity 1500ms ease-out}.photobooth .warning{position:absolute;top:45%;background:#ffebeb;color:#cf0000;border:1px solid #cf0000;width:60%;left:50%;margin-left:-30%;display:none;padding:5px;text-align:center}.photobooth .warning span{text-decoration:underline;cursor:pointer;color:#333}.photobooth ul{width:30px;position:absolute;right:0;top:0;background:rgba( 0,0,0,.6 );height:190px;z-index:2;border-bottom-left-radius:5px}.photobooth ul li{width:30px;height:38px;background-repeat:no-repeat;background-position:center center;cursor:pointer;position:relative}.photobooth ul li:hover{background-color:#aaa}.photobooth ul li.selected{background-color:#ccc}.photobooth ul.noHSB{height:80px}.photobooth ul.noHSB li.hue,.photobooth ul.noHSB li.saturation,.photobooth ul.noHSB li.brightness{display:none}.photobooth ul li.hue{background-image:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgACAAYAwERAAIRAQMRAf/EAHgAAQEAAAAAAAAAAAAAAAAAAAkIAQEAAwAAAAAAAAAAAAAAAAAKBggLEAAAAwQLAAAAAAAAAAAAAAAAMQZBAjQ4A3MEdMQFdQcICTkRAAEBBAcGBwAAAAAAAAAAABExAAEhElECMjMEBQlhwgNzFDgVNRY3CBgK/9oADAMBAAIRAxEAPwBGOKPmqmNdT5FD2YgarLO67OVueIqrxF2tI/1Kn0jjjKfFcJZEt+5BAUCAaKuw+ThT3vC0wbFof+U4Dnv3WGl8Pu47A8vecwabKy8ZRVNKFdF3dY72fztbVdFu67axelcfrPkYlPTutCW7qqYCkwDf/9k=)}.photobooth ul li.saturation{background-image:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgACAAYAwERAAIRAQMRAf/EAGMAAAMAAAAAAAAAAAAAAAAAAAYICQEBAQEAAAAAAAAAAAAAAAAACAkKEAAABgMBAAAAAAAAAAAAAAAAwYIDMwZxAkQHEQABAgUFAAAAAAAAAAAAAAAAAQYxgQIyM3HBQgMH/9oADAMBAAIRAxEAPwAwo0rWdSFXHBYpnLZmWjVB/fLedIODu5Do81j1y2KE0CJlJA2uK5ZjtY2Kg//Z)}.photobooth ul li.brightness{background-image:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgACAAYAwERAAIRAQMRAf/EAFcAAQAAAAAAAAAAAAAAAAAAAAoBAQAAAAAAAAAAAAAAAAAAAAAQAAAEBQUAAAAAAAAAAAAAAACxAwgBMXECBXJzBDQ1EQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwAcTWfR4GtIwC5mITxNUDgAYA0joY3aRKwB/9k=)}.photobooth ul li.crop{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEFJREFUeNpi/A8EDAjACMT/qUgzMCJZwMhAXQA2l4VGhsPNZKKR4XBfMMG8QiPASDcf0MIX/2FxgCJARRoMAAIMAK49Iv4yTUj5AAAAAElFTkSuQmCC)}.photobooth ul li.trigger{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAa9JREFUeNqc1M8rRFEUwPF5M4MhP8aPIiIS21lQk1Is5ceChZIdOytlI/+A7Ig/gGRhpYiNbKQsrBRFLPzYWJghNH7MjOd76qhr8m6vOfWpmffevefec987juu6AZ8RQhhBpJHJuT+CfsiEDo6wGjYeKMKn8b8Um/jCG2qQ0skjyOIWB9hFNyaN8bWSwGEHM5q9EVc6mUQ9YpjDHQbwoQkjuspDDKNEF9hjJDjFcoAEx653XEoJMYoVxNGBGPZRhzbL+HTYWLEtpO6V6EQ5kijTc7HFiwyssDwgyXsxhW8tkZSxAAksoj3n7P4G20hatviKE3RpqXKN4V5K4TE+IQ89WBI8ao0DFkP49krw+057xbyWxBY72LIdXsbjnlzf8/kRbtgSeO1APqonnwlu8tlBIYp9JojmkyCiX7Kf6MsngcSsvvO2aMZEPmcgEcea7ua/aNKGaC2RY0lwgTNsYwwNOlkrprGOJe2q/84vvegabdrrQyqomrSTyirHtbPKc+84x4L2qBazORi/s9KuC7QfBY3JC1UVBlGt16PallPap+Tas+7wWc8za1Ql8yPAAAzkXGo1lmDtAAAAAElFTkSuQmCC)}.photobooth .submenu{background:rgba( 0,0,0,.6 );position:absolute;width:100px;opacity:0;height:20px;padding:5px 10px;color:#fff;top:4px;left:-124px;border-radius:5px;-webkit-transition:opacity 500ms ease;-moz-transition:opacity 500ms ease;-o-transition:opacity 500ms ease;-msie-transition:opacity 500ms ease;transition:opacity 500ms ease}.photobooth li:hover .submenu{opacity:1}.photobooth .submenu .tip{width:4px;height:8px;position:absolute;right:-4px;top:50%;margin-top:-2px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADVJREFUeNpiYGBgmAnEDP///wdjJgYImMnIyAhmwATggowwLTCArAKrQDqyQDrcMGQlAAEGAAGOCdflbyWyAAAAAElFTkSuQmCC)}.photobooth .submenu .slider{width:100px;height:20px;position:relative}.photobooth .submenu .slider .track{height:2px;width:100px;position:absolute;top:9px;background:rgba(255,255,255,.6)}.photobooth .submenu .slider .handle{height:14px;width:2px;position:absolute;top:3;background:#fff;z-index:2}.photobooth .submenu .slider .handle div{position:absolute;z-index:3;width:20px;top:-3px;height:20px;cursor:w-resize;left:-9px}.resizehandle{position:absolute;z-index:1;width:100px;height:100px;left:30px;top:30px;cursor:move;outline:1500px solid rgba( 0,0,0,.35 );box-shadow:2px 2px 10px rgba(0,0,0,.5),0 0 3px #000;opacity:0;transition:opacity 500ms ease;-moz-transition:opacity 500ms ease;-o-transition:opacity 500ms ease;-webkit-transition:opacity 500ms ease}noindex:-o-prefocus,.resizehandle{outline:0!important}@-moz-document url-prefix(){.resizehandle{ box-shadow:none!important}}.resizehandle .handle{width:100%;height:100%;border:2px dashed #0da4d3;margin:-2px 0 0 -2px;z-index:3;position:relative}.resizehandle .handle div{width:18px;height:18px;position:absolute;right:-2px;bottom:-2px;z-index:4;cursor:se-resize;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHdJREFUeNpi/P//PwO5gIlcjXxLr/xnIlujsg7pNsM0AgEjE7kaSfIzusZ/d4n0M1aNxPgZWeMHC4RGIJuREV8847IRpBGvnwlpxBnPRGkEyYOcjYx5l1z+z3/8Pwij8NHlQWwUPxNrI4afSdUI9zNZGoF8gAADAOGvmx/e+CgVAAAAAElFTkSuQmCC);background-position:top left;background-repeat:no-repeat}"; document.head.appendChild(s);},false);
/**
* JS
*/
Photobooth=function(e){e.length&&(e=e[0]);var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.oGetUserMedia||navigator.msieGetUserMedia||!1;this.onImage=function(){},this.pause=function(){f===!1&&(f=!0,l&&l.stop&&l.stop())},this.resume=function(){f===!0&&(f=!1,A())},this.destroy=function(){this.pause(),e.removeChild(g)},this.forceHSB=!1,this.isSupported=!!t,this.resize=function(e,t){if(e<200||t<200)throw"Error: Not enough space for Photobooth. Min height / width is 200 px";h=e,p=t,T.setMax(h,p),g.style.width=e+"px",g.style.height=t+"px",y.width=e,y.height=t,w.width=e,w.height=t,S.width=e,S.height=t};var n=function(e){e.stopPropagation(),e.cancelBubble=!0};Drag=function(e){var t=0,n=0,r=this;this.onStart=function(){},this.onMove=function(){},this.onStop=function(){};var i=function(e){e.preventDefault(),t=e.clientX,n=e.clientY,r.onStart(t,n),document.addEventListener("mousemove",s,!1),document.addEventListener("mouseup",o,!1)},s=function(e){r.onMove(e.clientX-t,e.clientY-n)},o=function(e){r.onStop(e.clientX-t,e.clientY-n),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};e.addEventListener("mousedown",i,!1)};var r=function(e,t){e.innerHTML='<div class="submenu"><div class="tip"></div><div class="slider"><div class="track"></div><div class="handle" style="left:50px"><div></div></div></div></div>';var r=50,i=50,s=e.getElementsByClassName("handle")[0],o=e.getElementsByClassName("slider")[0],u=new Drag(s);u.onMove=function(e){a(r+e)},u.onStop=function(e){r=i};var a=function(e){e>0&&e<100&&(i=e,s.style.left=e+"px",t((e-50)/100))},f=function(e){a(e.layerX),r=i};o.addEventListener("click",f,!1),s.addEventListener("click",n,!1)},i=function(e,t,r){this.setMax=function(e,n){t=e,r=n},this.getData=function(){return{x:i,y:s,width:o,height:u}},this.isActive=function(){return h},this.toggle=function(){h===!1?(p.style.opacity=1,h=!0):(p.style.opacity=0,h=!1)};var i=30,s=30,o=100,u=100,a=30,f=30,l=100,c=100,h=!1,p=document.createElement("div");p.className="resizehandle",p.innerHTML='<div class="handle"><div></div></div>',e.appendChild(p);var d=p.getElementsByTagName("div")[0],v=new Drag(d);v.onMove=function(e,n){i+e+o<t&&i+e>0&&(a=i+e,p.style.left=a+"px"),s+n+u<r&&s+n>0&&(f=s+n,p.style.top=f+"px")},v.onStop=function(){i=a,s=f};var m=p.getElementsByTagName("div")[1];m.addEventListener("mousedown",n,!1);var g=new Drag(m);g.onMove=function(e,n){i+e+o<t&&o+e>18&&(l=o+e,p.style.width=l+"px"),s+n+u<r&&u+n>18&&(c=u+n,p.style.height=c+"px")},g.onStop=function(){o=l,u=c}},s=0,o=0,u=0,a=!1,f=!1,l=null,c=this,h=e.offsetWidth,p=e.offsetHeight,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},v=function(e){return g.getElementsByClassName(e)[0]},m=function(e){return document.createElement(e)},g=m("div");g.className="photobooth",g.innerHTML='<div class="blind"></div><canvas></canvas><div class="warning notSupported">Sorry, Photobooth.js is not supported by your browser</div><div class="warning noWebcam">Please give Photobooth permission to use your Webcam. <span>Try again</span></div><ul><li title="色调(hue)"class="hue"></li><li title="饱和度(saturation)"class="saturation"></li><li title="亮度(brightness)"class="brightness"></li><li title="裁剪(crop)" class="crop"></li><li title="拍照(take picgure)"class="trigger"></li></ul>';var y=m("canvas"),b=y.getContext("2d"),w=g.getElementsByTagName("canvas")[0],E=w.getContext("2d"),S=m("video");S.autoplay=!0;var x=v("noWebcam");x.getElementsByTagName("span")[0].onclick=function(){A()},new r(v("hue"),function(e){s=e}),new r(v("saturation"),function(e){o=e}),new r(v("brightness"),function(e){u=e});var T=new i(g,h,p),N=v("crop");N.onclick=function(){T.toggle(),N.className==="crop"?N.className="crop selected":N.className="crop"};var C=v("blind");v("trigger").onclick=function(){C.className="blind",C.style.opacity=1,setTimeout(function(){C.className="blind anim",C.style.opacity=0},50);var e={};T.isActive()?e=T.getData():a?e={x:(h-S.videoWidth)/2,y:(p-S.videoHeight)/2,width:S.videoWidth,height:S.videoHeight}:e={x:0,y:0,width:h,height:p};var t=m("canvas");t.width=e.width,t.height=e.height;if(a)t.getContext("2d").drawImage(S,Math.max(0,e.x-(h-S.videoWidth)/2),Math.max(e.y-(p-S.videoHeight)/2),e.width,e.height,0,0,e.width,e.height);else{var n=E.getImageData(e.x,e.y,e.width,e.height);t.getContext("2d").putImageData(n,0,0)}c.onImage(t.toDataURL())};var k=function(e){l=e;try{S.src=(window.URL||window.webkitURL).createObjectURL(l),d(D)}catch(t){S.mozSrcObject=l,c.forceHSB===!1?(a=!0,g.appendChild(S),g.getElementsByTagName("ul")[0].className="noHSB"):S.addEventListener("canplay",function(){d(D)},!1),S.play()}},L=function(e){x.style.display="block"},A=function(){x.style.display="none",t.call(navigator,{video:!0},k,L)},O=function(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e},M=function(e){return e>1?e-1:e<0?1+e:e},_=function(e){return e>1?1:e<0?0:e},D=function(){b.drawImage(S,0,0,h,p);var e=b.getImageData(0,0,h,p),t=e.data;for(var n=0;n<t.length;n+=4){var r=t[n]/255,i=t[n+1]/255,a=t[n+2]/255,l=Math.max(r,i,a),c=Math.min(r,i,a),v,m,g=(l+c)/2;if(l==c)v=m=0;else{var y=l-c;m=g>.5?y/(2-l-c):y/(l+c),l===r&&(v=((i-a)/y+(i<a?6:0))/6),l===i&&(v=((a-r)/y+2)/6),l===a&&(v=((r-i)/y+4)/6)}v=M(v+s),m=_(m+o),g=_(g+u);if(m===0)r=i=a=g;else{var w=g<.5?g*(1+m):g+m-g*m,x=2*g-w;r=O(x,w,v+1/3),i=O(x,w,v),a=O(x,w,v-1/3)}t[n]=r*255,t[n+1]=i*255,t[n+2]=a*255}E.putImageData(e,0,0),f===!1&&d(D)};this.resize(h,p),e.appendChild(g),t?d(A):v("notSupported").style.display="block"}
/**
* jQuery integration. (It's safe to delete this line if you're not using jQuery)
*/
window.jQuery&&function(e){e.fn.photobooth=function(){return this.each(function(t,n){var r=new Photobooth(n);e(n).data("photobooth",r),r.onImage=function(t){e(n).trigger("image",t)}})}}(jQuery)