(function(e){function t(t){for(var r,c,s=t[0],i=t[1],l=t[2],p=0,m=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&m.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/pokedex/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3362:function(e,t,n){},"4c0d":function(e,t,n){"use strict";var r=n("f385"),o=n.n(r);o.a},"4e06":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,o,a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"app-header"},[e._v("Pokedex")]),n("div",{staticClass:"container"},[n("pokedex-view")],1)])},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("app-select",{attrs:{options:e.allTypes},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}}),n("div",{staticClass:"col-12 col-md-7 align-items-center"},[e.loading?n("app-loader"):n("pokemon-list",{attrs:{pokemons:e.pokemons}}),n("button",{staticClass:"btn btn-success mt-2",on:{click:function(t){e.offset+=e.limit}}},[e._v(" Load more ")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.activePokemon?n("pokemon-details",{staticClass:"col-10 col-md-4 mx-auto"}):e._e()],1)],1)},l=[],u=(n("99af"),n("96cf"),n("1da1")),p=n("5530"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row pokemon-list justify-content-center"},e._l(e.filteredPokemonByType,(function(t){return n("pokemon-item",{key:t.name,attrs:{pokemon:t,selectedType:e.selectedType}})})),1),e.isFindPokemonsByType?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" A this type of pokemons not find for now. Try load more pokemons. ")]):e._e()])},f=[],d=(n("4160"),n("159b"),n("2f62")),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.pokemon.name?n("div",{staticClass:"col-md-4 col-sm-12",on:{click:function(t){return e.setActivePokemon(e.pokemon)}}},[n("div",{staticClass:"card mt-2"},[n("img",{staticClass:"img",attrs:{src:e.pokemon.sprites.front_default,alt:e.pokemon.name}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[e._v(e._s(e.pokemon.name))]),n("div",{staticClass:"d-flex justify-content-center text-white"},e._l(e.types,(function(t,r){return n("p",{key:t+r,staticClass:"badge badge-pill",class:t},[e._v(" "+e._s(t)+" ")])})),0)])])]):e._e()},b=[],k=(n("d81d"),n("b0c0"),"SET_LOADING"),y="SET_ACTIVE_TYPE",h="SET_POKEMONS",_="SET_ACTIVE_POKEMON",g="SET_POKEMON_DATA",O="GET_POKEMONS",P="GET_POKEMON_DATA",j="GET_ACTIVE_POKEMON",w={name:"pokemon-item",props:{pokemon:{type:Object,reqired:!0}},computed:Object(p["a"])({},Object(d["c"])(["activePokemon"]),{},Object(d["b"])(["filteredPokemonByType"]),{types:function(){return this.pokemon.types.map((function(e){var t=e.type.name;return t}))}}),methods:{setActivePokemon:function(e){var t=e.id,n=e.name;this.activePokemon&&this.activePokemon.name===n||this.$store.dispatch(j,t)}}},T=w,x=(n("7036"),n("2877")),C=Object(x["a"])(T,v,b,!1,null,"1f1b5b62",null),E=C.exports,S={name:"pokemon-list",props:{pokemons:{type:Array,required:!0},selectedType:{type:String,default:"all"}},computed:Object(p["a"])({},Object(d["c"])(["allPokemons"]),{},Object(d["b"])(["filteredPokemonByType","isFindPokemonsByType"])),created:function(){var e=this;this.pokemons.forEach(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.url,t.next=3,e.$store.dispatch(P,r);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},components:{PokemonItem:E}},A=S,$=(n("90e0"),Object(x["a"])(A,m,f,!1,null,null,null)),M=$.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card mt-4 mb-4"},[n("img",{staticClass:"img mt-2",attrs:{src:e.activePokemon.sprites.front_default,alt:e.activePokemon.name}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title font-weight-bold"},[e._v(" "+e._s(e._f("upperFirstLetter")(e.activePokemon.name))+" #00"+e._s(e.activePokemon.id)+" ")]),n("table",{staticClass:"table table-bordered"},[n("tbody",[n("tr",[n("td",[e._v("Type")]),n("td",e._l(e.activePokemon.types,(function(t,r){return n("span",{key:t.type.name+r},[e._v(" "+e._s(t.type.name)+" ")])})),0)]),e._l(e.activePokemon.stats,(function(t){return n("tr",{key:t.stat.name},[n("td",[e._v(e._s(e._f("upperFirstLetter")(t.stat.name)))]),n("td",[e._v(e._s(t.base_stat))])])})),n("tr",[n("td",[e._v("Weight")]),n("td",[e._v(" "+e._s(e.activePokemon.weight)+" ")])]),n("tr",[n("td",[e._v("Total Moves")]),n("td",[e._v(" "+e._s(e.activePokemon.moves.length)+" ")])])],2)])])])},B=[],V=(n("fb6a"),{name:"pokemon-details",computed:Object(p["a"])({},Object(d["c"])(["activePokemon"])),filters:{upperFirstLetter:function(e){return e[0].toUpperCase()+e.slice(1)}}}),L=V,F=(n("4c0d"),Object(x["a"])(L,R,B,!1,null,"71cbb0cb",null)),I=F.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("div",{staticClass:"spinner-border",staticStyle:{width:"5rem",height:"5rem"},attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[e._v("Loading...")])])])}],K={name:"loader"},G=K,q=Object(x["a"])(G,N,D,!1,null,null,null),J=q.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{staticClass:"custom-select mb-2",domProps:{value:e.value},on:{change:function(t){return e.$emit("input",t.target.value)}}},e._l(e.options,(function(t){return n("option",{key:t,domProps:{value:t,selected:t}},[e._v(" "+e._s(t)+" ")])})),0)},W=[],Y={name:"app-select",props:{value:{type:String,default:"all"},options:{type:Array,default:function(){return[]}}}},z=Y,H=(n("7ae8"),Object(x["a"])(z,U,W,!1,null,null,null)),Q=H.exports,X={name:"pokedex-view",data:function(){return{limit:12,offset:0,allTypes:["all","grass","poison","fire","dragon","flying","ice","ground","steel","electric","fighting","fairy","rock","bug","psychic","ghost","dark","normal"]}},computed:Object(p["a"])({},Object(d["c"])(["loading","pokemons","activePokemon","selectedValue"]),{},Object(d["b"])(["isFindPokemonsByType"]),{selectedType:{get:function(){return this.selectedValue},set:function(e){this.$store.dispatch(y,e)}}}),watch:{offset:{handler:"loadMore",immediate:!0}},methods:{loadMore:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n="offset=".concat(e.offset,"&limit=").concat(e.limit),e.$store.dispatch(O,n);case 2:case"end":return t.stop()}}),t)})))()}},components:{AppLoader:J,AppSelect:Q,PokemonList:M,PokemonDetails:I}},Z=X,ee=(n("c4eb"),Object(x["a"])(Z,i,l,!1,null,null,null)),te=ee.exports,ne={name:"App",components:{PokedexView:te}},re=ne,oe=(n("5c0b"),Object(x["a"])(re,c,s,!1,null,null,null)),ae=oe.exports,ce=(n("4de4"),n("caad"),n("2532"),n("ade3")),se=n("2909"),ie=(n("d3b7"),function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(n=e.sent,n.ok){e.next=5;break}throw new Error("Some server error");case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),le={_url:"https://pokeapi.co/api/v2/pokemon",getPokemons:function(e){return ie("".concat(this._url,"/?").concat(e))},getPokemonData:function(e){return ie(e)},getPokemonById:function(e){return ie("".concat(this._url,"/").concat(e))}},ue=le;a["a"].use(d["a"]);var pe=new d["a"].Store({state:{loading:!1,pokemons:[],allPokemons:[],activePokemon:null,selectedValue:"all"},mutations:(r={},Object(ce["a"])(r,k,(function(e,t){e.loading=t})),Object(ce["a"])(r,y,(function(e,t){e.selectedValue=t})),Object(ce["a"])(r,h,(function(e,t){e.pokemons=t})),Object(ce["a"])(r,_,(function(e,t){e.activePokemon=t})),Object(ce["a"])(r,g,(function(e,t){e.allPokemons=[].concat(Object(se["a"])(e.allPokemons),[t])})),r),actions:(o={},Object(ce["a"])(o,O,(function(e,t){var n=e.commit;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n(k,!0),e.next=3,ue.getPokemons(t);case 3:r=e.sent,n(h,r.results),n(k,!1);case 6:case"end":return e.stop()}}),e)})))()})),Object(ce["a"])(o,P,(function(e,t){var n=e.commit;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ue.getPokemonData(t);case 2:return r=e.sent,n(g,r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()})),Object(ce["a"])(o,j,(function(e,t){var n=e.commit;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ue.getPokemonById(t);case 2:r=e.sent,n(_,r);case 4:case"end":return e.stop()}}),e)})))()})),Object(ce["a"])(o,y,(function(e,t){var n=e.commit;n(y,t),n(_,null)})),o),getters:{filteredPokemonByType:function(e){var t=e.allPokemons,n=e.selectedValue;return"all"===n?t:t.filter((function(e){return e.types.filter((function(e){var t=e.type.name;return t.includes(n)})).length>0}))},isFindPokemonsByType:function(e,t){return!t.filteredPokemonByType.length}}});a["a"].config.productionTip=!1,new a["a"]({store:pe,render:function(e){return e(ae)}}).$mount("#app")},5793:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},7036:function(e,t,n){"use strict";var r=n("5793"),o=n.n(r);o.a},"7ae8":function(e,t,n){"use strict";var r=n("b2be"),o=n.n(r);o.a},"90e0":function(e,t,n){"use strict";var r=n("3362"),o=n.n(r);o.a},"9c0c":function(e,t,n){},b2be:function(e,t,n){},c4eb:function(e,t,n){"use strict";var r=n("4e06"),o=n.n(r);o.a},f385:function(e,t,n){}});
//# sourceMappingURL=app.67b0e3eb.js.map