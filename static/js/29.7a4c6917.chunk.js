"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[29],{6815:function(n,t,e){e.d(t,{Fg:function(){return h},H:function(){return x},HC:function(){return g},NZ:function(){return l},PP:function(){return d},aV:function(){return v}});var r,a,c,u,o,i,s=e(168),p=e(5706),f=e(1087),d=p.Z.section(r||(r=(0,s.Z)(["\n  padding-top: 30px;\n  padding-right: 40px;\n  padding-left: 40px;\n"]))),l=p.Z.h2(a||(a=(0,s.Z)(["\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n  color: grey;\n"]))),v=p.Z.ul(c||(c=(0,s.Z)(["\n  padding-top: 30px;\n  list-style: disc;\n  color: #0c6aad;\n"]))),g=p.Z.li(u||(u=(0,s.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),h=(0,p.Z)(f.rU)(o||(o=(0,s.Z)(["\n  font-size: 20px;\n  color: #0c6aad;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: blue;\n    border-bottom: 1px solid blue;\n  }\n"]))),x=p.Z.h4(i||(i=(0,s.Z)(["\n  color: #000;\n"])))},29:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(5861),a=e(9439),c=e(4687),u=e.n(c),o=e(2791),i=e(4390),s=e(7689),p=e(6815),f=e(184),d=function(n){var t=n.trendingMovies,e=(0,s.TH)();return(0,f.jsxs)(p.PP,{children:[(0,f.jsx)(p.NZ,{children:"Trending today"}),(0,f.jsx)(p.aV,{children:t&&t.map((function(n){var t=n.id,r=n.title;return(0,f.jsx)(p.HC,{children:(0,f.jsx)(p.Fg,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})]})},l=e(695),v=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],s=(0,o.useState)("pending"),p=(0,a.Z)(s,2),v=p[0],g=p[1],h=(0,o.useState)(null),x=(0,a.Z)(h,2),Z=x[0],m=x[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i._k)();case 3:t=n.sent,e=t.results,c(e),g("resolved"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),m(n.t0),g("rejected");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)(f.Fragment,{children:["pending"===v&&(0,f.jsx)(l.Z,{}),"rejected"===v&&(0,f.jsx)("h3",{children:Z.message}),"resolved"===v&&(0,f.jsx)(d,{trendingMovies:e})]})}},4390:function(n,t,e){e.d(t,{E3:function(){return p},Hx:function(){return l},Mc:function(){return f},_k:function(){return s},uV:function(){return d}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),o="https://api.themoviedb.org/3",i="404ca53f902a08bf3140e0fd0ad0a560",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=29.7a4c6917.chunk.js.map