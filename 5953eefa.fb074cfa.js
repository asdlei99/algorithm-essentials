(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{160:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return i}));var n=t(2),s=t(7),r=(t(0),t(338)),m=t(342),c=t(343),b={title:"Ones and Zeroes"},p={unversionedId:"dp/knapsack-problem/ones-and-zeroes",id:"dp/knapsack-problem/ones-and-zeroes",isDocsHomePage:!1,title:"Ones and Zeroes",description:"\u63cf\u8ff0",source:"@site/docs/dp/knapsack-problem/ones-and-zeroes.md",slug:"/dp/knapsack-problem/ones-and-zeroes",permalink:"/dp/knapsack-problem/ones-and-zeroes",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/knapsack-problem/ones-and-zeroes.md",version:"current",sidebar:"someSidebar",previous:{title:"Partition Equal Subset Sum",permalink:"/dp/knapsack-problem/partition-equal-subset-sum"},next:{title:"Last Stone Weight II",permalink:"/dp/knapsack-problem/last-stone-weight-ii"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],l={rightToc:o};function i(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"You are given an array of binary strings ",Object(r.b)("inlineCode",{parentName:"p"},"strs")," and two integers ",Object(r.b)("inlineCode",{parentName:"p"},"m")," and ",Object(r.b)("inlineCode",{parentName:"p"},"n"),"."),Object(r.b)("p",null,"Return the size of the largest subset of ",Object(r.b)("inlineCode",{parentName:"p"},"strs")," such that there are ",Object(r.b)("strong",{parentName:"p"},"at most")," ",Object(r.b)("inlineCode",{parentName:"p"},"m")," 0's and ",Object(r.b)("inlineCode",{parentName:"p"},"n")," 1's in the subset."),Object(r.b)("p",null,"A set ",Object(r.b)("inlineCode",{parentName:"p"},"x")," is a subset of a set ",Object(r.b)("inlineCode",{parentName:"p"},"y")," if all elements of ",Object(r.b)("inlineCode",{parentName:"p"},"x")," are also elements of ",Object(r.b)("inlineCode",{parentName:"p"},"y"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example 1"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Input"),": strs = ",'["10","0001","111001","1","0"]',", m = 5, n = 3",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("strong",{parentName:"p"},"Output"),": 4",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("strong",{parentName:"p"},"Explanation"),': The largest subset with at most 5 0\'s and 3 1\'s is {"10", "0001", "1", "0"}, so the answer is 4.',Object(r.b)("br",{parentName:"p"}),"\n",'Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.',Object(r.b)("br",{parentName:"p"}),"\n",'{"111001"} is an invalid subset because it contains 4 1\'s, greater than the maximum of 3.')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example 2"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Input"),": strs = ",'["10","0","1"]',", m = 1, n = 1",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("strong",{parentName:"p"},"Output"),": 2",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("strong",{parentName:"p"},"Explanation"),': The largest subset is {"0", "1"}, so the answer is 2.')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constraints"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"1 <= strs.length <= 600"),Object(r.b)("li",{parentName:"ul"},"1 <= strs","[i]",".length <= 100"),Object(r.b)("li",{parentName:"ul"},"strs","[i]"," consists only of digits '0' and '1'."),Object(r.b)("li",{parentName:"ul"},"1 <= m, n <= 100")),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"0-1 \u80cc\u5305\u95ee\u9898\uff0c\u6bcf\u4e2a\u5b57\u7b26\u4e32\u6709\u4e24\u79cd\u91cd\u91cf\uff0c0 \u7684\u4e2a\u6570\u548c 1 \u7684\u4e2a\u6570\uff0c\u6bcf\u4e2a\u5b57\u7b26\u4e32\u7684\u4ef7\u503c\u90fd\u662f 1\uff0c\u56e0\u6b64\u8fd9\u4e2a\u95ee\u9898\u91cc\u6709\u4e24\u4e2a\u80cc\u5305\uff0c\u4e00\u4e2a\u88c5 0\uff0c\u4e00\u4e2a\u88c5 1\uff0c\u4ef7\u503c\u5219\u662f\u80cc\u5305\u91cc\u5b57\u7b26\u4e32\u7684\u4e2a\u6570\u3002"),Object(r.b)("p",null,"\u4ee4",Object(r.b)("inlineCode",{parentName:"p"},"f[i][j][k]"),"\u8868\u793a\u628a\u524d",Object(r.b)("inlineCode",{parentName:"p"},"i"),"\u4e2a\u5b57\u7b26\u4e32\u88c5\u8fdb\u5bb9\u91cf\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"j"),"\u7684\u80cc\u5305 0 \u548c\u5bb9\u91cf\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"k"),"\u80cc\u5305 1\uff0c\u53ef\u4ee5\u83b7\u5f97\u7684\u6700\u5927\u96c6\u5408\u7684\u5927\u5c0f\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u662f\uff1a"),Object(r.b)("p",null,Object(r.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mi",{parentName:"mrow"},"f"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"i"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"j"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"k"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(r.b)("mo",{parentName:"mrow"},"="),Object(r.b)("mi",{parentName:"mrow"},"max"),Object(r.b)("mo",{parentName:"mrow"},"\u2061"),Object(r.b)("mrow",{parentName:"mrow"},Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{fence:"true"}),"{"),Object(r.b)("mi",{parentName:"mrow"},"f"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"i"),Object(r.b)("mo",{parentName:"mrow"},"\u2212"),Object(r.b)("mn",{parentName:"mrow"},"1"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"j"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"k"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(r.b)("mi",{parentName:"mrow"},"f"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"i"),Object(r.b)("mo",{parentName:"mrow"},"\u2212"),Object(r.b)("mn",{parentName:"mrow"},"1"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"j"),Object(r.b)("mo",{parentName:"mrow"},"\u2212"),Object(r.b)("msub",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msub"},"w"),Object(r.b)("mn",{parentName:"msub"},"0")),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"i"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"k"),Object(r.b)("mo",{parentName:"mrow"},"\u2212"),Object(r.b)("msub",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msub"},"w"),Object(r.b)("mn",{parentName:"msub"},"1")),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(r.b)("mi",{parentName:"mrow"},"i"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(r.b)("mo",{parentName:"mrow"},"+"),Object(r.b)("mn",{parentName:"mrow"},"1"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{fence:"true"}),"}"))),Object(r.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"f[i][j][k]=\\max\\left\\{f[i-1][j][k], f[i-1][j-w_0[i][k-w_1[i]]+1\\right\\}")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mop"}),"max"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"minner"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen delimcenter",style:{top:"0em"}}),"{"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.05724em"}}),"j"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.02691em"}}),"w"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.30110799999999993em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.02691em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"0")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(r.b)("span",{parentName:"span"})))))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.03148em"}}),"k"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.02691em"}}),"w"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.30110799999999993em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.02691em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"1")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(r.b)("span",{parentName:"span"})))))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"+"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose delimcenter",style:{top:"0em"}}),"}"))))))),Object(r.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(r.b)(m.a,{defaultValue:"java",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"# TODO\n"))),Object(r.b)(c.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Ones and Zeroes\n// 0-1 knapsack problem\n// Time Complexity: O(l*m*n), Space Complexity: O(m*n)\nclass Solution {\n    public int findMaxForm(String[] strs, int m, int n) {\n        int[][] f = new int[m+1][n+1];\n\n        int[] w0 = new int[strs.length];\n        int[] w1 = new int[strs.length];\n        for (int i = 0; i < strs.length; ++i) {\n            w0[i] = numberOfZeroes(strs[i]);\n            w1[i] = strs[i].length() - w0[i];\n        }\n\n        for (int i = 0; i < strs.length; ++i) {\n            for(int j = m; j >= w0[i]; --j)\n                for(int k = n;k >= w1[i]; --k) {\n                    f[j][k] = Math.max(f[j][k], f[j-w0[i]][k-w1[i]]+1);\n                }\n        }\n        return f[m][n];\n    }\n\n    private static int numberOfZeroes(String s) {\n        int count = 0;\n        for (char c : s.toCharArray()) {\n            if (c == '0') count++;\n        }\n        return count;\n    }\n}\n"))),Object(r.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// TODO\n")))))}i.isMDXComponent=!0},338:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return j}));var n=t(0),s=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=s.a.createContext({}),o=function(e){var a=s.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},l=function(e){var a=o(e.components);return s.a.createElement(p.Provider,{value:a},e.children)},i={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},O=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=o(t),O=n,j=l["".concat(m,".").concat(O)]||l[O]||i[O]||r;return t?s.a.createElement(j,c(c({ref:a},p),{},{components:t})):s.a.createElement(j,c({ref:a},p))}));function j(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,m=new Array(r);m[0]=O;var c={};for(var b in a)hasOwnProperty.call(a,b)&&(c[b]=a[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,m[1]=c;for(var p=2;p<r;p++)m[p]=t[p];return s.a.createElement.apply(null,m)}return s.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},339:function(e,a,t){"use strict";function n(e){var a,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(s&&(s+=" "),s+=t);else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}a.a=function(){for(var e,a,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(s&&(s+=" "),s+=a);return s}},340:function(e,a,t){"use strict";var n=t(0),s=t(341);a.a=function(){var e=Object(n.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},341:function(e,a,t){"use strict";var n=t(0),s=Object(n.createContext)(void 0);a.a=s},342:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(340),m=t(339),c=t(49),b=t.n(c),p=37,o=39;a.a=function(e){var a=e.block,t=e.children,c=e.defaultValue,l=e.values,i=e.groupId,O=e.className,j=Object(r.a)(),N=j.tabGroupChoices,u=j.setTabGroupChoices,f=Object(n.useState)(c),h=f[0],d=f[1],g=Object(n.useState)(!1),y=g[0],w=g[1];if(null!=i){var v=N[i];null!=v&&v!==h&&l.some((function(e){return e.value===v}))&&d(v)}var k=function(e){d(e),null!=i&&u(i,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},R=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",R),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",R)}}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(m.a)("tabs",{"tabs--block":a},O)},l.map((function(e){var a=e.value,t=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===a,className:Object(m.a)("tabs__item",b.a.tabItem,{"tabs__item--active":h===a}),style:y?{}:{outline:"none"},key:a,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case o:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(x,e.target,e),C(e)},onFocus:function(){return k(a)},onClick:function(){k(a),w(!1)},onPointerDown:function(){return w(!1)}},t)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===h}))[0]))}},343:function(e,a,t){"use strict";var n=t(0),s=t.n(n);a.a=function(e){return s.a.createElement("div",null,e.children)}}}]);