(function(){"use strict";var t={7790:function(t,e,s){var r=s(9242),u=s(3396);const i={class:"container"},n=(0,u._)("h1",null,"Calculator",-1);function l(t,e,s,r,l,h){const a=(0,u.up)("CalulatorComponent");return(0,u.wg)(),(0,u.iD)("div",i,[n,(0,u.Wm)(a)])}var h=s(7139);const a={class:"display"},o={class:"control"},c=["btn","onClick"];function m(t,e,s,r,i,n){return(0,u.wg)(),(0,u.iD)("div",{class:(0,h.C_)(["calculator-container",i.themes[i.calcutatorTheme]])},[(0,u._)("div",{onClick:e[0]||(e[0]=(...t)=>n.toggleTheme&&n.toggleTheme(...t)),class:"theme-button"}),(0,u._)("div",a,[(0,u._)("div",null,(0,h.zw)(n.displayLog()),1)]),(0,u._)("div",o,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(i.buttons,((t,e)=>((0,u.wg)(),(0,u.iD)("button",{key:e,btn:t,onClick:e=>n.handleClick(t)},(0,h.zw)(t),9,c)))),128))])],2)}var b={name:"CalulatorComponent",data(){return{buttons:[1,2,3,4,5,6,7,8,9,0,"=","+","-","*","/","c"],result:"",sign:"",num:"",displayResult:"",temp:0,themes:["theme","theme2","theme3"],calcutatorTheme:0}},methods:{handleClick(t){switch(t){case Number(t):this.result&&this.sign?this.num+=t:this.result+=t;break;case"0":this.result&&this.sign?this.num+=t:this.result+=t;break;case"+":this.sign="+",this.result=Number(this.result)+Number(this.num),this.num="",this.temp="";break;case"-":this.sign="-",this.result=Number(this.result)-Number(this.num),this.num="",this.temp="";break;case"*":this.sign="*",this.num&&(this.result=Number(this.result)*Number(this.num)),this.num="",this.temp="";break;case"/":this.sign="/",this.num&&(this.result=Number(this.result)/Number(this.num)),this.num="",this.temp="";break;case"=":if("+"===this.sign&&(this.temp?this.result=Number(this.result)+Number(this.temp):this.result=Number(this.result)+Number(this.num)),"-"===this.sign&&(this.temp?this.result=Number(this.result)-Number(this.temp):this.result=Number(this.result)-Number(this.num)),"*"===this.sign&&(this.temp?this.result=Number(this.result)*Number(this.temp):this.result=Number(this.result)*Number(this.num)),"/"===this.sign)if(this.temp)this.result=Number(this.result)/Number(this.temp);else{if(0==this.num||0==this.result)return;this.result=Number(this.result)/Number(this.num)}this.num&&(this.temp=this.num,this.num="");break;case"c":this.result="",this.sign="",this.num="",this.temp="",localStorage.calcutatorResult="";break;default:break}console.table(`result: ${this.result}`,`\nsign: ${this.sign}`,`\nnum: ${this.num}`,`\ntemp: ${this.temp}`)},toggleTheme(){this.calcutatorTheme>=this.themes.length-1?(this.calcutatorTheme=0,localStorage.calcutatorTheme=this.calcutatorTheme):(this.calcutatorTheme=Number(this.calcutatorTheme)+1,localStorage.calcutatorTheme=this.calcutatorTheme)},displayLog(){return this.result+this.sign+(this.num?this.num:this.temp)}},mounted(){localStorage.calcutatorTheme&&(this.calcutatorTheme=localStorage.calcutatorTheme),localStorage.calcutatorResult&&(this.result=localStorage.calcutatorResult)},watch:{result(t){localStorage.calcutatorResult=t}}},p=s(89);const f=(0,p.Z)(b,[["render",m],["__scopeId","data-v-330891d7"]]);var g=f,d={name:"App",components:{CalulatorComponent:g}};const v=(0,p.Z)(d,[["render",l]]);var N=v;(0,r.ri)(N).mount("#app")}},e={};function s(r){var u=e[r];if(void 0!==u)return u.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,r,u,i){if(!r){var n=1/0;for(o=0;o<t.length;o++){r=t[o][0],u=t[o][1],i=t[o][2];for(var l=!0,h=0;h<r.length;h++)(!1&i||n>=i)&&Object.keys(s.O).every((function(t){return s.O[t](r[h])}))?r.splice(h--,1):(l=!1,i<n&&(n=i));if(l){t.splice(o--,1);var a=u();void 0!==a&&(e=a)}}return e}i=i||0;for(var o=t.length;o>0&&t[o-1][2]>i;o--)t[o]=t[o-1];t[o]=[r,u,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var u,i,n=r[0],l=r[1],h=r[2],a=0;if(n.some((function(e){return 0!==t[e]}))){for(u in l)s.o(l,u)&&(s.m[u]=l[u]);if(h)var o=h(s)}for(e&&e(r);a<n.length;a++)i=n[a],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(o)},r=self["webpackChunkvue_project_calculator"]=self["webpackChunkvue_project_calculator"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(7790)}));r=s.O(r)})();
//# sourceMappingURL=app.4b4de371.js.map