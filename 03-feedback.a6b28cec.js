function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,u=setTimeout(S,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function S(){var e=v();if(j(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function w(e){return u=void 0,g&&o?b(e):(o=r=void 0,a)}function O(){var e=v(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector("[name='email']"),h=document.querySelector("[name='message']"),j=document.querySelector(".feedback-form");const S=e(t)((function(){const e={email:b.value.trim(),message:h.value.trim()};try{const t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)}catch(e){console.log("stringedData error: "+e)}}),500);b.addEventListener("input",S),h.addEventListener("input",S),j.addEventListener("submit",(function(e){e.preventDefault();const t={email:b.value.trim(),message:h.value.trim()};""===t.email||""===t.message?alert("Both fields must be filled before sending"):(console.log(t),localStorage.removeItem("feedback-form-state"),b.value=null,h.value=null)}));try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));""===e.email&&""===e.message||(b.value=e.email,h.value=e.message)}catch(e){console.log("parsedData error: "+e)}
//# sourceMappingURL=03-feedback.a6b28cec.js.map
