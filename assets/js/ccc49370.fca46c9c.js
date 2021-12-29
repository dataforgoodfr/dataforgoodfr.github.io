"use strict";(self.webpackChunkdata_for_good=self.webpackChunkdata_for_good||[]).push([[103],{5002:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7462),l=a(3366),r=a(7294),i=a(3616),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function s(e){var t=e.toc,a=e.className,s=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,g=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,v=void 0===d?void 0:d,u=e.minHeadingLevel,E=e.maxHeadingLevel,p=(0,l.Z)(e,m),_=(0,i.LU)(),N=null!=u?u:_.tableOfContents.minHeadingLevel,b=null!=E?E:_.tableOfContents.maxHeadingLevel,h=(0,i.DA)({toc:t,minHeadingLevel:N,maxHeadingLevel:b}),f=(0,r.useMemo)((function(){if(g&&v)return{linkClassName:g,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:b}}),[g,v,N,b]);return(0,i.Si)(f),r.createElement(o,(0,n.Z)({toc:h,className:s,linkClassName:g},p))}},1575:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),m=a(5002),o="tableOfContents_vrFS",s=["className"];var c=function(e){var t=e.className,a=(0,l.Z)(e,s);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},r.createElement(m.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3061:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var n=a(7294),l=a(7019),r=a(6010),i=a(3905),m=a(2859),o=a(9960),s=a(1914),c=a(4996),g="blogPostTitle_RC3s",d="blogPostDate_IAgm",v=["January","February","March","April","May","June","July","August","September","October","November","December"];var u=function(e){var t,a,l,u,E,p=e.children,_=e.frontMatter,N=e.metadata,b=e.truncated,h=e.isBlogPostPage,f=void 0!==h&&h,k=N.date,Z=N.permalink,C=N.tags,w=N.readingTime,L=_.author,I=_.title,x=_.image,y=_.keywords,A=_.description,H=_.author_url||_.authorURL,P=_.author_title||_.authorTitle,M=_.author_image_url||_.authorImageURL,T=(0,c.Z)(x,{absolute:!0}),R=_.header_image_url;return R=(0,c.Z)(R),n.createElement(n.Fragment,null,n.createElement(m.Z,null,y&&y.length&&n.createElement("meta",{name:"keywords",content:y.join(",")}),x&&n.createElement("meta",{property:"og:image",content:T}),x&&n.createElement("meta",{name:"twitter:image",content:T}),x&&n.createElement("meta",{name:"twitter:image:alt",content:"Image for "+I})),n.createElement("article",{className:f?void 0:"margin-bottom--xl"},(t=f?"h1":"h2",a=k.substring(0,10).split("-"),l=a[0],u=v[parseInt(a[1],10)-1],E=parseInt(a[2],10),n.createElement("header",null,n.createElement(t,{className:(0,r.Z)("margin-bottom--sm",g)},f?I:n.createElement(o.Z,{to:Z},I)),n.createElement("div",{className:"margin-vert--md"},A&&n.createElement("p",null,A),n.createElement("time",{dateTime:k,className:d},u," ",E,", ",l," ",w&&n.createElement(n.Fragment,null," \xb7 ",Math.ceil(w)," min read"))),n.createElement("div",{className:"avatar margin-vert--md"},M&&n.createElement("a",{className:"avatar__photo-link avatar__photo",href:H,target:"_blank",rel:"noreferrer noopener"},n.createElement("img",{src:M,alt:L})),n.createElement("div",{className:"avatar__intro"},L&&n.createElement(n.Fragment,null,n.createElement("h4",{className:"avatar__name"},"Written by ",n.createElement("a",{href:H,target:"_blank",rel:"noreferrer noopener"},L)),n.createElement("small",{className:"avatar__subtitle"},P)))),n.createElement("div",{className:"margin-vert--md"},n.createElement("img",{className:"img-blog-header",src:R})))),n.createElement("section",{className:"markdown blog-article-custom"},n.createElement(i.Zo,{components:s.Z},p)),(C.length>0||b)&&n.createElement("footer",{className:"row margin-vert--lg"},C.length>0&&n.createElement("div",{className:"col"},n.createElement("strong",null,"Tags:"),C.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),b&&n.createElement("div",{className:"col text--right"},n.createElement(o.Z,{to:N.permalink,"aria-label":"Read more about "+I},n.createElement("strong",null,"Read More"))))))},E=a(5999);var p=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,E.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(E.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(E.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},_=a(1575);var N=function(e){var t=e.content,a=(e.sidebar,t.frontMatter),r=t.metadata,i=r.title,m=r.description,o=r.nextItem,s=r.prevItem,g=(r.editUrl,a.hide_table_of_contents),d=a.header_image_url;return d=(0,c.Z)(d),n.createElement(l.Z,{title:i,description:m,wrapperClassName:"blog-wrapper"},t&&n.createElement("div",{className:"container container-wide margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--2"}),n.createElement("main",{className:"col col--8"},n.createElement(u,{frontMatter:a,metadata:r,isBlogPostPage:!0},n.createElement(t,null)),(o||s)&&n.createElement("div",{className:"margin-vert--xl"},n.createElement(p,{nextItem:o,prevItem:s}))),!g&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(_.Z,{toc:t.toc})))))}}}]);