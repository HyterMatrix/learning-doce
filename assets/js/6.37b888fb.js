(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{804:function(s,t,a){"use strict";a.r(t);var n=a(113),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"类型"}},[s._v("类型")]),s._v(" "),a("h2",{attrs:{id:"_1-变量"}},[s._v("1.变量")]),s._v(" "),a("p",[s._v("变量是一段或者多段用来存储数据的内存")]),s._v(" "),a("h3",{attrs:{id:"定义"}},[s._v("定义")]),s._v(" "),a("p",[s._v("关键字"),a("code",[s._v("var")]),s._v("用来定义变量，和C不同，类型被放在变量名后。另外运行时内存分配操作会确保变量自动初始化为二进制零值，避免出现不可预测行为。如显式提供初始化值，可以省略变量类型，由编译器推断")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化为0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动推断为bool类型")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("可一次定义多个变量，包括用不同的初始值定义不同类型。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 相同类型的多个变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不同类型的初始化值")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("依照惯例，建议以组方式整理多行变量定义。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("y "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"简短模式"}},[s._v("简短模式")]),s._v(" "),a("p",[s._v("除了关键字"),a("code",[s._v("var")]),s._v(" 外，还可以使用更加简短的变量定义和初始化语法。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("只是要注意，简短模式有些限制：")]),s._v(" "),a("ul",[a("li",[s._v("定义变量，同时显示初始化。")]),s._v(" "),a("li",[s._v("不能提供数据类型。")]),s._v(" "),a("li",[s._v("只能用在函数内部。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);