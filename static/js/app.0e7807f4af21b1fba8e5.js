webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={props:{source:String},data:function(){return{dialog:!1,drawer:null,items:[{icon:"mdi-contacts",text:"Contacts",path:"/login"},{icon:"mdi-history",text:"Frequently contacted",path:"/worklist"},{icon:"mdi-content-copy",text:"Duplicates"},{icon:"mdi-chevron-up","icon-alt":"mdi-chevron-down",text:"Labels",model:!1,children:[{icon:"mdi-plus",text:"Create label"}]},{icon:"mdi-chevron-up","icon-alt":"mdi-chevron-down",text:"More",model:!1,children:[{text:"Import"},{text:"Export"},{text:"Print"},{text:"Undo changes"},{text:"Other contacts"}]},{icon:"mdi-message",text:"Send feedback"},{icon:"mdi-help-circle",text:"Help"},{icon:"mdi-cellphone-link",text:"App downloads"},{icon:"mdi-keyboard",text:"Go to the old version"}]}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t._l(t.items,function(e){return[e.heading?n("v-row",{key:e.heading,attrs:{align:"center"}},[n("v-col",{attrs:{cols:"6"}},[e.heading?n("v-subheader",[t._v("\n              "+t._s(e.heading)+"\n            ")]):t._e()],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[n("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?n("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                "+t._s(e.text)+"\n              ")])],1)]},proxy:!0}],null,!0),model:{value:e.model,callback:function(n){t.$set(e,"model",n)},expression:"item.model"}},[t._v(" "),t._l(e.children,function(e,a){return n("v-list-item",{key:a,attrs:{link:""}},[e.icon?n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                "+t._s(e.text)+"\n              ")])],1)],1)})],2):n("v-list-item",{key:e.text,attrs:{link:"",to:e.path}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n              "+t._s(e.text)+"\n            ")])],1)],1)]})],2)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.mdAndUp,app:"",color:"blue darken-3",dark:"","elevate-on-scroll":""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("router-link",{attrs:{to:"/"}},[n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"80px"}},[n("span",{staticClass:"white--text font-weight-bold"},[t._v("瑞联")])])],1),t._v(" "),n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"搜索"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-apps")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-bell")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",large:""},on:{click:function(e){e.stopPropagation(),t.dialog=!t.dialog}}},[n("v-avatar",{attrs:{size:"32px",item:""}},[n("v-img",{attrs:{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",alt:"Vuetify"}})],1)],1)],1),t._v(" "),n("v-content",[n("v-divider"),t._v(" "),n("router-view")],1),t._v(" "),n("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"lighten-2"},[t._v("\n        登录\n      ")]),t._v(" "),n("v-container",[n("v-row",{staticClass:"mx-2"},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{"prepend-icon":"mdi-account",placeholder:"账号"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{type:"password","prepend-icon":"mdi-account-key",placeholder:"密码"}})],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("登录\n        ")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("取消\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var s=n("VU/8")(r,i,!1,function(t){n("aNDQ")},null,null).exports,c=n("/ocq"),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center",staticStyle:{"margin-top":"16px"}},[n("v-parallax",{staticStyle:{height:"450px"},attrs:{dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h1",{staticClass:"display-1 font-weight-bold mb-4"},[t._v(t._s(t.title))]),t._v(" "),n("h4",{staticClass:"font-weight-bold"},[t._v(t._s(t.content))])])],1)],1),t._v(" "),n("v-spacer",{staticStyle:{margin:"20px 0px"}}),t._v(" "),n("router-link",{attrs:{to:"/worklist"}},[n("div",{staticClass:"d-flex d-sm-none"},[n("v-btn",{attrs:{"x-large":"",rounded:"",color:"primary",dark:"",block:""}},[t._v("开始")])],1)])],1)},staticRenderFns:[]},o=n("VU/8")({data:function(){return{title:"西安瑞联",content:"安全管理系统"}}},l,!1,null,null,null).exports,v=n("ESwS"),d=n("+cKO"),u={mixins:[v.validationMixin],validations:{name:{required:d.required,maxLength:Object(d.maxLength)(10)},email:{required:d.required,email:d.email},select:{required:d.required},checkbox:{checked:function(t){return t}}},data:function(){return{name:"",email:"",select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},computed:{checkboxErrors:function(){var t=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&t.push("You must agree to continue!"),t):t},selectErrors:function(){var t=[];return this.$v.select.$dirty?(!this.$v.select.required&&t.push("Item is required"),t):t},nameErrors:function(){var t=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&t.push("Name must be at most 10 characters long"),!this.$v.name.required&&t.push("Name is required."),t):t},emailErrors:function(){var t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("Must be valid e-mail"),!this.$v.email.required&&t.push("E-mail is required"),t):t}},methods:{submit:function(){this.$v.$touch()},clear:function(){this.$v.$reset(),this.name="",this.email="",this.select=null,this.checkbox=!1}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("form",[n("v-text-field",{attrs:{"error-messages":t.nameErrors,counter:10,label:"Name",required:""},on:{input:function(e){return t.$v.name.$touch()},blur:function(e){return t.$v.name.$touch()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{"error-messages":t.emailErrors,label:"E-mail",required:""},on:{input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-select",{attrs:{items:t.items,"error-messages":t.selectErrors,label:"Item",required:""},on:{change:function(e){return t.$v.select.$touch()},blur:function(e){return t.$v.select.$touch()}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),t._v(" "),n("v-checkbox",{attrs:{"error-messages":t.checkboxErrors,label:"Do you agree?",required:""},on:{change:function(e){return t.$v.checkbox.$touch()},blur:function(e){return t.$v.checkbox.$touch()}},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),n("v-btn",{staticClass:"mr-4",on:{click:t.submit}},[t._v("submit")]),t._v(" "),n("v-btn",{on:{click:t.clear}},[t._v("clear")])],1)])},staticRenderFns:[]},p=n("VU/8")(u,m,!1,null,null,null).exports,_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",{staticClass:"my-2"},[n("v-card-text",[n("div",[t._v("待办工作")]),t._v(" "),n("p",{staticClass:"display-1 text--primary"},[t._v("\n            主操 24釜：保温\n          ")]),t._v(" "),n("p",[t._v("已完成：动作二...")]),t._v(" "),n("div",{staticClass:"text--primary"},[t._v("\n            我的任务：动作一 至 动作四\n          ")])]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"success",attrs:{color:"indigo darken-1",to:"/worklistsetail/1"}},[t._v("\n            开始工作\n          ")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",{staticClass:"my-2"},[n("v-card-text",[n("div",[t._v("待办工作")]),t._v(" "),n("p",{staticClass:"display-1 text--primary"},[t._v("\n            辅操 28釜：核料\n          ")]),t._v(" "),n("p",[t._v("已完成：动作一...")]),t._v(" "),n("div",{staticClass:"text--primary"},[t._v("\n            我的任务：动作一 至 动作六\n          ")])]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"success",attrs:{color:"indigo darken-1"}},[t._v("\n            开始工作\n          ")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",{staticClass:"my-2"},[n("v-card-text",[n("div",[t._v("待办工作")]),t._v(" "),n("p",{staticClass:"display-1 text--primary"},[t._v("\n            辅操 28釜：加水\n          ")]),t._v(" "),n("p",[t._v("已完成：动作一...")]),t._v(" "),n("div",{staticClass:"text--primary"},[t._v("\n            我的任务：动作一 至 动作六\n          ")])]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"success",attrs:{color:"indigo darken-1"}},[t._v("\n            开始工作\n          ")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",{staticClass:"my-2"},[n("v-card-text",[n("div",[t._v("待办工作")]),t._v(" "),n("p",{staticClass:"display-1 text--primary"},[t._v("\n            辅操 28釜：搅拌\n          ")]),t._v(" "),n("p",[t._v("已完成：动作一...")]),t._v(" "),n("div",{staticClass:"text--primary"},[t._v("\n            我的任务：动作一 至 动作六\n          ")])]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"success",attrs:{color:"indigo darken-1"}},[t._v("\n            开始工作\n          ")])],1)],1)],1)],1)],1)},staticRenderFns:[]},h=n("VU/8")(null,_,!1,null,null,null).exports,x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-breadcrumbs",{attrs:{items:t.items,large:""}}),t._v(" "),n("v-stepper",{attrs:{vertical:""},model:{value:t.e6,callback:function(e){t.e6=e},expression:"e6"}},[n("v-stepper-step",{attrs:{complete:t.e6>1,step:"1"}},[t._v("\n      动作一\n      "),n("small",[t._v("记录数据")])]),t._v(" "),n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"blue-grey lighten-5"}},[n("v-card-title",[t._v("打开蒸汽阀给化料池水加热"),n("br"),t._v("控制化料温度60℃～80℃")])],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){e.stopPropagation(),t.sta+=1,t.dialog=!t.dialog}}},[t._v("下一步")]),t._v(" "),n("v-btn",{attrs:{text:""}},[t._v("异常")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e6>2,step:"2"}},[t._v("动作二")]),t._v(" "),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"blue-grey lighten-5"}},[n("v-card-title",[t._v("保温60.0℃～80.0℃ 4h 化料过程每1.0h巡检一次，查看水温及水位")])],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.sta+=1,t.e6=t.sta}}},[t._v("下一步")]),t._v(" "),n("v-btn",{attrs:{text:""}},[t._v("异常")])],1),t._v(" "),n("v-stepper-step",{attrs:{complete:t.e6>3,step:"3"}},[t._v("动作三")]),t._v(" "),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"blue-grey lighten-5"}},[n("v-card-title",[t._v("每1.0h巡检一次，查看水温及水位")])],1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.sta+=1,t.e6=t.sta}}},[t._v("下一步")]),t._v(" "),n("v-btn",{attrs:{text:""}},[t._v("异常")])],1),t._v(" "),n("v-stepper-step",{attrs:{step:"4"}},[t._v("动作四")]),t._v(" "),n("v-stepper-content",{attrs:{step:"4"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"blue-grey lighten-5"}},[n("v-card-title",[t._v("观察水表面有无油状物")])],1),t._v(" "),n("v-btn",{attrs:{color:"primary",href:"/#/worklist"}},[t._v("下一步")]),t._v(" "),n("v-btn",{attrs:{text:""}},[t._v("异常")])],1)],1),t._v(" "),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("提交数据")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1,t.e6=t.sta}}},[n("v-icon",[t._v("mdi-check")])],1)],1)],1),t._v(" "),n("v-card-title",[n("span",{staticClass:"headline"},[t._v("数据")])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"化料温度(单位：℃)",required:""}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:["0-17","18-29","30-54","54+"],label:"Age*",required:""}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("关闭")]),t._v(" "),n("v-btn",{staticClass:"white--text",attrs:{color:"primary"},on:{click:function(e){t.dialog=!1,t.e6=t.sta}}},[t._v("提交")])],1)],1)],1)],1)},staticRenderFns:[]},b=n("VU/8")({data:function(){return{e6:1,dialog:!1,sta:1,items:[{text:"主页",disabled:!1,href:"/#/"},{text:"代办工作",disabled:!1,href:"/#/worklist"},{text:"24釜",disabled:!0,href:"breadcrumbs_link_2"}]}}},x,!1,null,null,null).exports,f=n("mtWM"),k=n.n(f),g={data:function(){return{data:[]}},mounted:function(){var t=this;k.a.get("/mock/news").then(function(e){console.log(e.data),t.data=e.data})}},y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v(this._s(this.data))])},staticRenderFns:[]},$=n("VU/8")(g,y,!1,null,null,null).exports,w={data:function(){return{data:[]}},methods:{clickFn:function(t){this.$router.push({name:"Worklistdetail",params:{id:t}})}},mounted:function(){var t=this;k.a.get("/api/worklist").then(function(e){t.data=e.data})}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",t._l(t.data,function(e){return n("v-col",{key:e.id,attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"4",xl:"3"}},[n("v-card",{staticClass:"my-2"},[n("v-card-text",[n("div",[t._v("待办工作")]),t._v(" "),n("p",{staticClass:"display-1 text--primary"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("p",[t._v(t._s(e.current))]),t._v(" "),n("div",{staticClass:"text--primary"},[t._v("\n            "+t._s(e.myTask)+"\n          ")])]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"success",attrs:{color:"indigo darken-1"},on:{click:function(n){return t.clickFn(e.id)}}},[t._v("\n            开始工作\n          ")])],1)],1)],1)}),1)],1)},staticRenderFns:[]},E=n("VU/8")(w,C,!1,null,null,null).exports;a.default.use(c.a);var q=new c.a({routes:[{path:"/",name:"HelloWorld",component:o},{path:"/login",name:"Login",component:p},{path:"/worklist",name:"Worklist",component:h},{path:"/worklistsetail/:id",name:"Worklistdetail",component:b},{path:"/test",name:"Test",component:$},{path:"/test2",name:"Test2",component:E}]}),T=n("3EgV"),U=n.n(T);n("7zck");a.default.config.productionTip=!1,n("txPn"),window.$axios=k.a,a.default.use(U.a);e.default=new U.a({});new a.default({router:q,vuetify:new U.a,render:function(t){return t(s)}}).$mount("#app")},aNDQ:function(t,e){},txPn:function(t,e,n){n("zNUS").mock("/api/worklist",function(){return[{id:"1",title:"主操 24釜：保温",current:"已完成：动作二",myTask:"我的任务：动作一 至 动作四"},{id:"2",title:"主操 24釜：保温",current:"已完成：动作二",myTask:"我的任务：动作一 至 动作四"},{id:"3",title:"主操 24釜：保温",current:"已完成：动作二",myTask:"我的任务：动作一 至 动作四"},{id:"4",title:"主操 24釜：保温",current:"已完成：动作二",myTask:"我的任务：动作一 至 动作四"},{id:"5",title:"主操 24釜：保温",current:"已完成：动作二",myTask:"我的任务：动作一 至 动作四"},{id:"6",title:"主操 24釜：保温",current:"已完成：动作二",myTask:"我的任务：动作一 至 动作四"}]})}},["NHnr"]);
//# sourceMappingURL=app.0e7807f4af21b1fba8e5.js.map