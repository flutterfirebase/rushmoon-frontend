(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[6],{704:function(e,t,n){"use strict";n.d(t,"b",(function(){return O}));var c=n(131),r=n(4),a=n.n(r),i=n(17),s=n(0),o=n(40),l=n(99),d=n(93),j=n(216),b=n(48),u=n(23),x=n(42),p=n(70),O=function(e){var t=Object(o.c)().account,n=Object(p.b)(),r=Object(p.d)(),l=Object(b.k)();return{onReward:Object(s.useCallback)(Object(i.a)(a.a.mark((function i(){var s,o,d;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.methods.getReferrer(t).call();case 2:return s=a.sent,o=s!==x.v?s:null!==l&&void 0!==l?l:Object(u.e)(),d=e.reduce((function(e,r){return[].concat(Object(c.a)(e),[Object(j.f)(n,r,t,o)])}),[]),a.abrupt("return",Promise.all(d));case 6:case"end":return a.stop()}}),i)}))),[t,e,n,r,l])}};t.a=function(e){var t=Object(l.b)(),n=Object(o.c)().account,c=Object(b.l)().toastSuccess,r=Object(p.b)(),O=Object(p.d)(),h=Object(b.k)();return{onReward:Object(s.useCallback)(Object(i.a)(a.a.mark((function i(){var s,o,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.methods.getReferrer(n).call();case 3:return s=a.sent,o=s!==x.v?s:null!==h&&void 0!==h?h:Object(u.e)(),a.next=7,Object(j.f)(r,e,n,o);case 7:return l=a.sent,t(Object(d.c)(n)),c("Transaction Verified","See your transactions on wallet"),a.abrupt("return",l);case 13:return a.prev=13,a.t0=a.catch(0),a.abrupt("return",!1);case 16:case"end":return a.stop()}}),i,null,[[0,13]])}))),[e,n,t,r,O,c,h])}}},705:function(e,t,n){"use strict";var c,r=n(22),a=n(8).e.div(c||(c=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"])));t.a=a},928:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ke}));var c,r=n(12),a=n(22),i=n(0),s=n.n(i),o=n(40),l=n(6),d=n(8),j=n(705),b=n(219),u=n(48),x=n(325),p=n(13),O=n.n(p),h=n(42),f=n(102),m=n(44),v=n(4),g=n.n(v),k=n(17),w=n(25),y=n(51),L=n(70),S=function(){var e=Object(i.useState)(7667919),t=Object(w.a)(e,2),n=t[0],c=t[1],r=Object(L.b)(),a=Object(y.a)();return Object(i.useEffect)((function(){(function(){var e=Object(k.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.methods.startBlock().call();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,r]),{startBlock:n}},C=n(2),z=d.e.div(c||(c=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),A=function(e){var t=e.onClick,n=e.expanded;return Object(C.jsxs)(z,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(C.jsx)(l.L,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(C.jsx)(l.l,{}):Object(C.jsx)(l.k,{})]})};A.defaultProps={expanded:!1};var T,D,P,q,U,I,B,N,R,F,H,M,E,V,W,Q,G,K,J,$,Y,X=A,Z=n(23),_=function(e){var t=e.quoteTokenAddress,n=e.tokenAddress,c=Object(Z.l)(),r=t?t[56]:null,a=n?n[56]:null,i=a&&a!==c?a:"BNB";return"".concat(r&&r!==c?r:"BNB","/").concat(i)},ee=d.e.div(T||(T=Object(a.a)(["\n  margin-top: 24px;\n"]))),te=Object(d.e)(l.w)(D||(D=Object(a.a)(["\n  font-weight: 400;\n"]))),ne=function(e){var t=e.bscScanAddress,n=e.removed,c=e.totalValueFormatted,r=e.lpLabel,a=e.addLiquidityUrl;return Object(C.jsxs)(ee,{children:[Object(C.jsxs)(l.o,{justifyContent:"space-between",children:[Object(C.jsx)(l.L,{children:"Total Liquidity:"}),Object(C.jsx)(l.L,{children:c})]}),!n&&Object(C.jsxs)(te,{href:a,children:["Get ",r]}),Object(C.jsx)(te,{href:t,children:"View Contract"})]})},ce=function(){return Object(C.jsx)(l.K,{variant:"success",outline:!0,startIcon:Object(C.jsx)(l.O,{color:"success"}),children:"No Fees"})},re=Object(d.e)(l.K)(P||(P=Object(a.a)(["\n  margin-left: 6px;\n  font-weight: bold;\n"]))),ae=function(e){var t=e.lpLabel,n=e.multiplier,c=e.farmImage,r=e.pid,a=e.isDesktop;return Object(C.jsxs)(l.o,{width:"100%",justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(C.jsxs)(l.o,{flexDirection:"column",alignItems:"flex-start",children:[Object(C.jsx)(l.L,{bold:!0,fontSize:a?"20px":"16px",ml:"4px",mb:"4px",children:t}),Object(C.jsxs)(l.o,{justifyContent:"center",children:[13===r||14===r?Object(C.jsx)(ce,{}):void 0,Object(C.jsx)(re,{variant:"secondary",children:n})]})]}),Object(C.jsx)(l.s,{src:"/images/farms/".concat(c,".png"),alt:"farm-logo",width:84,height:56})]})},ie=n(65),se=n(99),oe=n(93),le=n(216),de=function(e){var t=Object(se.b)(),n=Object(o.c)().account,c=Object(u.l)().toastSuccess,r=Object(L.b)();return{onApprove:Object(i.useCallback)(Object(k.a)(g.a.mark((function a(){var i;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(le.b)(e,r,n);case 3:return i=a.sent,t(Object(oe.c)(n)),c("Transaction Verified","See your transactions on wallet"),a.abrupt("return",i);case 9:return a.prev=9,a.t0=a.catch(0),a.abrupt("return",!1);case 12:case"end":return a.stop()}}),a,null,[[0,9]])}))),[n,t,e,r,c])}},je=n(141),be=function(e){var t=Object(se.b)(),n=Object(o.c)().account,c=Object(u.l)().toastSuccess,r=Object(L.b)(),a=Object(L.d)(),s=Object(u.k)();return{onDeposit:Object(i.useCallback)(function(){var i=Object(k.a)(g.a.mark((function i(o){var l,d,j;return g.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,a.methods.getReferrer(n).call();case 3:return l=i.sent,d=l!==h.v?l:null!==s&&void 0!==s?s:Object(Z.e)(),i.next=7,Object(le.e)(r,e,o,n,d);case 7:j=i.sent,t(Object(oe.c)(n)),c("Transaction Verified","See your transactions on wallet"),console.info(j),i.next=16;break;case 13:i.prev=13,i.t0=i.catch(0),console.error(i.t0);case 16:case"end":return i.stop()}}),i,null,[[0,13]])})));return function(e){return i.apply(this,arguments)}}(),[e,n,t,r,a,c,s])}},ue=function(e){var t=Object(se.b)(),n=Object(o.c)().account,c=Object(u.l)().toastSuccess,r=Object(L.b)();return{onWithdraw:Object(i.useCallback)(function(){var a=Object(k.a)(g.a.mark((function a(i){var s;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(le.h)(r,e,i,n);case 3:s=a.sent,t(Object(oe.c)(n)),c("Transaction Verified","See your transactions on wallet"),console.info(s),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}(),[e,n,t,r,c])}},xe=n(63),pe=d.e.div(q||(q=Object(a.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),Oe=function(e){var t,n=e.size,c=void 0===n?"md":n,r=Object(i.useContext)(d.a).spacing;switch(c){case"lg":t=r[6];break;case"sm":t=r[2];break;case"md":default:t=r[4]}return Object(C.jsx)(pe,{size:t})},he=d.e.div(U||(U=Object(a.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px 0;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),fe=d.e.div(I||(I=Object(a.a)(["\n  flex: 1;\n"]))),me=function(e){var t=e.children,n=s.a.Children.toArray(t).length;return Object(C.jsx)(he,{children:s.a.Children.map(t,(function(e,t){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(fe,{children:e}),t<n-1&&Object(C.jsx)(Oe,{})]})}))})},ve=d.e.div(B||(B=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 16px;\n  box-shadow: ",";\n  color: ",";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])),(function(e){return e.theme.colors.input}),(function(e){var t=e.isWarning,n=void 0!==t&&t,c=e.theme;return n?c.shadows.warning:c.shadows.inset}),(function(e){return e.theme.colors.text})),ge=Object(d.e)(l.u)(N||(N=Object(a.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n  &:focus:not(:disabled) {\n    box-shadow: 0px 0px 0px 1px ",",0px 0px 0px 4px ",";\n  }\n  "," {\n    width: 80px;\n  }\n\n  "," {\n    width: auto;\n  }\n"])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm})),ke=Object(d.e)(l.L)(R||(R=Object(a.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),we=function(e){var t=e.max,n=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,i=e.addLiquidityUrl,s=e.inputTitle,o="0"===t||!t,d=o?"0":parseFloat(t).toFixed(4);return Object(C.jsxs)("div",{style:{position:"relative"},children:[Object(C.jsxs)(ve,{isWarning:o,children:[Object(C.jsxs)(l.o,{justifyContent:"space-between",pl:"16px",children:[Object(C.jsx)(l.L,{fontSize:"14px",children:s}),Object(C.jsxs)(l.L,{fontSize:"14px",children:["Balance: ",d.toLocaleString()]})]}),Object(C.jsxs)(l.o,{mt:"8px",alignItems:"flex-end",justifyContent:"space-around",children:[Object(C.jsx)(ge,{onChange:c,placeholder:"0",value:a}),Object(C.jsx)(l.g,{scale:"sm",variant:"secondary",onClick:r,children:"Max"}),Object(C.jsx)(l.L,{ml:"8px",mb:"4px",fontSize:"16px",children:n})]})]}),o&&Object(C.jsxs)(ke,{fontSize:"14px",color:"failure",children:["No tokens to stake: "," ",Object(C.jsxs)(l.v,{fontSize:"14px",bold:!1,href:i,external:!0,color:"failure",children:["get ",n]})]})]})},ye=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,s=e.addLiquidityUrl,o=Object(i.useState)(""),d=Object(w.a)(o,2),j=d[0],b=d[1],u=Object(i.useState)(!1),x=Object(w.a)(u,2),p=x[0],O=x[1],h=Object(i.useMemo)((function(){return Object(xe.d)(t)}),[t]),f=Object(i.useCallback)((function(e){b(e.currentTarget.value)}),[b]),m=Object(i.useCallback)((function(){b(h)}),[h,b]);return Object(C.jsxs)(l.A,{title:"Stake LP tokens",onDismiss:c,children:[Object(C.jsx)(we,{value:j,onSelectMax:m,onChange:f,max:h,symbol:a,addLiquidityUrl:s,inputTitle:"Stake"}),Object(C.jsxs)(me,{children:[Object(C.jsx)(l.g,{variant:"secondary",onClick:c,width:"100%",children:"Cancel"}),Object(C.jsx)(l.g,{width:"100%",disabled:p||"0"===h||"0"===j,onClick:Object(k.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,n(j);case 3:O(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:p?"Pending Confirmation":"Confirm"})]}),Object(C.jsxs)(l.w,{href:s,style:{alignSelf:"center"},children:["Get ",a]})]})},Le=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,s=Object(i.useState)(""),o=Object(w.a)(s,2),d=o[0],j=o[1],b=Object(i.useState)(!1),u=Object(w.a)(b,2),x=u[0],p=u[1],O=Object(i.useMemo)((function(){return Object(xe.d)(c)}),[c]),h=Object(i.useCallback)((function(e){j(e.currentTarget.value)}),[j]),f=Object(i.useCallback)((function(){j(O)}),[O,j]);return Object(C.jsxs)(l.A,{title:"Unstake LP tokens",onDismiss:n,children:[Object(C.jsx)(we,{onSelectMax:f,onChange:h,value:d,max:O,symbol:a,inputTitle:"Unstake"}),Object(C.jsxs)(me,{children:[Object(C.jsx)(l.g,{variant:"secondary",onClick:n,width:"100%",children:"Cancel"}),Object(C.jsx)(l.g,{disabled:x,onClick:Object(k.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,t(d);case 3:p(!1),n();case 5:case"end":return e.stop()}}),e)}))),width:"100%",children:x?"Pending Confirmation":"Confirm"})]})]})},Se=d.e.div(F||(F=Object(a.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),Ce=function(e){var t=e.pid,n=e.stakedBalance,c=e.tokenBalance,r=e.tokenName,a=e.addLiquidityUrl,i=be(t).onDeposit,s=ue(t).onWithdraw,o=n.gt(0)?Object(xe.a)(n):0,d=o.toLocaleString(),j=Object(l.T)(Object(C.jsx)(ye,{max:c,onConfirm:i,tokenName:r,addLiquidityUrl:a})),b=Object(w.a)(j,1)[0],u=Object(l.T)(Object(C.jsx)(Le,{max:n,onConfirm:s,tokenName:r})),x=Object(w.a)(u,1)[0];return Object(C.jsxs)(l.o,{justifyContent:"space-between",alignItems:"center",children:[Object(C.jsx)(l.p,{color:0===o?"textDisabled":"text",children:d}),0===o?Object(C.jsx)(l.g,{onClick:b,children:"Stake LP"}):Object(C.jsxs)(Se,{children:[Object(C.jsx)(l.r,{variant:"secondary",onClick:x,mr:"6px",children:Object(C.jsx)(l.z,{color:"primary",width:"14px"})}),Object(C.jsx)(l.r,{variant:"secondary",onClick:b,children:Object(C.jsx)(l.a,{color:"primary",width:"14px"})})]})]})},ze=n(704),Ae=function(e){var t=e.account,n=e.earnings,c=e.pid,r=e.canHarvest,a=Object(i.useState)(!1),s=Object(w.a)(a,2),o=s[0],d=s[1],j=Object(ze.a)(c).onReward,b=t&&n.gt(0)?Object(xe.a)(n):0,u=b.toLocaleString();return Object(C.jsxs)(l.o,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(C.jsx)(l.p,{color:0===b?"textDisabled":"text",children:u}),Object(C.jsx)(l.g,{disabled:0===b||!r||o,onClick:Object(k.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,j();case 3:d(!1);case 4:case"end":return e.stop()}}),e)}))),children:"Harvest"})]})},Te=d.e.div(H||(H=Object(a.a)(["\n  padding-top: 16px;\n"]))),De=function(e){var t=e.farm,n=e.account,c=e.addLiquidityUrl,r=Object(i.useState)(!1),a=Object(w.a)(r,2),s=a[0],o=a[1],d=Object(u.a)(t.lpSymbol),j=d.pid,b=d.lpAddresses,x=Object(u.b)(j),p=x.allowance,O=x.tokenBalance,h=x.stakedBalance,f=x.earnings,m=x.canHarvest,v=t.lpSymbol.toUpperCase(),L=n&&p&&p.isGreaterThan(0),S=Object(y.a)(),z=Object(Z.a)(b),A=Object(ie.c)(z,S),T=de(A).onApprove,D=Object(i.useCallback)(Object(k.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,T();case 4:o(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[T]);return Object(C.jsxs)(Te,{children:[Object(C.jsx)(l.o,{children:Object(C.jsx)(l.L,{bold:!0,textTransform:"uppercase",color:"success",fontSize:"12px",children:"Earned"})}),Object(C.jsx)(Ae,{account:n,canHarvest:m,pid:j,earnings:f}),Object(C.jsx)(l.o,{children:Object(C.jsx)(l.L,{bold:!0,textTransform:"uppercase",color:"primary",fontSize:"12px",children:"Staked"})}),n?L?Object(C.jsx)(Ce,{pid:j,stakedBalance:h,tokenBalance:O,tokenName:v,addLiquidityUrl:c}):Object(C.jsx)(l.g,{mt:"8px",width:"100%",disabled:!t.isActive||s,onClick:D,children:"Approve Contract"}):Object(C.jsx)(je.a,{mt:"8px",width:"100%"})]})},Pe=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.cakePrice,i=a*Math.pow(1+c/365,365*r);return t=i-a,Math.round(100*t)/100},qe=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},Ue=d.e.div(M||(M=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),Ie=d.e.div(E||(E=Object(a.a)(["\n  margin-bottom: '10px';\n"]))),Be=Object(d.e)(l.L)(V||(V=Object(a.a)(["\n  max-width: 360px;\n  margin-bottom: 28px;\n"]))),Ne=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.cakePrice,r=e.apy,a=e.addLiquidityUrl,i=1e3/c.toNumber(),s=Pe({numberOfDays:1,farmApy:r,cakePrice:c}),o=Pe({numberOfDays:7,farmApy:r,cakePrice:c}),d=Pe({numberOfDays:30,farmApy:r,cakePrice:c}),j=Pe({numberOfDays:365,farmApy:r,cakePrice:c});return Object(C.jsxs)(l.A,{title:"ROI",onDismiss:t,children:[Object(C.jsxs)(Ue,{children:[Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:"Timeframe"})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:"ROI"})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:"RUSH per $1000"})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{children:"1d"})}),Object(C.jsx)(Ie,{children:Object(C.jsxs)(l.L,{children:[qe({amountEarned:s,amountInvested:i}),"%"]})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{children:s})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{children:"7d"})}),Object(C.jsx)(Ie,{children:Object(C.jsxs)(l.L,{children:[qe({amountEarned:o,amountInvested:i}),"%"]})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{children:o})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{children:"30d"})}),Object(C.jsx)(Ie,{children:Object(C.jsxs)(l.L,{children:[qe({amountEarned:d,amountInvested:i}),"%"]})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{children:d})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{children:"365d(APY)"})}),Object(C.jsx)(Ie,{children:Object(C.jsxs)(l.L,{children:[qe({amountEarned:j,amountInvested:i}),"%"]})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(l.L,{children:j})})]}),Object(C.jsx)(Be,{fontSize:"12px",color:"textSubtle",children:"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns."}),Object(C.jsx)(l.o,{justifyContent:"center",children:Object(C.jsxs)(l.w,{href:a,children:["Get ",n]})})]})},Re=function(e){var t=e.lpLabel,n=e.cakePrice,c=e.apy,r=e.addLiquidityUrl,a=Object(l.T)(Object(C.jsx)(Ne,{lpLabel:t,cakePrice:n,apy:c,addLiquidityUrl:r})),i=Object(w.a)(a,1)[0];return Object(C.jsx)(l.r,{onClick:function(e){e.stopPropagation(),i()},variant:"text",scale:"sm",ml:"4px",children:Object(C.jsx)(l.h,{width:"18px"})})},Fe=Object(d.f)(W||(W=Object(a.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),He=d.e.div(Q||(Q=Object(a.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 32px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),Fe),Me=d.e.div(G||(G=Object(a.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Ee=d.e.div(K||(K=Object(a.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 16px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Ve=d.e.div(J||(J=Object(a.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),We=d.e.div($||($=Object(a.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 160px;\n  "," {\n    max-width: 215px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Qe=function(e){var t=e.farm,n=e.cakePrice,c=e.account,r=e.isDesktop,a=Object(i.useState)(!1),s=Object(w.a)(a,2),o=s[0],d=s[1],j=t.quoteToken,b=t.token,u=t.pid,x=t.lpSymbol.split(" ")[0].toLowerCase(),p=t.liquidity?"$".concat(t.liquidity.toNumber().toLocaleString(void 0,{maximumFractionDigits:0})):"-",O=_({quoteTokenAddress:0===u?b.address:j.address,tokenAddress:0===u?j.address:b.address}),f="".concat(h.b,"/").concat(O),m=t.lpAddresses[56],v=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("PANCAKE",""),g=t.apy&&t.apy.toLocaleString("en-US",{maximumFractionDigits:2}),k=13===t.pid||14===t.pid;return Object(C.jsxs)(Me,{children:[k&&Object(C.jsx)(He,{}),Object(C.jsx)(ae,{isDesktop:r,lpLabel:v,multiplier:t.multiplier,farmImage:x,pid:t.pid}),Object(C.jsxs)(l.o,{justifyContent:"space-between",alignItems:"center",children:[Object(C.jsx)(l.L,{fontSize:"18px",children:"APR:"}),Object(C.jsx)(l.L,{fontSize:"18px",bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Re,{lpLabel:v,addLiquidityUrl:f,cakePrice:n,apy:t.apy}),Object(C.jsxs)(We,{children:[g,"%"]})]}):Object(C.jsx)(l.F,{height:24,width:80})})]}),Object(C.jsxs)(l.o,{justifyContent:"space-between",children:[Object(C.jsx)(l.L,{fontSize:"18px",children:"Earn:"}),Object(C.jsx)(l.L,{fontSize:"18px",bold:!0,children:"RUSH"})]}),Object(C.jsxs)(l.o,{justifyContent:"space-between",children:[Object(C.jsx)(l.L,{fontSize:"18px",children:"Deposit Fee:"}),Object(C.jsx)(l.L,{fontSize:"18px",bold:!0,children:k?"0%":"4%"})]}),Object(C.jsxs)(l.o,{justifyContent:"space-between",children:[Object(C.jsx)(l.L,{fontSize:"18px",children:"Harvest Lockup:"}),Object(C.jsx)(l.L,{fontSize:"18px",bold:!0,children:k?"2 Hours":"8 Hours"})]}),Object(C.jsx)(De,{farm:t,account:c,addLiquidityUrl:f}),Object(C.jsx)(Ee,{}),Object(C.jsx)(X,{onClick:function(){return d(!o)},expanded:o}),Object(C.jsx)(Ve,{expanded:o,children:Object(C.jsx)(ne,{bscScanAddress:"https://bscscan.com/address/".concat(t.lpAddresses[56]),infoAddress:"https://pancakeswap.info/pair/".concat(m),totalValueFormatted:p,lpLabel:v,addLiquidityUrl:f})})]})},Ge=Object(d.e)(l.i)(Y||(Y=Object(a.a)(["\n  width: 100%;\n  padding: 1.5rem 3rem;\n  border-radius: 3rem;\n  margin: 2rem 0rem;\n"]))),Ke=function(){var e=Object(u.c)(),t=Object(u.j)(),n=Object(o.c)().account,c=Object(u.i)(),a=Object(f.a)().width>1200,s=Object(u.h)().pancakeswap.tokenBlock,d=S().startBlock,p=Object(i.useCallback)((function(e){return e.map((function(e){if(!e.lpTotalInQuoteToken||!c)return e;var n=c[e.priceKey],a=new O.a(e.lpTotalInQuoteToken).times(new O.a(n)),i=Object(x.a)(e.poolWeight,t,a,new O.a(s));return Object(r.a)(Object(r.a)({},e),{},{apy:i,liquidity:a})}))}),[t,c,s])(e);return Object(C.jsxs)(b.a,{children:[Object(C.jsx)("div",{children:Object(C.jsxs)(Ge,{children:[Object(C.jsxs)(l.o,{flexWrap:"wrap",mb:a?"16px":"8px",alignItems:"center",width:"100%",height:"100%",children:[Object(C.jsx)(l.p,{mb:a?void 0:"8px",as:"h1",size:a?"xxl":"xl",color:"secondary",children:"Farms"}),a?Object(C.jsx)(m.a,{color:"primary",ml:"16px",width:"80"}):"",Object(C.jsx)(l.L,{ml:a?"12px":void 0,bold:!0,fontSize:a?"24px":"16px",children:"RushMOON farming will start at block"}),d?Object(C.jsx)(l.v,{external:!0,href:"".concat(h.l,"/").concat(d),ml:"6px",fontSize:a?"24px":"16px",children:"#".concat(d)}):void 0]}),Object(C.jsx)(l.L,{bold:!0,fontSize:a?"32px":"16px",color:"text",children:"Stake Liquidity Pool (LP) tokens to earn Rush MOON."})]})}),Object(C.jsx)("div",{children:Object(C.jsx)(j.a,{children:p.map((function(e){return Object(C.jsx)(Qe,{farm:e,cakePrice:t,account:n,isDesktop:a},e.pid)}))})})]})}}}]);