!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,p=function(){return d.Date.now()};function g(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),s?g(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=p();if(w(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?y(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?g(e):(r=o=void 0,u)}function x(){var e=p(),n=w(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),g(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},x.flush=function(){return void 0===f?u:h(p())},x}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),w="feedback-form-state";j.addEventListener("input",e(t)((function(){var e=j.querySelector('input[name="email"]').value,t=j.querySelector('textarea[name="message"]').value;localStorage.setItem(w,JSON.stringify({email:e,message:t}))}),500));window.addEventListener("load",(function(){var e=localStorage.getItem(w);if(e){var t=JSON.parse(e),n=t.email,r=t.message;j.querySelector('input[name="email"]').value=n,j.querySelector('textarea[name="message"]').value=r}})),j.addEventListener("submit",(function(e){e.preventDefault();var t=j.querySelector('input[name="email"]').value,n=j.querySelector('textarea[name="message"]').value;console.log("Email: ".concat(t),"Message: ".concat(n)),localStorage.removeItem(w)}))}();
//# sourceMappingURL=03-feedback.37a326fe.js.map
