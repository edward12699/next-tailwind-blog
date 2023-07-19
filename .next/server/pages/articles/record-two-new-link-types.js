"use strict";
(() => {
var exports = {};
exports.id = 9314;
exports.ids = [9314,9252];
exports.modules = {

/***/ 5933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(dateString) {
    return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    });
}


/***/ }),

/***/ 9252:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "meta": () => (/* binding */ meta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5953);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__]);
_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*@jsxRuntime automatic @jsxImportSource react*/ 

const meta = {
    author: "edward",
    date: "2023-06-21",
    title: "record-two-new-link-types",
    description: "两个比较少见的link type"
};
const MDXLayout = (props)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__/* .ArticleLayout */ .B, Object.assign({
        meta: meta
    }, props));
function _createMdxContent(props) {
    const _components = Object.assign({
        pre: "pre",
        code: "code",
        span: "span",
        p: "p"
    }, props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-html",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-html",
                    children: [
                        "   ",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "<"
                                        }),
                                        "link"
                                    ]
                                }),
                                "\n          ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "rel"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        }),
                                        "alternate",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                "\n          ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "type"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        }),
                                        "application/rss+xml",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                "\n          ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "href"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        "{`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}"
                                    ]
                                }),
                                "\n        ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "/>"
                                })
                            ]
                        }),
                        "\n        ",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "<"
                                        }),
                                        "link"
                                    ]
                                }),
                                "\n          ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "rel"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        }),
                                        "alternate",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                "\n          ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "type"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        }),
                                        "application/feed+json",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                "\n          ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "href"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        "{`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}"
                                    ]
                                }),
                                "\n        ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: "/>"
                                })
                            ]
                        }),
                        "\n"
                    ]
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "rel 是用来表示外部文件和本文件的关系\nAlternate representations of the current document."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "在stylesheet 中有一个典型应用，即："
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-html",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-html",
                    children: [
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "<"
                                        }),
                                        "link"
                                    ]
                                }),
                                " ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "href"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        }),
                                        "simple.css",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                " ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "rel"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        }),
                                        "alternate stylesheet",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                " ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "title"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        }),
                                        "Simple",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "<"
                                        }),
                                        "link"
                                    ]
                                }),
                                " ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "href"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        }),
                                        "fancy.css",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                " ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "rel"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        }),
                                        "alternate stylesheet",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                " ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "title"
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token attr-value",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation attr-equals",
                                            children: "="
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        }),
                                        "Fancy",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n"
                    ]
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Go to the View>Page Style submenu and select a different style to watch this page's look change!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "只是这个功能仅firefox 支持"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "但可窥见此alternate 代表两个可互相替换的属性"
            })
        ]
    });
}
function MDXContent(props = {}) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9259:
/***/ ((module) => {

module.exports = import("web-vitals");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5953,956], () => (__webpack_exec__(9252)));
module.exports = __webpack_exports__;

})();