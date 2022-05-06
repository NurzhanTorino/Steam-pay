(this["webpackJsonptesla-website"]=this["webpackJsonptesla-website"]||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),r=c(14),a=c.n(r),s=(c(28),c(11)),l=c(4),o=c(23),j=c(5),d=c(22),m=c(21),u=c.n(m),b=(c(32),c(2)),p=function(e){var t=e.onClick,c=e.type,i=e.children,n=e.size,r=void 0===n?"s":n,a=u()({btn:!0,"btn--secondary":"secondary"===c,"btn--primary":"primary"===c,"btn--small":"s"===r,"btn--medium":"m"===r});return Object(b.jsx)("button",{className:a,onClick:t,children:i})},g=c(12),h=Object(g.b)({name:"cart",initialState:{itemsInCart:[]},reducers:{setItemInCart:function(e,t){e.itemsInCart.push(t.payload)},deleteItemFromCart:function(e,t){e.itemsInCart=e.itemsInCart.filter((function(e){return e.id!==t.payload}))}}}),O=h.actions,x=O.setItemInCart,f=O.deleteItemFromCart,v=h.reducer,_=c(16),N=(c(34),function(e){var t=e.title,c=e.price,i=e.id,n=Object(j.b)();return Object(b.jsxs)("div",{className:"cart-item",children:[Object(b.jsxs)("span",{children:[t," "]}),Object(b.jsxs)("div",{className:"cart-item__price",children:[Object(b.jsxs)("span",{children:[c," \u0440\u0443\u0431."]}),Object(b.jsx)(_.a,{size:15,className:"cart-item__delete-icon",onClick:function(){n(f(i))}})]})]})}),w=function(e){return e.reduce((function(e,t){return e+t.price}),0)},C=(c(35),function(e){var t=e.onClick,c=Object(j.c)((function(e){return e.cart.itemsInCart}));return Object(b.jsxs)("div",{className:"cart-menu",children:[Object(b.jsx)("div",{className:"cart-menu__games-list",children:c.length>0?c.map((function(e){return Object(b.jsx)(N,{image:e.image,price:e.price,title:e.title,id:e.id},e.image)})):"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),c.length>0?Object(b.jsxs)("div",{className:"cart-menu__arrange",children:[Object(b.jsxs)("div",{className:"cart-menu__total-price",children:[Object(b.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(b.jsxs)("span",{children:[w(c)," \u0440\u0443\u0431."]})]}),Object(b.jsx)(p,{type:"primary",size:"m",onClick:t,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]}):null]})}),y=(c(36),function(e){var t=e.quantity,c=void 0===t?0:t;return c>0?Object(b.jsx)("div",{className:"items-in-cart",children:c}):null}),k=(c(37),function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(j.c)((function(e){return e.cart.itemsInCart})),a=Object(l.f)(),s=w(r),m=Object(i.useCallback)((function(){n(!1),a.push("/order")}),[a]);return Object(b.jsxs)("div",{className:"cart-block",children:[Object(b.jsx)(y,{quantity:r.length}),Object(b.jsx)(d.a,{color:"white",size:25,className:"cart-icon",onClick:function(){return n(!c)}}),s>0?Object(b.jsxs)("span",{className:"total-price",children:[s," \u0440\u0443\u0431."]}):null,c&&Object(b.jsx)(C,{onClick:m})]})}),I=(c(40),function(e){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)(s.b,{to:"/",className:"header__store-title",children:"Game Store"})}),Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{children:[" Welcome ",e.name]})}),Object(b.jsx)("div",{className:"wrapper header__cart-btn-wrapper",children:Object(b.jsx)(k,{})})]})});I.defaultProps={name:"User"};c(41);var z=function(e){var t=e.genre,c=void 0===t?"":t;return Object(b.jsx)("span",{className:"game-genre",children:c})},S=(c(42),function(e){var t=e.game,c=Object(j.b)(),i=Object(j.c)((function(e){return e.cart.itemsInCart})).some((function(e){return e.id===t.id}));return Object(b.jsxs)("div",{className:"game-buy",children:[Object(b.jsxs)("span",{className:"game-buy__price",children:[t.price," \u0440\u0443\u0431."]}),Object(b.jsx)(p,{type:i?"secondary":"primary",onClick:function(e){e.stopPropagation(),c(i?f(t.id):x(t))},children:i?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b":"\u0412 \u041a\u043e\u0440\u0437\u0438\u043d\u0443"})]})}),A=(c(43),function(e){var t=e.image,c=void 0===t?"":t;return Object(b.jsx)("div",{className:"game-cover",style:{backgroundImage:"url(".concat(c,")")}})}),G=Object(g.b)({name:"games",initialState:{currentGame:null},reducers:{setCurrentGame:function(e,t){e.currentGame=t.payload}}}),F=G.actions.setCurrentGame,T=G.reducer,B=(c(44),function(e){var t=e.game,c=Object(l.f)(),i=Object(j.b)();return Object(b.jsxs)("div",{className:"game-item",onClick:function(){i(F(t)),c.push("/app/".concat(t.title))},children:[Object(b.jsx)(A,{image:t.image}),Object(b.jsxs)("div",{className:"game-item__details",children:[Object(b.jsx)("span",{className:"game-item__title",children:t.title}),Object(b.jsx)("div",{className:"game-item__genre",children:t.genres.map((function(e){return Object(b.jsx)(z,{genre:e},e)}))}),Object(b.jsx)("div",{className:"game-item__buy",children:Object(b.jsx)(S,{game:t})})]})]})}),P=(c(45),[{image:"/game-covers/forza_5.jpeg",title:"Forza Horizon 5",genres:["\u0413\u043e\u043d\u043a\u0438","\u0421\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440","\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043c\u0438\u0440"],price:2343,video:"https://www.youtube.com/embed/FYH9n37B7Yw",id:1,description:"\u0412\u0430\u0441 \u0436\u0434\u0451\u0442 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u043a\u0430\u043b\u0435\u0439\u0434\u043e\u0441\u043a\u043e\u043f \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 Horizon! \u0421\u043e\u0432\u0435\u0440\u0448\u0430\u0439\u0442\u0435 \u0443\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0435\u0437\u0434\u043a\u0438 \u043f\u043e \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u043c\u0443 \u0438 \u0441\u0430\u043c\u043e\u0431\u044b\u0442\u043d\u043e\u043c\u0443 \u043c\u0438\u0440\u0443 \u041c\u0435\u043a\u0441\u0438\u043a\u0438 \u0437\u0430 \u0440\u0443\u043b\u0451\u043c \u0432\u0435\u043b\u0438\u0447\u0430\u0439\u0448\u0438\u0445 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439 \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438. \u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 Horizon \u0443\u0436\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u0438\u0433\u0440\u0443 \u0432 \u0441\u0432\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0436\u0435\u043b\u0430\u043d\u0438\u0439!"},{image:"/game-covers/battlefield_2042.jpg",title:"Battlefield 2042",genres:["\u042d\u043a\u0448\u0435\u043d","\u0428\u0443\u0442\u0435\u0440","\u0412\u043e\u0439\u043d\u0430"],video:"https://www.youtube.com/embed/ASzOzrB-a9E",price:2433,id:2,description:"Battlefield\u2122 2042 \u2014 \u044d\u0442\u043e \u0448\u0443\u0442\u0435\u0440 \u043e\u0442 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043b\u0438\u0446\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0441\u0435\u0440\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043a \u043b\u0435\u0433\u0435\u043d\u0434\u0430\u0440\u043d\u044b\u043c \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u043d\u044b\u043c \u0441\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c. \u0412 \u0431\u0443\u0434\u0443\u0449\u0435\u043c, \u0433\u0434\u0435 \u0446\u0430\u0440\u0438\u0442 \u0445\u0430\u043e\u0441, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0438 \u043f\u0440\u043e\u0446\u0432\u0435\u0442\u0430\u0439\u0442\u0435 \u043d\u0430 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043c\u0435\u043d\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u043f\u043e\u043b\u044f\u0445 \u0431\u043e\u044f \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0441\u0432\u043e\u0435\u043c\u0443 \u043e\u0442\u0440\u044f\u0434\u0443 \u0438 \u0430\u0440\u0441\u0435\u043d\u0430\u043b\u0443 \u043d\u043e\u0432\u0435\u0439\u0448\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439."},{image:"/game-covers/life_is_strange_true_colors.jpeg",title:"Life is Strange True Colors",genres:["\u0413\u043b\u0443\u0431\u043e\u043a\u0438\u0439 \u0441\u044e\u0436\u0435\u0442","\u041f\u0440\u043e\u0442\u0430\u0433\u043e\u043d\u0438\u0441\u0442\u043a\u0430"],video:"https://www.youtube.com/embed/b6CkzwVAr0M",price:3021,id:3,description:"\u0410\u043b\u0435\u043a\u0441 \u0427\u044d\u043d\u044c \u043e\u0442 \u0432\u0441\u0435\u0445 \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0441\u0432\u043e\u0451 \xab\u043f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435\xbb \u2014 \u0441\u0432\u0435\u0440\u0445\u044a\u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0441\u0438\u043b\u044c\u043d\u044b\u0435 \u044d\u043c\u043e\u0446\u0438\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438 \u0432\u043b\u0438\u044f\u0442\u044c \u043d\u0430 \u043d\u0438\u0445. \u041d\u043e \u043a\u043e\u0433\u0434\u0430 \u0435\u0451 \u0431\u0440\u0430\u0442 \u043f\u043e\u0433\u0438\u0431\u0430\u0435\u0442 \u2014 \u044f\u043a\u043e\u0431\u044b \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043d\u0435\u0441\u0447\u0430\u0441\u0442\u043d\u043e\u0433\u043e \u0441\u043b\u0443\u0447\u0430\u044f, \u2014 \u0410\u043b\u0435\u043a\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0435\u0451, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0434\u0443."},{image:"/game-covers/gta_v.jpeg",title:"Grand Theft Auto V",genres:["\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043c\u0438\u0440","\u042d\u043a\u0448\u0435\u043d"],video:"https://www.youtube.com/embed/QkkoHAzjnUs",price:789,id:4,description:"Grand Theft Auto V \u0434\u043b\u044f PC \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0433\u0440\u043e\u043a\u0430\u043c \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u043c\u0435\u043d\u0438\u0442\u044b\u0439 \u043c\u0438\u0440 \u041b\u043e\u0441-\u0421\u0430\u043d\u0442\u043e\u0441\u0430 \u0438 \u043e\u043a\u0440\u0443\u0433\u0430 \u0411\u043b\u044d\u0439\u043d \u0432 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0438 \u0434\u043e 4k \u0438 \u0432\u044b\u0448\u0435 \u0441 \u0447\u0430\u0441\u0442\u043e\u0442\u043e\u0439 60 \u043a\u0430\u0434\u0440\u043e\u0432 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443."},{image:"/game-covers/rainbow_siege.jpeg",title:"Tom Clancy's Rainbow Six\xae Siege",video:"https://www.youtube.com/embed/6wlvYh0h63k",genres:["\u0422\u0430\u043a\u0442\u0438\u043a\u0430","\u0428\u0443\u0442\u0435\u0440"],price:982,id:5,description:"Tom Clancy's Rainbow Six \u041e\u0441\u0430\u0434\u0430 \u2013 \u044d\u0442\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435 \u043d\u0430\u0448\u0443\u043c\u0435\u0432\u0448\u0435\u0433\u043e \u0448\u0443\u0442\u0435\u0440\u0430 \u043e\u0442 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043b\u0438\u0446\u0430, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0443\u0434\u0438\u0435\u0439 Ubisoft Montreal."},{image:"/game-covers/assassins_creed_valhalla.png",title:"Assassin\u2019s Creed Valhalla",genres:["\u041f\u0430\u0440\u043a\u0443\u0440","\u0420\u041f\u0413","\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043c\u0438\u0440"],video:"https://www.youtube.com/embed/ssrNcwxALS4",price:2863,id:6,description:"Assassin\u2019s Creed Valhalla \u2014 \u043c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u0430\u044f \u0438\u0433\u0440\u0430 \u0432 \u0436\u0430\u043d\u0440\u0435 action/RPG, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0443\u0434\u0438\u0435\u0439 Ubisoft Montreal \u043f\u043e\u0434 \u0438\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 Ubisoft. \u042f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u043e\u0439 \u0438\u0433\u0440\u043e\u0439 \u0432 \u0441\u0435\u0440\u0438\u0438 \u0438\u0433\u0440 Assassin\u2019s Creed."}]),H=function(){return Object(b.jsx)("div",{className:"home-page",children:P.map((function(e){return Object(b.jsx)(B,{game:e},e.id)}))})},U=(c(46),function(){var e=Object(j.c)((function(e){return e.games.currentGame}));return e?Object(b.jsxs)("div",{className:"game-page",children:[Object(b.jsx)("h1",{className:"game-page__title",children:e.title}),Object(b.jsxs)("div",{className:"game-page__content",children:[Object(b.jsx)("div",{className:"game-page__left",children:Object(b.jsx)("iframe",{width:"90%",height:"400px",src:e.video,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})}),Object(b.jsxs)("div",{className:"game-page__right",children:[Object(b.jsx)(A,{image:e.image}),Object(b.jsx)("p",{children:e.description}),Object(b.jsx)("p",{className:"secondary-text",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043c\u0435\u0442\u043a\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430:"}),e.genres.map((function(e){return Object(b.jsx)(z,{genre:e},e)})),Object(b.jsx)("div",{className:"game-page__buy-game",children:Object(b.jsx)(S,{game:e})})]})]})]}):null}),V=(c(47),function(e){var t=e.game,c=Object(j.b)();return Object(b.jsxs)("div",{className:"order-item",children:[Object(b.jsx)("div",{className:"order-item__cover",children:Object(b.jsx)(A,{image:t.image})}),Object(b.jsx)("div",{className:"order-item__title",children:Object(b.jsxs)("span",{children:[" ",t.title," "]})}),Object(b.jsxs)("div",{className:"order-item__price",children:[Object(b.jsxs)("span",{children:[t.price," \u0440\u0443\u0431."]}),Object(b.jsx)(_.a,{size:25,className:"cart-item__delete-icon",onClick:function(){c(f(t.id))}})]})]})}),L=(c(48),function(){var e,t,c=Object(j.c)((function(e){return e.cart.itemsInCart}));return c.length<1?Object(b.jsx)("h1",{children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430!"}):Object(b.jsxs)("div",{className:"order-page",children:[Object(b.jsx)("div",{className:"order-page__left",children:c.map((function(e){return Object(b.jsx)(V,{game:e})}))}),Object(b.jsx)("div",{className:"order-page__right",children:Object(b.jsx)("div",{className:"order-page__total-price",children:Object(b.jsxs)("span",{children:[c.length," ",(e=c.length,t=["\u0442\u043e\u0432\u0430\u0440","\u0442\u043e\u0432\u0430\u0440\u0430","\u0442\u043e\u0432\u0430\u0440\u043e\u0432"],e>100&&(e%=100),e<=20&&e>=10?t[2]:(e>20&&(e%=10),1===e?t[0]:e>1&&e<5?t[1]:t[2]))," \u043d\u0430 \u0441\u0443\u043c\u043c\u0443 ",w(c)," \u0440\u0443\u0431."]})})})]})}),M=Object(g.a)({reducer:{games:T,cart:v}});var Y=function(){return Object(b.jsx)(j.a,{store:M,children:Object(b.jsx)(s.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(I,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/order",children:Object(b.jsx)(L,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/app/:title",children:Object(b.jsx)(U,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(H,{})})]})]})})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(Y,{})}),document.getElementById("root")),R()}},[[49,1,2]]]);
//# sourceMappingURL=main.46a19a6f.chunk.js.map