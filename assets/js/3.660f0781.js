(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,5,6],[,,,,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";var i=a(10);a.n(i).a},function(t,e,a){"use strict";a.r(e);var i={props:{title:{type:String,default:""},summary:{type:String,default:""},icon:{type:String,default:""}}},n=(a(14),a(0)),r=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro-item"},[t.icon?a("i",{staticClass:"iconfont",class:t.icon}):t._e(),t._v(" "),a("div",{staticClass:"intro-item__content"},[a("h4",{staticClass:"intro-item__title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"intro-item__summary"},[t._v(t._s(t.summary))])])])},[],!1,null,"629b1e41",null);e.default=r.exports},,,,,,,,,,,,function(t,e,a){"use strict";var i=a(12);a.n(i).a},function(t,e,a){"use strict";var i=a(13);a.n(i).a},function(t,e,a){},function(t,e,a){},,,,function(t,e,a){"use strict";a.r(e);var i={mounted(){this.NUM_PARTICLES=300,this.PARTICLE_SIZE=.5,this.SPEED=1e4,this.particles=[],"loading"!==document.readystate?this.startAnimation():document.addEventListener("DOMContentLoaded",()=>{this.startAnimation()})},methods:{startAnimation(){const[t,e]=this.initializeCanvas();for(let e=0;e<this.NUM_PARTICLES;e++)this.particles.push(this.createParticle(t));requestAnimationFrame(a=>this.draw(a,t,e))},normalPool(t){var e=0;do{var a=Math.round(normal({mean:t.mean,dev:t.dev}));if(a<t.pool.length&&a>=0)return t.pool[a];e++}while(e<100)},randomNormal(t){if(t=Object.assign({mean:0,dev:1,pool:[]},t),Array.isArray(t.pool)&&t.pool.length>0)return normalPool(t);var e,a,i,n=t.mean,r=t.dev;do{e=(a=2*Math.random()-1)*a+(i=2*Math.random()-1)*i}while(e>=1);return r*(a*Math.sqrt(-2*Math.log(e)/e))+n},rand:(t,e)=>Math.random()*(e-t)+t,createParticle(t){const e=1,a=this.randomNormal({mean:150,dev:20}),i=this.randomNormal({mean:210,dev:20}),n=this.rand(0,1);return{x:-2,y:-2,diameter:Math.max(0,this.randomNormal({mean:this.PARTICLE_SIZE,dev:this.PARTICLE_SIZE/2})),duration:this.randomNormal({mean:this.SPEED,dev:.1*this.SPEED}),amplitude:this.randomNormal({mean:16,dev:2}),offsetY:this.randomNormal({mean:0,dev:10}),arc:2*Math.PI,startTime:performance.now()-this.rand(0,this.SPEED),colour:`rgba(${e}, ${a}, ${i}, ${n})`}},moveParticle(t,e,a){const i=(a-t.startTime)%t.duration/t.duration;return{...t,x:i,y:Math.sin(i*t.arc)*t.amplitude+t.offsetY}},drawParticle(t,e,a){const i=(e=document.getElementById("background-canvas")).height/100;a.fillStyle=t.colour,a.beginPath(),a.ellipse(t.x*e.width,t.y*i+e.height/2,t.diameter*i,t.diameter*i,0,0,2*Math.PI),a.fill()},draw(t,e,a){this.particles.forEach((a,i)=>{this.particles[i]=this.moveParticle(a,e,t)}),a.clearRect(0,0,e.width,e.height),this.particles.forEach(t=>{this.drawParticle(t,e,a)}),requestAnimationFrame(t=>this.draw(t,e,a))},initializeCanvas(){let t=document.getElementById("background-canvas");t.width=t.offsetWidth*window.devicePixelRatio,t.height=t.offsetHeight*window.devicePixelRatio;let e=t.getContext("2d");return window.addEventListener("resize",()=>{t.width=t.offsetWidth*window.devicePixelRatio,t.height=t.offsetHeight*window.devicePixelRatio,e=t.getContext("2d")}),[t,e]}}},n=(a(27),a(0)),r=Object(n.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"background-canvas"}})},[],!1,null,"761b013e",null);e.default=r.exports},function(t,e,a){"use strict";a.r(e);var i=a(15),n={props:{title:{type:String,default:""}},components:{IntroItem:i.default}},r=(a(28),a(0)),o=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro-list"},[e("h3",{staticClass:"intro-list__title"},[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)},[],!1,null,"f2b5b178",null);e.default=o.exports},,,,,,,,,,,,,function(t,e,a){"use strict";a.r(e),a.d(e,"render",function(){return C});
/*!
 * github-buttons v2.2.10
 * (c) 2019 なつき
 * @license BSD-2-Clause
 */
var i=window.document,n=(i.location,window.encodeURIComponent),r=(window.decodeURIComponent,window.Math),o=window.HTMLElement,s=window.XMLHttpRequest,l=function(t){return function(e,a,i){var n=t.createElement(e);if(a)for(var r in a){var o=a[r];null!=o&&(null!=n[r]?n[r]=o:n.setAttribute(r,o))}if(i)for(var s=0,l=i.length;s<l;s++){var c=i[s];n.appendChild("string"==typeof c?t.createTextNode(c):c)}return n}},c=l(i),d=s&&s.prototype&&"withCredentials"in s.prototype,h=d&&o&&o.prototype.attachShadow&&!o.prototype.attachShadow.prototype,u=function(t,e,a){t.addEventListener?t.addEventListener(e,a):t.attachEvent("on"+e,a)},f=function(t,e,a){t.removeEventListener?t.removeEventListener(e,a):t.detachEvent("on"+e,a)},p="body{margin:0}a{color:#24292e;text-decoration:none;outline:0}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}.widget{display:inline-block;overflow:hidden;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif;font-size:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn,.social-count{display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;border:1px solid #c5c9cc;border-radius:0.25em}.btn{background-color:#eff3f6;background-image:-webkit-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);background-position:-1px -1px;background-repeat:repeat-x;background-size:110% 110%;border-color:rgba(27,31,35,0.2);-ms-filter:\"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')\";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}.btn:active{background-color:#e9ecef;background-image:none;border-color:#a5a9ac;border-color:rgba(27,31,35,0.35);box-shadow:inset 0 0.15em 0.3em rgba(27,31,35,0.15)}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:-webkit-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);border-color:#a5a9ac;border-color:rgba(27,31,35,0.35);-ms-filter:\"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')\";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}.social-count{position:relative;margin-left:5px;background-color:#fff}.social-count:focus,.social-count:hover{color:#0366d6}.social-count b,.social-count i{position:absolute;top:50%;left:0;display:block;width:0;height:0;margin:-4px 0 0 -4px;border:solid transparent;border-width:4px 4px 4px 0;_line-height:0;_border-top-color:red !important;_border-bottom-color:red !important;_border-left-color:red !important;_filter:chroma(color=red)}.social-count b{border-right-color:#c5c9cc}.social-count i{margin-left:-3px;border-right-color:#fff}.lg .btn,.lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.lg .social-count{margin-left:6px}.lg .social-count b,.lg .social-count i{margin:-5px 0 0 -5px;border-width:5px 5px 5px 0}.lg .social-count i{margin-left:-4px}\n",m={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},b={},g=function(t,e){var a=b[t]||(b[t]=[]);if(!(a.push(e)>1)){var i=function(t){var e;return function(){e||(e=1,t.apply(this,arguments))}}(function(){for(delete b[t];e=a.shift();)e.apply(null,arguments)});if(d){var n=new s;u(n,"abort",i),u(n,"error",i),u(n,"load",function(){var t;try{t=JSON.parse(n.responseText)}catch(t){return void i(t)}i(200!==n.status,t)}),n.open("GET",t),n.send()}else{var r=this||window;r._=function(t){r._=null,i(200!==t.meta.status,t.data)};var o=l(r.document)("script",{async:!0,src:t+(/\?/.test(t)?"&":"?")+"callback=_"}),c=function(){r._&&r._({meta:{}})};u(o,"load",c),u(o,"error",c),o.readyState&&function(t,e,a){var i=function(n){if(e.test(t.readyState))return f(t,"readystatechange",i),a(n)};u(t,"readystatechange",i)}(o,/de|m/,c),r.document.getElementsByTagName("head")[0].appendChild(o)}}},v=function(t,e,a){var i=l(t.ownerDocument),n=t.appendChild(i("style",{type:"text/css"}));n.styleSheet?n.styleSheet.cssText=p:n.appendChild(t.ownerDocument.createTextNode(p));var r,o,s=i("a",{className:"btn",href:e.href,target:"_blank",innerHTML:(r=e["data-icon"],o=/^large$/i.test(e["data-size"])?16:14,r=(""+r).toLowerCase().replace(/^octicon-/,""),{}.hasOwnProperty.call(m,r)||(r="mark-github"),'<svg version="1.1" width="'+o*m[r].width/m[r].height+'" height="'+o+'" viewBox="0 0 '+m[r].width+" "+m[r].height+'" class="octicon octicon-'+r+'" aria-hidden="true">'+m[r].path+"</svg>"),"aria-label":e["aria-label"]||void 0},[" ",i("span",{},[e["data-text"]||""])]);/\.github\.com$/.test("."+s.hostname)?/^https?:\/\/((gist\.)?github\.com\/[^\/?#]+\/[^\/?#]+\/archive\/|github\.com\/[^\/?#]+\/[^\/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(s.href)&&(s.target="_top"):(s.href="#",s.target="_self");var c,d,h,u,f=t.appendChild(i("div",{className:"widget"+(/^large$/i.test(e["data-size"])?" lg":"")},[s]));/^(true|1)$/i.test(e["data-show-count"])&&"github.com"===s.hostname&&(c=s.pathname.replace(/^(?!\/)/,"/").match(/^\/([^\/?#]+)(?:\/([^\/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^\/?#]+)))?)?(?:[\/?#]|$)/))&&!c[6]?(c[2]?(d="/repos/"+c[1]+"/"+c[2],c[3]?(u="subscribers_count",h="watchers"):c[4]?(u="forks_count",h="network"):c[5]?(u="open_issues_count",h="issues"):(u="stargazers_count",h="stargazers")):(d="/users/"+c[1],h=u="followers"),g.call(this,"https://api.github.com"+d,function(t,e){if(!t){var n=e[u];f.appendChild(i("a",{className:"social-count",href:e.html_url+"/"+h,target:"_blank","aria-label":n+" "+u.replace(/_count$/,"").replace("_"," ").slice(0,n<2?-1:void 0)+" on GitHub"},[i("b"),i("i"),i("span",{},[(""+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")])]))}a&&a(f)})):a&&a(f)},w=window.devicePixelRatio||1,_=function(t){return(w>1?r.ceil(r.round(t*w)/w*2)/2:r.ceil(t))||0},x=function(t,e){t.style.width=e[0]+"px",t.style.height=e[1]+"px"},C=function(t,e){if(null!=t&&null!=e)if(t.getAttribute&&(t=function(t){for(var e={href:t.href,title:t.title,"aria-label":t.getAttribute("aria-label")},a=["icon","text","size","show-count"],i=0,n=a.length;i<n;i++){var r="data-"+a[i];e[r]=t.getAttribute(r)}return null==e["data-text"]&&(e["data-text"]=t.textContent||t.innerText),e}(t)),h){var a=c("span",{title:t.title||void 0});v(a.attachShadow({mode:"closed"}),t,function(){e(a)})}else{var o=c("iframe",{src:"javascript:0",title:t.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});x(o,[0,0]),o.style.border="none";var s=function(){var a,l=o.contentWindow;try{a=l.document.body}catch(t){return void i.body.appendChild(o.parentNode.removeChild(o))}f(o,"load",s),v.call(l,a,t,function(a){var i=function(t){var e=t.offsetWidth,a=t.offsetHeight;if(t.getBoundingClientRect){var i=t.getBoundingClientRect();e=r.max(e,_(i.width)),a=r.max(a,_(i.height))}return[e,a]}(a);o.parentNode.removeChild(o),function(t,e,a){var i=function(n){return f(t,e,i),a(n)};u(t,e,i)}(o,"load",function(){x(o,i)}),o.src="https://unpkg.com/github-buttons@2.2.10/dist/buttons.html#"+(o.name=function(t){var e=[];for(var a in t){var i=t[a];null!=i&&e.push(n(a)+"="+n(i))}return e.join("&")}(t)),e(o)})};u(o,"load",s),i.body.appendChild(o)}}},function(t,e,a){"use strict";var i=a(29);a.n(i).a},function(t,e,a){"use strict";var i=a(30);a.n(i).a},,,,function(t,e,a){"use strict";a.r(e);var i=a(35),n=a(34),r={name:"github-button",props:["href","ariaLabel","title","dataIcon","dataSize","dataShowCount","dataText"],render:function(t){return t("span",[t("a",{attrs:{href:this.href,"aria-label":this.ariaLabel,title:this.title,"data-icon":this.dataIcon,"data-size":this.dataSize,"data-show-count":this.dataShowCount,"data-text":this.dataText},ref:"_"},this.$slots.default)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeDestroy:function(){this.reset()},methods:{paint:function(){const t=this.$el.appendChild(document.createElement("span"));Promise.resolve().then(a.bind(null,48)).then(({render:e})=>{e(t.appendChild(this.$refs._),function(e){try{t.parentNode.replaceChild(e,t)}catch(t){}})})},reset:function(){this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}},o={props:{title:{type:String,default:""},intro:{type:Array,default:function(){return[]}},startText:{type:String,default:""}},components:{IntroList:i.default,GithubButton:r,HomeBackgroundCanvas:n.default}},s=(a(49),a(50),a(0)),l=Object(s.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lindb-home-container"},[a("div",{staticClass:"lindb-banner"},[a("home-background-canvas"),t._v(" "),a("div",{staticClass:"lindb-banner-content"},[a("h3",{staticClass:"lindb-intro__title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"lindb-intro__text"},[t.intro&&t.intro.length>0?t._l(t.intro,function(e){return a("p",{key:e},[t._v("\n            "+t._s(e)+"\n          ")])}):t._e()],2),t._v(" "),a("div",{staticClass:"lindb-intro__btn-group"},[a("a",{attrs:{href:"docs/quick-start"}},[a("button",{staticClass:"lindb-intro__btn primary"},[t._v(t._s(t.startText))])]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"lindb-intro__btn-group github"},[a("github-button",{attrs:{href:"https://github.com/lindb/lindb","data-icon":"octicon-star","data-size":"large","data-show-count":"true","data-text":"Star","aria-label":"Star lindb/lindb on GitHub"}}),t._v(" "),a("github-button",{attrs:{href:"https://github.com/lindb/lindb/fork","data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"true","data-text":"Fork","aria-label":"Fork lindb/lindb on GitHub"}})],1)])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://github.com/lindb/lindb"}},[e("button",{staticClass:"lindb-intro__btn"},[this._v("GitHub")])])}],!1,null,"4efe42b6",null);e.default=l.exports}]]);