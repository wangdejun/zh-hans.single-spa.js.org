(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),l=(n(0),n(310)),i={id:"ecosystem-svelte",title:"single-spa-svelte",sidebar_label:"Svelte"},p=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",children:[]},{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"single-spa \u5c5e\u6027",id:"single-spa-\u5c5e\u6027",children:[]}],o={rightToc:p},c="wrapper";function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(c,Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"single-spa-svelte\u662f\u4e2a\u5e2e\u52a9\u7c7b\u5e93\uff0c\u901a\u8fc7\u5b9e\u73b0",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications#registered-application-lifecycle"}),"\u751f\u547d\u5468\u671f\u51fd\u6570")," (bootstrap, mount and unmount)\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u5728single-spa\u4e2d\u5feb\u901f",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"\u6ce8\u518c")," ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://svelte.dev/"}),"svelte"),"\u5e94\u7528\u3002\u4ed3\u5e93\u5730\u5740\u89c1 ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-svelte"}),"single-spa-preact github")," \u3002"),Object(l.b)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),Object(l.b)("p",null,"\u9996\u5148\uff0c\u5728",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#registered-applications"}),"single-spa \u5e94\u7528\u4e2d"),"\u6267\u884c",Object(l.b)("inlineCode",{parentName:"p"},"npm install --save single-spa-svelte"),"\u547d\u4ee4\u3002\u5728\u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaSvelte from 'single-spa-svelte';\nimport myRootSvelteComponent from 'my-root-svelte-component.js';\n\nconst svelteLifecycles = singleSpaSvelte({\n  component: myRootSvelteComponent,\n  domElementGetter: () => document.getElementById('svelte-app'),\n  props: { someData: 'data' }\n});\n\nexport const bootstrap = svelteLifecycles.bootstrap;\nexport const mount = svelteLifecycles.mount;\nexport const unmount = svelteLifecycles.unmount;\n")),Object(l.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(l.b)("p",null,"\u5728\u8c03\u7528",Object(l.b)("inlineCode",{parentName:"p"},"singleSpaPreact(opts)"),"\u65b9\u6cd5\u65f6\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"opts"),"\u53c2\u6570\u4f1a\u5c06\u6240\u6709\u9009\u9879\u4f20\u9012\u7ed9single-spa-svelte\u3002\u9009\u9879\u5982\u4e0b\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"component"),": (\u5fc5\u586b) \u5c06\u8981\u88ab\u6e32\u67d3\u7684\u6839\u7ec4\u4ef6\u3002\u8fd9\u4e2a\u7ec4\u4ef6\u9700\u8981\u88absvelte\u7f16\u8bd1\u8fc7\uff0c\u4e14",Object(l.b)("strong",{parentName:"li"},"\u4e0d"),"\u80fd\u662f\u4e00\u4e2a\u7acb\u5373\u8c03\u7528\u51fd\u6570\u8868\u8fbe\u5f0f(IIFE)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (\u53ef\u9009) \u8be5\u53c2\u6570\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2aDOM\u5143\u7d20\u3002\u6839\u7ec4\u4ef6\u4f1a\u6302\u8f7d\u5728\u8fd9\u4e2aDOM\u5143\u7d20\u4e0a\uff0c\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u7684\u8bdd\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a\u9ed8\u8ba4\u7684DOM\u5143\u7d20\u3002")),Object(l.b)("p",null,"Svelte\u76f8\u5173\u9009\u9879"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"anchor"),": (\u53ef\u9009) \u662f",Object(l.b)("inlineCode",{parentName:"li"},"domElementGetter"),"\u8fd4\u56deDOM\u5143\u7d20\u7684\u5b50\u5143\u7d20\uff0c\u5177\u4f53\u4ecb\u7ecd\u53ef\u67e5\u770bsvelte\u5173\u4e8e",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://svelte.dev/docs#Creating_a_component"}),"\u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6")," \u7684\u6587\u6863"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"hydrate"),": (\u53ef\u9009) \u5177\u4f53\u4ecb\u7ecd\u53ef\u67e5\u770bsvelte\u5173\u4e8e",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://svelte.dev/docs#Creating_a_component"}),"\u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6")," \u7684\u6587\u6863"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"intro"),": (\u53ef\u9009) \u5982\u679c\u4e3a",Object(l.b)("inlineCode",{parentName:"li"},"true"),"\uff0c\u4f1a\u5728\u521d\u6b21\u6e32\u67d3\u65f6\u5c55\u793a\u52a8\u753b\u800c\u4e0d\u662f\u7b49\u5f85\u540e\u7eed\u72b6\u6001\u6539\u53d8"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"props"),": (\u53ef\u9009) \u4e00\u4e2a\u5bf9\u8c61\uff0c\u5305\u542b\u5404\u4e2a\u9700\u8981\u5411\u7ec4\u4ef6\u63d0\u4f9b\u7684\u5c5e\u6027")),Object(l.b)("h2",{id:"single-spa-\u5c5e\u6027"},"single-spa \u5c5e\u6027"),Object(l.b)("p",null,"\u6240\u6709\u7684",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api#registerapplication"}),"single-spa \u5c5e\u6027"),"\u90fd\u4f1a\u4f20\u9012\u7ed9svelte\u7ec4\u4ef6\u3002\u901a\u8fc7",Object(l.b)("inlineCode",{parentName:"p"},"singleSpaSvelte({props: {...}})"),"\u4f20\u7684\u5c5e\u6027\u4f1a\u548csingle-spa\u7684\u5c5e\u6027\u505a\u5408\u5e76\u3002"))}s.isMDXComponent=!0},310:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),b=a,m=s[p+"."+b]||s[b]||c[b]||l;return n?r.a.createElement(m,Object.assign({},{ref:t},o,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},o))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[o]="string"==typeof e?e:a,i[1]=p;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);