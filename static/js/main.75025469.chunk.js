(this["webpackJsonppoke-store"]=this["webpackJsonppoke-store"]||[]).push([[0],{26:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),s=n.n(r),o=(n(26),n(8)),i=n(4),l=n.n(i),u=n(5),j=n(2),b=n(0);function d(e){var t=e.pokemons,n=e.gotoDetailsPage,c=e.addPokemonToCart;return Object(b.jsx)("div",{className:"pokemon-list-container",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"#"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Price"}),Object(b.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:t+1}),Object(b.jsx)("td",{children:e.name}),Object(b.jsxs)("td",{children:["Price: $",e.id]}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{className:"btn btn-info btn-sm",onClick:function(){return n(e.url)},children:"See details"}),Object(b.jsx)("button",{className:"btn btn-primary btn-sm",onClick:function(){return c(e)},children:"Add to cart"})]})]},e.name)}))})]})})}function m(e){var t=e.gotoNextPage,n=e.gotoPrevPage;return Object(b.jsxs)("div",{className:"d-flex justify-content-around mt-4 paginator",children:[n&&Object(b.jsx)("button",{className:"btn btn-secondary btn-sm",onClick:n,children:"Previous page"}),t&&Object(b.jsx)("button",{className:"btn btn-primary btn-sm",onClick:t,children:"Next page"})]})}function p(e){var t=e.pokemonDetails,n=e.pokemonName;return Object(b.jsxs)("div",{className:"card card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:"Pokemon details"}),Object(b.jsx)("h6",{className:"card-title",children:n}),t.map((function(e){return Object(b.jsx)("div",{className:"card-text",children:Object(b.jsxs)("h6",{className:"d-flex justify-content-between",children:[e.stat.name.toUpperCase(),Object(b.jsx)("span",{children:e.base_stat})]})},e.stat.name)}))]})}function O(e){var t=e.cart,n=e.removePokemonFromCart;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{children:"Pokemon Cart"}),Object(b.jsxs)("p",{children:["Total: $",t.reduce((function(e,t){return e+parseInt(t.id)}),0)]}),Object(b.jsx)("button",{className:"btn btn-primary btn-block",type:"button","data-toggle":"collapse","data-target":"#cartPokemon","aria-expanded":"false","aria-controls":"cartPokemon",children:"List of pokemons in cart"}),Object(b.jsx)("div",{className:"collapse",id:"cartPokemon",children:t.map((function(e){return Object(b.jsxs)("div",{className:"d-flex justify-content-around m-2 p-2 border border-top-0",children:[Object(b.jsx)("span",{children:e.name}),Object(b.jsx)("button",{className:"btn btn-warning btn-sm",onClick:function(){return n(e)},children:"Remove pokemon"})]},e.name)}))})]})}var h=function(){return Object(b.jsx)("nav",{className:"navbar navbar-dark",style:{backgroundColor:"#B22222",height:"60px"},children:Object(b.jsxs)("h5",{className:"text-white m-0",children:[Object(b.jsx)("img",{src:"pikachu.svg",width:"30",height:"30",className:"d-inline-block align-top",alt:"brand"}),"PokeStore"]})})},f=n(7),x=n.n(f),v=n(21),k=n(10);n(47),n(48);function g(e){var t=e.cart,n=e.cleanCart,a=Object(c.useState)(!1),r=Object(j.a)(a,2),s=r[0],o=r[1],i=Object(c.useState)(null),d=Object(j.a)(i,2),m=d[0],p=d[1],O=Object(c.useState)(""),h=Object(j.a)(O,2),f=h[0],x=h[1],v=Object(c.useState)(!0),g=Object(j.a)(v,2),N=g[0],y=g[1],P=Object(c.useState)(!1),S=Object(j.a)(P,2),C=S[0],w=S[1],T=Object(c.useState)([]),D=Object(j.a)(T,2),E=D[0],F=D[1],I=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(t.empty),p(t.error?t.error.message:""),w(t.complete);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),x(!0),C?0===t.length?(p("You do not have items on your cart"),x(!1)):(F(t),p(null),x(!1),o(!0),n()):x(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("form",{id:"payment-form",onSubmit:A,children:[Object(b.jsx)(k.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:I}),Object(b.jsx)("button",{className:"btn btn-success btn-block",disabled:f||N||s,id:"submit",children:Object(b.jsx)("span",{id:"button-text",children:f?Object(b.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),m&&Object(b.jsx)("div",{className:"card-error",role:"alert",children:m}),Object(b.jsxs)("div",{className:s?"result-message":"result-message hidden",children:[Object(b.jsx)("p",{children:"Payment succeeded, see the result for your purchase"}),Object(b.jsxs)("p",{children:["Congratulations, these are your pokemons: ",E.map((function(e){return e.name})).join(", ")]}),Object(b.jsxs)("p",{children:["Total: $",E.reduce((function(e,t){return e+parseInt(t.id)}),0)]}),Object(b.jsx)("p",{children:"Refresh the page to pay again."})]})]})}var N=function(){var e="https://pokeapi.co/api/v2/pokemon/",t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(e),i=Object(j.a)(s,2),f=i[0],N=i[1],y=Object(c.useState)(),P=Object(j.a)(y,2),S=P[0],C=P[1],w=Object(c.useState)(),T=Object(j.a)(w,2),D=T[0],E=T[1],F=Object(c.useState)(!0),I=Object(j.a)(F,2),A=I[0],$=I[1],_=Object(c.useState)(""),B=Object(j.a)(_,2),J=B[0],L=B[1],M=Object(c.useState)([]),R=Object(j.a)(M,2),Y=R[0],q=R[1],z=Object(c.useState)(),Q=Object(j.a)(z,2),U=Q[0],G=Q[1],H=Object(c.useState)([]),K=Object(j.a)(H,2),V=K[0],W=K[1],X=Object(v.a)("pk_test_TYooMQauvdEDq54NiTphI7jx");function Z(e){return{name:e.name,url:e.url,id:e.url.match(/\d{1,4}/g)[1]}}function ee(e){var t;W([].concat(Object(o.a)(V),[e])),r((t=e,a.filter((function(e){return e!==t}))))}function te(e){var t;W((t=e,V.filter((function(e){return e!==t})))),r([].concat(Object(o.a)(a),[e]))}return Object(c.useEffect)((function(){function t(){return(t=Object(u.a)(l.a.mark((function t(){var n,c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return $(!0),t.next=3,x.a.get(f,{cancelToken:new x.a.CancelToken((function(e){return n=e}))});case 3:return c=t.sent,$(!1),C(c.data.next),E(c.data.previous),a=(a=c.data.results.map(Z)).filter((function(e){return V.every((function(t){return t.id!==e.id}))})),r(a),a.length>0&&G(e+a[0].id),t.abrupt("return",(function(){return n()}));case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[f]),Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(U,{cancelToken:new x.a.CancelToken((function(e){return t=e}))});case 2:return n=e.sent,q(n.data.stats),L(n.data.name),e.abrupt("return",(function(){return t()}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}U&&function(){e.apply(this,arguments)}()}),[U]),A?"Loading...":Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{className:"container mb-5",children:Object(b.jsxs)("div",{className:"pokemon-page",children:[Object(b.jsxs)("div",{className:"pokemon-elements",children:[Object(b.jsx)(d,{pokemons:a,gotoDetailsPage:function(e){return function(e){G(e)}(e)},addPokemonToCart:function(e){return ee(e)}}),Object(b.jsx)(m,{gotoNextPage:S?function(){N(S)}:null,gotoPrevPage:D?function(){N(D)}:null})]}),Object(b.jsxs)("div",{className:"pokemon-elements-details",children:[Object(b.jsx)(p,{pokemonDetails:Y,pokemonName:J}),Object(b.jsx)(O,{cart:V,removePokemonFromCart:function(e){return te(e)}}),Object(b.jsx)(k.Elements,{stripe:X,children:Object(b.jsx)(g,{cart:V,cleanCart:function(){return r([].concat(Object(o.a)(a),Object(o.a)(V))),void W([])}})})]})]})})]})};n(49),n(50),n(51);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.75025469.chunk.js.map