(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/ssss.7402c98b.jpg"},113:function(e,t,n){e.exports=n(245)},245:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(49),r=n.n(i),l=n(7),s=n(12),c=n(9),u=n(8),d=n(10),h=n(22),m=n(104),p=n.n(m),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={hits:[],isLoading:!1,error:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Welcome to #hackTinder"),o.a.createElement(h.b,{to:"/phone-token"},"Here")," you can check out your Tinder likes and match freely. ",o.a.createElement("p",null),"To do that, follow the steps:",o.a.createElement("p",null),"- Use Chrome or Firefox browser. Warning: It does not work on smartphones! You have to use a computer!",o.a.createElement("p",null),"- open a new browser tab and log into ",o.a.createElement("a",{href:"https://tinder.com/",target:"_blank"},"tinder.com"),o.a.createElement("p",null),"- it is advisory to increase your search radius, in order to see more matches ",o.a.createElement("p",null),"- Hit F12 on your keyboard. Debug window will be visualized, much like the one shown in the image below:",o.a.createElement("p",null),o.a.createElement("img",{src:p.a}),o.a.createElement("p",null),"- 1. go to 'Network' tab ",o.a.createElement("p",null),"- 2. go to 'Fetch/XHR' sub-tab ",o.a.createElement("p",null),"- 3. wait until 'updates?locale=en' is shown, click on it ",o.a.createElement("p",null),"- 4. go to 'Headers' ",o.a.createElement("p",null),"- 5. find 'x-auth-token' and copy it by mouse right click ",o.a.createElement("p",null),"- 6. click ",o.a.createElement(h.b,{to:"/phone-token"},"  here")," and paste the 'x-auth-token' in the white box... ",o.a.createElement("p",null),"- that's it. Enjoy! ",o.a.createElement("p",null))}}]),t}(a.Component),E=n(29),b="https://bender-app.herokuapp.com/",v={URLS:{BASE_URL:b,USER:b+"user/",NEW_FRIENDS:b+"new-friends",FAST_MATCH:b+"fast-match",LIKE:b+"like/",STORAGE:b+"storage/",STORAGE_TOKEN:b+"storage/token/",STORAGE_BOOKMARKS:b+" ",STORAGE_SETTINGS:b+" "},LOCAL_CASH_VAR_NAME:"__TnDr__",AUTH_HEADER_NAME:"X-Auth-Token",PHONE_HEADER_NAME:"phone-number",VERSION:"1.45"},g=n(106),w=n.n(g),O=new(function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).execute=function(e,t,n,a){return w()({method:e,url:t,data:n,headers:a})},n.doPost=function(e,t,a){return n.execute("post",e,t,n.getHeaders(a))},n.doPut=function(e,t,a){return n.execute("put",e,t,n.getHeaders(a))},n.doGet=function(e,t){return n.execute("get",e,{},n.getHeaders(t))},n.doDelete=function(e,t){return n.execute("delete",e,{},n.getHeaders(t))},n.getHeaders=function(e){var t=v.AUTH_HEADER_NAME,n=v.PHONE_HEADER_NAME;return e||(e={}),k[n]&&(e[n]=k[n]),k[t]&&(e[t]=k[t]),e},n}return Object(d.a)(t,e),t}(o.a.Component)),k=new(function(e){function t(e){var n,a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleWindowSizeChange=function(){a.setWidth(window.innerWidth)},a.setWidth=function(e){(e=parseInt(e))!==e&&(e=1e3),a.innerWidth=e},a.isMobile=function(){return a.innerWidth<=768},a.persistAll=function(e,t){O.doPost(v.URLS.STORAGE+e,{json:JSON.stringify(t)},{}).catch((function(e){console.error(e)}))},a.loadAll=function(e){return O.doGet(v.URLS.STORAGE+e,{})},a.getPhone=function(){return a[v.PHONE_HEADER_NAME]},a.setPhone=function(e){a[v.PHONE_HEADER_NAME]=e},a.getToken=function(){return a[v.AUTH_HEADER_NAME]},a.setToken=function(e){a[v.AUTH_HEADER_NAME]=e},a.isPristine=function(){return a.isPristineVal},a.setPristine=function(e){a.isPristineVal=e},a.persistBookmarks=function(e){O.doPost(v.URLS.STORAGE_BOOKMARKS+this.getPhone(),{json:JSON.stringify(e)},{}).then((function(e){})).catch((function(e){console.error(e)}))},a[v.PHONE_HEADER_NAME]=null,a[v.AUTH_HEADER_NAME]=null,a.settings={bgColor:"bg-dark",textColor:"text-white"},a.bookmarks=[],a.isPristineVal=!0,a.cashStructureTemplate=(n={settings:a.settings},Object(E.a)(n,v.AUTH_HEADER_NAME,{token:a[v.AUTH_HEADER_NAME]}),Object(E.a)(n,"bookmarks",a.bookmarks),n),window.addEventListener("resize",a.handleWindowSizeChange),a.setWidth(window.innerWidth),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"persistToken",value:function(e){O.doPut(v.URLS.STORAGE_TOKEN+this.getPhone(),{json:JSON.stringify({token:e})})}}]),t}(o.a.Component)),y=n(107),S=n.n(y),j=n(247),A=n(246),T=n(6),N=n(248),_=Object(T.b)({form:N.a}),R=(window.devToolsExtension?window.devToolsExtension()(T.c):T.c)(_),P=[],C=function(e){for(P.push(e);P.length>0;){P.shift()()}};R.getStore=function(){return C((function(){})),R},R.getMatchById=function(e){var t,n,a;if(!e)throw new Error("'id' is not allowed to be: "+e);for(var o=(null===(t=R.getStore())||void 0===t?void 0:null===(n=t.update)||void 0===n?void 0:null===(a=n.data)||void 0===a?void 0:a.matches)||[],i=0;i<o.length;i++)if(e===o[i]._id)return o[i];return null},R.addToStore=function(e,t){if(!e||"string"!=typeof e)throw new Error("Only objects of type 'string' are allowed!");C((function(){R[e]=t}))};var H=R,x=n(34),M=function(e){var t=e.input,n=e.label,a=e.type,i=(e.value,e.placeholder),r=e.meta,l=r.touched,s=r.error;return o.a.createElement("div",null,o.a.createElement("label",null,n),o.a.createElement("div",null,o.a.createElement("input",Object.assign({className:"form-control"},t,{placeholder:i,type:a})),l&&s&&o.a.createElement("span",null,s),o.a.createElement("p",null)))},D=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.options,t=e.handleSubmit,n=e.fields,a=Object(A.a)({form:"RenderFieldWrapped"})((function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:t},n.map((function(e){var t;return(t=e).noCash&&(t.name=S()()),o.a.createElement("div",{key:e.name},o.a.createElement(j.a,{name:e.name,onChange:e.onChange,component:M,type:"input",placeholder:e.placeholder,label:e.label}),o.a.createElement("p",null))})),o.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Submit"})))}));return o.a.createElement("div",null,o.a.createElement(x.a,{store:H},o.a.createElement(a,{options:e})))}}]),t}(o.a.Component),L=n(26),F=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.state.phone=e.target.value},n.handleChangeToken=function(e){n.state.token=e.target.value},n.doAuth=function(e,t){k.setToken(e),k.setPhone(e),this.props.history.push("/more-pals")},n.handleSubmit=function(e){e.preventDefault();var t=n.state.token,a=n.state.token;n.doAuth(a,t)},n.state={phone:"",token:""},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={handleSubmit:this.handleSubmit,fields:[{name:"X-token",label:"X-token",placeholder:"auth token..",noCash:!0,onChange:this.handleChangeToken}]};return o.a.createElement("div",{autoComplete:"new-password"},o.a.createElement(D,{autoComplete:"new-password",options:e}))}}]),t}(o.a.Component),I=Object(L.f)(F),U=n(110),W=(n(239),n(111)),G=n.n(W),B=new(function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).applyDesignSettings=function(){n.applyClass(document.body,n.textColors,"text-white"),n.applyClass(document.body,n.bgColors,"bg-dark")},n.persistSetting=function(){},n.getSetting=function(){},n.applyClass=function(e,t,n){t.forEach((function(t){e.classList.remove(t.class)})),e.classList.add(n)},n.getInputStyleClasses=function(){return"form-control "+(n.getSetting("textColor")||" ")+" "+(n.getSetting("bgColor")||"")},n.textColors=[{name:"Gray",class:"text-muted"},{name:"White",class:"text-white"},{name:"Dark",class:"text-dark"},{name:"Black",class:"text-body"}],n.bgColors=[{name:"Gray",class:"bg-secondary"},{name:"Dark",class:"bg-dark"},{name:"Light",class:"bg-light"}],n.updatePollInterval=v.UPDATE_POLL_INTERVAL,n.isToShowPhotos=!0,n.applyDesignSettings(),n}return Object(d.a)(t,e),t}(o.a.Component)),V=function(e){function t(e){var n,a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).nextPic=function(){a.isToShowPhotos&&(a.state.photos.length<2||(a.ind<a.state.photos.length-1?a.ind++:a.ind=0,a.setState({imgSrc:a.state.photos[a.ind].url})))};var o=a.props,i=o.photos,r=o.name;a.personName=r,a.isToShowPhotos=B.isToShowPhotos,a.ind=0;var s=a.isToShowPhotos?null===i||void 0===i?void 0:null===(n=i[a.ind])||void 0===n?void 0:n.url:null;return a.state={photos:i,imgSrc:s},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.imgSrc?this.isToShowPhotos?o.a.createElement("div",{className:"container-fluid px-0"},o.a.createElement("img",{onClick:this.nextPic,src:this.state.imgSrc,alt:"some image",className:"img-fluid w-100"})):o.a.createElement("div",null,o.a.createElement("label",{className:"text-center"},this.personName," ")):o.a.createElement("div",null)}}]),t}(o.a.Component);function K(e){if(!e)return null;for(var t="",n=0;n<e.length;n++){var a=e[n],o=null===a||void 0===a?void 0:a.name;o&&(t=t.concat(o+", "))}return""===t?null:t}var z=function(e){var t,n,a,i,r,l=e.person;if(!l)return o.a.createElement("div",null," ");var s=l.pos_info&&l.pos_info.country?l.pos_info.country.name:"",c=l.birth_date?l.birth_date.substring(0,4):"",u=l.pos_info&&l.pos_info.city?l.pos_info.city.name:"";l.jobs=(null===(t=l.jobs)||void 0===t?void 0:null===(n=t[0])||void 0===n?void 0:null===(a=n.title)||void 0===a?void 0:a.name)||"",l.schools=(null===(i=l.schools)||void 0===i?void 0:null===(r=i[0])||void 0===r?void 0:r.name)||"";var d=K(null===l||void 0===l?void 0:l.interests),h=K(null===l||void 0===l?void 0:l.sexuality);return o.a.createElement("div",{className:"text-justify text-wrap"},l.name?o.a.createElement("div",null," ",o.a.createElement("span",{className:"font-weight-bold"},"Name:  ")," ",l.name," "):null,l.birth_date?o.a.createElement("div",null," ",o.a.createElement("span",{className:"font-weight-bold"},"Age:  ")," ",c," "):null,l.distance_mi?o.a.createElement("div",null," ",o.a.createElement("span",{className:"font-weight-bold"},"Away (miles):  ")," ",l.distance_mi," "):null,u?o.a.createElement("div",null," ",o.a.createElement("span",{className:"font-weight-bold"},"Location:  ")," ",u,", ",s,"  "):null,l.bio?o.a.createElement("div",null," ",o.a.createElement("span",{className:"font-weight-bold"},"Bio:  ")," ",l.bio," "):null,l.jobs?o.a.createElement("div",null," ",o.a.createElement("span",{className:"font-weight-bold"},"Job:  ")," ",l.jobs," "):null,l.schools?o.a.createElement("div",null," ",o.a.createElement("span",{className:"font-weight-bold"},"Schools:  ")," ",l.schools," "):null,d?o.a.createElement("div",null," ",o.a.createElement("span",{className:"font-weight-bold"},"Interests:  ")," ",d," "):null,h?o.a.createElement("div",null," ",o.a.createElement("span",{className:"font-weight-bold"},"Sexuality:  ")," ",h," "):null)},J=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).getFriendRequests=function(){var e=k.getToken(),t=Object(E.a)({},v.AUTH_HEADER_NAME,e);O.doGet(v.URLS.FAST_MATCH,t).then((function(t){var a,o,i,r;(null===t||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:null===(o=a.data)||void 0===o?void 0:o.results)&&(k.persistToken(e),n.getPeopleNearby(null===t||void 0===t?void 0:null===(i=t.data)||void 0===i?void 0:null===(r=i.data)||void 0===r?void 0:r.results))})).catch((function(t){console.log(e),console.log(t)}))},n.getPeopleNearby=function(e){O.doGet(v.URLS.NEW_FRIENDS,{}).then((function(t){var a,o=null===t||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.results;n.process(e,o)})).catch((function(e){console.log(e)}))},n.like=function(e){k.setPristine(!1),n.setState({isPristine:!1}),O.doGet(v.URLS.LIKE+e,{}).then((function(e){window.alert("Check your tinder and start chatting with the new match. ")})).catch((function(e){console.log(e)}))},n.state={beanId:e.beanId,allFr:[],isPristine:k.isPristine()},n.friendRequestPicIds="",n.isMountedOk=!0,n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getFriendRequests(),this.isMountedOk=!0}},{key:"process",value:function(e,t){var n=[];e.forEach((function(e){var a=t.find((function(t){return!!t.photos.find((function(t){return t.id===e.user.photos[0].id}))}));a?n.push(a):(e.photos=e.user.photos,e.name="",n.push(e))})),this.setState({allFr:n})}},{key:"render",value:function(){var e=this,t=function(t){var n=t.person;return console.log(n),(null===n||void 0===n?void 0:n.name)&&n.name.length>0?o.a.createElement("div",{className:"text-justify text-wrap"},o.a.createElement("button",{type:"button",hidden:!e.state.isPristine,className:"btn btn-success",onClick:function(){return e.like(n._id)}},"Like")):o.a.createElement("label",null,"The person might be too far from your location or you have 'disLiked' the person before. Please, increase your search radius and try again.")},n=function(e){var n=e.person;return o.a.createElement("div",{className:"text-justify text-wrap"},o.a.createElement(z,{person:n}),o.a.createElement(t,{person:n}))},a=function(e){return o.a.createElement(V,{photos:e.photos,name:e.name})},i=this.state.allFr.map((function(e){var t={info:o.a.createElement(n,{person:e}),image:o.a.createElement(a,{photos:e.photos,name:e.name})};return Object(U.a)({},t)}));return o.a.createElement("div",null,o.a.createElement("br",null),"Push 'Like' button of a person you like the most. You can have one match per day only, so choose wisely...",o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(G.a,{className:"-striped -highlight",data:i,columns:[{columns:[{Header:"Photos",accessor:"image"},{Header:"Info",accessor:"info"}]}],sortable:!1,defaultPageSize:i.length,pageSize:i.length,showPagination:!1})))}}]),t}(o.a.Component),X=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).changeState=function(e){n.setState(e)},n.addMsgMatch=function(){},n.findInMsgMatches=function(){return-1},n.removeMsgMatch=function(){},n.showMoreFriendsRefreshButton=function(){n.setState({isVisibleMoreFriendsTab:!0})},n.hideMoreFriendsRefreshButton=function(){n.setState({isVisibleMoreFriendsTab:!1})},n.changeButtonVisibility=function(e){n.setState(e)},n.toggleFlashTabTitle=function(){},n.startFlashTabTitle=function(){},n.stopFlashTabTitle=function(){},n.getUserData=function(e){},n.updateFromBackend=function(){},n.state={beanId:e.beanId,showUser:!1,isVisible:!1,isVisibleMoreFriendsTab:!1,msgMatches:[]},n.initialTitle=document.title,n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",null,o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{className:"btn-group"})))}}]),t}(o.a.Component),q=Object(L.f)(X),Y=function(){return o.a.createElement("div",{className:"container",style:{paddingTop:10}},o.a.createElement(h.a,null,o.a.createElement(q,{beanId:"header1"}),o.a.createElement(L.c,null,o.a.createElement(L.a,{exact:!0,path:"/",component:f}),o.a.createElement(L.a,{path:"/phone-token",component:I}),o.a.createElement(L.a,{path:"/more-pals",render:function(){return o.a.createElement(J,{data:H.updates,beanId:"moreFriends1"})}}),o.a.createElement(L.a,{path:"*",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(244);r.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[113,1,2]]]);
//# sourceMappingURL=main.b5ac4026.chunk.js.map