webpackJsonp([4],{TOt5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("ksPF"),n=i.n(a),r={name:"Tools",data:function(){return{switch1:!1}},watch:{switch1:function(t){!0===t?n.a.on():!1===t&&n.a.off()}},beforeDestroy:function(){n.a.off(),plus.device.setWakelock(!1)},destroyed:function(){n.a.off()},created:function(){plus.device.setWakelock(!0)},methods:{func:function(){plus.nativeUI.alert("建设中...")}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline mb-1"},[t._v("手电筒")]),t._v(" "),i("v-list-item-subtitle",[t._v("应急使用，请勿长时间打开手电筒")])],1),t._v(" "),i("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[i("v-icon",{attrs:{large:""}},[t._v("mdi-flashlight")])],1)],1),t._v(" "),i("v-card-actions",[i("v-switch",{model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}})],1)],1),t._v(" "),i("v-card",{staticClass:"mx-auto mt-2",attrs:{"max-width":"344",outlined:""}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline mb-1"},[t._v("查询设备清洗记录")]),t._v(" "),i("v-list-item-subtitle",[t._v("请扫描设备条形码/二维码")])],1),t._v(" "),i("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[i("v-icon",{attrs:{large:""}},[t._v("mdi-hand-wash-outline")])],1)],1),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{text:""},on:{click:t.func}},[i("v-icon",[t._v("mdi-qrcode-scan")])],1)],1)],1)],1)},staticRenderFns:[]},o=i("VU/8")(r,s,!1,null,null,null);e.default=o.exports},ksPF:function(t,e){t.exports={on:function(){try{for(var t=plus.android.runtimeMainActivity().getSystemService("camera"),e=plus.android.invoke(t,"getCameraIdList"),i=0;i<e.length;i++){var a=plus.android.invoke(t,"getCameraCharacteristics",e[i]),n=plus.android.invoke(a,"get",plus.android.getAttribute(a,"FLASH_INFO_AVAILABLE")),r=plus.android.invoke(a,"get",plus.android.getAttribute(a,"LENS_FACING"));null!=n&&n&&null!=r&&1==r&&plus.android.invoke(t,"setTorchMode",e[i],!0)}}catch(t){console.error("error @onTorch!!")}},off:function(){try{for(var t=plus.android.runtimeMainActivity().getSystemService("camera"),e=plus.android.invoke(t,"getCameraIdList"),i=0;i<e.length;i++){var a=plus.android.invoke(t,"getCameraCharacteristics",e[i]),n=plus.android.invoke(a,"get",plus.android.getAttribute(a,"FLASH_INFO_AVAILABLE")),r=plus.android.invoke(a,"get",plus.android.getAttribute(a,"LENS_FACING"));null!=n&&n&&null!=r&&1==r&&plus.android.invoke(t,"setTorchMode",e[i],!1)}}catch(t){console.error("error @offTorch!!")}}}}});