"use strict";(function(){Polymer({is:"px-sample-app",properties:{selected:{type:Array,value:function value(){return["dashboard"]}},selectedRoute:{type:Array,value:function value(){return["assets","a1"]}},vertical:{type:Boolean,value:false},collapsed:{type:Boolean,value:false},contextBrowser:{type:Boolean,value:false}},isEqual:function isEqual(route,string){return route[0]===string},handleDropdownChanged:function handleDropdownChanged(e){if(e.detail.value==="Horizontal"){this.vertical=false;this.collapsed=false}else if(e.detail.value==="Vertical"){this.vertical=true;this.collapsed=false}else if(e.detail.value==="Collapsed"){this.vertical=false;this.collapsed=true}},handleCBToggle:function handleCBToggle(e){this.contextBrowser=e.detail.value},handleDTToggle:function handleDTToggle(e){document.getElementById("themeSwitcher").set("isDarkTheme",e.detail.value)},getClass:function getClass(vertical){return vertical?"vertical":""}})})();
//# sourceMappingURL=px-sample-app.js.map