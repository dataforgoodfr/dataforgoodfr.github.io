"use strict";(self.webpackChunkdata_for_good=self.webpackChunkdata_for_good||[]).push([[8610],{92053:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(67294),l=a(86010),n=a(12859),m=a(39960),c=a(44996),s="blogPostTitle_bv-i",o="blogPostDate_gBjs",i=["January","February","March","April","May","June","July","August","September","October","November","December"],g=function(e){var t,a=e.tagLabel,l=e.tagPermalink;return t="saison"===a.toLowerCase().slice(0,6)||"monthly"===a.toLowerCase().slice(0,7)||"hors"===a.toLowerCase().slice(0,4)?"badge-season":"Actif"===a?"badge-active":"",r.createElement("span",{className:"badge badge--primary "+t},r.createElement(m.Z,{key:l,to:l},a))},d=function(e){var t=e.tagLabel.slice(3),a=(0,c.Z)("img/sdgs/E-WEB-Goal-"+t+".png");return r.createElement("img",{src:a,className:"sdg-icon"})};var u=function(e){e.children;var t=e.frontMatter,a=e.metadata,u=e.truncated,E=e.isBlogPostPage,v=void 0!==E&&E,p=a.date,h=a.permalink,b=a.tags,f=a.readingTime,_=t.author,N=t.title,w=t.image,k=t.keywords,y=t.description,Z=t.header_image_url;Z=(0,c.Z)(Z);var L,P,T,C,M,I=t.author_url||t.authorURL,x=(t.author_title||t.authorTitle,t.author_image_url||t.authorImageURL),B=(0,c.Z)(w,{absolute:!0}),A="/blog"===h.slice(0,5);return r.createElement("div",{className:"card"},r.createElement("div",{className:"card__image"},r.createElement("img",{src:Z,alt:"Image alt text",title:"Logo Title Text 1"})),r.createElement("div",{className:"card__body"},r.createElement(n.Z,null,k&&k.length&&r.createElement("meta",{name:"keywords",content:k.join(",")}),w&&r.createElement("meta",{property:"og:image",content:B}),w&&r.createElement("meta",{name:"twitter:image",content:B}),w&&r.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N})),r.createElement("article",null,(L=v?"h1":"h2",P=p.substring(0,10).split("-"),T=P[0],C=i[parseInt(P[1],10)-1],M=parseInt(P[2],10),r.createElement("header",null,r.createElement(L,{style:{fontSize:16},className:(0,l.Z)("margin-bottom--sm",s)},v?N:r.createElement(m.Z,{to:h},N)),r.createElement("p",{style:{fontSize:14,lineHeight:1.2}},y),r.createElement("div",{className:"avatar margin-vert--md"},x&&r.createElement("a",{className:"avatar__photo-link avatar__photo",href:I,target:"_blank",rel:"noreferrer noopener"},r.createElement("img",{src:x,alt:_})),A&&r.createElement("div",{className:"avatar__intro"},_&&r.createElement(r.Fragment,null,r.createElement("time",{dateTime:p,className:o},C," ",M,", ",T," ",f&&r.createElement(r.Fragment,null," \xb7 ",Math.ceil(f)," min read"))))))),(b.length>0||u)&&r.createElement("footer",{className:"margin-vert--sm"},r.createElement("div",{className:"row"},b.length>0&&r.createElement("div",{className:"col"},b.map((function(e){var t=e.label,a=e.permalink;return"sdg"!==t.slice(0,3)&&r.createElement(g,{tagLabel:t,tagPermalink:a})})))),t.sdgs&&r.createElement("div",{className:"row sdgs-wrapper"},t.sdgs.sort().map((function(e){return r.createElement(d,{tagLabel:e})})))))))}},50642:function(e,t,a){a.r(t);var r=a(67294),l=a(77019),n=a(39960),m=a(92053);t.default=function(e){var t=e.metadata,a=e.items,c=(e.sidebar,t.allTagsPath),s=t.name,o=t.count;return r.createElement(l.Z,{title:'Posts tagged "'+s+'"',description:'Blog | Tagged "'+s+'"',wrapperClassName:"blog-wrapper"},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--12"},r.createElement("h1",null,o," ",function(e,t){return e>1?t+"s":t}(o,"r\xe9sultat"),' avec le tag "',s,'"'),r.createElement(n.Z,{href:c},"Explorer tous les tags"),r.createElement("div",{className:"margin-vert--xl"},r.createElement("div",{className:"row"},a.map((function(e){var t=e.content;return r.createElement("div",{className:"col col--4 row-preview"},r.createElement(m.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null)))}))))))))}}}]);