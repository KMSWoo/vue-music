(window.webpackJsonp=window.webpackJsonp||[]).push([["TopList"],{"5c98":function(t,i,n){"use strict";n.r(i);var a=n("b85c"),s=(n("4de4"),n("d3b7"),n("b0c0"),n("a4d3"),n("e01a"),n("e9c4"),n("d4b9")),c=n("229e"),e=n("aaef"),r={name:"TopList",data:function(){return{topListData:[]}},created:function(){this.initTopListData()},methods:{initTopListData:function(){var t=this;Object(s.a)().then((function(i){if(200===i.code){var n,s=[],e=Object(a.a)(i.list);try{for(e.s();!(n=e.n()).done;){var r=n.value,o={id:r.id,name:r.name,url:r.coverImgUrl,tracks:r.tracks,desc:r.description};s.push(o)}}catch(t){e.e(t)}finally{e.f()}var l=s.filter((function(t){return t.tracks.length>0||t.desc}));t.topListData=l}t.$nextTick((function(){t.scroll=new c.a(".top-list",{mouseWheel:!0,click:!0,tap:"tap",stopPropagation:!0})}))}))},handleListClick:function(t){var i={id:t.id,name:t.name,url:t.url};localStorage.setItem(e.d,JSON.stringify(i)),this.$router.push({path:"/top-list/".concat(t.id)})}},computed:{loading:function(){return this.topListData.length}}},o=(n("cd70"),n("2877")),l=Object(o.a)(r,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"top-list"},[n("div",{staticClass:"wrap"},t._l(t.topListData,(function(i){return n("div",{key:i.id,staticClass:"card",on:{click:function(n){return t.handleListClick(i)}}},[n("div",{staticClass:"cover"},[n("img",{attrs:{src:i.url}})]),n("div",{staticClass:"songs"},[i.tracks.length>0?t._l(i.tracks,(function(i,a){return n("p",{key:i.id},[t._v(" "+t._s(a+1)+"."+t._s(i.first)+" — "+t._s(i.second)+" ")])})):[n("p",{staticClass:"desc"},[t._v(" "+t._s(i.desc)+" ")])]],2)])})),0),t.loading?t._e():n("van-loading",{staticClass:"loading",attrs:{type:"spinner",color:"#ffcd32"}}),n("router-view")],1)}),[],!1,null,"befd3082",null);i.default=l.exports},cd70:function(t,i,n){"use strict";n("cdba")},cdba:function(t,i,n){},d4b9:function(t,i,n){"use strict";n.d(i,"a",(function(){return s})),n.d(i,"b",(function(){return c}));var a=n("58ff");function s(){return Object(a.a)("/toplist/detail")}function c(t){return Object(a.a)("/playlist/detail?id="+t)}}}]);