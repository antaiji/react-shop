(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(7),s=c.n(i),r=(c(13),c(0));var l=function(){return Object(r.jsx)("nav",{className:"blue darken-4",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"!#",className:"brand-logo",children:"React Shop"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"!#",children:"Repo"})})})]})})},o=c(8),d=c(2),j=c(3);var u=function(){return Object(r.jsx)("div",{className:"preloader-wrapper big active",children:Object(r.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]})})};var b=function(e){var t=e.mainId,c=e.displayName,n=e.displayDescription,a=e.price,i=e.displayAssets,s=e.addToOrder;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("img",{src:i[0].full_background,alt:c})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title",children:c}),Object(r.jsx)("p",{children:n})]}),Object(r.jsxs)("div",{className:"card-action",children:[Object(r.jsx)("button",{className:"btn teal darken-1",onClick:function(){s({mainId:t,displayName:c,price:a})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(r.jsxs)("span",{className:"right pricefont",children:[a.regularPrice," \u0440\u0443\u0431"]})]})]})};var h=function(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToOrder;return c.length?Object(r.jsx)("div",{className:"goods",children:c.map((function(e){return Object(r.jsx)(b,Object(d.a)({addToOrder:n},e),e.mainId)}))}):Object(r.jsx)("h3",{children:"Nothing found"})};var m=function(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow,a=void 0===n?Function.prototype:n;return Object(r.jsxs)("div",{className:"cart light-green darken-2 white-text",onClick:a,children:[Object(r.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(r.jsx)("span",{className:"cart-quantity",children:c}):null]})};var O=function(e){var t=e.mainId,c=e.displayName,n=e.price,a=e.quantity,i=e.removeFromBasket,s=void 0===i?Function.prototype:i,l=e.changeQuantity,o=void 0===l?Function.prototype:l;return Object(r.jsxs)("li",{className:"collection-item",children:[c," ",Object(r.jsx)("span",{className:"plumin-button grey lighten-2",onClick:function(){return o("minus",t)},children:"-"}),"x",a,Object(r.jsx)("span",{className:"plumin-button grey lighten-2",onClick:function(){return o("plus",t)},children:"+"})," ","= ",n.regularPrice*a," \u0440\u0443\u0431",Object(r.jsx)("span",{className:"secondary-content",onClick:function(){return s(t)},children:Object(r.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})};var p=function(e){var t=e.order,c=void 0===t?[]:t,n=e.handleBasketShow,a=void 0===n?Function.prototype:n,i=e.removeFromBasket,s=void 0===i?Function.prototype:i,l=e.changeQuantity,o=void 0===l?Function.prototype:l,j=c.reduce((function(e,t){return e+t.price.regularPrice*t.quantity}),0);return Object(r.jsxs)("ul",{className:"collection basket-list",children:[Object(r.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c.length?c.map((function(e){return Object(r.jsx)(O,Object(d.a)(Object(d.a)({},e),{},{removeFromBasket:s,changeQuantity:o}),e.mainId)})):Object(r.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(r.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",j," \u0440\u0443\u0431"]}),Object(r.jsx)("li",{className:"collection-item",children:Object(r.jsx)("button",{className:"btn-small green",children:" \u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c "})}),Object(r.jsx)("i",{className:"material-icons basket-close",onClick:a,children:"close"})]})};var v=function(e){var t=e.name,c=void 0===t?"":t,a=e.closeAlert,i=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=setTimeout(i,3e3);return function(){clearTimeout(e)}}),[c,i]),Object(r.jsx)("div",{id:"toast-container",children:Object(r.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})};var x=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),s=Object(j.a)(i,2),l=s[0],b=s[1],O=Object(n.useState)([]),x=Object(j.a)(O,2),f=x[0],N=x[1],g=Object(n.useState)(!1),y=Object(j.a)(g,2),k=y[0],F=y[1],I=Object(n.useState)(""),q=Object(j.a)(I,2),w=q[0],S=q[1];function B(){F(!k)}return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"1bae75c0-68b0df48-801bebe2-a5a0e49e"}}).then((function(e){return e.json()})).then((function(e){e.shop&&a(e.shop),b(!1)}))}),[]),Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(m,{quantity:f.length,handleBasketShow:B}),l?Object(r.jsx)(u,{}):Object(r.jsx)(h,{goods:c,addToOrder:function(e){if(f.find((function(t){return t.mainId===e.mainId}))){var t=f.map((function(t){return t.mainId===e.mainId?Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity+1}):t}));N(t)}else{var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});N([].concat(Object(o.a)(f),[c]))}S(e.displayName)}}),k&&Object(r.jsx)(p,{order:f,handleBasketShow:B,removeFromBasket:function(e){var t=f.filter((function(t){return t.mainId!==e}));N(t)},changeQuantity:function(e,t){var c=f.map((function(c){return c.mainId===t&&("minus"===e&&c.quantity>0?c.quantity-=1:"plus"===e&&(c.quantity+=1)),c}));N(c)}}),w&&Object(r.jsx)(v,{name:w,closeAlert:function(){S("")}})]})};var f=function(){return Object(r.jsx)("footer",{className:"page-footer blue darken-4",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"blue-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})};var N=function(){return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(x,{}),Object(r.jsx)(f,{})]})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.36c152d9.chunk.js.map