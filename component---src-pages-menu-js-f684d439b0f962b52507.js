(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return i});t(137),t(138),t(214),t(50);var n=t(0),l=t.n(n),r=t(198),c=t(200),s={DINNER:"dinner",LUNCH:"lunch",BRUNCH:"brunch",COCKTAILS:"cocktails"},m={STARTERS:"Starters",VEGGIES:"Veggies",STARCHES:"Starches",PROTEINS:"Proteins",DESSERTS:"Desserts",SANDWICHES:"Sandwiches",SIDES:"Sides",MAINS:"Mains",ADD_ONS:"Add-ons"};a.default=function(e){var a=Object(n.useState)(s.LUNCH),t=a[0],i=a[1],o=e.data,d=o.allGoogleSheetDinnerRow.nodes,u=o.allGoogleSheetLunchRow.nodes,f=o.allGoogleSheetBrunchRow.nodes,E=o.allGoogleSheetCocktailsRow.nodes;return l.a.createElement(c.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(r.a,{title:"Menu | Scuffletown Garden"}),l.a.createElement("div",{className:"w-100 w-lg-50 mx-auto d-flex justify-content-around py-5 flex-wrap"},l.a.createElement("button",{className:"menu-btn pt-3 "+(t===s.LUNCH?"selected-menu":""),onClick:function(){return i(s.LUNCH)}},"Lunch"),l.a.createElement("button",{className:"menu-btn pt-3 "+(t===s.DINNER?"selected-menu":""),onClick:function(){return i(s.DINNER)}},"Dinner"),l.a.createElement("button",{className:"menu-btn pt-3 "+(t===s.BRUNCH?"selected-menu":""),onClick:function(){return i(s.BRUNCH)}},"Brunch"),l.a.createElement("button",{className:"menu-btn pt-3 "+(t===s.COCKTAILS?"selected-menu":""),onClick:function(){return i(s.COCKTAILS)}},"Cocktails")),l.a.createElement("div",{id:"menu-items"},t===s.DINNER&&l.a.createElement("div",null,l.a.createElement("div",{className:"mb-5",id:"dinner-starters"},l.a.createElement("h3",{className:"brown"},"Starters"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},d.filter(function(e){return e.category===m.STARTERS}).map(function(e,a){return l.a.createElement("div",{key:"dinner-starter-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $"+e.price)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}))),l.a.createElement("div",{className:"mb-5",id:"dinner-veggies"},l.a.createElement("h3",{className:"brown"},"Veggies"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},d.filter(function(e){return e.category===m.VEGGIES}).map(function(e,a){return l.a.createElement("div",{key:"dinner-veg-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $"+e.price)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}))),l.a.createElement("div",{className:"mb-5",id:"dinner-starches"},l.a.createElement("h3",{className:"brown"},"Starches"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},d.filter(function(e){return e.category===m.STARCHES}).map(function(e,a){return l.a.createElement("div",{key:"dinner-starch-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $"+e.price)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}))),l.a.createElement("div",{className:"mb-5",id:"dinner-proteins"},l.a.createElement("h3",{className:"brown"},"Proteins"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},d.filter(function(e){return e.category===m.PROTEINS}).map(function(e,a){return l.a.createElement("div",{key:"dinner-protein-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.price?e.name+" — $"+e.price:e.name+" — MP")),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}))),l.a.createElement("div",{className:"mb-5",id:"dinner-desserts"},l.a.createElement("h3",{className:"brown"},"Desserts"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},d.find(function(e){return e.category===m.DESSERTS})?d.filter(function(e){return e.category===m.DESSERTS}).map(function(e,a){return l.a.createElement("div",{key:"dinner-desserts-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $"+e.price)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}):l.a.createElement("div",{className:"w-100 mb-3 darkGreen"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,"Ask about our rotating selections")))))),t===s.LUNCH&&l.a.createElement("div",null,l.a.createElement("div",{className:"mb-5",id:"lunch-starters"},l.a.createElement("h3",{className:"brown"},"Starters"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},u.filter(function(e){return e.category===m.STARTERS}).map(function(e,a){return l.a.createElement("div",{key:"lunch-starter-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $"+e.price)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}))),l.a.createElement("div",{className:"mb-5",id:"lunch-sammies"},l.a.createElement("h3",{className:"brown"},"Sandwiches"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},u.filter(function(e){return e.category===m.SANDWICHES}).map(function(e,a){return l.a.createElement("div",{key:"lunch-sammie-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $"+e.price)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}))),l.a.createElement("div",{className:"mb-5",id:"lunch-sides"},l.a.createElement("h3",{className:"brown"},"Sides"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},u.filter(function(e){return e.category===m.SIDES}).map(function(e,a){return l.a.createElement("div",{key:"lunch-sides-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}))),l.a.createElement("div",{className:"mb-5",id:"lunch-desserts"},l.a.createElement("h3",{className:"brown"},"Desserts"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},u.find(function(e){return e.category===m.DESSERTS})?u.filter(function(e){return e.category===m.DESSERTS}).map(function(e,a){return l.a.createElement("div",{key:"lunch-desserts-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $"+e.price)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}):l.a.createElement("div",{className:"w-100 mb-3 darkGreen"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,"Ask about our rotating selections")))))),t===s.BRUNCH&&l.a.createElement("div",null,l.a.createElement("div",{className:"mb-5",id:"brunch-sammies"},l.a.createElement("h3",{className:"brown"},"Sandwiches"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},f.filter(function(e){return e.category===m.SANDWICHES}).map(function(e,a){return l.a.createElement("div",{key:"brunch-sammie-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $"+e.price)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}))),l.a.createElement("div",{className:"mb-5",id:"brunch-mains"},l.a.createElement("h3",{className:"brown"},"Mains"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},f.filter(function(e){return e.category===m.MAINS}).map(function(e,a){return l.a.createElement("div",{key:"brunch-sammie-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $"+e.price)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}))),l.a.createElement("div",{className:"mb-5",id:"brunch-addons"},l.a.createElement("h3",{className:"brown"},"Add-ons"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},f.filter(function(e){return e.category===m.ADD_ONS}).map(function(e,a){return l.a.createElement("div",{key:"brunch-addons-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $4")),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}))),l.a.createElement("div",{className:"mb-5",id:"brunch-desserts"},l.a.createElement("h3",{className:"brown"},"Desserts"),l.a.createElement("div",{className:"d-flex flex-wrap mx-auto"},f.find(function(e){return e.category===m.DESSERTS})?f.filter(function(e){return e.category===m.DESSERTS}).map(function(e,a){return l.a.createElement("div",{key:"brunch-desserts-"+a,className:"w-100 w-md-50 mb-3 darkGreen pr-md-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,e.name+" — $"+e.price)),l.a.createElement("div",null,e.description),l.a.createElement("small",null,e.code))}):l.a.createElement("div",{className:"w-100 mb-3 darkGreen"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("h4",null,"Ask about our rotating selections")))))),t===s.COCKTAILS&&l.a.createElement("div",{className:"d-flex flex-column flex-md-row w-100 mb-3 darkGreen"},l.a.createElement("div",{className:"w-100"},E.filter(function(e,a){return a<=18}).map(function(e,a){return l.a.createElement("div",{className:"d-flex mb-3"},l.a.createElement("div",null,l.a.createElement("h4",{className:"brown mr-3"},(a+=1)+".")),l.a.createElement("div",null,l.a.createElement("h4",null,e.name+" — $"+e.price),l.a.createElement("span",null,e.description)))})),l.a.createElement("div",{className:"w-100"},E.filter(function(e,a){return a>18}).map(function(e,a){return l.a.createElement("div",{className:"d-flex mb-3"},l.a.createElement("div",null,l.a.createElement("h4",{className:"brown mr-3"},(a+=18)+".")),l.a.createElement("div",null,l.a.createElement("h4",null,e.name+" — $"+e.price),l.a.createElement("span",null,e.description)))}),l.a.createElement("div",{className:"d-flex mb-3"},l.a.createElement("div",null,l.a.createElement("h4",{className:"brown mr-3"},"36.")),l.a.createElement("div",null,l.a.createElement("h4",null,"Bartender's Choice"))),l.a.createElement("div",{className:"d-flex mb-3"},l.a.createElement("div",null,l.a.createElement("h4",{className:"brown mr-3"},"0.")),l.a.createElement("div",null,l.a.createElement("h4",null,"Bartender's Choice"))),l.a.createElement("div",{className:"d-flex mb-3"},l.a.createElement("div",null,l.a.createElement("h4",{className:"brown mr-3"},"00.")),l.a.createElement("div",null,l.a.createElement("h4",null,"Bartender's Choice")))))),[s.LUNCH,s.DINNER].includes(t)&&l.a.createElement("div",{className:"d-flex flex-wrap justify-content-around mb-5",id:"codes"},l.a.createElement("div",{className:"mr-3"},"GF: Gluten Free"),l.a.createElement("div",{className:"mr-3"},"V: Vegetarian"),l.a.createElement("div",{className:"mr-3"},"VV: Vegan"),l.a.createElement("div",{className:"mr-3"},"VVO: Vegan Option"),l.a.createElement("div",null,"P: Pesco-vegetarian"))))};var i="3439654259"},193:function(e,a,t){var n;e.exports=(n=t(196))&&n.default||n},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Scuffletown Garden"}}}}},195:function(e){e.exports={data:{mainLogo:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAh0lEQVQI122Puw7CMAxFw4DSinZiZGJgiYVYQDztARR35f+/hmNaoQ5YOrnOvXakJHFbQJ9mJa4p/LG3L/PsX5Vqv4E1nFkS9IGe4AJH2OPF/QpPGFg8oLviep+8NzOvUvUmVTeJIxe3LUZH2BK2UkMtT31D1qCr+AkP5sjY6ca79igZM27LD0nCJbsYYUL0AAAAAElFTkSuQmCC",aspectRatio:6.086167800453515,src:"/scuffletowngarden/static/72f5e00e2770d6d28babd72d64dc8218/fdbb0/logo-green-horizontal.png",srcSet:"/scuffletowngarden/static/72f5e00e2770d6d28babd72d64dc8218/e22c9/logo-green-horizontal.png 75w,\n/scuffletowngarden/static/72f5e00e2770d6d28babd72d64dc8218/d3809/logo-green-horizontal.png 150w,\n/scuffletowngarden/static/72f5e00e2770d6d28babd72d64dc8218/fdbb0/logo-green-horizontal.png 300w,\n/scuffletowngarden/static/72f5e00e2770d6d28babd72d64dc8218/b5207/logo-green-horizontal.png 450w,\n/scuffletowngarden/static/72f5e00e2770d6d28babd72d64dc8218/59139/logo-green-horizontal.png 600w,\n/scuffletowngarden/static/72f5e00e2770d6d28babd72d64dc8218/d7238/logo-green-horizontal.png 2684w",sizes:"(max-width: 300px) 100vw, 300px"}}},logoBlack:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA4klEQVQY002Qy0qDMRBG89+0dWF3ioj5QgJFiyhIFQRrEaW0RXDppiqU0vd/hJ5Jozhw+DKXTCbjHBa9enCYFKrog0Mb6JIPVVaFtmB+DQfk2uTVlNoKv3O/RuCegKI0oPGG8yQqTIg/wwJekzRFxzDP9QpvsIIfWDPIJ3pnzXrwDi80OkWf0CE6ype8btBbg0vTrNI5eoFv8Uu4ghOGOXZx/4WHtJ/omuIPdAmotuS/ufhF41mZ9pEHz0oTVH20T/7vx9bU9nOUv+8tafuT7a4m1/GyPdqWfAN12W3l/hl1bgdrYy7DALZhLQAAAABJRU5ErkJggg==",aspectRatio:4.095022624434389,src:"/scuffletowngarden/static/619a2d817371c5375331a7035ae902b2/fdbb0/logo-black.png",srcSet:"/scuffletowngarden/static/619a2d817371c5375331a7035ae902b2/e22c9/logo-black.png 75w,\n/scuffletowngarden/static/619a2d817371c5375331a7035ae902b2/d3809/logo-black.png 150w,\n/scuffletowngarden/static/619a2d817371c5375331a7035ae902b2/fdbb0/logo-black.png 300w,\n/scuffletowngarden/static/619a2d817371c5375331a7035ae902b2/b5207/logo-black.png 450w,\n/scuffletowngarden/static/619a2d817371c5375331a7035ae902b2/59139/logo-black.png 600w,\n/scuffletowngarden/static/619a2d817371c5375331a7035ae902b2/5d1d9/logo-black.png 1810w",sizes:"(max-width: 300px) 100vw, 300px"}}},secondaryOffWhite:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAYAAACqhkzFAAAACXBIWXMAAC4jAAAuIwF4pT92AAADR0lEQVRIx5VWS2sUQRDe2dlFV9GgKMoKEl9IPJgcVIQQQdT4OBjFSwQ1GvVgiKBIYiAKCRgUQwhoFEQRNHqJiF48ePIXKIJCDeSgCKIyK4gzPjAx7Vcz1bs9szNGFz66pqv666rq6urNZBJ+vutkvBIFsueS5ZUc2w9hBfqSE+Cffqax5zrZBL2t9X8lDYgMz3iheLgS8mmgw3epJoyAoNcROOmE5XBdysvcFmAU2AG0AmMIf4+ZmmnDLXvoUhHf9zEWDP0phR/GY/KdTQ07IHN17qgTRN8wt1fIZ4S5pVkYHwKPZI2lQ6/6gSQrRo1q6iN78QnGy7UOsmWEWqzIlOqhLom1WLAbueqF3GDqsTjnyWFNmz/xxKhFOqhDxvzcpM0TS0eTcC6AnK49HM5+eDMOTwawiDEMHAGa2IbLSq/14mHH8+CFBP3ASRA/wII1kBeA/CjnOC2qaP2VnByI92H3McgnjAPYAM9vYe4c5IWwacJ4B0RnsVm+ihTGthAOKzWloLxuXLF8xWt6hW8HeK7UBNv1l+86CL1SlJRzcgF4AayQNNhGFOvYI4x9wM7Qltp1cUcOx0wscAmKmZUSCgr6sfr1nj1aBfkywv2sI4LcKmvtpBzOB65F80tdv/23KHIaFZsDavIDf9fL9z1eFyklL7hypIv6CYxfY1wmhEsR+uJoBdB5PnHRt2PtYd3qKmHr6i85XUp952v3DoZFw9MGqcFasVsiFVAP9JkcmtCSXebA+CW8GgHqRMep2AxsAwZB8GzSf8Obcr5rsfGQPoPAQ6MPFiDXAJsQFt+KedX3nXqwQacf3HPqhQOrYTuBcUjSkY136ZGwRVGjNNYeoAX6ZowX4fVA7O1p+fllPEgR1syOvBMSXhvkbpnj8mnG7h3cWIHtOj0gymJE56HbGOv8cMNCuY2bdxm5uAnl1pTXMG84MQgciqUkkkNLxhp4dRfEbXouVjaLgCtYd0Y8zsLejrSx+LMpBnzVbki4fEhPsQGf8lXIu8TOSnxSzbc42jwJ3cXZyKWi1A88T1/5lhwXslzFEUp7pMiUbSN3XE7dIWi9aR+cQfrLR+KtSWzcgIS2/x9/Saj8EKEKuFRsaftWuQckkP0BzW/YoJuuNs4AAAAASUVORK5CYII=",aspectRatio:.6926229508196722,src:"/scuffletowngarden/static/2479b068879c3c10ce52a6faf7948164/fdbb0/secondary-logo-offwhite.png",srcSet:"/scuffletowngarden/static/2479b068879c3c10ce52a6faf7948164/e22c9/secondary-logo-offwhite.png 75w,\n/scuffletowngarden/static/2479b068879c3c10ce52a6faf7948164/d3809/secondary-logo-offwhite.png 150w,\n/scuffletowngarden/static/2479b068879c3c10ce52a6faf7948164/fdbb0/secondary-logo-offwhite.png 300w,\n/scuffletowngarden/static/2479b068879c3c10ce52a6faf7948164/b5207/secondary-logo-offwhite.png 450w,\n/scuffletowngarden/static/2479b068879c3c10ce52a6faf7948164/59139/secondary-logo-offwhite.png 600w,\n/scuffletowngarden/static/2479b068879c3c10ce52a6faf7948164/724c7/secondary-logo-offwhite.png 676w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},196:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),l=t.n(n),r=t(92);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},198:function(e,a,t){"use strict";var n=t(199),l=t(0),r=t.n(l),c=t(202),s=t.n(c);function m(e){var a=e.description,t=e.lang,l=e.meta,c=e.title,m=n.data.site,i=a||m.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+m.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:c},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:i}].concat(l)})}m.defaultProps={lang:"en",meta:[],description:""},a.a=m},199:function(e){e.exports={data:{site:{siteMetadata:{title:"Scuffletown Garden",description:"",author:"Cezar Carvalhaes"}}}}},200:function(e,a,t){"use strict";var n=t(194),l=t(0),r=t.n(l),c=t(195),s=t(66),m=t.n(s);t(193),t(9).default.enqueue,r.a.createContext({});var i=t(197),o=t.n(i),d=t(22),u=function(e){return r.a.createElement("svg",{className:"d-block my-auto "+e.additionalClasses,style:{width:"1em"},role:"img",viewBox:"0 0 448 512"},r.a.createElement("path",{fill:"currentColor",d:"M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"}))},f=function(){return r.a.createElement("svg",{className:"d-block my-auto mx-auto",style:{width:"1em"},role:"img",viewBox:"0 0 448 512"},r.a.createElement("path",{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}))},E=function(){return r.a.createElement("svg",{className:"d-block my-auto mx-auto",style:{width:"1em"},role:"img",viewBox:"0 0 448 512"},r.a.createElement("path",{fill:"currentColor",d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}))};var w=function(e){var a=Object(l.useState)(!1),t=a[0],n=a[1],s=Object(l.useState)(""),i=s[0],w=s[1],g=c.data,v=function(){t?(n(!1),w("slide-out")):(n(!0),w("slide-in"))};return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-dark "+i,id:"mobile-menu"},r.a.createElement("div",{className:"row align-items-center pt-3",id:"mobile-header"},r.a.createElement("div",{className:"col home pl-3"},r.a.createElement(m.a,{to:"/"},r.a.createElement(o.a,{className:"w-25",fluid:g.secondaryOffWhite.childImageSharp.fluid}))),r.a.createElement("div",{className:"col text-right x closer",onClick:function(){return v()}},r.a.createElement("button",{type:"button",className:"close offwhite","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"×")))),r.a.createElement("div",{className:"my-auto d-flex flex-column justify-content-between",style:{height:"90%"}},r.a.createElement("div",{className:"pt-5 pl-3"},r.a.createElement("ul",{className:"navbar-nav mr-auto d-lg-none offwhite",id:"main-mobile-nav"},r.a.createElement(m.a,{to:"/menu",onClick:v},"Menu"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"resy",onClick:v,href:"https://resy.com/cities/ric/scuffletown-garden-restaurant-bar"},"Reservations"),r.a.createElement("button",{className:"btn btn-link",onClick:function(){Object(d.navigate)("/#contact"),v()}},"Contact"))),r.a.createElement("div",{className:"row text-center align-items-center"},r.a.createElement("div",{className:"col mobile-icons"},r.a.createElement("ul",{className:"d-lg-none list-inline justify-content-center",style:{fontSize:"2em"}},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.facebook.com/scuffletowngarden/",target:"_blank",rel:"noopener noreferrer",className:"link-white","aria-label":"facebook"},r.a.createElement(u,{additionalClasses:"ml-auto mr-2"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.instagram.com/scuffletowngarden/",target:"_blank",rel:"noopener noreferrer",className:"link-white","aria-label":"instagram"},r.a.createElement(f,null)))))))),r.a.createElement("nav",{className:"fixed-top bg-offwhite shadow p-3 w-100",id:"nav"},r.a.createElement("div",{className:"d-flex flex-row color-black d-lg-none w-100 align-items-center"},r.a.createElement("div",{className:"w-100"},r.a.createElement(o.a,{fluid:g.logoBlack.childImageSharp.fluid})),r.a.createElement("div",{className:"d-flex justify-content-end w-50"},r.a.createElement("button",{style:{background:"none",border:"none",fontSize:"1.5em"},"aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return v()}},r.a.createElement(E,null)))),r.a.createElement("div",{className:"d-none d-lg-flex flex-row justify-content-between w-100 px-3"},r.a.createElement("div",{className:"d-flex flex-row w-100 align-items-center"},r.a.createElement(m.a,{className:"nav-link ml-3",to:"/menu"},"Menu"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"nav-link ml-3","aria-label":"resy",href:"https://resy.com/cities/ric/scuffletown-garden-restaurant-bar"},"Reservations")),r.a.createElement("div",{id:"logo",className:"w-100"},r.a.createElement(m.a,{to:"/"},r.a.createElement(o.a,{fluid:g.mainLogo.childImageSharp.fluid}))),r.a.createElement("div",{className:"d-flex flex-row w-100 justify-content-end align-items-center"},r.a.createElement("button",{className:"nav-link ml-3 btn btn-link",onClick:function(){Object(d.navigate)("/#contact")}},"Contact")))))},g=function(e){return r.a.createElement("footer",{className:"portal-footer"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"d-flex mx-auto justify-content-center mt-3"},r.a.createElement("div",{className:"mr-3",style:{fontSize:"2em"}},r.a.createElement("a",{className:"link-green",target:"_blank",rel:"noopener noreferrer","aria-label":"facebook",href:"https://www.facebook.com/scuffletowngarden/"},r.a.createElement(u,null))),r.a.createElement("div",{className:"",style:{fontSize:"2em"}},r.a.createElement("a",{href:"https://www.instagram.com/scuffletowngarden/",target:"_blank",rel:"noopener noreferrer",className:"link-green","aria-label":"instagram"},r.a.createElement(f,null)))),r.a.createElement("div",{className:"text-center my-3 darkGreen"},"© ",(new Date).getFullYear()," Scuffletown Garden. All Rights Reserved")))};t(201),a.a=function(e){var a=e.children,t=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{siteTitle:t.site.siteMetadata.title}),r.a.createElement("div",{className:"layout-container"},r.a.createElement("main",null,a)),r.a.createElement(g,null))}},214:function(e,a,t){"use strict";var n=t(1),l=t(33)(5),r=!0;"find"in[]&&Array(1).find(function(){r=!1}),n(n.P+n.F*r,"Array",{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),t(95)("find")}}]);
//# sourceMappingURL=component---src-pages-menu-js-f684d439b0f962b52507.js.map