(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"699cecdf"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dnbs-website/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"215d":function(t){t.exports=JSON.parse('{"kind":"youtube#liveBroadcast","etag":"PleWcUWhCRNkzceZ2hD-E8ojPe8","id":"vT9nb1JL2HY","snippet":{"publishedAt":"2021-04-08T20:41:38Z","channelId":"UCktv75sp9KEXUvF7vjgx6Zw","title":"Test","description":"","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/vT9nb1JL2HY/default_live.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/vT9nb1JL2HY/mqdefault_live.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/vT9nb1JL2HY/hqdefault_live.jpg","width":480,"height":360},"standard":{"url":"https://i.ytimg.com/vi/vT9nb1JL2HY/sddefault_live.jpg","width":640,"height":480},"maxres":{"url":"https://i.ytimg.com/vi/vT9nb1JL2HY/maxresdefault_live.jpg","width":1280,"height":720}},"scheduledStartTime":"2021-05-05T20:00:00Z","isDefaultBroadcast":false,"liveChatId":"KicKGFVDa3R2NzVzcDlLRVhVdkY3dmpneDZadxILdlQ5bmIxSkwySFk"},"status":{"lifeCycleStatus":"ready","privacyStatus":"public","recordingStatus":"notRecording","madeForKids":false,"selfDeclaredMadeForKids":false}}')},"5cae":function(t,e,a){"use strict";a("e813")},"728a":function(t,e,a){"use strict";a("9eea")},"9eea":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",flat:"","inverted-scroll":""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("v-icon",[t._v("mdi-youtube")])],1),a("v-btn",{attrs:{text:""}},[a("v-icon",[t._v("mdi-instagram")])],1),a("v-btn",{attrs:{text:""}},[a("v-icon",[t._v("mdi-soundcloud")])],1)],1),a("v-main",[a("router-view")],1)],1)},i=[],r=a("d4ec"),o=a("bee2"),c=a("262e"),l=a("2caf"),u=(a("2ca0"),a("9ab4")),d=a("2fe1"),v=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"created",value:function(){this.$vuetify.lang.current=navigator.language.startsWith("de")?"de":"en"}}]),a}(n["a"]);v=Object(u["a"])([d["b"]],v);var f=v,h=f,p=a("2877"),b=a("6544"),m=a.n(b),g=a("7496"),y=a("40dc"),_=a("8336"),w=a("132d"),x=a("adda"),O=a("f6c4"),j=a("2fa4"),C=Object(p["a"])(h,s,i,!1,null,null,null),k=C.exports;m()(C,{VApp:g["a"],VAppBar:y["a"],VBtn:_["a"],VIcon:w["a"],VImg:x["a"],VMain:O["a"],VSpacer:j["a"]});var S=a("9483");Object(S["a"])("".concat("/dnbs-website/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7"),a("3ca3"),a("ddb0");var T=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-sheet",{staticClass:"pa-3 debug",attrs:{color:"transparent"}},[a("v-btn-toggle",{attrs:{mandatory:""},on:{change:t.debugChange},model:{value:t.debugOption,callback:function(e){t.debugOption=e},expression:"debugOption"}},[a("v-btn",{attrs:{"x-small":""}},[t._v("Spin")]),a("v-btn",{attrs:{"x-small":""}},[t._v("Kein")]),a("v-btn",{attrs:{"x-small":""}},[t._v("Datum")]),a("v-btn",{attrs:{"x-small":""}},[t._v("T-24")]),a("v-btn",{attrs:{"x-small":""}},[t._v("Live")])],1)],1),a("div",{staticClass:"hero"},[a("v-container",{attrs:{"fill-height":""}},[a("v-row",[a("v-container",[t.loaded&&!t.scheduled?a("v-row",[a("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[a("div",{class:(t.$vuetify.breakpoint.mobile?"text-h3":"text-h2")+" white--text text-center"},[t._v(" "+t._s(t.$vuetify.lang.t("$vuetify.no_stream_scheduled"))+" ")])])],1):t._e(),t.loaded&&t.live?a("v-row",[a("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[a("live-player")],1)],1):t._e(),t.loaded&&t.scheduled&&!t.live?a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("broadcast-countdown",{attrs:{date:t.date}})],1)],1):t._e(),t.loaded?t._e():a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-progress-circular",{attrs:{size:60,width:7,color:"white",indeterminate:""}})],1)],1),a("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-5",attrs:{"x-large":"",icon:"",outlined:"",color:"white",elevation:"20"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-youtube")])],1),a("v-btn",{staticClass:"mx-5",attrs:{"x-large":"",icon:"",outlined:"",color:"white",elevation:"20"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-instagram")])],1),a("v-btn",{staticClass:"mx-5",attrs:{"x-large":"",icon:"",outlined:"",color:"white",elevation:"20"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-soundcloud")])],1),a("v-btn",{staticClass:"ml-5",attrs:{"x-large":"",icon:"",outlined:"",color:"white",elevation:"20"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("mdi-facebook")])],1)],1)],1)],1)],1)],1),a("div",{staticClass:"light x1"}),a("div",{staticClass:"light x2"}),a("div",{staticClass:"light x3"}),a("div",{staticClass:"light x4"}),a("div",{staticClass:"light x5"}),a("div",{staticClass:"light x6"}),a("div",{staticClass:"light x7"}),a("div",{staticClass:"light x8"}),a("div",{staticClass:"light x9"})],1)],1)},V=[],D=(a("caad"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-responsive",{staticClass:"z-100",attrs:{"aspect-ratio":16/9,elevation:20}},[a("iframe",{attrs:{width:"100%",height:"100%",src:"https://www.youtube.com/embed/axsW47q4hTw?autoplay=1",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),J=[],Y=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.live=!1,t}return a}(n["a"]);Y=Object(u["a"])([d["b"]],Y);var A=Y,N=A,P=(a("5cae"),a("6b53")),L=Object(p["a"])(N,D,J,!1,null,"0f2a3402",null),M=L.exports;m()(L,{VResponsive:P["a"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.lessThanADay?a("div",{staticClass:"text-h4 white--text"},[t._v(" "+t._s(t.$vuetify.lang.t("$vuetify.stream_starts"))+" ")]):a("div",{staticClass:"text-h4 white--text"},[t._v(" "+t._s(t.$vuetify.lang.t("$vuetify.next_stream"))+" ")]),t.lessThanADay?a("div",{staticClass:"text-h1 white--text"},[a("vue-countdown",{attrs:{time:t.time},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hours,n=e.minutes,s=e.seconds;return[t._v(" "+t._s(t._f("padZeros")(a))+":"+t._s(t._f("padZeros")(n))+":"+t._s(t._f("padZeros")(s))+" ")]}}],null,!1,3196480940)})],1):a("div",{class:t.h1Class+" white--text"},[t._v(t._s(t.displayDate))]),t.lessThanADay?t._e():a("div",{class:t.h4Class+" white--text"},[a("vue-countdown",{attrs:{time:t.time},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.days,s=e.hours,i=e.minutes,r=e.seconds;return[a("span",[t._v(t._s(n)+" "+t._s(t.$vuetify.lang.t("$vuetify.days"))+", ")]),a("span",[t._v(t._s(s)+" "+t._s(t.$vuetify.lang.t("$vuetify.hours"))+", ")]),a("span",[t._v(t._s(i)+" "+t._s(t.$vuetify.lang.t("$vuetify.minutes"))+", ")]),a("span",[t._v(t._s(r)+" "+t._s(t.$vuetify.lang.t("$vuetify.seconds")))])]}}],null,!1,618416497)})],1)])},I=[],H=(a("4d90"),a("25f0"),a("1b40")),Z=a("5a0c"),B=a.n(Z),F=a("407d"),K=a.n(F),R=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"h1Class",get:function(){return this.$vuetify.breakpoint.mobile?"text-h3":"text-h1"}},{key:"h4Class",get:function(){return this.$vuetify.breakpoint.mobile?"":"text-h4"}},{key:"displayDate",get:function(){return"de"==this.$vuetify.lang.current?B()(this.date).format("DD.MM.YYYY HH:mm"):B()(this.date).format("YYYY/MM/DD hh:mm A")}},{key:"lessThanADay",get:function(){return B.a.duration(this.time).days()<1}},{key:"time",get:function(){return B()(this.date).diff(Date.now())}}]),a}(n["a"]);Object(u["a"])([Object(H["a"])({default:new Date})],R.prototype,"date",void 0),R=Object(u["a"])([Object(d["b"])({components:{VueCountdown:K.a},filters:{padZeros:function(t,e){return t.toString().padStart(2,"0")}}})],R);var q=R,z=q,W=Object(p["a"])(z,E,I,!1,null,null,null),U=W.exports,G=a("215d"),Q=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.broadcast=null,t.debugOption=2,t}return Object(o["a"])(a,[{key:"created",value:function(){fetch("http://localhost:3080/api/streams/next"),this.debugChange()}},{key:"live",get:function(){var t,e;return this.loaded&&["live","liveStarting"].includes(null===(t=this.broadcast)||void 0===t||null===(e=t.status)||void 0===e?void 0:e.lifeCycleStatus)}},{key:"loaded",get:function(){return null!==this.broadcast}},{key:"date",get:function(){var t,e;return new Date(null===(t=this.broadcast)||void 0===t||null===(e=t.snippet)||void 0===e?void 0:e.scheduledStartTime)}},{key:"scheduled",get:function(){return this.loaded&&this.broadcast.snippet}},{key:"debugChange",value:function(){switch(this.debugOption){case 0:this.broadcast=null;break;case 1:this.broadcast={};break;case 2:this.broadcast=JSON.parse(JSON.stringify(G)),this.broadcast.snippet.scheduledStartTime=B()().add(11,"days").toISOString();break;case 3:this.broadcast=JSON.parse(JSON.stringify(G)),this.broadcast.snippet.scheduledStartTime=B()().add(23,"hours").toISOString();break;case 4:this.broadcast={status:{lifeCycleStatus:""}},this.broadcast=JSON.parse(JSON.stringify(G)),this.broadcast.snippet.scheduledStartTime=B()().toISOString(),this.broadcast.status.lifeCycleStatus="live";break;default:break}}}]),a}(n["a"]);Q=Object(u["a"])([Object(d["b"])({components:{LivePlayer:M,BroadcastCountdown:U}})],Q);var X=Q,tt=X,et=(a("728a"),a("a609")),at=a("62ad"),nt=a("a523"),st=a("490a"),it=a("0fd9"),rt=a("8dd9"),ot=Object(p["a"])(tt,$,V,!1,null,"f170d5d6",null),ct=ot.exports;m()(ot,{VBtn:_["a"],VBtnToggle:et["a"],VCol:at["a"],VContainer:nt["a"],VIcon:w["a"],VProgressCircular:st["a"],VRow:it["a"],VSheet:rt["a"]}),n["a"].use(T["a"]);var lt=[{path:"/",name:"Home",component:ct},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ut=new T["a"]({mode:"history",base:"/dnbs-website/",routes:lt}),dt=ut,vt=a("2f62");n["a"].use(vt["a"]);var ft=new vt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ht=a("f309"),pt=a("5530"),bt=a("4b41"),mt=Object(pt["a"])(Object(pt["a"])({},bt["a"]),{},{next_stream:"next stream: ",days:"days",hours:"hours",minutes:"minutes",seconds:"seconds"}),gt=Object(pt["a"])(Object(pt["a"])({},bt["a"]),{},{next_stream:"nächster Stream: ",stream_starts:"Stream beginnt in",no_stream_scheduled:"aktuell ist kein Stream geplant",days:"Tage",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden"});n["a"].use(ht["a"]);var yt=new ht["a"]({lang:{locales:{de:gt,en:mt},current:"en"}}),_t=(a("6210"),a("4208")),wt=a.n(_t),xt=a("d772"),Ot=a.n(xt);B.a.extend(Ot.a),B.a.extend(wt.a),n["a"].config.productionTip=!1,new n["a"]({router:dt,store:ft,vuetify:yt,render:function(t){return t(k)}}).$mount("#app")},e813:function(t,e,a){}});
//# sourceMappingURL=app.c42f3aab.js.map