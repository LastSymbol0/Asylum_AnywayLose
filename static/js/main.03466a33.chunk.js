(this["webpackJsonpspace-battle"]=this["webpackJsonpspace-battle"]||[]).push([[0],{269:function(e,t,n){},270:function(e,t,n){},274:function(e,t){},276:function(e,t){},292:function(e,t){},293:function(e,t){},364:function(e,t){},366:function(e,t){},380:function(e,t){},385:function(e,t){},387:function(e,t){},397:function(e,t){},399:function(e,t){},426:function(e,t){},428:function(e,t){},433:function(e,t){},435:function(e,t){},442:function(e,t){},454:function(e,t){},457:function(e,t){},468:function(e,t){},469:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),o=n(115),a=n.n(o),i=(n(269),n(270),n(1)),s=n.n(i),l=n(17),u=n(5),d=n(11);function m(e){if(e){var t=window.getComputedStyle(e);return parseInt(t.marginTop)}return 9999}function p(e){if(e){var t=window.getComputedStyle(e);return parseInt(t.marginLeft)}return 9999}function f(e,t){return Math.floor(Math.random()*(t-e+1))+e}var y=function(e){var t=document.getElementById("root"),n=document.createElement("img");return n.style.position="absolute",n.style.class="blackhole",n.style.width="100px",n.style.marginLeft="100%",n.style.marginTop=f(0,500)+"px",n.src="/Asylum_AnywayLose/pic/blackhole.svg",t.appendChild(n),function(e,t){setInterval((function(){var n=p(e);e.style.marginLeft=n-3+"px",n<=-100&&document.getElementById("root").removeChild(e);var r=document.getElementById("playerShip");n<=p(r)+100&&n>=p(r)&&m(e)>=m(r)-30&&m(e)<=m(r)+80&&(t(),document.getElementById("root").removeChild(e))}),20)}(n,e),n},h="1";function b(e){var t=document.getElementById("root"),n=document.createElement("img");n.id="enemy"+h,n.class="enemy",n.style.position="absolute",n.style.width="200px",n.style.marginLeft="100%",n.style.marginTop=f(0,500)+"px",n.src="/Asylum_AnywayLose/pic/enemy.png",n.alt="enemy",h++,t.appendChild(n),function(e,t){var n=Date.now(),r=window.getComputedStyle(e),c=parseInt(r.marginLeft),o=setInterval((function(){var a=Date.now()-n;e.style.marginLeft=c-a/3+"px",parseInt(r.marginLeft)<=-200&&(t(),clearInterval(o),document.getElementById("root").removeChild(e))}),20)}(n,e)}function g(e){var t=document.getElementById("root"),n=document.createElement("img");n.style.position="absolute",n.style.class="food",n.style.width="100px",n.style.marginLeft="100%",n.style.marginTop=f(0,500)+"px",n.src="/Asylum_AnywayLose/pic/eat2.svg",t.appendChild(n),function(e,t){setInterval((function(){var n=p(e);e.style.marginLeft=n-1+"px",n<=0&&document.getElementById("root").removeChild(e);var r=document.getElementById("playerShip");n<=p(r)+100&&n>=p(r)&&m(e)>=m(r)+30&&m(e)<=m(r)+170&&(t(),document.getElementById("root").removeChild(e))}),20)}(n,e)}var v="1";function j(e){var t=document.getElementById("playerShip"),n=document.getElementById("fire"+(v-1)),r=p(t)+150,c=Date.now(),o=setInterval((function(){var t=Date.now()-c,a=document.getElementById("root");(function(e){var t=document.getElementById("enemy"+(h-1)),n=document.getElementById("enemy"+(h-2)),r=document.getElementById("enemy"+(h-3)),c=document.getElementById("root");return p(e)>=p(t)&&m(e)>=m(t)+30&&m(e)<=m(t)+170?(c.removeChild(t),!0):p(e)>=p(n)&&m(e)>=m(n)+30&&m(e)<=m(n)+170?(c.removeChild(n),!0):p(e)>=p(r)&&m(e)>=m(r)+30&&m(e)<=m(r)+170?(c.removeChild(r),!0):void 0})(n)&&(e(),clearInterval(o),a.removeChild(n)),r+t/3>1.5*screen.width&&(clearInterval(o),a.removeChild(n)),n.style.marginLeft=r+t/3+"px"}),20)}var O=n(255),x=n.n(O),w=n(120),I=n(30),E=n(10),A=n(47),B=n(21),C=["/Asylum_AnywayLose/pic/unit.svg","/Asylum_AnywayLose/pic/unit2.svg","/Asylum_AnywayLose/pic/unit3.svg","/Asylum_AnywayLose/pic/unit4.svg"],L=new E.PublicKey("11111111111111111111111111111112"),S=function(){var e=Object(r.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(1),a=Object(d.a)(o,2),i=a[0],f=a[1],h=Object(r.useState)(5),O=Object(d.a)(h,2),S=O[0],k=O[1],T=Object(r.useState)(21),P=Object(d.a)(T,2),_=P[0],H=P[1],D=Object(r.useState)("~~>"),M=Object(d.a)(D,2),N=M[0],K=M[1],W=Object(r.useState)([]),F=Object(d.a)(W,2),J=F[0],G=F[1],Y=Object(r.useState)(""),q=Object(d.a)(Y,2),z=q[0],Q=q[1],R=Object(r.useState)([]),U=Object(d.a)(R,2),V=U[0],X=U[1],Z=Object(r.useState)([]),$=Object(d.a)(Z,2),ee=$[0],te=$[1],ne=Object(r.useState)(!1),re=Object(d.a)(ne,2),ce=re[0],oe=re[1],ae=Object(r.useState)(!1),ie=Object(d.a)(ae,2),se=ie[0],le=ie[1],ue=Object(r.useState)(!1),de=Object(d.a)(ue,2),me=de[0],pe=de[1],fe=Object(r.useState)([]),ye=Object(d.a)(fe,2),he=ye[0],be=ye[1],ge=Object(I.c)();Object(I.d)();function ve(){return je.apply(this,arguments)}function je(){return(je=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ge){e.next=2;break}return e.abrupt("return");case 2:return"https://api.devnet.solana.com",t=new E.Connection("https://api.devnet.solana.com","processed"),n=new A.Provider(t,ge,A.Provider.defaultOptions()),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(){return(Oe=Object(u.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ge){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ve();case 4:return t=e.sent,n=new w.PlayersProgram(t),e.prev=6,e.next=9,n.fetchPlayerGlobalAccountData(ge.publicKey);case 9:r=e.sent,console.log(r),Q(r.nickname.toString()),X(r.achievements),oe(!0),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),console.log("Player data fetching error: ",e.t0);case 19:case"end":return e.stop()}}),e,null,[[6,16]])})))).apply(this,arguments)}function xe(){return(xe=Object(u.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve();case 2:return t=e.sent,n=new w.AsylumProgram(t),e.prev=4,e.next=7,n.fetchAcievementsData(L);case 7:r=e.sent,console.log("gameAchievements",r),te(r),le(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log("Achievements data fetching error: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})))).apply(this,arguments)}function we(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve();case 2:n=e.sent,r=new w.PlayersProgram(n);try{-1===V.indexOf(t)&&(console.log("achievement add",t),be((function(e){return[].concat(Object(l.a)(e),[function(){return r.addAchievement(t,100)}])})))}catch(c){console.log("Transaction error: ",c)}case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){se||function(){xe.apply(this,arguments)}(),ce||function(){Oe.apply(this,arguments)}()}),[ce,se]);var Ee=function(){me||k((function(e){return e-1}))},Ae=function(){me||(we(0),c((function(e){return e+50})))},Be=function(){me||k((function(e){var t=e-5;return e>0&&we(1),t}))},Ce=function(){k((function(e){return e+1}))};return Object(r.useEffect)((function(){S<=0&&!me&&pe(!0)}),[S]),Object(r.useEffect)((function(){if(me){J.forEach((function(e){return clearInterval(e)}));var e=[].concat(Object(l.a)(document.getElementsByClassName("blackhole")),Object(l.a)(document.getElementsByClassName("enemy")),Object(l.a)(document.getElementsByClassName("food"))),t=document.getElementById("root");e.forEach((function(e){return t.removeChild(e)})),Promise.all(he.map((function(e){return e()}))).then((function(){alert("One more time, loser?"),alert("Press ok to restart the game."),location.reload()}))}}),[me]),Object(r.useEffect)((function(){var e=Math.floor(n/600);console.log("score",n),e>=i&&f((function(e){return e+1}))}),[n,i]),Object(r.useEffect)((function(){var e=document.getElementById("playerShip");e&&(console.log("levl",i),i<=4&&(e.src=C[(i-1)%C.length]),3===i&&K("~~> <br> ~~>"),4===i&&(we(2),e.style.paddingTop="37px",K("~~> <br><br> ~~> <br><br> ~~>")))}),[i,C,K]),console.log(z),Object(B.jsxs)("div",{children:[Object(B.jsxs)("div",{style:{borderBottom:"solid #ffff00",minHeight:"230px"},children:[Object(B.jsxs)("h1",{id:"header",style:{color:"#018f83",textAlign:"center"},children:["Hey, ",z]}),Object(B.jsx)("h1",{id:"header",style:{color:"#018f83",textAlign:"center"},children:"Wanna proof that you're not a loser?)"}),Object(B.jsxs)("div",{children:[Object(B.jsxs)("div",{style:{width:"600px",color:"#ffd700",position:"absolute"},children:["Achievements:",V&&0!==V.length?Object(B.jsx)("ul",{children:V.map((function(e,t){var n=ee.find((function(t){return t.id===e})),r=n?"'".concat(n.label,"' - ").concat(n.description):"Something went wrong. Achievement id: ".concat(e);return Object(B.jsx)("li",{children:r},t)}))}):Object(B.jsx)("p",{children:"No achievements so far"})]}),Object(B.jsx)("img",{id:"start",onClick:function(){!function(e){var t=document.getElementById("root"),n=document.createElement("img");n.id="playerShip",n.style.width="200px",n.style.position="absolute",n.style.cursor="pointer",n.src=e,n.alt="player",t.appendChild(n)}(C[0]),function(){var e=document.getElementById("header");if(e)var t=setInterval((function(){e.style.marginTop=m(e)-1+"px",m(e)<=-235&&clearInterval(t)}),20);var n=setInterval((function(){b(Ee)}),2e3),r=setInterval((function(){y(Be)}),8e3),c=setInterval((function(){g(Ce)}),11e3);G([n,r,c])}()},src:"/Asylum_AnywayLose/pic/strart.png",alt:"start button",style:{width:"100px",marginLeft:"47%"}}),"\u2003\u2003\u2003\u2003",Object(B.jsx)("img",{id:"boost",onClick:function(){H((function(e){return e+2}))},src:"/Asylum_AnywayLose/pic/running.png",alt:"boost",style:{width:"80px",position:"absolute"}}),Object(B.jsxs)("span",{id:"speed",style:{color:"orange"},children:["Current speed: ",_,"px"]})]})]}),Object(B.jsxs)("div",{style:{alignContent:"space-between"},children:[Object(B.jsxs)("h2",{id:"lives",style:{display:"inline",color:"red"},children:["Lives: ","\u2022 ".repeat(S>=0?S:0)]}),"\u2003\u2003\u2003\u2003",Object(B.jsxs)("h2",{id:"score",style:{display:"inline",color:"orange"},children:["Score: ",n,"\u2002\u2002"]}),Object(B.jsxs)("h2",{id:"level",style:{display:"inline",color:"orange"},children:["Level: ",i]}),Object(B.jsx)("img",{onClick:function(){alert("Hey stalker. You are still loser."),location.reload()},id:"HiddenButtonForWin",alt:"",src:"/Asylum_AnywayLose/pic/HiddenButtonForWinImg.png"})]}),Object(B.jsx)(x.a,{handleKeys:["right","left","up","down","space"],handleEventType:"keydown",onKeyEvent:function(e,t){var n=document.getElementById("playerShip");if(n){var r=window.getComputedStyle(n),c=parseInt(r.marginLeft),o=parseInt(r.marginTop);switch(e){case"left":c>0&&(n.style.marginLeft=c-_+"px");break;case"up":o>0&&(n.style.marginTop=o-_+"px");break;case"right":c<document.documentElement.clientWidth-220&&(n.style.marginLeft=c+_+"px");break;case"down":o<document.documentElement.clientHeight-100&&(n.style.marginTop=o+_+"px");break;case"space":!function(e){var t=document.getElementById("root"),n=document.createElement("div"),r=document.getElementById("playerShip");n.id="fire"+v,v++,n.style.position="absolute",n.style.marginLeft=p(r)+150+"px",n.style.marginTop=m(r)+90+"px",n.style.color="#a7ff23",n.innerHTML=e,t.appendChild(n)}(N),j(Ae)}}}})]})},k=n(166),T=n(263),P=[Object(T.a)()];function _(){return Object(I.d)().connected?Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(S,{})}):Object(B.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"100px"},children:Object(B.jsx)(k.b,{})})}var H=function(){return Object(B.jsx)(I.a,{endpoint:"https://api.devnet.solana.com",children:Object(B.jsx)(I.b,{wallets:P,autoConnect:!0,children:Object(B.jsx)(k.a,{children:Object(B.jsx)(_,{})})})})};a.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(H,{})}),document.getElementById("root"))}},[[469,1,2]]]);
//# sourceMappingURL=main.03466a33.chunk.js.map