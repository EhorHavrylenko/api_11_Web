(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO");var r=function(e){fetch(`https://newsapi.org/v2/everything?q=${e}&language=en`,{headers:{Authorization:"10ba43b094bc4d9a8943de2e77fe6a9a"}}).then(e=>e.json()).then(e=>e.articles).catch(e=>console.log(e))},l=t("l8Ea"),o=t.n(l);const a={$articlesContainer:document.querySelector(".articles")};var c=function(e){const n=o()(e);a.$articlesContainer.insertAdjacentHTML("beforeend",n)};const i={$articlesContainer:document.querySelector(".articles"),$searchForm:document.querySelector(".js-search-form")};i.$searchForm.addEventListener("submit",e=>{e.preventDefault();const n=e.currentTarget.elements.query.value;i.$articlesContainer.innerHTML="",r(n).then(c)})},l8Ea:function(e,n,t){var r=t("mp5j");e.exports=(r.default||r).template({1:function(e,n,t,r,l){var o,a=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,i=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li>\n    <a href="'+i("function"==typeof(o=null!=(o=u(t,"url")||(null!=n?u(n,"url"):n))?o:c)?o.call(a,{name:"url",hash:{},data:l,loc:{start:{line:3,column:13},end:{line:3,column:20}}}):o)+'" target="_blank" rel="noopener noreferr">'+i("function"==typeof(o=null!=(o=u(t,"title")||(null!=n?u(n,"title"):n))?o:c)?o.call(a,{name:"title",hash:{},data:l,loc:{start:{line:3,column:62},end:{line:3,column:71}}}):o)+"</a>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,l){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:5,column:9}}}))?o:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.eb9b7c64a7569e0b5991.js.map