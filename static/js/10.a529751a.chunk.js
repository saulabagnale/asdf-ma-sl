(this["webpackJsonpsolo-leveling-mangasite"]=this["webpackJsonpsolo-leveling-mangasite"]||[]).push([[10],{131:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(0),r=n(34),s=n(90),i=n.n(s);var o=function(e,t){var n;clearTimeout(n),n=setTimeout(e,t)},u=n(31),l=n(19),j=n(13),f=(n(131),n(1));function h(e,t){return e[2]<t[2]?1:e[2]>t[2]?-1:0}t.default=function(e){var t=e.setShowSearch,n=Object(c.useContext)(j.a),s=n.siteMetadata,d=n.mocks,b=Object(c.useState)(!1),v=Object(a.a)(b,2),g=v[0],m=v[1],O=Object(c.useState)([]),p=Object(a.a)(O,2),x=p[0],k=p[1],N=Object(c.useRef)(null);Object(c.useEffect)((function(){g||fetch("/jsons/mangaNames.json").then((function(e){return e.json()})).then((function(e){return m(e)}))}),[]),Object(c.useEffect)((function(){N&&N.current&&N.current.focus()}),[N,g]);return Object(f.jsx)("div",{className:"search-container ".concat(!g&&"search-loader-container"),children:g?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"search-input-container",children:[Object(f.jsx)(l.a,{icon:Object(f.jsx)(i.a,{alt:""}),name:"back",click:function(){return t(!1)}}),Object(f.jsx)("input",{className:"search-input",placeholder:'"Tonikaku", "Shingeki", "Boku", etc',onChange:function(e){return o((function(){var t=e.target.value.toLowerCase();if(e.target.value.length>3){for(var n=t.split(" ").filter((function(e){return e.length>3})),c=[],r=0;r<g.length;r++){var s=g[r],i=Object(a.a)(s,2),o=i[0],u=i[1];if(u&&o){for(var l=0,j=0;j<n.length;j++){var f=n[j];u.toLowerCase().includes(f)&&(l+=1)}l>0&&c.push([o,u,l])}else console.error("serie absent values: ",s)}var d=c.sort(h);k(d)}0===e.target.value.length&&0!==x.length&&k([])}),750)},ref:N})]}),Object(f.jsx)("div",{className:"search-results-container",children:x.map((function(e){var t=Object(a.a)(e,2),n=t[0],c=t[1],i=u.find((function(e){return e.name===c}))||{};return Object(f.jsxs)(r.a,{className:"search-result",to:Object(j.d)(s.lang,n,i.subdomain),children:[Object(f.jsx)("img",{src:d&&d.descriptionImg?d.descriptionImg:"".concat(s.storage.fullPath).concat(n,"/description/1.jpg"),alt:"",className:"lazy search-result-img"}),Object(f.jsx)("h4",{children:c})]})}))})]}):Object(f.jsx)("div",{className:"loader",style:{marginTop:0}})})}},90:function(e,t,n){"use strict";var a=n(15),c=n(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),s=(0,a(n(17)).default)(r.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=s}}]);