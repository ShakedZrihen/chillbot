(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(9),i=n.n(r),o=n(139),s=n(24),l=n(11),u=(n(73),n(33)),d=n(134),j=n(42),b=n(62),m="#428C7F",h="#3B7E72",g="#2A3858",O="#F2F2F2",x="#121213",p=Object(b.a)({palette:{success:{main:m},primary:{main:O},secondary:{main:g},error:{main:j.a.A400}}}),f=Object(d.a)((function(e){var t;return t={pageTitle:{color:m,margin:"20px auto",textAlign:"center"},title:{flexGrow:1,color:g},container:{margin:"3% auto"},multilineColor:{color:g},card:{minWidth:400,minHeight:620,textAlign:"center"},contentContainer:{display:"flex",flexFlow:"row",justifyContent:"space-between"},cardContainer:{},media:{height:400,width:400},cardText:{color:m}},Object(u.a)(t,"cardContainer",{border:"15px solid transparent",borderImage:"url(https://www.kudoboard.com/images/lines-background.png) 100 repeat"}),Object(u.a)(t,"sendButton",{margin:"16px auto",width:"100%",backgroundColor:m,color:O,"&:hover":{backgroundColor:h,color:O}}),t})),v=n(141),y=(n.p,function(){f();var e=Object(l.f)();Object(c.useEffect)((function(){return document.body.id="mainPageBody",function(){document.body.id=""}}),[]);return Object(a.jsxs)("div",{className:"mainPageContainer",children:[Object(a.jsx)("div",{className:"header"}),Object(a.jsx)("div",{className:"logo"}),Object(a.jsx)(v.a,{className:"sendButton",onClick:function(){null==localStorage.getItem("currentUser")?e.push({pathname:"/register"}):e.push({pathname:"/sendsong"})},children:"Send SongHug"}),Object(a.jsx)("div",{className:"love",children:"Spread The Love!"}),Object(a.jsx)("div",{className:"heart"})]})}),N=Object(d.a)((function(e){return{title:{color:x,fontSize:50,marginTop:120}}})),C=function(e){var t=e.title,n=N();return Object(a.jsx)("p",{className:n.title,children:t})},S=n(138),k=n(48),w=n.n(k),T=n(60),A=n(20),B=n(140),L=n(4),E=(n(53),function(e){var t=e.title,n=e.resources;e.allowBlank;return Object(a.jsxs)("div",{className:"flexCol",children:[Object(a.jsx)("label",{className:"textboxLabel",children:t}),Object(a.jsx)("div",{className:"resourceContainer",children:n.map((function(t,n){return Object(a.jsx)("img",{src:t,className:Object(L.a)("resource",{selected:t==e.value}),onClick:function(n){return a=t,console.log("select:",a),void e.setValue(a);var a}},n)}))})]})}),F=["https://robotunion.eu/wp-content/uploads/2019/06/giphy-2.gif","https://i.pinimg.com/originals/3e/87/b5/3e87b5e21e8b25f967c545fedcdf9230.gif","https://c.tenor.com/lVlj3Z219BMAAAAj/sound-classical-music.gif","https://media.tenor.com/images/d215ecf4447232813f51cb9ce3246b72/tenor.gif","https://i.pinimg.com/originals/59/a5/f0/59a5f025e75fe29104bd9597f5f7b0f1.gif","https://i.pinimg.com/originals/e7/ab/1e/e7ab1ede1eea99b1de9a8f6eaf0582a9.gif","https://media.giphy.com/media/dJ936uvjIVO9ybI2ci/giphy.gif","https://media3.giphy.com/media/ZFo9Jf12rYxWwr1mFd/source.gif"],H=n(17),I={type:"TextBlock",text:"",wrap:!0,fontType:"Default",size:"ExtraLarge",weight:"Bolder",color:"Accent",horizontalAlignment:"Center",isSubtle:!0},M={type:"Image",url:"imageUrl",isVisible:!0,selectAction:{type:"Action.OpenUrl",url:"Youtube link"}},P={type:"TextBlock",text:"",wrap:!0,horizontalAlignment:"Center",weight:"Bolder",size:"Medium",color:"Accent"},z={type:"TextBlock",text:"click on the picture for listen to the song!",wrap:!0,horizontalAlignment:"Center",isSubtle:!0},Y={contentType:"application/vnd.microsoft.card.adaptive",content:{type:"AdaptiveCard",$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.2",body:[I,M,P,z]}},V=function(e,t,n,a){var c=Object(H.a)(Object(H.a)({},I),{},{text:e}),r=Object(H.a)(Object(H.a)({},M),{},{url:t,selectAction:Object(H.a)(Object(H.a)({},M.selectAction),{},{url:n})}),i=Object(H.a)(Object(H.a)({},P),{},{text:a});return Object(H.a)(Object(H.a)({},Y),{},{content:Object(H.a)(Object(H.a)({},Y.content),{},{body:[c,r,i,z]})})};function D(e,t){return{toPersonEmail:t,attachments:[e],text:"If you see this - i failed to create songHug for you"}}var U=n(137),J={NOT_VALID:"Email must be a cisco mail",EMPTY:"Enter an email"},W={NOT_VALID:"Link must be a Youtube link",EMPTY:"Enter a music link"},Z="",G="NjFkZDcyNDctY2EzZC00ZWFlLTg2NGItZWJlOGY2YjlmNDZlN2E0NjJhODYtNzBj_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f",_=function(e){var t=Object(c.useState)(F[0]),n=Object(A.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(""),s=Object(A.a)(o,2),l=s[0],u=s[1],d=Object(c.useState)(e.email),j=Object(A.a)(d,2),b=j[0],m=j[1],h=Object(c.useState)(""),g=Object(A.a)(h,2),O=g[0],x=g[1],p=Object(c.useState)(""),f=Object(A.a)(p,2),y=(f[0],f[1]),N=Object(c.useState)(!1),C=Object(A.a)(N,2),S=C[0],k=C[1],H=Object(c.useState)(localStorage.getItem("currentUser")),I=Object(A.a)(H,1)[0];console.log("currentUser",I);var M=Object(c.useState)(Z),P=Object(A.a)(M,2),z=P[0],Y=P[1],_=z!==Z,R=Object(c.useState)(Z),q=Object(A.a)(R,2),$=q[0],K=q[1],Q=$!==Z,X=function(){var e=Object(T.a)(w.a.mark((function e(){var t,n,a,c,i,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,fetch("https://webexapis.com/v1/people?email=".concat(b),{method:"GET",headers:{Authorization:"Bearer ".concat(G),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.items[0].nickName})).catch((function(){return b}));case 3:return t=e.sent,e.next=6,fetch("https://webexapis.com/v1/people?email=".concat(I),{method:"GET",headers:{Authorization:"Bearer ".concat(G),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.items[0].nickName})).catch((function(){return I}));case 6:if(n=e.sent,r&&b&&l){e.next=11;break}return y("Some field is missing!"),k(!1),e.abrupt("return");case 11:a="https://shakedzrihen.github.io/chillbot/#"+"/songHug?receiver=".concat(b,"&displayLink=").concat(l,"&sender=").concat(n,"&senderMail=").concat(I),console.log("formattedLink",a),c="Hi ".concat(t,"!"),i=V(c,r,a,O),o=D(i,b),fetch("https://webexapis.com/v1/messages",{method:"POST",headers:{Authorization:"Bearer ".concat(G),"Content-Type":"application/json"},body:JSON.stringify(o)}).catch((function(e){return console.log(e)})).then((function(){return k(!1)}));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"cardFromContainer",children:[Object(a.jsxs)("div",{className:"flex spaceBetween",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"email",className:"textboxLabel",children:"Send a SongHug for (email)"}),Object(a.jsx)(B.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox email ".concat(_?"error":""),value:b,onChange:function(e){var t=e.target.value;return m(t),t&&t.trim().length>0?t.indexOf("cisco.com")<=0?(Y(J.NOT_VALID),!1):(Y(Z),!0):(Y(J.EMPTY),!1)},helperText:z,error:_})]}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"youtubeLink",className:"textboxLabel",children:"Paste YouTube Link here"}),Object(a.jsx)(B.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox ".concat(Q?"error":""),multiline:!0,rows:1,value:l,onChange:function(e){var t=e.target.value;return u(t),t&&t.trim().length>0?t.indexOf("youtube.com/watch")<=0?(K(W.NOT_VALID),!1):(K(Z),!0):(K(W.EMPTY),!1)},helperText:$,error:Q})]}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"message",className:"textboxLabel",children:"Add Message"}),Object(a.jsx)(B.a,{multiline:!0,id:"dscription",variant:"outlined",className:"textbox",value:O,onChange:function(e){var t=e.target.value;t.length<=65&&x(t)},rows:4})]})]}),Object(a.jsx)("div",{className:"resourcePickerContainer",children:Object(a.jsx)(E,{title:"Choose a GIF",resources:F,allowBlank:!1,value:r,setValue:i})})]}),S?Object(a.jsx)(U.a,{disableShrink:!0,className:"spinner"}):Object(a.jsx)(v.a,{className:Object(L.a)("sendButton"),onClick:X,children:"Send SongHug"})]})},R=(n(80),function(){var e=new URLSearchParams(Object(l.g)().search),t=f();return Object(c.useEffect)((function(){return document.body.id="sendSongBody",function(){document.body.id=""}}),[]),Object(a.jsx)("div",{className:"sendSongFrame",children:Object(a.jsxs)(S.a,{className:Object(L.a)(t.container,"sendSongHugContainer"),maxWidth:"xl",children:[Object(a.jsx)(C,{title:"Make Someone Happy!"}),Object(a.jsx)("div",{className:t.contentContainer,children:Object(a.jsx)(_,{email:e.get("email")})})]})})}),q=(n(81),n(61)),$=n.n(q),K=(n(99),function(e){return Object(a.jsxs)("div",{className:"songHugContainer",children:[Object(a.jsx)($.a,{url:e.displayLink,config:{youtube:{playerVars:{autoplay:1}}},playing:!0}),Object(a.jsxs)("div",{className:"description",children:[e.sender," sent you a ",Object(a.jsx)("span",{className:"songhug",children:"SongHug!"})]}),Object(a.jsx)(s.b,{to:"/sendSong?email=".concat(e.senderMail),children:Object(a.jsx)(v.a,{className:"sendButton",onClick:function(){return t=e.sender,void console.log(t);var t},children:"Send SongHug Back!"})})]})}),Q=function(){var e=new URLSearchParams(Object(l.g)().search),t=f();return Object(c.useEffect)((function(){return document.body.id="songHugBody",function(){document.body.id=""}}),[]),Object(a.jsx)("div",{className:"songHugFrame",children:Object(a.jsx)(S.a,{className:Object(L.a)(t.container,"songHugContainer"),maxWidth:"xl",children:Object(a.jsx)(K,{receiver:e.get("receiver"),displayLink:e.get("displayLink"),sender:e.get("sender"),senderMail:e.get("senderMail")})})})},X=(n(100),function(){var e=f(),t=Object(c.useState)(""),n=Object(A.a)(t,2),r=n[0],i=n[1],o=Object(l.f)();Object(c.useEffect)((function(){return document.body.id="sendSongBody",function(){document.body.id=""}}),[]);return Object(a.jsx)("div",{className:"registerContainer",children:Object(a.jsxs)(S.a,{className:Object(L.a)(e.container,"sendSongHugContainer"),maxWidth:"xl",children:[Object(a.jsx)(C,{title:"Nice to Meet ya!"}),Object(a.jsx)("p",{className:"subtitle",children:"Before we start let\u2019s get to know you a little bit"}),Object(a.jsxs)("div",{className:"fieldContainer",children:[Object(a.jsx)("label",{htmlFor:"email",className:"textboxLabel",children:"what is your cisco mail?"}),Object(a.jsx)(B.a,{id:"outlined-error-helper-text",variant:"outlined",className:"textbox email",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(a.jsx)(v.a,{className:Object(L.a)("sendButton"),onClick:function(e){localStorage.setItem("currentUser",r),o.push({pathname:"/sendsong"})},children:"Continue"})]})})}),ee=function(){return Object(a.jsx)(s.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/sendsong",children:Object(a.jsx)(R,{})}),Object(a.jsx)(l.a,{path:"/songhug",children:Object(a.jsx)(Q,{})}),Object(a.jsx)(l.a,{path:"/register",children:Object(a.jsx)(X,{})}),Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(y,{})})]})})};n(101);i.a.render(Object(a.jsx)(o.a,{theme:p,children:Object(a.jsx)(ee,{})}),document.querySelector("#root"))},53:function(e,t,n){},73:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.29e26c7c.chunk.js.map