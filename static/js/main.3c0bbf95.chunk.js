(this["webpackJsonpapi-example"]=this["webpackJsonpapi-example"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(6),s=t.n(r),o=(t(11),t(12),t(2)),l=t.n(o),i=t(5),u=t(3),j=t.p+"static/media/pokedex.fd486486.png",p=t(0),f=function(e){var n=e.pokemon,t=e.myOnClick;return Object(p.jsxs)("li",{id:n.name,onClick:t,children:[Object(p.jsx)("p",{children:n.name})," ",Object(p.jsx)("span",{children:n.avatar})]})},h=function(){var e=Object(c.useRef)(),n=Object(c.useState)([]),t=Object(u.a)(n,2),a=t[0],r=t[1],s=Object(c.useState)(null),o=Object(u.a)(s,2),h=o[0],b=o[1],d=Object(c.useState)(!0),m=Object(u.a)(d,2),x=m[0],O=m[1],v=Object(c.useState)([]),g=Object(u.a)(v,2),k=g[0],C=g[1];Object(c.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var n,t,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="https://pokeapi.co/api/v2/pokemon?offset=0&limit=100",t=[],c={next:2};case 3:if(null==c.next){e.next=23;break}return e.prev=4,e.next=7,fetch(n);case 7:return a=e.sent,e.next=10,a.json();case 10:c=e.sent,console.log(c),c.results.forEach(function(){var e=Object(i.a)(l.a.mark((function e(n){var c,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n.url);case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,r=Object(p.jsx)("img",{src:a.sprites.front_default,alt:"pokemon"}),s={name:n.name,avatar:r},t.push(s),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),console.log(n),alert("Caractr\xedsticas del pokem\xf3n "+n.name+"  no encontrado en la PokeApi; 404 NOT FOUND");case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}()),n=c.next,r((function(e){return t})),null==c.next&&O(!1),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0);case 21:e.next=3;break;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var N=function(n){console.log(e.current.value);var t=e.current.value;console.log(t);var c=!1;if(""!==t){for(var r=0;r<a.length;r++)if(a[r].name===t){1===k.length&&(b(a[r]),C([]),c=!0),k.length<1&&C([]);break}if(console.log(t,c),!c){var s=[];a.forEach((function(e){for(var n=!0,c=0;c<t.length;c++)"metapod"===e.name&&console.log(e.name,t),t.charAt(c)!==e.name.charAt(c)&&(n=!1);n&&s.push(e)})),C(s),console.log(k)}}else C([]),b(null)};return Object(p.jsxs)(c.Fragment,{children:[x&&Object(p.jsx)("div",{className:"container-loader",children:Object(p.jsx)("div",{className:"loader"})}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"title-container",children:[Object(p.jsxs)("div",{className:"pokedex",children:[" ",Object(p.jsx)("img",{src:j,alt:"pokedex"})]}),Object(p.jsx)("h1",{className:"title",children:"Busca tu pokem\xf3n!"})]}),Object(p.jsx)("input",{placeholder:" Pokemon",type:"search",onChange:N,onClick:N,ref:e}),0!==k.length&&Object(p.jsx)("div",{className:"lista-busquedas",children:k.sort().map((function(n){return Object(p.jsx)(f,{myOnClick:function(){var t;t=n,console.log(t),b(t),C([]),e.current.value=t.name},pokemon:n},n.name)}))}),null!==h&&Object(p.jsx)("article",{children:Object(p.jsxs)("figure",{children:[h.avatar,Object(p.jsx)("figcaption",{children:Object(p.jsx)("p",{children:function(e){var n=e.charAt(0).toUpperCase(),t=e.substring(1,e.length);return n.concat(t)}(h.name)})})]})})]})]})};var b=function(){return Object(p.jsx)(h,{})},d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.3c0bbf95.chunk.js.map