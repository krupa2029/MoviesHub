(this.webpackJsonpmoviehub=this.webpackJsonpmoviehub||[]).push([[1],{11:function(e,t,n){e.exports={search_container:"SearchButton_search_container__3uKJm",text_field:"SearchButton_text_field__12R3a",search_button:"SearchButton_search_button__1fbtl"}},14:function(e,t,n){e.exports={header:"MainHeader_header__3_Xqy",logo:"MainHeader_logo__3yedx"}},16:function(e,t,n){"use strict";var c=n(25),r=n.n(c),s=n(2);t.a=function(){return Object(s.jsx)("div",{className:r.a.spinner})}},25:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__1T13Q"}},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(20),a=n.n(s),i=(n(30),n(3)),j=n(24),o=n(18),l=n(2),u=function(){return Object(l.jsxs)("h2",{children:[Object(l.jsx)(o.a,{})," MoviesHub"]})},h=n(14),b=n.n(h),d=n(17),x=n(11),O=n.n(x),_=n(23),f=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(i.useHistory)();return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.push("/search/".concat(n)),r("")},className:O.a.search_container,children:[Object(l.jsx)("input",{type:"text",placeholder:"Search...",id:"search",value:n,onChange:function(e){return r(e.target.value)},className:O.a.text_field}),Object(l.jsx)("button",{type:"submit",className:O.a.search_button,children:Object(l.jsx)(_.a,{})})]})})},m=function(e){return Object(l.jsxs)("header",{className:b.a.header,children:[Object(l.jsx)("div",{className:b.a.logo,children:Object(l.jsx)(j.Link,{to:"/",style:{textDecoration:"none"},children:Object(l.jsx)(u,{})})}),Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{children:Object(l.jsx)("li",{children:Object(l.jsx)(f,{})})})})]})},p=function(e){return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)("main",{children:e.children})]})},v=n(16),y=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,53))})),S=r.a.lazy((function(){return Promise.all([n.e(5),n.e(4)]).then(n.bind(null,54))})),g=r.a.lazy((function(){return n.e(7).then(n.bind(null,51))})),N=r.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,52))}));var R=function(){return Object(l.jsx)(p,{children:Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(v.a,{})}),children:Object(l.jsxs)(i.Switch,{children:[Object(l.jsx)(i.Route,{path:"/",exact:!0,children:Object(l.jsx)(i.Redirect,{to:"/movies"})}),Object(l.jsx)(i.Route,{path:"/movies",exact:!0,children:Object(l.jsx)(y,{})}),Object(l.jsx)(i.Route,{path:"/movies/:movieId",children:Object(l.jsx)(S,{})}),Object(l.jsx)(i.Route,{path:"/search/:search_term",children:Object(l.jsx)(N,{})}),Object(l.jsx)(i.Route,{path:"*",children:Object(l.jsx)(g,{})})]})})})},k=n(12);a.a.render(Object(l.jsx)(k.a,{children:Object(l.jsx)(R,{})}),document.getElementById("root"))}},[[37,2,3]]]);
//# sourceMappingURL=main.a1cf118c.chunk.js.map