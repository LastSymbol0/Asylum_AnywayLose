(this["webpackJsonpspace-battle"]=this["webpackJsonpspace-battle"]||[]).push([[0],{120:function(e){e.exports=JSON.parse('{"version":"0.0.0","name":"players","instructions":[{"name":"initialize","accounts":[{"name":"playerAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"},{"name":"nickname","type":"string"},{"name":"avatar","type":"publicKey"}]},{"name":"updateNickname","accounts":[{"name":"playerAccount","isMut":true,"isSigner":false}],"args":[{"name":"nickname","type":"string"}]},{"name":"updateAvatar","accounts":[{"name":"playerAccount","isMut":true,"isSigner":false}],"args":[{"name":"avatar","type":"publicKey"}]},{"name":"addGame","accounts":[{"name":"playerAccount","isMut":true,"isSigner":false}],"args":[{"name":"game","type":"publicKey"}]},{"name":"removeGame","accounts":[{"name":"playerAccount","isMut":true,"isSigner":false}],"args":[{"name":"game","type":"publicKey"}]},{"name":"addAchievement","accounts":[{"name":"playerAccount","isMut":true,"isSigner":false}],"args":[{"name":"achievementId","type":"u16"},{"name":"expToAdd","type":"u32"}]},{"name":"addExp","accounts":[{"name":"playerAccount","isMut":true,"isSigner":false}],"args":[{"name":"exp","type":"u32"}]}],"accounts":[{"name":"PlayerAccount","type":{"kind":"struct","fields":[{"name":"nickname","type":"string"},{"name":"avatar","type":"publicKey"},{"name":"games","type":{"vec":"publicKey"}},{"name":"level","type":"u8"},{"name":"exp","type":"u32"},{"name":"achievements","type":{"vec":"u16"}}]}}],"metadata":{"address_local":"9acXdXcHNvgNiy5J62B5mt2gyZuMQ1fBYaqtdnHcjGkj","address":"CMkYPTkmcfDSNP4gk5SAgYWEFR7YdRgc18yWcnPPVcJp"}}')},159:function(e){e.exports=JSON.parse('{"version":"0.0.0","name":"asylum","instructions":[{"name":"initialize","accounts":[{"name":"mainAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"initializeAchievements","accounts":[{"name":"achievementsAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"}]},{"name":"addAchievement","accounts":[{"name":"achievementsAccount","isMut":true,"isSigner":false}],"args":[{"name":"label","type":"string"},{"name":"description","type":"string"},{"name":"game","type":"publicKey"}]},{"name":"initializeGamesCatalog","accounts":[{"name":"gamesCatalogAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":false},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"bump","type":"u8"}]},{"name":"addGameToCatalog","accounts":[{"name":"gamesCatalogAccount","isMut":true,"isSigner":false}],"args":[{"name":"game","type":"publicKey"}]}],"accounts":[{"name":"AsylumMainAccount","type":{"kind":"struct","fields":[]}},{"name":"GamesCatalogAccount","type":{"kind":"struct","fields":[{"name":"games","type":{"vec":"publicKey"}}]}},{"name":"AchievementsAccount","type":{"kind":"struct","fields":[{"name":"achievements","type":{"vec":{"defined":"Achievement"}}}]}}],"types":[{"name":"Achievement","type":{"kind":"struct","fields":[{"name":"id","type":"u16"},{"name":"label","type":"string"},{"name":"description","type":"string"},{"name":"game","type":"publicKey"}]}}],"metadata":{"address_local":"Ec5HRTfsozgfQerig5DTsKqGL3MkZ3jcdohb3qYXwzMN","address":"5VCTfv6KrzoRTcThrWADyG4byNvkzrWDX1K9geYRART9"}}')},189:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"findAchievementsAccountAddress",(function(){return u})),n.d(t,"findGamesCatalogAccountAddress",(function(){return l})),n.d(t,"initAsylumAccounts",(function(){return d})),n.d(t,"initAchievementsAccount",(function(){return p})),n.d(t,"addAchievement",(function(){return m})),n.d(t,"initGamesCatalogAccount",(function(){return f})),n.d(t,"addGameToCatalog",(function(){return y}));var r=n(11),a=n(1),c=n.n(a),i=n(5),o=n(9),s=n(35),u=function(t){return o.PublicKey.findProgramAddress([e.from("Achievements")],t)},l=function(t){return o.PublicKey.findProgramAddress([e.from("GamesCatalog")],t)},d=function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([p(t),f(t)]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a,i,o,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.provider.wallet.publicKey,a=t.programId,e.next=4,u(a);case 4:return i=e.sent,o=Object(r.a)(i,2),l=o[0],d=o[1],e.next=10,t.rpc.initializeAchievements(d,{accounts:{achievementsAccount:l,user:n,systemProgram:s.d.SystemProgram.programId}});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(c.a.mark((function e(t,n,a,i){var o,s,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.programId,e.next=3,u(o);case 3:return s=e.sent,l=Object(r.a)(s,2),d=l[0],l[1],e.next=9,t.rpc.addAchievement(n,a,i,{accounts:{achievementsAccount:d}});case 9:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a,i,o,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.provider.wallet.publicKey,a=t.programId,e.next=4,l(a);case 4:return i=e.sent,o=Object(r.a)(i,2),u=o[0],d=o[1],e.next=10,t.rpc.initializeGamesCatalog(d,{accounts:{gamesCatalogAccount:u,user:n,systemProgram:s.d.SystemProgram.programId}});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,i,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.programId,e.next=3,u(a);case 3:return i=e.sent,o=Object(r.a)(i,2),s=o[0],o[1],e.next=9,t.rpc.addGameToCatalog(n,{accounts:{gamesCatalogAccount:s}});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}.call(this,n(7).Buffer)},269:function(e,t,n){},270:function(e,t,n){},274:function(e,t){},276:function(e,t){},292:function(e,t){},293:function(e,t){},360:function(e,t){},362:function(e,t){},376:function(e,t){},381:function(e,t){},383:function(e,t){},393:function(e,t){},395:function(e,t){},422:function(e,t){},424:function(e,t){},429:function(e,t){},431:function(e,t){},438:function(e,t){},450:function(e,t){},453:function(e,t){},464:function(e,t){},465:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"findPlayerGlobalAccountAddress",(function(){return S})),n.d(r,"findPlayerGameAccountAddress",(function(){return C})),n.d(r,"initPlayer",(function(){return E})),n.d(r,"updatePlayerNickname",(function(){return B})),n.d(r,"updatePlayerAvatar",(function(){return P})),n.d(r,"addGameToLibrary",(function(){return K})),n.d(r,"removeGameFromLibrary",(function(){return M})),n.d(r,"addAchievement",(function(){return T})),n.d(r,"addExp",(function(){return L}));var a=n(3),c=n.n(a),i=n(115),o=n.n(i),s=(n(269),n(270),n(1)),u=n.n(s),l=n(5),d=n(11);function p(e){if(e){var t=window.getComputedStyle(e);return parseInt(t.marginTop)}return 9999}function m(e){if(e){var t=window.getComputedStyle(e);return parseInt(t.marginLeft)}return 9999}function f(e,t){return Math.floor(Math.random()*(t-e+1))+e}var y=function(e){var t=document.getElementById("root"),n=document.createElement("img");return n.style.position="absolute",n.style.id="Blackhole",n.style.width="100px",n.style.marginLeft="100%",n.style.marginTop=f(0,500)+"px",n.src="./pic/blackhole.svg",t.appendChild(n),function(e,t){setInterval((function(){var n=m(e);e.style.marginLeft=n-3+"px",n<=-100&&document.getElementById("root").removeChild(e);var r=document.getElementById("playerShip");n<=m(r)+100&&n>=m(r)&&p(e)>=p(r)-30&&p(e)<=p(r)+80&&(t(),document.getElementById("root").removeChild(e))}),20)}(n,e),n},g="1";function v(e){var t=document.getElementById("root"),n=document.createElement("img");n.id="enemy"+g,n.style.position="absolute",n.style.width="200px",n.style.marginLeft="100%",n.style.marginTop=f(0,500)+"px",n.src="./pic/enemy.png",n.alt="enemy",g++,t.appendChild(n),function(e,t){var n=Date.now(),r=window.getComputedStyle(e),a=parseInt(r.marginLeft),c=setInterval((function(){var i=Date.now()-n;e.style.marginLeft=a-i/3+"px",parseInt(r.marginLeft)<=-200&&(t(),clearInterval(c),document.getElementById("root").removeChild(e))}),20)}(n,e)}function h(e){var t=document.getElementById("root"),n=document.createElement("img");n.style.position="absolute",n.style.id="eat",n.style.width="100px",n.style.marginLeft="100%",n.style.marginTop=f(0,500)+"px",n.src="./pic/eat2.svg",t.appendChild(n),function(e,t){setInterval((function(){var n=m(e);e.style.marginLeft=n-1+"px",n<=0&&document.getElementById("root").removeChild(e);var r=document.getElementById("playerShip");n<=m(r)+100&&n>=m(r)&&p(e)>=p(r)+30&&p(e)<=p(r)+170&&(t(),document.getElementById("root").removeChild(e))}),20)}(n,e)}var b="1";function x(e){var t=document.getElementById("playerShip"),n=document.getElementById("fire"+(b-1)),r=m(t)+150,a=Date.now(),c=setInterval((function(){var t=Date.now()-a,i=document.getElementById("root");(function(e,t){var n=document.getElementById("enemy"+(g-1)),r=document.getElementById("enemy"+(g-2)),a=document.getElementById("enemy"+(g-3)),c=document.getElementById("root");return m(e)>=m(n)&&p(e)>=p(n)+30&&p(e)<=p(n)+170?(c.removeChild(n),!0):m(e)>=m(r)&&p(e)>=p(r)+30&&p(e)<=p(r)+170?(c.removeChild(r),!0):m(e)>=m(a)&&p(e)>=p(a)+30&&p(e)<=p(a)+170?(c.removeChild(a),!0):void 0})(n)&&(e(),clearInterval(c),i.removeChild(n)),r+t/3>1.5*screen.width&&(clearInterval(c),i.removeChild(n)),n.style.marginLeft=r+t/3+"px"}),20)}var j=n(255),O=n.n(j),w=n(120),A=n(159),k=n(9),I=n(35),S=function(e,t){return k.PublicKey.findProgramAddress([e.toBuffer()],t)},C=function(e,t,n){return k.PublicKey.findProgramAddress([e.toBuffer(),t.toBuffer()],n)},E=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,a,c,i,o,s,l,p=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:"CryptoBuddy77",r=p.length>2&&void 0!==p[2]?p[2]:k.PublicKey.default,a=t.provider.wallet.publicKey,c=t.programId,e.next=6,S(a,c);case 6:return i=e.sent,o=Object(d.a)(i,2),s=o[0],l=o[1],e.next=12,t.rpc.initialize(l,n,r,{accounts:{playerAccount:s,user:a,systemProgram:I.d.SystemProgram.programId}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.provider.wallet.publicKey,a=t.programId,e.next=4,S(r,a);case 4:return c=e.sent,i=Object(d.a)(c,2),o=i[0],i[1],e.next=10,t.rpc.updateNickname(n,{accounts:{playerAccount:o}});case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.provider.wallet.publicKey,a=t.programId,e.next=4,S(r,a);case 4:return c=e.sent,i=Object(d.a)(c,2),o=i[0],i[1],e.next=10,t.rpc.updateAvatar(n,{accounts:{playerAccount:o}});case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.provider.wallet.publicKey,a=t.programId,e.next=4,S(r,a);case 4:return c=e.sent,i=Object(d.a)(c,2),o=i[0],i[1],e.next=10,t.rpc.addGame(n,{accounts:{playerAccount:o}});case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.provider.wallet.publicKey,a=t.programId,e.next=4,S(r,a);case 4:return c=e.sent,i=Object(d.a)(c,2),o=i[0],i[1],e.next=10,t.rpc.removeGame(n,{accounts:{playerAccount:o}});case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a,c,i,o,s,l=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>2&&void 0!==l[2]?l[2]:0,a=t.provider.wallet.publicKey,c=t.programId,e.next=5,S(a,c);case 5:return i=e.sent,o=Object(d.a)(i,2),s=o[0],o[1],e.next=11,t.rpc.addAchievement(n,r,{accounts:{playerAccount:s}});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.provider.wallet.publicKey,a=t.programId,e.next=4,S(r,a);case 4:return c=e.sent,i=Object(d.a)(c,2),o=i[0],i[1],e.next=10,t.rpc.addExp(n,{accounts:{playerAccount:o}});case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=n(189),N=n(30),z=n(21),H=["./pic/unit.svg","./pic/unit2.svg","./pic/unit3.svg","./pic/unit4.svg"],W=new k.PublicKey(w.metadata.address),D=new k.PublicKey(A.metadata.address),Y=new k.PublicKey("11111111111111111111111111111112"),J=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(1),o=Object(d.a)(i,2),s=o[0],f=o[1],g=Object(a.useState)(5),j=Object(d.a)(g,2),S=j[0],C=j[1],E=Object(a.useState)(21),B=Object(d.a)(E,2),P=B[0],K=B[1],M=Object(a.useState)("~~>"),T=Object(d.a)(M,2),L=T[0],J=T[1],R=Object(a.useState)(""),F=Object(d.a)(R,2),X=F[0],q=F[1],Q=Object(a.useState)([]),V=Object(d.a)(Q,2),Z=V[0],_=V[1],U=Object(a.useState)([]),$=Object(d.a)(U,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),re=Object(d.a)(ne,2),ae=re[0],ce=re[1],ie=Object(a.useState)(!1),oe=Object(d.a)(ie,2),se=oe[0],ue=oe[1],le=Object(N.c)();function de(){return pe.apply(this,arguments)}function pe(){return(pe=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le){e.next=2;break}return e.abrupt("return");case 2:return"https://api.devnet.solana.com",t=new k.Connection("https://api.devnet.solana.com","processed"),n=new I.b(t,le,I.b.defaultOptions()),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(){return(me=Object(l.a)(u.a.mark((function e(){var t,n,a,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("fetch; wallet:",le),le){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,de();case 5:return t=e.sent,n=new I.a(w,W,t),e.prev=7,e.next=10,r.findPlayerGlobalAccountAddress(le.publicKey,W);case 10:return a=e.sent,c=Object(d.a)(a,2),i=c[0],c[1],e.next=16,n.account.playerAccount.fetch(i);case 16:o=e.sent,console.log(o),q(o.nickname.toString()),_(o.achievements),ce(!0),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(7),console.log("Player data fetching error: ",e.t0);case 26:case"end":return e.stop()}}),e,null,[[7,23]])})))).apply(this,arguments)}function fe(){return(fe=Object(l.a)(u.a.mark((function e(){var t,n,r,a,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:return t=e.sent,n=new I.a(A,D,t),e.prev=4,e.next=7,G.findAchievementsAccountAddress(D);case 7:return r=e.sent,a=Object(d.a)(r,2),c=a[0],a[1],e.next=13,n.account.achievementsAccount.fetch(c);case 13:i=e.sent,console.log(i),o=i.achievements.filter((function(e){return e.game.toString()===Y.toString()})).map((function(e){return{type:e.label,id:e.id,label:e.label,description:e.description}})),console.log("gameAchievements",o),te(o),ue(!0),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(4),console.log("Achievements data fetching error: ",e.t0);case 24:case"end":return e.stop()}}),e,null,[[4,21]])})))).apply(this,arguments)}function ye(e){return ge.apply(this,arguments)}function ge(){return(ge=Object(l.a)(u.a.mark((function e(t){var n,a,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:if(n=e.sent,a=new I.a(w,W,n),e.prev=4,!(i=null===(c=ee.find((function(e){return e.type===t})))||void 0===c?void 0:c.id)){e.next=13;break}if(-1!==Z.indexOf(i)){e.next=11;break}return e.next=10,r.addAchievement(a,i,0);case 10:ce(!1);case 11:e.next=14;break;case 13:console.error("Could not find the achievement by type");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.log("Transaction error: ",e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}Object(a.useEffect)((function(){se||function(){fe.apply(this,arguments)}(),ae||function(){me.apply(this,arguments)}()}),[ae,se]);var ve=function(){C((function(e){return e-1})),S<=0&&(alert("Looooooser!"),location.reload())},he=function(){ye("First kill"),c((function(e){return e+50}))},be=function(){C((function(e){var t=e-5;return e<=0&&(ye("Interstellar"),alert("Oh, f*cking black hole. You lose. Try again."),alert("BTW, if you wanna know what`s happens when you fall in black hole, you can follow the link 'https://teletype.in/@nakedspace/HJrT6uhs7'"),location.reload()),t}))},xe=function(){C((function(e){return e+1}))};return S<=0&&(alert("One more time, loser?"),location.reload()),Object(a.useEffect)((function(){var e=Math.floor(n/600);console.log("score",n),e>=s&&f((function(e){return e+1}))}),[n,s]),Object(a.useEffect)((function(){var e=document.getElementById("playerShip");e&&(console.log("levl",s),e.src=H[(s-1)%H.length],3===s&&J("~~> <br> ~~>"),4===s&&(ye("Infinity war"),e.style.paddingTop="37px",J("~~> <br><br> ~~> <br><br> ~~>")))}),[s,H,J]),Object(z.jsxs)("div",{children:[Object(z.jsxs)("div",{style:{borderBottom:"solid #ffff00"},children:[Object(z.jsxs)("h1",{id:"header",style:{color:"#018f83",textAlign:"center"},children:["Hey, ",X]}),Object(z.jsx)("h1",{id:"header",style:{color:"#018f83",textAlign:"center"},children:"Wanna proof that you're not a loser?)"}),Object(z.jsxs)("div",{children:[Object(z.jsxs)("div",{style:{width:"600px",color:"#ffd700",position:"absolute"},children:["Achievements:",Z&&0!==Z.length?Object(z.jsx)("ul",{children:Z.map((function(e,t){var n=ee.find((function(t){return t.id===e})),r=n?"'".concat(n.label,"' - ").concat(n.description):"Something went wrong. Achievement id: ".concat(e);return Object(z.jsx)("li",{children:r},t)}))}):Object(z.jsx)("p",{children:"No achievements so far"})]}),Object(z.jsx)("img",{id:"start",onClick:function(){!function(e){var t=document.getElementById("root"),n=document.createElement("img");n.id="playerShip",n.style.width="200px",n.style.position="absolute",n.style.cursor="pointer",n.src=e,n.alt="player",t.appendChild(n)}(H[0]),function(){var e=document.getElementById("header");if(e)var t=setInterval((function(){e.style.marginTop=p(e)-1+"px",p(e)<=-230&&clearInterval(t)}),20);setInterval((function(){v(ve)}),2e3),setInterval((function(){y(be)}),8e3),setInterval((function(){h(xe)}),11e3)}()},src:"./pic/strart.png",alt:"start button",style:{width:"100px",marginLeft:"47%"}}),"\u2003\u2003\u2003\u2003",Object(z.jsx)("img",{id:"boost",onClick:function(){K((function(e){return e+2}))},src:"./pic/running.png",alt:"boost",style:{width:"80px",position:"absolute"}}),Object(z.jsxs)("span",{id:"speed",style:{color:"orange"},children:["Current speed: ",P,"px"]})]})]}),Object(z.jsxs)("div",{style:{alignContent:"space-between"},children:[Object(z.jsxs)("h2",{id:"lives",style:{display:"inline",color:"red"},children:["Lives: ","\u2022 ".repeat(S)]}),"\u2003\u2003\u2003\u2003",Object(z.jsxs)("h2",{id:"score",style:{display:"inline",color:"orange"},children:["Score: ",n,"\u2002\u2002"]}),Object(z.jsxs)("h2",{id:"level",style:{display:"inline",color:"orange"},children:["Level: ",s]}),Object(z.jsx)("img",{onClick:function(){alert("Nu zdravstvuy stalker. You are still loser."),location.reload()},id:"HiddenButtonForWin",alt:"",src:"./pic/HiddenButtonForWinImg.png"})]}),Object(z.jsx)(O.a,{handleKeys:["right","left","up","down","space"],handleEventType:"keydown",onKeyEvent:function(e,t){var n=document.getElementById("playerShip");if(n){var r=window.getComputedStyle(n),a=parseInt(r.marginLeft),c=parseInt(r.marginTop);switch(e){case"left":a>0&&(n.style.marginLeft=a-P+"px");break;case"up":c>0&&(n.style.marginTop=c-P+"px");break;case"right":a<document.documentElement.clientWidth-220&&(n.style.marginLeft=a+P+"px");break;case"down":c<document.documentElement.clientHeight-100&&(n.style.marginTop=c+P+"px");break;case"space":!function(e){var t=document.getElementById("root"),n=document.createElement("div"),r=document.getElementById("playerShip");n.id="fire"+b,b++,n.style.position="absolute",n.style.marginLeft=m(r)+150+"px",n.style.marginTop=p(r)+90+"px",n.style.color="#a7ff23",n.innerHTML=e,t.appendChild(n)}(L),x(he)}}}})]})},R=n(167),F=n(263),X=[Object(F.a)()];function q(){return Object(N.d)().connected?Object(z.jsx)("div",{className:"App",children:Object(z.jsx)(J,{})}):Object(z.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"100px"},children:Object(z.jsx)(R.b,{})})}var Q=function(){return Object(z.jsx)(N.a,{endpoint:" https://api.devnet.solana.com",children:Object(z.jsx)(N.b,{wallets:X,autoConnect:!0,children:Object(z.jsx)(R.a,{children:Object(z.jsx)(q,{})})})})};o.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(Q,{})}),document.getElementById("root"))}},[[465,1,2]]]);
//# sourceMappingURL=main.02287812.chunk.js.map