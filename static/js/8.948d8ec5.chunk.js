(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[8],{904:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var c=n(4),r=n.n(c),a=n(9),i=n(108),s=n.n(i),u=n(90),o=function(e,t){return new(new s.a(e).eth.Contract)(u,t)},j=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},917:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return re}));var c,r,a,i,s,u,o,j,b,l,O=n(5),d=n(0),f=n(3),p=n(16),h=n(39),x=n(146),m=n(4),v=n.n(m),g=n(9),w=n(17),k=n(61),y=n(254),S=n(2),E=n(11),z=n.n(E),C=n(50),H=n(23),M=n(94),T=n(249),W=n(180),R=function(){var e=Object(d.useState)([]),t=Object(w.a)(e,2),n=t[0],c=t[1],r=Object(k.j)().account,a=Object(W.a)().fastRefresh;return Object(d.useEffect)((function(){r&&function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=T.b.map((function(e){return{address:Object(H.d)(),name:"pendingMeowth",params:[e.pid,r]}})),e.next=3,Object(C.a)(M,t);case 3:n=e.sent,a=T.b.map((function(e,t){return Object(S.a)(Object(S.a)({},e),{},{balance:new z.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},N=n(253),Q=function(){var e=Object(d.useState)([]),t=Object(w.a)(e,2),n=t[0],c=t[1],r=Object(k.j)().account,a=Object(W.a)().fastRefresh;return Object(d.useEffect)((function(){r&&function(){var e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=T.b.map((function(e){return{address:Object(H.d)(),name:"pendingMeowth",params:[e.pid,r]}})),e.next=3,Object(C.a)(M,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,a]),n},D=n(411),A=n(1),B=function(e){var t=e.value,n=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,a=Object(D.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),i=a.countUp,s=a.update,u=Object(d.useRef)(s);return Object(d.useEffect)((function(){u.current(t)}),[t,u]),Object(A.jsx)(p.y,{bold:!0,fontSize:r,children:i})},F=function(){var e=Object(h.a)(),t=Object(k.j)().account,n=Q().reduce((function(e,t){return e+new z.a(t).div(new z.a(10).pow(18)).toNumber()}),0);return t?Object(A.jsx)(B,{value:n}):Object(A.jsx)(p.y,{color:"textDisabled",style:{lineHeight:"60px"},children:e(298,"Locked")})},J=n(358),L=n(62),U=n(904),I=function(e){var t=Object(d.useState)(new z.a(0)),n=Object(w.a)(t,2),c=n[0],r=n[1],a=Object(k.j)(),i=a.account,s=a.ethereum,u=Object(W.a)().fastRefresh;return Object(d.useEffect)((function(){i&&s&&function(){var t=Object(g.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.b)(s,e,i);case 2:n=t.sent,r(new z.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,s,e,u]),c},K=n(60),Y=function(){var e=Object(h.a)(),t=I(Object(H.e)());return Object(k.j)().account?Object(A.jsx)(B,{value:Object(K.a)(t),fontSize:"24px"}):Object(A.jsx)(p.y,{color:"textDisabled",style:{lineHeight:"36px"},children:e(298,"Locked")})},q=Object(f.e)(p.h)(c||(c=Object(O.a)(["\n  // background-image: url('/images/meowth-head.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),G=f.e.div(r||(r=Object(O.a)(["\n  margin-bottom: 16px;\n"]))),P=f.e.img(a||(a=Object(O.a)(["\n  margin-bottom: 16px;\n"]))),V=f.e.div(i||(i=Object(O.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),X=f.e.div(s||(s=Object(O.a)(["\n  margin-top: 24px;\n"]))),Z=function(){var e=Object(d.useState)(!1),t=Object(w.a)(e,2),n=t[0],c=t[1],r=Object(k.j)().account,a=Object(h.a)(),i=R().filter((function(e){return e.balance.toNumber()>0})),s=Object(y.a)(i.map((function(e){return e.pid}))).onReward,u=Object(d.useCallback)(Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,s();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[s]);return Object(A.jsx)(q,{children:Object(A.jsxs)(p.i,{children:[Object(A.jsx)(p.n,{size:"xl",mb:"24px",children:a(542,"Farms & Staking")}),Object(A.jsx)(P,{src:"/images/meowth-head.svg",alt:"meowth logo",width:128,height:128}),Object(A.jsxs)(G,{children:[Object(A.jsx)(F,{}),Object(A.jsx)(V,{children:a(544,"MEOWTH Coins to Harvest")})]}),Object(A.jsxs)(G,{children:[Object(A.jsx)(Y,{}),Object(A.jsx)(V,{children:a(546,"MEOWTH Coins in Wallet")})]}),Object(A.jsx)(X,{children:r?Object(A.jsx)(p.d,{id:"harvest-all",disabled:i.length<=0||n,onClick:u,fullWidth:!0,children:n?a(548,"Collecting MEOWTH Coins"):a(532,"Harvest all (".concat(i.length,")"))}):Object(A.jsx)(N.a,{fullWidth:!0})})]})})},$=Object(f.e)(p.h)(u||(u=Object(O.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),_=f.e.div(o||(o=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ee=function(){var e=Object(h.a)(),t=function(){var e=Object(W.a)().fastRefresh,t=Object(d.useState)(),n=Object(w.a)(t,2),c=n[0],r=n[1];return Object(d.useEffect)((function(){function e(){return(e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(L.a)(J,Object(H.e)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,r(new z.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(d.useState)(new z.a(0)),n=Object(w.a)(t,2),c=n[0],r=n[1],a=Object(k.j)(),i=a.account,s=a.ethereum,u=Object(W.a)().slowRefresh;return Object(d.useEffect)((function(){i&&s&&function(){var t=Object(g.a)(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.b)(s,e,"0x000000000000000000000000000000000000dEaD");case 2:n=t.sent,r(new z.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,s,e,u]),c}(Object(H.e)()),c=t?Object(K.a)(t)-Object(K.a)(n):0;return Object(A.jsx)($,{children:Object(A.jsxs)(p.i,{children:[Object(A.jsx)(p.n,{size:"xl",mb:"36px",children:e(534,"Stats")}),Object(A.jsx)(p.n,{size:"xs",mb:"8px",children:e(534,"Meowth")}),Object(A.jsxs)(_,{children:[Object(A.jsx)(p.y,{fontSize:"14px",children:e(536,"Total MEOWTH Supply")}),c&&Object(A.jsx)(B,{fontSize:"14px",value:c})]}),Object(A.jsxs)(_,{children:[Object(A.jsx)(p.y,{fontSize:"14px",children:e(538,"Total MEOWTH Burned")}),Object(A.jsx)(B,{fontSize:"14px",value:Object(K.a)(n)})]}),Object(A.jsxs)(_,{children:[Object(A.jsx)(p.y,{fontSize:"14px",children:e(540,"New MEOWTH/block")}),Object(A.jsx)(B,{fontSize:"14px",decimals:0,value:25})]})]})})},te=f.e.div(j||(j=Object(O.a)(["\n  align-items: center;\n  background-image: url('/images/meowth.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 162px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/meowth-coins.svg'), url('/images/wynaut-coins.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ne=Object(f.e)(p.b)(b||(b=Object(O.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ce=Object(f.e)(p.b)(l||(l=Object(O.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),re=function(){var e=Object(h.a)();return Object(A.jsxs)(x.a,{children:[Object(A.jsxs)(te,{children:[Object(A.jsx)(p.n,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"TEAM ROCKET FINANCE")}),Object(A.jsx)(p.y,{children:e(578,"Yield farming on Binance Smart Chain")})]}),Object(A.jsxs)("div",{children:[Object(A.jsxs)(ne,{children:[Object(A.jsx)(Z,{}),Object(A.jsx)(ee,{})]}),Object(A.jsx)(ce,{})]})]})}}}]);
//# sourceMappingURL=8.948d8ec5.chunk.js.map