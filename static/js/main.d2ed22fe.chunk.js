(this["webpackJsonpblog-with-hooks"]=this["webpackJsonpblog-with-hooks"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/preloader.4e9bd8b8.svg"},36:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(31),r=a.n(l),s=a(2),o=a(1),m=a(5),i={isLoading:!1,isLoggedIn:null,currentUser:null,isFetching:!1},u=function(e,t){switch(t.type){case"TOGGLE_IS_FETCHING":return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.payload});case"LOADING":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case"SET_AUTHORIZED":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!0,isLoading:!1,currentUser:t.payload});case"SET_UNAUTHORIZED":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!1});case"LOGOUT":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!1,currentUser:null});default:return e}},E=Object(n.createContext)([{},function(e){}]),f=function(e){var t=e.children,a=Object(n.useReducer)(u,i);return c.a.createElement(E.Provider,{value:a},t)},g=a(32),p=a.n(g),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(n.useState)((function(){return localStorage.getItem(e)||t})),c=Object(o.a)(a,2),l=c[0],r=c[1];return Object(n.useEffect)((function(){localStorage.setItem(e,l)}),[e,l]),[l,r]},b=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],l=a[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],E=Object(n.useState)(null),f=Object(o.a)(E,2),g=f[0],b=f[1],v=Object(n.useState)({}),N=Object(o.a)(v,2),O=N[0],j=N[1],h=d("token"),y=Object(o.a)(h,1)[0],S=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j(e),u(!0)}),[]);return Object(n.useEffect)((function(){var t=!1,a=Object(m.a)(Object(m.a)({},O),{headers:{authorization:y?"Token ".concat(y):""}});if(i)return p()("https://conduit.productionready.io/api"+e,a).then((function(e){t||(l(e.data),u(!1))})).catch((function(e){t||(b(e.response.data),u(!1))})),function(){t=!0}}),[i,O,e,y]),[{response:c,isLoading:i,error:g},S]},v=function(e){var t=e.children,a=b("/user"),c=Object(o.a)(a,2),l=c[0].response,r=c[1],s=Object(n.useContext)(E),m=Object(o.a)(s,2)[1],i=d("token"),u=Object(o.a)(i,1)[0];return Object(n.useEffect)((function(){u?(r(),m({type:"SET_LOADING"})):m({type:"SET_UNAUTHORIZED"})}),[m,u,r]),Object(n.useEffect)((function(){l&&m({type:"SET_AUTHORIZED",payload:l.user})}),[l,m]),t},N=function(){var e=Object(n.useContext)(E),t=Object(o.a)(e,1)[0].currentUser;return c.a.createElement("nav",{className:"navbar navbar-light"},c.a.createElement("div",{className:"container"},c.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Home"),c.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{className:"nav-link",to:"/",exact:!0},"Home")),!t&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{className:"nav-link",to:"/login",exact:!0},"Sign-in")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{className:"nav-link",to:"/register",exact:!0},"Sign-up"))),t&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{className:"nav-link",to:"/articles/new"},c.a.createElement("i",{className:"ion-compose"}),"\xa0 Add Post")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{className:"nav-link",to:"/settings"},c.a.createElement("i",{className:"ion-gear-a"}),"\xa0 Settings")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{className:"nav-link",to:"/profiles/".concat(t.username),exact:!0},c.a.createElement("img",{className:"user-pic",src:t.image,alt:""}),"\xa0 ",t.username))))))},O=a(3),j=function(){return c.a.createElement("div",null,"Some error happened...")},h=a(34),y=a.n(h),S=function(){return c.a.createElement("img",{className:"justify-content-center",src:y.a,alt:""})},x=function(e){var t=e.tags;return c.a.createElement("ul",{className:"tag-list"},t.map((function(e){return c.a.createElement("li",{key:e,className:"tag-default tag-pill tag-outline"},e)})))},k=function(e){var t=e.match.params.slug,a="/articles/".concat(t),l=b(a),r=Object(o.a)(l,2),m=r[0],i=m.response,u=m.isLoading,f=m.error,g=r[1],p=b(a),d=Object(o.a)(p,2),v=d[0].response,N=d[1],h=Object(n.useContext)(E),y=Object(o.a)(h,1)[0],k=Object(n.useState)(!1),C=Object(o.a)(k,2),L=C[0],w=C[1];Object(n.useEffect)((function(){g()}),[g]),Object(n.useEffect)((function(){v&&w(!0)}),[v]);return L?c.a.createElement(O.a,{to:"/"}):c.a.createElement("div",{className:"article-page"},c.a.createElement("div",{className:"banner"},!u&&i&&c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,i.article.title),c.a.createElement("div",{className:"article-meta"},c.a.createElement(s.b,{to:"/profiles/".concat(i.article.author.username)},c.a.createElement("img",{src:i.article.author.image,alt:""})),c.a.createElement("div",{className:"info"},c.a.createElement(s.b,{to:"/profiles/".concat(i.article.author.username)},i.article.author.username),c.a.createElement("span",{className:"date"},i.article.createdAt),c.a.createElement("div",null,!(!i||!y.isLoggedIn)&&y.currentUser.username===i.article.author.username&&c.a.createElement("span",null,c.a.createElement(s.b,{className:"btn btn-outline-secondary btn-sm",to:"/article/".concat(i.article.slug,"/edit")},c.a.createElement("i",{className:"ion-edit"}),"\xa0 Edit Article"),"\xa0",c.a.createElement("button",{className:"btn btn-outline-danger btn-sm",onClick:function(){N({method:"delete"})}},c.a.createElement("i",{className:"ion-trash-a"}),"\xa0 Delete Article"))))))),c.a.createElement("div",{className:"container page"},u&&c.a.createElement(S,null),f&&c.a.createElement(j,null),!u&&i&&c.a.createElement("div",{className:"row article-content"},c.a.createElement("div",{className:"col-xs-12"},c.a.createElement("div",null,c.a.createElement("p",null,i.article.body)),c.a.createElement(x,{tags:i.article.tagList})))))},C=function(e){var t=e.backendMessages,a=Object.keys(t).map((function(e){var a=t[e].join(" ");return"".concat(e," ").concat(a)}));return c.a.createElement("ul",{className:"error-messages"},a.map((function(e){return c.a.createElement("li",{key:e},e)})))},L=function(e){var t="/login"===e.location.pathname,a=t?"Sign In":"Sign Up",l=t?"/register":"/login",r=t?"Need an account?":"Have an account?",m=t?"/users/login":"/users",i=Object(n.useState)(""),u=Object(o.a)(i,2),f=u[0],g=u[1],p=Object(n.useState)(""),v=Object(o.a)(p,2),N=v[0],j=v[1],h=Object(n.useState)(""),y=Object(o.a)(h,2),S=y[0],x=y[1],k=Object(n.useState)(!1),L=Object(o.a)(k,2),w=L[0],I=L[1],U=b(m),P=Object(o.a)(U,2),T=P[0],A=T.response,F=T.isLoading,D=T.error,H=P[1],M=d("token"),R=Object(o.a)(M,2)[1],_=Object(n.useContext)(E),G=Object(o.a)(_,2)[1];return Object(n.useEffect)((function(){A&&(R(A.user.token),G({type:"SET_AUTHORIZED",payload:A.user}),I(!0))}),[A,R,G]),w?c.a.createElement(O.a,{to:"/"}):c.a.createElement("div",{className:"auth-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},c.a.createElement("h1",{className:"text-xs-center"},a),c.a.createElement("p",{className:"text-xs-center"},c.a.createElement(s.b,{to:l},r)),D&&c.a.createElement(C,{backendMessages:D.errors}),c.a.createElement("form",{onSubmit:function(e){var a=t?{email:f,password:N}:{email:f,password:N,username:S};e.preventDefault(),H({method:"POST",data:{user:a}})}},c.a.createElement("fieldset",null,!t&&c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",onChange:function(e){x(e.target.value)},value:S})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email",onChange:function(e){g(e.target.value)},value:f})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"password",className:"form-control form-control-lg",placeholder:"Password",onChange:function(e){j(e.target.value)},value:N})),c.a.createElement("button",{className:"btn btn-lg btn-primary pull-xs-right",type:"submit",disabled:F},a)))))))},w=function(e){var t=e.onSubmit,a=e.errors,l=e.initialValues,r=Object(n.useState)(""),s=Object(o.a)(r,2),m=s[0],i=s[1],u=Object(n.useState)(""),E=Object(o.a)(u,2),f=E[0],g=E[1],p=Object(n.useState)(""),d=Object(o.a)(p,2),b=d[0],v=d[1],N=Object(n.useState)(""),O=Object(o.a)(N,2),j=O[0],h=O[1];return Object(n.useEffect)((function(){l&&(i(l.title),v(l.description),g(l.body),h(l.tagList.join(" ")))}),[l]),c.a.createElement("div",{className:"editor-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-10 offset-md-1 col-xs-12"},a&&c.a.createElement(C,{backendMessages:a}),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:m,body:f,description:b,tagList:j})}},c.a.createElement("fieldset",null,c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Article title",value:m,onChange:function(e){i(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"What is this article about?",value:b,onChange:function(e){v(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("textarea",{type:"text",className:"form-control",rows:"8",placeholder:"Write your article",value:f,onChange:function(e){g(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter tags",value:j,onChange:function(e){h(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary pull-xs-right"},"Publish article"))))))))},I=function(){var e=b("/articles"),t=Object(o.a)(e,2),a=t[0],l=a.response,r=a.error,s=t[1],m=Object(n.useState)(!1),i=Object(o.a)(m,2),u=i[0],f=i[1],g=Object(n.useContext)(E),p=Object(o.a)(g,1)[0];return Object(n.useEffect)((function(){l&&f(!0)}),[l]),u?c.a.createElement(O.a,{to:"/article/".concat(l.article.slug)}):p.isLoggedIn?c.a.createElement(w,{onSubmit:function(e){s({method:"post",data:{article:e}})},errors:r&&r.errors||{},initialValues:{title:"",description:"",body:"",tagList:[]}}):c.a.createElement(O.a,{to:"/"})},U=function(e){var t=e.match,a=Object(O.g)(),l=t.params.slug,r="/articles/".concat(l),s=b(r),m=Object(o.a)(s,2),i=m[0].response,u=m[1],f=b(r),g=Object(o.a)(f,2),p=g[0],d=p.response,v=p.error,N=g[1],j=Object(n.useState)(null),h=Object(o.a)(j,2),y=h[0],S=h[1],x=Object(n.useContext)(E),k=Object(o.a)(x,1)[0],C=Object(n.useState)(!1),L=Object(o.a)(C,2),I=L[0],U=L[1],P=Object(n.useCallback)((function(){return!(!i||!k.isLoggedIn)&&k.currentUser.username===i.article.author.username}),[k,i]);return Object(n.useEffect)((function(){u()}),[u]),Object(n.useEffect)((function(){i&&S({title:i.article.title,description:i.article.description,body:i.article.body,tagList:i.article.tagList})}),[i]),Object(n.useEffect)((function(){d&&U(!0)}),[d]),Object(n.useEffect)((function(){i&&(P()||a.push("/"))}),[i,a,P]),I?c.a.createElement(O.a,{to:"/article/".concat(i.article.slug)}):!1===k.isLoggedIn?c.a.createElement(O.a,{to:"/"}):c.a.createElement(w,{onSubmit:function(e){N({method:"put",data:{article:e}})},errors:v&&v.errors||{},initialValues:y})},P=a(15),T=a.n(P),A=function(e){var t=e.isFavorited,a=e.favoritesCount,n=e.slug,l="/articles/".concat(n,"/favorite"),r=b(l),s=Object(o.a)(r,2),m=s[0].response,i=s[1],u=m?m.article.favorited:t,E=m?m.article.favoritesCount:a,f=T()({btn:!0,"btn-sm":!0,"btn-primary":u,"btn-outline-primary":!u});return c.a.createElement("button",{className:f,onClick:function(e){e.preventDefault(),i({method:u?"delete":"post"})}},c.a.createElement("i",{className:"ion-heart"}),c.a.createElement("span",null,"\xa0 ",E))},F=function(e){var t=e.articles;return c.a.createElement("div",null,t.map((function(e,t){return c.a.createElement("div",{className:"article-preview",key:t},c.a.createElement("div",{className:"article-meta"},c.a.createElement(s.b,{to:"/profiles/".concat(e.author.username)},c.a.createElement("img",{src:e.author.image,alt:""})),c.a.createElement("div",{className:"info"},c.a.createElement(s.b,{to:"/profiles/".concat(e.author.username),className:"author"},e.author.username),c.a.createElement("span",{className:"date"},e.createdAt)),c.a.createElement("div",{className:"pull-xs-right"},c.a.createElement(A,{isFavorited:e.favorited,favoritesCount:e.favoritesCount,slug:e.slug}))),c.a.createElement(s.b,{to:"/article/".concat(e.slug),className:"preview-link"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.description),c.a.createElement("span",null,"Read more..."),c.a.createElement(x,{tags:e.tagList})))})))},D=function(e){var t=e.tag,a=Object(n.useContext)(E),l=Object(o.a)(a,1)[0];return c.a.createElement("div",{className:"feed-toggle"},c.a.createElement("ul",{className:"nav nav-pills outline-active"},l.isLoggedIn&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{to:"/feed",className:"nav-link"},"Your Feed")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{to:"/",exact:!0,className:"nav-link"},"Global Feed")),t&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{to:"/tags/".concat(t),className:"nav-link"},"#".concat(t)))))},H=a(35),M=a(10),R=function(e){var t=Object(M.parse)(e),a=t.page?Number(t.page):1;return{currentPage:a,offset:10*a-10}},_=function(e){var t=e.page,a=e.currentPage,n=e.url,l=T()({"page-item":!0,active:a===t});return c.a.createElement("li",{className:l},c.a.createElement(s.b,{to:"".concat(n,"?page=").concat(t),className:"page-link"},t))},G=function(e){var t,a,n=e.total,l=e.limit,r=e.url,s=e.currentPage,o=Math.ceil(n/l),m=(t=1,a=o,Object(H.a)(Array(a).keys()).map((function(e){return e+t})));return o<=1?null:c.a.createElement("nav",null,c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",{className:"page-item"},1!==s&&c.a.createElement("a",{className:"page-link",href:"".concat(r,"?page=").concat(s-1),"aria-label":"Previous"},c.a.createElement("span",{"aria-hidden":"true"},"\xab"),c.a.createElement("span",{className:"sr-only"},"Previous"))),m.map((function(e){return c.a.createElement(_,{key:e,page:e,limit:l,url:r,currentPage:s})})).slice(s>5?s-6:0,s>5?s+5:10),s!==o&&c.a.createElement("a",{className:"page-link",href:"".concat(r,"?page=").concat(s+1),"aria-label":"Next"},c.a.createElement("span",{"aria-hidden":"true"},"\xbb"),c.a.createElement("span",{className:"sr-only"},"Next"))))},Z=function(){var e=b("/tags"),t=Object(o.a)(e,2),a=t[0],l=a.response,r=a.isLoading,m=a.error,i=t[1];return Object(n.useEffect)((function(){i()}),[i]),r||!l?c.a.createElement(S,null):m?c.a.createElement(j,null):c.a.createElement("div",{className:"sidebar"},c.a.createElement("p",null,"Popular tags"),c.a.createElement("div",{className:"tag-list"},l.tags.map((function(e){return c.a.createElement(s.b,{to:"/tags/".concat(e),className:"tag-default tag-pill",key:e},e)}))))},V=function(e){var t=e.location,a=e.match,l=R(t.search),r=l.currentPage,s=l.offset,m=Object(M.stringify)({limit:10,offset:s}),i=a.url,u="/articles?".concat(m),E=b(u),f=Object(o.a)(E,2),g=f[0],p=g.response,d=g.isLoading,v=g.error,N=f[1];return Object(n.useEffect)((function(){N()}),[N,r]),c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null," Medium Clone"),c.a.createElement("p",null,"A place to share knowledge"))),c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(D,null),d&&c.a.createElement(S,null),v&&c.a.createElement(j,null),!d&&p&&c.a.createElement(n.Fragment,null,c.a.createElement(F,{articles:p.articles}),c.a.createElement(G,{total:p.articlesCount,limit:10,url:i,currentPage:r}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(Z,null)))))},J=function(){var e=d("token"),t=Object(o.a)(e,2)[1],a=Object(n.useContext)(E),l=Object(o.a)(a,2),r=l[0],s=l[1],i=b("/user"),u=Object(o.a)(i,2),f=u[0],g=f.response,p=f.error,v=u[1],N=Object(n.useState)(""),j=Object(o.a)(N,2),h=j[0],y=j[1],S=Object(n.useState)(""),x=Object(o.a)(S,2),k=x[0],L=x[1],w=Object(n.useState)(""),I=Object(o.a)(w,2),U=I[0],P=I[1],T=Object(n.useState)(""),A=Object(o.a)(T,2),F=A[0],D=A[1],H=Object(n.useState)(""),M=Object(o.a)(H,2),R=M[0],_=M[1],G=r.currentUser,Z=Object(n.useState)(!1),V=Object(o.a)(Z,2),J=V[0],W=V[1];return Object(n.useEffect)((function(){G&&(y(G.image||""),L(G.username),P(G.bio||""),D(G.email))}),[G]),Object(n.useEffect)((function(){g&&s({type:"SET_AUTHORIZED",payload:g.user})}),[g,s]),J?c.a.createElement(O.a,{to:"/"}):c.a.createElement("div",{className:"settings-page"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},c.a.createElement("h1",{className:"text-xs-center"},"Your settings"),p&&c.a.createElement(C,{backendMessages:p.errors}),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v({method:"put",data:{user:Object(m.a)(Object(m.a)({},G),{},{image:h,username:k,bio:U,email:F,password:R})}})}},c.a.createElement("fieldset",null,c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",placeholder:"Image URL",className:"form-control form-control-lg",value:h,onChange:function(e){y(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",placeholder:"Username",className:"form-control form-control-lg",value:k,onChange:function(e){L(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("textarea",{placeholder:"Short biography",className:"form-control form-control-lg",rows:"8",value:U,onChange:function(e){P(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"text",placeholder:"Email",className:"form-control form-control-lg",value:F,onChange:function(e){D(e.target.value)}})),c.a.createElement("fieldset",{className:"form-group"},c.a.createElement("input",{type:"password",placeholder:"Password",className:"form-control form-control-lg",value:R,onChange:function(e){_(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary pull-xs-right"},"Update settings"))),c.a.createElement("hr",null),c.a.createElement("button",{onClick:function(e){e.preventDefault(),t(""),s({type:"LOGOUT"}),W(!0)},className:"btn btn-lg btn-danger"},"Or click here to logout")))))},W=function(e){var t=e.location,a=e.match,l=R(t.search),r=l.currentPage,s=l.offset,m=a.params.slug,i=Object(M.stringify)({limit:10,offset:s,tag:m}),u=a.url,E="/articles?".concat(i),f=b(E),g=Object(o.a)(f,2),p=g[0],d=p.response,v=p.isLoading,N=p.error,O=g[1];return Object(n.useEffect)((function(){O()}),[O,r,m]),c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null," Medium Clone"),c.a.createElement("p",null,"A place to share knowledge"))),c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(D,{tag:m}),v&&c.a.createElement(S,null),N&&c.a.createElement(j,null),!v&&d&&c.a.createElement(n.Fragment,null,c.a.createElement(F,{articles:d.articles}),c.a.createElement(G,{total:d.articlesCount,limit:10,url:u,currentPage:r}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(Z,null)))))},Y=function(e){var t=e.location,a=e.isFavorites,l=e.username,r=e.url,s=R(t.search),m=s.offset,i=s.currentPage,u="/articles/?".concat(Object(M.stringify)(a?{limit:10,offset:m,favorited:l}:{limit:10,offset:m,author:l})),E=b(u),f=Object(o.a)(E,2),g=f[0],p=g.response,d=g.isLoading,v=g.error,N=f[1];return Object(n.useEffect)((function(){N()}),[N,a,l]),c.a.createElement("div",null,d&&c.a.createElement(S,null),v&&c.a.createElement(j,null),!d&&p&&c.a.createElement(n.Fragment,null,c.a.createElement(F,{articles:p.articles}),c.a.createElement(G,{total:p.articlesCount,url:r,limit:10,currentPage:i})))},z=function(e){var t=e.location,a=e.match.params.slug,l=t.pathname,r=t.pathname.includes("favorites"),m="/profiles/".concat(a),i=b(m),u=Object(o.a)(i,2),E=u[0].response,f=u[1];return Object(n.useEffect)((function(){f()}),[f,m]),E?c.a.createElement("div",{className:"profile-page"},c.a.createElement("div",{className:"user-info"},c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-md-10 offset-md-1"},c.a.createElement("img",{className:"user-img",src:E.profile.image,alt:""}),c.a.createElement("h4",null,E.profile.username),c.a.createElement("p",null,E.profile.bio))))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-md-10 offset-md-1"},c.a.createElement("div",{className:"articles-toggle"},c.a.createElement("ul",{className:"nav nav-pills outline-active"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{to:"/profiles/".concat(a),className:"nav-link",exact:!0},"My posts")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.c,{to:"/profiles/".concat(a,"/favorites"),className:"nav-link"},"Favorites posts")))),c.a.createElement(Y,{username:E.profile.username,location:t,isFavorites:r,url:l}))))):null},B=function(e){var t=e.location,a=e.match,l=R(t.search),r=l.currentPage,s=l.offset,m=Object(M.stringify)({limit:10,offset:s}),i=a.url,u="/articles/feed?".concat(m),E=b(u),f=Object(o.a)(E,2),g=f[0],p=g.response,d=g.isLoading,v=g.error,N=f[1];return Object(n.useEffect)((function(){N()}),[N,r]),c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"banner"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null," Medium Clone"),c.a.createElement("p",null,"A place to share knowledge"))),c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(D,null),d&&c.a.createElement(S,null),v&&c.a.createElement(j,null),!d&&p&&c.a.createElement(n.Fragment,null,c.a.createElement(F,{articles:p.articles}),c.a.createElement(G,{total:p.articlesCount,limit:10,url:i,currentPage:r}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(Z,null)))))},q=function(){return c.a.createElement(O.d,null,c.a.createElement(O.b,{path:"/",component:V,exact:!0}),c.a.createElement(O.b,{path:"/profiles/:slug",component:z}),c.a.createElement(O.b,{path:"/profiles/:slug/favorites",component:z}),c.a.createElement(O.b,{path:"/article/:slug/edit",component:U}),c.a.createElement(O.b,{path:"/article/:slug",component:k}),c.a.createElement(O.b,{path:"/articles/new",component:I}),c.a.createElement(O.b,{path:"/feed",component:B}),c.a.createElement(O.b,{path:"/tags/:slug",component:W}),c.a.createElement(O.b,{path:"/login",component:L}),c.a.createElement(O.b,{path:"/register",component:L}),c.a.createElement(O.b,{path:"/settings",component:J}))},K=function(){return c.a.createElement(f,null,c.a.createElement(v,null,c.a.createElement(s.a,null,c.a.createElement(N,null),c.a.createElement(q,null))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(K,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d2ed22fe.chunk.js.map