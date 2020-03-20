(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/pokedex/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3362:function(e,t,n){},"4e06":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a,o=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"app-header"},[e._v("Pokedex")]),n("div",{staticClass:"container"},[n("pokedex-view")],1)])},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("app-select",{attrs:{options:e.allTypes},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}}),n("div",{staticClass:"col-12 col-md-7 align-items-center"},[[n("pokemon-list",{attrs:{loading:e.loading}}),n("button",{staticClass:"btn btn-success mt-2",on:{click:function(t){e.offset+=e.limit}}},[e._v(" Load more ")])],n("app-alert",{attrs:{loading:e.loading}})],2),e.detailsLoading?n("app-loader",{attrs:{"fixed-right":""}}):e._e(),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.activePokemon?n("pokemon-details",{staticClass:"col-10 col-md-4 mx-auto"}):e._e()],1)],1)},l=[],u=(n("99af"),n("4160"),n("159b"),n("96cf"),n("1da1")),p=n("5530"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row pokemon-list justify-content-center"},[e._l(e.filteredPokemonByType,(function(t){return n("pokemon-item",{key:t.name,attrs:{pokemon:t,selectedType:e.selectedType}})})),e.loading?n("app-loader"):e._e()],2)},f=[],m=n("2f62"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-content-center text-center",class:["fixed",{"fixed-right":e.fixedRight},{"fixed-left":e.fixedLeft}]},[e._m(0)])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner-border",staticStyle:{width:"5rem",height:"5rem"},attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[e._v("Loading...")])])}],k={name:"loader",props:{fixedRight:{type:Boolean,default:!1},fixedLeft:{type:Boolean,default:!1}}},y=k,h=(n("8ad5"),n("2877")),_=Object(h["a"])(y,v,b,!1,null,"39803a70",null),g=_.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.pokemon.name?n("div",{staticClass:"col-md-4 col-sm-12 cursor-pointer",on:{click:function(t){return e.setActivePokemon(e.pokemon)}}},[n("div",{staticClass:"card mt-2"},[n("img",{staticClass:"img",attrs:{src:e.pokemon.sprites.front_default,alt:e.pokemon.name}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[e._v(e._s(e.pokemon.name))]),n("div",{staticClass:"d-flex justify-content-center text-white"},e._l(e.types,(function(t,r){return n("p",{key:t+r,staticClass:"badge badge-pill",class:t},[e._v(" "+e._s(t)+" ")])})),0)])])]):e._e()},P=[],j=(n("d81d"),n("b0c0"),"SET_ACTIVE_TYPE"),x="SET_POKEMONS",w="SET_ACTIVE_POKEMON",T="SET_POKEMON_DATA",E="CLEAR_POKEMON_DATA",C="SET_LOADING",A="GET_POKEMONS",S="GET_POKEMON_DATA",B="GET_ACTIVE_POKEMON",L={name:"pokemon-item",props:{pokemon:{type:Object,reqired:!0}},computed:Object(p["a"])({},Object(m["c"])(["activePokemon"]),{},Object(m["b"])(["filteredPokemonByType"]),{types:function(){return this.pokemon.types.map((function(e){var t=e.type.name;return t}))}}),methods:{setActivePokemon:function(e){var t=e.id,n=e.name;this.activePokemon&&this.activePokemon.name===n||this.$store.dispatch(B,t)}}},$=L,M=(n("afee"),Object(h["a"])($,O,P,!1,null,"59e26666",null)),R=M.exports,F={name:"pokemon-list",props:{selectedType:{type:String,default:"all"},loading:{type:Boolean,default:!0}},computed:Object(p["a"])({},Object(m["c"])(["allPokemons"]),{},Object(m["b"])(["filteredPokemonByType","isFindPokemonsByType"])),components:{AppLoader:g,PokemonItem:R}},V=F,N=(n("90e0"),Object(h["a"])(V,d,f,!1,null,null,null)),D=N.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pokemon-details"},[n("div",{staticClass:"card mt-4 mb-4"},[n("img",{staticClass:"img mt-2",attrs:{src:e.activePokemon.sprites.front_default,alt:e.activePokemon.name}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title font-weight-bold"},[e._v(" "+e._s(e._f("upperFirstLetter")(e.activePokemon.name))+" #00"+e._s(e.activePokemon.id)+" ")]),n("table",{staticClass:"table table-bordered"},[n("tbody",[n("tr",[n("td",[e._v("Type")]),n("td",e._l(e.activePokemon.types,(function(t,r){return n("span",{key:t.type.name+r},[e._v(" "+e._s(t.type.name)+" ")])})),0)]),e._l(e.activePokemon.stats,(function(t){return n("tr",{key:t.stat.name},[n("td",[e._v(e._s(e._f("upperFirstLetter")(t.stat.name)))]),n("td",[e._v(e._s(t.base_stat))])])})),n("tr",[n("td",[e._v("Weight")]),n("td",[e._v(" "+e._s(e.activePokemon.weight)+" ")])]),n("tr",[n("td",[e._v("Total Moves")]),n("td",[e._v(" "+e._s(e.activePokemon.moves.length)+" ")])])],2)])])])])},K=[],G=(n("fb6a"),{name:"pokemon-details",computed:Object(p["a"])({},Object(m["c"])(["activePokemon"])),filters:{upperFirstLetter:function(e){return e[0].toUpperCase()+e.slice(1)}}}),J=G,Y=(n("92a9"),Object(h["a"])(J,I,K,!1,null,"07204cc4",null)),q=Y.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{staticClass:"custom-select mb-2",domProps:{value:e.value},on:{change:function(t){return e.$emit("input",t.target.value)}}},e._l(e.options,(function(t){return n("option",{key:t,domProps:{value:t,selected:t}},[e._v(" "+e._s(t)+" ")])})),0)},W=[],z={name:"app-select",props:{value:{type:String,default:"all"},options:{type:Array,default:function(){return[]}}}},H=z,Q=(n("7ae8"),Object(h["a"])(H,U,W,!1,null,null,null)),X=Q.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return!e.loading&&e.isFindPokemonsByType?n("div",{staticClass:"alert alert-danger mt-2",attrs:{role:"alert"}},[e._v(" "+e._s(e.text)+" ")]):e._e()},ee=[],te={name:"app-alert",props:{loading:{type:Boolean,default:!0},text:{type:String,default:"For now we can't find pokemons with this type. Maybe You need load more"}},computed:Object(p["a"])({},Object(m["b"])(["isFindPokemonsByType"]))},ne=te,re=Object(h["a"])(ne,Z,ee,!1,null,null,null),ae=re.exports,oe={name:"pokedex-view",data:function(){return{loading:!0,limit:12,offset:0,allTypes:["all","grass","poison","fire","dragon","flying","ice","ground","steel","electric","fighting","fairy","rock","bug","psychic","ghost","dark","normal"]}},computed:Object(p["a"])({},Object(m["c"])(["detailsLoading","pokemons","activePokemon","selectedValue"]),{},Object(m["b"])(["isFindPokemonsByType"]),{selectedType:{get:function(){return this.selectedValue},set:function(e){this.$store.dispatch(j,e)}}}),watch:{offset:{handler:"loadMore",immediate:!0}},methods:{loadMore:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.offset>=100&&e.$store.dispatch(E,e.limit),e.loading=!0,n="offset=".concat(e.offset,"&limit=").concat(e.limit),t.next=5,e.$store.dispatch(A,n);case 5:e.pokemons.forEach(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.url,t.next=3,e.$store.dispatch(S,r);case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})))()}},components:{AppSelect:X,AppLoader:g,AppAlert:ae,PokemonList:D,PokemonDetails:q}},ce=oe,ie=(n("c4eb"),Object(h["a"])(ce,s,l,!1,null,null,null)),se=ie.exports,le={name:"App",components:{PokedexView:se}},ue=le,pe=(n("5c0b"),Object(h["a"])(ue,c,i,!1,null,null,null)),de=pe.exports,fe=(n("4de4"),n("caad"),n("2532"),n("ade3")),me=n("2909"),ve=(n("d3b7"),function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(n=e.sent,n.ok){e.next=5;break}throw new Error("Some server error");case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),be={_url:"https://pokeapi.co/api/v2/pokemon",getPokemons:function(e){return ve("".concat(this._url,"/?").concat(e))},getPokemonData:function(e){return ve(e)},getPokemonById:function(e){return ve("".concat(this._url,"/").concat(e))}},ke=be;o["a"].use(m["a"]);var ye=new m["a"].Store({state:{pokemons:[],allPokemons:[],activePokemon:null,selectedValue:"all",detailsLoading:!1},mutations:(r={},Object(fe["a"])(r,j,(function(e,t){e.selectedValue=t})),Object(fe["a"])(r,x,(function(e,t){e.pokemons=t})),Object(fe["a"])(r,w,(function(e,t){e.activePokemon=t})),Object(fe["a"])(r,T,(function(e,t){e.allPokemons=[].concat(Object(me["a"])(e.allPokemons),[t])})),Object(fe["a"])(r,E,(function(e,t){e.allPokemons=e.allPokemons.slice(t)})),Object(fe["a"])(r,C,(function(e,t){e.detailsLoading=t})),r),actions:(a={},Object(fe["a"])(a,A,(function(e,t){var n=e.commit;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ke.getPokemons(t);case 2:return r=e.sent,n(x,r.results),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()})),Object(fe["a"])(a,S,(function(e,t){var n=e.commit;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ke.getPokemonData(t);case 2:return r=e.sent,n(T,r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()})),Object(fe["a"])(a,B,(function(e,t){var n=e.commit;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n(C,!0),n(w,null),e.next=4,ke.getPokemonById(t);case 4:r=e.sent,n(w,r),n(C,!1);case 7:case"end":return e.stop()}}),e)})))()})),Object(fe["a"])(a,j,(function(e,t){var n=e.commit;n(j,t),n(w,null)})),Object(fe["a"])(a,E,(function(e,t){var n=e.commit;n(E,t)})),a),getters:{filteredPokemonByType:function(e){var t=e.allPokemons,n=e.selectedValue;return"all"===n?t:t.filter((function(e){return e.types.filter((function(e){var t=e.type.name;return t.includes(n)})).length>0}))},isFindPokemonsByType:function(e,t){return!t.filteredPokemonByType.length}}});o["a"].config.productionTip=!1,new o["a"]({store:ye,render:function(e){return e(de)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"72af":function(e,t,n){},"79c7":function(e,t,n){},"7ae8":function(e,t,n){"use strict";var r=n("b2be"),a=n.n(r);a.a},"8ad5":function(e,t,n){"use strict";var r=n("72af"),a=n.n(r);a.a},"90e0":function(e,t,n){"use strict";var r=n("3362"),a=n.n(r);a.a},"92a9":function(e,t,n){"use strict";var r=n("a665"),a=n.n(r);a.a},"9c0c":function(e,t,n){},a665:function(e,t,n){},afee:function(e,t,n){"use strict";var r=n("79c7"),a=n.n(r);a.a},b2be:function(e,t,n){},c4eb:function(e,t,n){"use strict";var r=n("4e06"),a=n.n(r);a.a}});
//# sourceMappingURL=app.e52d6693.js.map