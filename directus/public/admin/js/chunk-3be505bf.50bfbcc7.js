(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3be505bf"],{"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},de3d:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.options.showRelative?n("v-timeago",{staticClass:"no-wrap",attrs:{datetime:e.date,"auto-update":e.options.includeSeconds?1:60,locale:e.$i18n.locale}}):n("span",{staticClass:"no-wrap"},[e._v(e._s(e.displayValue))])},a=[],u=(n("c5f6"),n("28a5"),n("8db2")),o=n.n(u),i={mixins:[o.a],computed:{displayValue:function(){if(this.value&&!1===this.options.display24HourClock){var e=this.value.split(":").map(function(e){return Number(e)}),t=e[0],n=e[1],l=e[2],a="AM";return t>=12&&(a="PM"),t=t>12?t-12:t,t="00"==t?12:t,l?"".concat(t,":").concat(n,":").concat(l," ").concat(a):"".concat(t,":").concat(n," ").concat(a)}return this.value}}},c=i,r=n("2877"),p=Object(r["a"])(c,l,a,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-3be505bf.50bfbcc7.js.map