(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"17f2":function(e,t,n){"use strict";n("9a00")},5452:function(e,t,n){"use strict";n("af35")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main",{attrs:{discs:e.discs}})],1)},i=[],s=n("bc3a"),o=n.n(s),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("img",{staticClass:"logo",attrs:{src:n("93df"),alt:"Spotify Logo"}}),r("div",{staticClass:"select-bar"},[r("span",[e._v("Search by genre")]),r("SelectList",{attrs:{filters:e.getGenres,"filter-name":"genre"},on:{selectFilter:e.getSelected}})],1)])},l=[],u=(n("4de4"),n("159b"),n("caad"),n("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{attrs:{name:"genres",id:"genres"}},e._l(e.filters,(function(t,r){return n("option",{key:r,domProps:{value:t},on:{click:function(n){return e.$emit("selectFilter",t)}}},[e._v(e._s(t))])})),0)])}),f=[],p={name:"Select",props:{filters:Array,filterName:String}},d=p,b=n("2877"),m=Object(b["a"])(d,u,f,!1,null,"5f9fcfc1",null),h=m.exports,g={name:"Header",components:{SelectList:h},data:function(){return{filter:"",albums:[],genres:[]}},methods:{getSelected:function(e){this.filter=e}},computed:{getGenres:function(){var e=this,t=[];return this.albums.forEach((function(n){t.includes(n.genre)||(t.push(n.genre),e.genres.push(n.genre),console.log(t))})),t},filteredAlbums:function(){var e=this,t=[];return""==this.filter?t=this.albums:this.genres.includes(this.filter)&&(t=this.albums.filter((function(t){return t.genre==e.filter}))),t}},created:function(){var e=this;o.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.albums=t.data.response,e.loaded=!0}))}},v=g,y=(n("5452"),Object(b["a"])(v,c,l,!1,null,null,null)),_=y.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"container main-container"},e._l(e.discs,(function(e,t){return n("Album",{key:t,attrs:{poster:e.poster,title:e.title,author:e.author,genre:e.genre,year:e.year}})})),1)])},O=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"album-container"},[n("img",{staticClass:"album-img",attrs:{src:e.poster,alt:"Album cover of "+e.title+" by "+e.author}}),n("div",{staticClass:"album-txt"},[n("div",{staticClass:"album-title"},[e._v(e._s(e.title))]),n("div",{staticClass:"album-author"},[e._v(e._s(e.author))]),n("div",{staticClass:"album-year"},[e._v(e._s(e.year))])])])},j=[],w={name:"Album",props:{poster:String,title:String,author:String,genre:String,year:String}},C=w,A=(n("a941"),Object(b["a"])(C,x,j,!1,null,null,null)),P=A.exports,M={name:"Main",props:{discs:Array},components:{Album:P}},$=M,k=(n("17f2"),Object(b["a"])($,S,O,!1,null,null,null)),E=k.exports,H={name:"App",components:{Header:_,Main:E},data:function(){return{discs:[]}},created:function(){var e=this;o.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.discs=t.data.response}))}},L=H,T=(n("5c0b"),Object(b["a"])(L,a,i,!1,null,null,null)),F=T.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(F)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"93df":function(e,t,n){e.exports=n.p+"img/spotify-logo.c24917d4.png"},"9a00":function(e,t,n){},"9c0c":function(e,t,n){},"9d91":function(e,t,n){},a941:function(e,t,n){"use strict";n("9d91")},af35:function(e,t,n){}});
//# sourceMappingURL=app.7e30f0f5.js.map