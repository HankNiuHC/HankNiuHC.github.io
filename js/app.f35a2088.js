(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],l=0,m=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"50249a7d","chunk-617440bb":"d874cd68"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-617440bb":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"517fce7f","chunk-617440bb":"2ab88d9e"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){u=m[i],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var m=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",m.name="ChunkLoadError",m.type=a,m.request=r,n[1](m)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{dark:"",fixed:"",app:"",touchless:"","disable-resize-watcher":"",src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"},scopedSlots:t._u([{key:"append",fn:function(){return[a("div",{staticClass:"pa-6"},[a("v-btn",{attrs:{color:"grey darken-1",block:""},on:{click:t.logOut}},[t._v("退出登录")])],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.name))]),a("v-list-item-subtitle",[t._v(t._s(t.title))])],1)],1),a("v-divider"),t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)],1),a("v-app-bar",{attrs:{app:"",color:"blue darken-3",dark:"","elevate-on-scroll":"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"},on:{click:function(e){t.logIn?t.drawer=!t.drawer:t.clickFn()}}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),t.logIn?a("span",{staticClass:"mr-2"},[t._v(t._s(t.name))]):t._e(),t.logIn?a("v-btn",{attrs:{icon:"",large:""}},[a("v-avatar",{attrs:{size:"42px",item:"",color:"grey lighten-3"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-img",{attrs:{src:n("71c4"),alt:"Vuetify"}})],1)],1):a("v-btn",{attrs:{icon:"",large:""}},[a("v-avatar",{attrs:{size:"42px",item:""},on:{click:function(e){return e.stopPropagation(),t.clickFn()}}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-account-circle")])],1)],1)],1),a("v-content",{staticStyle:{"margin-bottom":"48px"}},[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-bottom-navigation",{attrs:{fixed:"",grow:""}},[a("v-btn",{staticStyle:{height:"56px"},attrs:{to:t.homeLink}},[a("v-icon",{attrs:{medium:""}},[t._v("mdi-home")])],1),a("v-btn",{staticStyle:{height:"56px"},attrs:{to:t.appsLink}},[a("v-icon",{attrs:{medium:""}},[t._v("mdi-apps")])],1),a("v-btn",{staticStyle:{height:"56px"},on:{click:t.goBack}},[a("v-icon",{attrs:{medium:""}},[t._v("mdi-arrow-left")])],1)],1)],1)},o=[],s={name:"App",data:function(){return{drawer:null,items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}],name:"张三",title:"主操",homeLink:"/",appsLink:"/task"}},methods:{goBack:function(){this.$router.go(-1)},clickFn:function(){this.$router.push({name:"Login.vue"})},logOut:function(){this.$store.commit("logout_method"),this.drawer=!1}},computed:{logIn:function(){return this.$store.state.logIn}}},i=s,c=n("2877"),u=n("6544"),l=n.n(u),m=n("7496"),d=n("40dc"),f=n("8212"),p=n("b81c"),v=n("8336"),h=n("a523"),g=n("a75b"),b=n("ce7e"),y=n("132d"),k=n("adda"),w=n("8860"),_=n("da13"),x=n("8270"),j=n("5d23"),C=n("34c3"),V=n("f774"),L=n("2fa4"),I=Object(c["a"])(i,r,o,!1,null,null,null),P=I.exports;l()(I,{VApp:m["a"],VAppBar:d["a"],VAvatar:f["a"],VBottomNavigation:p["a"],VBtn:v["a"],VContainer:h["a"],VContent:g["a"],VDivider:b["a"],VIcon:y["a"],VImg:k["a"],VList:w["a"],VListItem:_["a"],VListItemAvatar:x["a"],VListItemContent:j["a"],VListItemIcon:C["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VNavigationDrawer:V["a"],VSpacer:L["a"]});var S=n("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var A=n("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},E=[],T={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},N=T,$=n("62ad"),q=n("0fd9"),B=Object(c["a"])(N,O,E,!1,null,null,null),F=B.exports;l()(B,{VApp:m["a"],VCol:$["a"],VImg:k["a"],VRow:q["a"]}),a["a"].use(A["a"]);var D=[{path:"/",name:"Home",component:F},{path:"/login",name:"Login.vue",component:function(){return n.e("about").then(n.bind(null,"578a"))}},{path:"/task",name:"Task.vue",component:function(){return n.e("chunk-617440bb").then(n.bind(null,"43fe"))}}],M=new A["a"]({mode:"history",base:"/",routes:D}),z=M,H=n("2f62");a["a"].use(H["a"]);var R=new H["a"].Store({state:{logIn:!1},mutations:{login_method:function(t){t.logIn=!0},logout_method:function(t){t.logIn=!1}},actions:{},modules:{}}),W=n("f309");a["a"].use(W["a"]);var J=new W["a"]({}),K=(n("99af"),n("ac1f"),n("5319"),n("bc3a")),Q=n.n(K),U=n("4be7"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{bottom:"",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.message)+" ")])},X=[],Y={name:"message",data:function(){return{message:"",snackbar:!1,timeout:2e3}}},Z=Y,tt=n("2db4"),et=Object(c["a"])(Z,G,X,!1,null,null,null),nt=et.exports;l()(et,{VSnackbar:tt["a"]});var at,rt=a["a"].extend(nt),ot=[],st=1,it=function(t){t=t||{},"string"===typeof t&&(t={message:t});var e="message_"+st++;return at=new rt({data:t}),at.id=e,at.vm=at.$mount(),document.body.appendChild(at.vm.$el),at.dom=at.vm.$el,at.vm.snackbar=!0,ot.push(at),at.vm};it.send=function(t){it(t)};var ct=it,ut=Q.a.create({timeout:1e4});ut.interceptors.request.use((function(t){var e=R.state.token;return e&&(t.headers.Authorization=e),t}),(function(t){return U["Promise"].reject(t)})),ut.interceptors.response.use((function(t){return 200===t.status?U["Promise"].resolve(t):U["Promise"].reject(t)}),(function(t){if(t.response.status){switch(t.response.status){case 401:z.replace({path:"/login",query:{redirect:z.currentRoute.fullPath}});break;case 403:ct.send("登录过期，请重新登录"),setTimeout((function(){z.replace({path:"/login",query:{redirect:z.currentRoute.fullPath}})}),1e3);break;default:var e;e=mt(t.response.status),ct.send("".concat(t.response.status,":").concat(e))}return U["Promise"].reject(t.response)}}));var lt=ut,mt=function(t){var e="";switch(t){case 400:e="请求错误(400)";break;case 401:e="未授权，请重新登录(401)";break;case 403:e="拒绝访问(403)";break;case 404:e="请求出错(404)";break;case 408:e="请求超时(408)";break;case 500:e="服务器错误(500)";break;case 501:e="服务未实现(501)";break;case 502:e="网络错误(502)";break;case 503:e="服务不可用(503)";break;case 504:e="网络超时(504)";break;case 505:e="HTTP版本不受支持(505)";break;default:e="连接出错(".concat(t,")!")}return"".concat(e,"，请检查网络或联系管理员！")};a["a"].config.productionTip=!1,a["a"].prototype.$axios=lt,a["a"].prototype.$message=ct,new a["a"]({router:z,store:R,vuetify:J,render:function(t){return t(P)}}).$mount("#app")},"71c4":function(t,e,n){t.exports=n.p+"img/worker.7cd9ad01.png"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.f35a2088.js.map