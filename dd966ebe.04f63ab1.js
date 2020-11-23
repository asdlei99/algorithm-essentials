(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{301:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return m})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return l}));var n=t(2),r=t(7),s=(t(0),t(338)),c=t(342),b=t(343),m={title:"Last Stone Weight II"},p={unversionedId:"dp/knapsack-problem/last-stone-weight-ii",id:"dp/knapsack-problem/last-stone-weight-ii",isDocsHomePage:!1,title:"Last Stone Weight II",description:"\u63cf\u8ff0",source:"@site/docs/dp/knapsack-problem/last-stone-weight-ii.md",slug:"/dp/knapsack-problem/last-stone-weight-ii",permalink:"/dp/knapsack-problem/last-stone-weight-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/knapsack-problem/last-stone-weight-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Ones and Zeroes",permalink:"/dp/knapsack-problem/ones-and-zeroes"},next:{title:"\u56fe\u8282\u70b9\u5b9a\u4e49",permalink:"/graph/README"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],i={rightToc:o};function l(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(s.b)("p",null,"We have a collection of rocks, each rock has a positive integer weight."),Object(s.b)("p",null,"Each turn, we choose ",Object(s.b)("strong",{parentName:"p"},"any two rocks")," and smash them together. Suppose the stones have weights ",Object(s.b)("inlineCode",{parentName:"p"},"x")," and ",Object(s.b)("inlineCode",{parentName:"p"},"y")," with ",Object(s.b)("inlineCode",{parentName:"p"},"x <= y"),". The result of this smash is:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"If ",Object(s.b)("inlineCode",{parentName:"li"},"x == y"),", both stones are totally destroyed;"),Object(s.b)("li",{parentName:"ul"},"If ",Object(s.b)("inlineCode",{parentName:"li"},"x != y"),", the stone of weight ",Object(s.b)("inlineCode",{parentName:"li"},"x")," is totally destroyed, and the stone of weight ",Object(s.b)("inlineCode",{parentName:"li"},"y")," has new weight ",Object(s.b)("inlineCode",{parentName:"li"},"y-x"),".")),Object(s.b)("p",null,"At the end, there is at most 1 stone left. Return the ",Object(s.b)("strong",{parentName:"p"},"smallest possible")," weight of this stone (the weight is 0 if there are no stones left.)"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example 1"),":"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"Input"),": ","[2,7,4,1,8,1]",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("strong",{parentName:"p"},"Output"),": 1",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("strong",{parentName:"p"},"Explanation"),":",Object(s.b)("br",{parentName:"p"}),"\n","We can combine 2 and 4 to get 2 so the array converts to ","[2,7,1,8,1]"," then,",Object(s.b)("br",{parentName:"p"}),"\n","we can combine 7 and 8 to get 1 so the array converts to ","[2,1,1,1]"," then,",Object(s.b)("br",{parentName:"p"}),"\n","we can combine 2 and 1 to get 1 so the array converts to ","[1,1,1]"," then,",Object(s.b)("br",{parentName:"p"}),"\n","we can combine 1 and 1 to get 0 so the array converts to ","[1]"," then that's the optimal value.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note"),":"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"1 <= stones.length <= 30"),Object(s.b)("li",{parentName:"ul"},"1 <= stones","[i]"," <= 100")),Object(s.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(s.b)("p",null,"\u4e24\u5757\u77f3\u5934\u7c89\u788e\u7684\u8fc7\u7a0b\uff0c\u5c31\u662f\u7ed9\u6bcf\u4e2a\u77f3\u5934\u8d4b\u503c\u6b63\u53f7\u6216\u8005\u8d1f\u53f7\u7684\u8fc7\u7a0b\uff0c\u76f8\u5f53\u4e8e\u628a\u8fd9\u4e9b\u77f3\u5934\u5206\u4e3a\u4e24\u7ec4\uff0c\u4f7f\u5f97\u4e24\u7ec4\u7684\u5dee\u503c\u5c3d\u53ef\u80fd\u5c0f\uff0c\u6240\u4ee5\u8fd9\u662f\u7ecf\u5178\u7684\u96c6\u5408\u5212\u5206 NP \u5b8c\u5168\u95ee\u9898\uff0c\u53ef\u4ee5\u91c7\u7528\u52a8\u6001\u89c4\u5212\u7684\u65b9\u6cd5\u6c42\u89e3\u3002"),Object(s.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(s.b)("h4",{id:"\u65b9\u6cd5-1"},"\u65b9\u6cd5 1"),Object(s.b)("p",null,"\u53ef\u4ee5\u8f6c\u6362\u6210 0-1 \u80cc\u5305\u95ee\u9898\uff0c\u66f4\u52a0\u7b80\u5316\uff0c\u53ea\u6709\u91cd\u91cf\u6ca1\u6709\u4ef7\u503c\u4fe1\u606f\u3002\u6bcf\u4e2a\u7269\u54c1 i \u7684\u91cd\u91cf\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"stones[i]"),"\uff0c\u4ef7\u503c\u4e3a 0\uff0c\u80cc\u5305\u80fd\u5bb9\u7eb3\u7684\u6700\u5927\u91cd\u91cf\u4e3a",Object(s.b)("inlineCode",{parentName:"p"},"sum(stones)/2"),"\u3002\u8be5\u95ee\u9898\u5c31\u53d8\u6210\uff0c\u9009\u62e9\u82e5\u5e72\u7269\u54c1\uff0c\u80fd\u5426\u6070\u597d\u586b\u6ee1\u80cc\u5305\uff1f\u4ee4 ",Object(s.b)("inlineCode",{parentName:"p"},"f[i][j]"),"\u8868\u793a\u524d i \u4e2a\u7269\u54c1\u80fd\u5426\u586b\u6ee1\u5bb9\u91cf\u4e3a j \u7684\u80cc\u5305\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a:"),Object(s.b)("p",null,Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(s.b)("mi",{parentName:"mrow"},"i"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(s.b)("mi",{parentName:"mrow"},"j"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(s.b)("mo",{parentName:"mrow"},"="),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(s.b)("mi",{parentName:"mrow"},"i"),Object(s.b)("mo",{parentName:"mrow"},"\u2212"),Object(s.b)("mn",{parentName:"mrow"},"1"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(s.b)("mi",{parentName:"mrow"},"j"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(s.b)("mo",{parentName:"mrow"},"\u2228"),Object(s.b)("mi",{parentName:"mrow"},"f"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(s.b)("mi",{parentName:"mrow"},"i"),Object(s.b)("mo",{parentName:"mrow"},"\u2212"),Object(s.b)("mn",{parentName:"mrow"},"1"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(s.b)("mi",{parentName:"mrow"},"j"),Object(s.b)("mo",{parentName:"mrow"},"\u2212"),Object(s.b)("mi",{parentName:"mrow"},"W"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(s.b)("mi",{parentName:"mrow"},"i"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(s.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]")),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"f[i][j] = f[i-1][j] \\lor f[i-1][j-W[i]]")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2228"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.13889em"}}),"W"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]")))))),Object(s.b)(c.a,{defaultValue:"java",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(s.b)(b.a,{value:"python",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"# TODO\n"))),Object(s.b)(b.a,{value:"java",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Last Stone Weight II\n// 0-1 knapsack problem\n// Time Complexity: O(n*W), Space Complexity: O(W)\nclass Solution {\n    public int lastStoneWeightII(int[] stones) {\n        int sum = 0;\n        for(int i : stones) sum += i;\n\n        int[] w = stones; // weight array\n        int W = sum / 2; // maximum weight capacity of knapsack\n\n        boolean[] f = new boolean[W + 1];\n        f[0] = true; // initialize\n\n        for(int i = 0; i < stones.length; i++) {\n            for(int j = W; j >= w[i]; --j) {\n                f[j] = f[j] || f[j-w[i]];\n            }\n        }\n\n        for (int j = W; j >= 0; j--)\n            if (f[j]) return sum - j*2;\n        return -1;\n    }\n}\n"))),Object(s.b)(b.a,{value:"cpp",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// TODO\n")))),Object(s.b)("h4",{id:"\u65b9\u6cd5-2"},"\u65b9\u6cd5 2"),Object(s.b)("p",null,"\u53ef\u4ee5\u8f6c\u6362\u6210\u6807\u51c6\u7684 0-1 \u80cc\u5305\u95ee\u9898\uff0c\u6bcf\u4e2a\u7269\u54c1 i \u7684\u91cd\u91cf\u4e3a ",Object(s.b)("inlineCode",{parentName:"p"},"stones[i]"),"\uff0c\u4ef7\u503c\u4e5f\u4e3a",Object(s.b)("inlineCode",{parentName:"p"},"stones[i]"),"\uff0c\u80cc\u5305\u80fd\u5bb9\u7eb3\u7684\u6700\u5927\u91cd\u91cf\u4e3a",Object(s.b)("inlineCode",{parentName:"p"},"sum(stones)/2"),"\u3002"),Object(s.b)(c.a,{defaultValue:"java",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(s.b)(b.a,{value:"python",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"# TODO\n"))),Object(s.b)(b.a,{value:"java",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Last Stone Weight II\n// 0-1 knapsack problem\n// Time Complexity: O(n*W), Space Complexity: O(W)\nclass Solution {\n    public int lastStoneWeightII(int[] stones) {\n        int sum = 0;\n        for(int i : stones) sum += i;\n\n        int[] w = stones; // weight array\n        int W = sum / 2; // maximum weight capacity of knapsack\n\n        int[] f = new int[W + 1];\n        f[0] = 0; // initialize\n\n        for(int i = 0; i < stones.length; i++) {\n            for(int j = W; j >= w[i]; --j) {\n                f[j] = Math.max(f[j], f[j-w[i]]+w[i]);\n            }\n        }\n\n        return sum - f[W]*2;\n    }\n}\n"))),Object(s.b)(b.a,{value:"cpp",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// TODO\n")))),Object(s.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/dp/knapsack-problem/partition-equal-subset-sum"}),"Partition Equal Subset Sum"))))}l.isMDXComponent=!0},338:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return O}));var n=t(0),r=t.n(n);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),o=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):b(b({},a),e)),t},i=function(e){var a=o(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},j=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),i=o(t),j=n,O=i["".concat(c,".").concat(j)]||i[j]||l[j]||s;return t?r.a.createElement(O,b(b({ref:a},p),{},{components:t})):r.a.createElement(O,b({ref:a},p))}));function O(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,c=new Array(s);c[0]=j;var b={};for(var m in a)hasOwnProperty.call(a,m)&&(b[m]=a[m]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var p=2;p<s;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},339:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},340:function(e,a,t){"use strict";var n=t(0),r=t(341);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},341:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},342:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(340),c=t(339),b=t(49),m=t.n(b),p=37,o=39;a.a=function(e){var a=e.block,t=e.children,b=e.defaultValue,i=e.values,l=e.groupId,j=e.className,O=Object(s.a)(),u=O.tabGroupChoices,N=O.setTabGroupChoices,h=Object(n.useState)(b),f=h[0],d=h[1],g=Object(n.useState)(!1),y=g[0],w=g[1];if(null!=l){var v=u[l];null!=v&&v!==f&&i.some((function(e){return e.value===v}))&&d(v)}var k=function(e){d(e),null!=l&&N(l,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},T=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",T)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},j)},i.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===a,className:Object(c.a)("tabs__item",m.a.tabItem,{"tabs__item--active":f===a}),style:y?{}:{outline:"none"},key:a,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case o:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(x,e.target,e),C(e)},onFocus:function(){return k(a)},onClick:function(){k(a),w(!1)},onPointerDown:function(){return w(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===f}))[0]))}},343:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);