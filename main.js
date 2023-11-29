(()=>{"use strict";var n={705:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var p=[].concat(n[c]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},742:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},738:n=>{n.exports=function(n){return n[1]}},545:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(738),r=t.n(o),i=t(705),a=t.n(i),s=t(570),l=t(976),c=a()(r());c.i(s.Z),c.i(l.Z),c.push([n.id,'.page{position:relative;width:100%;height:100dvh;font-family:"Celaraz",serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;font-size:30px;background:linear-gradient(rgba(135, 60, 255, 0.4), rgba(135, 60, 255, 0) 80%),linear-gradient(-45deg, rgba(120, 155, 255, 0.9) 25%, rgba(255, 160, 65, 0.9) 75%);color:#1a0674}.content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:600px;height:600px;margin:0 auto;background-color:rgba(255,255,255,.2);-webkit-box-shadow:0px 5px 10px 2px rgba(34,60,80,.2) inset;-moz-box-shadow:0px 5px 10px 2px rgba(34,60,80,.2) inset;box-shadow:0px 5px 10px 2px rgba(34,60,80,.2) inset;border-radius:15px}@media screen and (max-width: 767px){.content{width:95vw;height:95dvh}}.title{font-size:40px;font-weight:700px;text-align:center}@media screen and (max-width: 767px){.title{width:200px;margin:30px auto;font-size:28px}}.range{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:none;flex-direction:column;align-items:center;width:100%;gap:50px}.range_active{display:flex}.range__input{width:70%;cursor:pointer}.range__submit{width:200px;height:50px;padding:0;border:none;border-radius:15px;background-color:rgba(238,238,2,.181);-webkit-box-shadow:0px 5px 10px 2px rgba(34,60,80,.2);-moz-box-shadow:0px 5px 10px 2px rgba(34,60,80,.2);box-shadow:0px 5px 10px 2px rgba(34,60,80,.2);cursor:pointer;transition:all .2s linear}.range__submit:hover{transform:scale(1.1)}.range__submit:active{opacity:.5}.answer{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:none;flex-direction:column;align-items:center;width:100%;gap:50px}.answer_active{display:flex}.answer__input{width:120px;height:100px;background-color:rgba(241,225,225,.285);border:none;border-radius:15px;font-size:40px;text-align:center}.answer__input::-webkit-outer-spin-button,.answer__input::-webkit-inner-spin-button{-webkit-appearance:none}.answer__input:focus{outline:none;-webkit-box-shadow:5px 5px 5px -5px rgba(34,60,80,.6) inset;-moz-box-shadow:5px 5px 5px -5px rgba(34,60,80,.6) inset;box-shadow:5px 5px 5px -5px rgba(34,60,80,.6) inset}.answer__submit{background-color:rgba(129,102,236,.181)}.output{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;width:100%;font-size:26px}@media screen and (max-width: 767px){.output{width:85%;font-size:18px}}.output__text{margin:0;color:#70a01e;visibility:hidden;text-align:center}.output__text_visible{visibility:visible}.output__tooltip{margin:0;color:#4e6f17;visibility:hidden}.output__tooltip_visible{visibility:visible}.output__counter{margin:0;align-self:flex-end;padding:20px 50px 0;visibility:hidden}.output__counter_visible{visibility:visible}.button{min-width:200px;min-height:50px;padding:10px;border:none;border-radius:15px;background-color:rgba(238,238,2,.181);-webkit-box-shadow:0px 5px 10px 2px rgba(34,60,80,.2);-moz-box-shadow:0px 5px 10px 2px rgba(34,60,80,.2);box-shadow:0px 5px 10px 2px rgba(34,60,80,.2);cursor:pointer;transition:all .2s linear;color:inherit;justify-content:center;align-items:center}@media screen and (max-width: 767px){.button{font-size:20px}}.button:hover{background-color:rgba(237,237,105,.725)}.button:active{opacity:.5}.button:focus{outline:none;box-shadow:0px 10px 15px 4px rgba(34,60,80,.2)}.button_type_restart{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:none}.button_active{display:flex}',""]);const p=c},976:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(738),r=t.n(o),i=t(705),a=t.n(i),s=t(742),l=t.n(s),c=new URL(t(932),t.b),p=new URL(t(635),t.b),d=new URL(t(41),t.b),u=new URL(t(280),t.b),f=a()(r()),b=l()(c),m=l()(p),h=l()(d),x=l()(u);f.push([n.id,`@font-face {\n  font-family: "Celaraz";\n  font-style: normal;\n  font-weight: 400;\n  src:\n  url(${b}) format("woff2"),\n  url(${m}) format("woff");\n}\n\n@font-face {\n  font-family: "Celaraz";\n  font-style: normal;\n  font-weight: 700;\n  src:\n  url(${h}) format("woff2"),\n  url(${x}) format("woff");\n}`,""]);const g=f},570:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(738),r=t.n(o),i=t(705),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],p=i[c]||0,d="".concat(c," ").concat(p);i[c]=p+1;var u=t(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var b=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:b,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var l=o(n,r),c=0;c<i.length;c++){var p=t(i[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},280:(n,e,t)=>{n.exports=t.p+"79e577b86d78392491ef.woff"},41:(n,e,t)=>{n.exports=t.p+"ef71f54f9751bbf1cced.woff2"},635:(n,e,t)=>{n.exports=t.p+"5ce915faad83f7350613.woff"},932:(n,e,t)=>{n.exports=t.p+"08f74b18912f6159708f.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),l=t.n(s),c=t(216),p=t.n(c),d=t(589),u=t.n(d),f=t(545),b={};b.styleTagTransform=u(),b.setAttributes=l(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=p(),e()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;var m=document.querySelector(".content"),h=m.querySelector(".range"),x=h.querySelector(".range__input"),g=h.querySelector(".range__value-max"),v=m.querySelector(".answer"),y=v.querySelector(".answer__input"),w=m.querySelector(".output"),_=w.querySelector(".output__text"),z=w.querySelector(".output__tooltip"),C=w.querySelector(".output__counter"),S=C.querySelector(".output__counter-value"),k=m.querySelector(".button_type_restart"),E=null,L=0;x.addEventListener("input",(function(n){g.textContent=n.target.value})),h.addEventListener("submit",(function(n){var e;n.preventDefault(),h.classList.remove("range_active"),v.classList.add("answer_active"),C.classList.add("output__counter_visible"),e=n.target.range.value,E=Math.ceil(Math.random()*e),y.max=e,y.focus()})),v.addEventListener("submit",(function(n){n.preventDefault();var e=n.target.answer.value;(function(n,e){S.textContent=e,function(n){_.classList.add("output__text_visible"),n<E?_.textContent="Недобор, попробуй еще раз":n>E?_.textContent="Перебор, пропробуй еще раз":n==E&&(_.textContent="Ты угадал число ".concat(E,", поздравляю!"))}(n),function(n){z.textContent=n%2==0?"с четным числом":"с нечетным числом"}(E),function(n,e){n%3==0&&e!=E?z.classList.add("output__tooltip_visible"):z.classList.remove("output__tooltip_visible")}(e,n)})(e,++L),e==E&&(v.classList.remove("answer_active"),k.classList.add("button_active"),k.focus()),v.reset()})),k.addEventListener("click",(function(){E=null,L=0,S.textContent=L,h.classList.add("range_active"),_.classList.remove("output__text_visible"),z.classList.remove("output__tooltip_visible"),C.classList.remove("output__counter_visible"),k.classList.remove("button_active")}))})()})();