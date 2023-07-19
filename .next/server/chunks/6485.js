"use strict";
exports.id = 6485;
exports.ids = [6485];
exports.modules = {

/***/ 3698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/googlebot.1fd2fe27.png","height":958,"width":1402,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAYUlEQVR42jWJzQqDMBgE8/7P1mMvpUKhKv5Eg1EUjd/uSkDnNMO47/8I8ZQAKjUfxbINrPvkuvGcVxNh4O5LLD6uCtGcHsz4KpBwp+NNjq5epmGTBDKPbIDE4u2r3ySJ5AUq7XPcTJ9hYgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 5271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/web-performance-to-seo.c88bd4da.png","height":860,"width":1168,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAnUlEQVR42hXMvQ7BUBQA4PNwFgvxLmIW6eAN1MyMhUmDxNIbopJKKyn103QTRJ3en3N76fwlHzBf9CfZdI3GGKX0bBANu4fIf0AQy13w8UKuyEhBVoM1wGFOAtdUnu/Z6SZIl2C39p2qu12lIKV+vb+Yq3/FUfWaXrvibpYpFIXmOZIqQXCy6qwGjjtPgIgQUQhpTFktRpexfYzD5w8y/HjkBqNSZwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 6485:
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
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1608);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_photos_googlebot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3698);
/* harmony import */ var _images_photos_web_performance_to_seo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5271);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__]);
_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*@jsxRuntime automatic @jsxImportSource react*/ 

const meta = {
    author: "edward",
    date: "2023-06-26",
    title: "introducing-to-Search-Engine(learnt-from-next.js)",
    description: "introducing-to-Search-Engine(learnt-from-next.js)"
};



const MDXLayout = (props)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__/* .ArticleLayout */ .B, Object.assign({
        meta: meta
    }, props));
function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        h2: "h2",
        ol: "ol",
        li: "li",
        em: "em",
        strong: "strong",
        blockquote: "blockquote",
        ul: "ul",
        pre: "pre",
        code: "code",
        span: "span",
        a: "a"
    }, props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "it's mostly recorded from the next.js tutorial, while cause it's a common knowledge\nso we can use it everywhere"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "introducing to Search Systems"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Search Systems have four main responsibilities:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Crawling – the process of going through the Web and parsing the content in all websites. This is a massive task as there are over 350 million domains available."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Indexing – finding places to store all of the data gathered during the crawling stage so it can be accessed."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Rendering – executing any resources on the page such as JavaScript that might enhance the features and enrich content on the site. This process doesn't happen for all pages that are crawled and sometimes it happens before the content is actually indexed. Rendering might happen after indexing if there are no available resources to perform the task at the time."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Ranking – querying data to craft relevant results pages based on user input. This is where the different ranking criteria are applied in Search engines to give users the best answer to fulfill their intent."
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "While there are some differences when it comes to Ranking and Rendering, most search engines work in a very ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "similar way when it comes to Crawling and Indexing"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "how a Web Crawlers works (ex. Googlebot from google )"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: _images_photos_googlebot_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                alt: "",
                className: ""
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Find URLs: Google sources URLs from many places, including Google Search Console, links between websites, or XML sitemaps."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Add to Crawl Queue: These URLs are added to the Crawl Queue for the Googlebot to process. URLs in the Crawl Queue usually last seconds there, but it can be up to a few days depending on the case, especially if the pages need to be rendered, indexed, or – if the URL is already indexed – refreshed. The pages will then enter the Render Queue."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "HTTP Request: The crawler makes an HTTP request to get the headers and acts according to the returned status code:\n200 - it crawls and parses the HTML.\n30X - it follows the redirects.\n40X - it will note the error and not load the HTML\n50X - it may come back later to check if the status code has changed."
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Render Queue: The different services and components of the search system process the HTML and parse the content. If the page has some JavaScript client-side based content, the URLs might be added to a Render Queue. Render Queue is more costly for Google as it needs to use more resources to render JavaScript and therefore ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "URLs rendered are a smaller percentage over the total pages out there on the internet"
                            }),
                            ". Some other search engines might not have the same rendering capacity as Google, and this is where Next.js can help with your rendering strategy."
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Ready to be indexed: If all criteria are met, the pages may be eligible to be indexed and shown in search results."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "robots.txt"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "it's a communication file telling search engin the crawler can or can't request from your site\nThese files ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "must be served at the root of each host"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "XML Sitemaps"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "according to google You might need a sitemap if:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                children: "Your site is really large. As a result, it's more likely Google web crawlers might overlook crawling some of your new or recently updated pages."
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                children: "Your site has a large archive of content pages that are isolated or not well linked to each other. If your site pages don't naturally reference each other, you can list them in a sitemap to ensure that Google doesn't overlook some of your pages."
                            }),
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                children: [
                                    "Your site is new and ",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "has few external links to it. Googlebot and other web crawlers navigate the web by following links from one page to another."
                                    }),
                                    " As a result, Google might not discover your pages if no other sites link to them."
                                ]
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                children: "Your site has a lot of rich media content (video, images) or is shown in Google News. If provided, Google can take additional information from sitemaps into account for search, where appropriate."
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "need be at the root too\nbasic format"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-xml",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-XML",
                    children: [
                        "//sitemap.xml\n  ",
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
                                        "xml"
                                    ]
                                }),
                                " ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "version"
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
                                        "1.0",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                " ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "encoding"
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
                                        "UTF-8",
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
                        "\n   ",
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
                                        "urlset"
                                    ]
                                }),
                                " ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "xmlns"
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
                                        "http://www.sitemaps.org/schemas/sitemap/0.9",
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
                        "\n     ",
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
                                        "url"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n       ",
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
                                        "loc"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "http://www.example.com/foo",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "</"
                                        }),
                                        "loc"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n       ",
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
                                        "lastmod"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "2021-06-01",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "</"
                                        }),
                                        "lastmod"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n     ",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "</"
                                        }),
                                        "url"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n      ",
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
                                        "url"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n       ",
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
                                        "loc"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "http://www.example.com/foo1",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "</"
                                        }),
                                        "loc"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n       ",
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
                                        "lastmod"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "2021-06-02",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "</"
                                        }),
                                        "lastmod"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n     ",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "</"
                                        }),
                                        "url"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n   ",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "</"
                                        }),
                                        "urlset"
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ">"
                                })
                            ]
                        }),
                        "\n   ",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token tag",
                            children: [
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token tag",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: "</"
                                        }),
                                        "xml"
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
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Special Meta Tags for Search Engines"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Meta robot tags are directives that search engines will always respect. Adding these robots tags can make the indexation of your website easier.\nex. ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: '<meta name="googlebot" content="noindex,nofollow" />'
                    })
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "noindex :To not show this page in search results."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "nofollow:  To not follow links on this page"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "if not defined ,index and follow by default;",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "\nURLs that are restricted from bots crawling via robots.txt file will never be crawled by Google, but if the rules are added after pages are already indexed, pages might remain indexed. The best way to make sure that a page is not indexed is using the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "noindex"
                    }),
                    " tag.",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "\nalso refer to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#directives",
                        children: "full robot tags"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Canonical Tags"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To de-duplicate pages"
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
                                "\n      ",
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
                                        "canonical",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                "\n      ",
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
                                        "https://example.com/blog/original-post",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                "\n      ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token attr-name",
                                    children: "key"
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
                                        "canonical",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token punctuation",
                                            children: '"'
                                        })
                                    ]
                                }),
                                "\n",
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
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "amp"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "amp is beneficial for mobile device webs and also for seo\ngoogle giving search ranking preference to web pages using AMP"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "URL Structure"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "URL Structure is an important part of an SEO strategy. While Google doesn't disclose which weight each part of SEO has, great URLs are considered a best practice no matter if they are a big or small ranking factor in the end."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Semantic"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Patterns that are logical and consistent"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Keyword focused"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Not parameter-based"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Metadata"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Metadata is the abstract of the website's content and is used to attach a title, a description, and an image to the site."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "title : very important it's one of the main elements Google uses to understand what your page is about. use key words in it"
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Description: though not included in account for  google's ranking purposes,while it affect the click-through-rate on search results, which will also improve your site ranking indirectly\nput your keywords here ,",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "These keywords will appear in bold if a user's search contains them."
                            })
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Structured Data and JSON-LD: Structured data facilitates the understanding of your pages to search engines. Over the years, there have been several vocabularies in place, but currently the main one is schema.org.",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "\nschema.org provides a set of patterns and attributes for defining and tagging web page content, enabling search engines and other data processing tools to better understand and interpret the meaning of web pages.",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "\nSchema.org defines a range of terms and attributes that are used to represent various types of entities and concepts, such as people, organizations, events, places, products, reviews, articles, and so on. These terms and attributes can be embedded in the HTML code of a web page to provide more semantic information about the content of the web page.",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "\nSchema.org supports structured data markup in multiple formats, including Microdata, JSON-LD, and RDFa"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "demo:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-js",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-js",
                    children: [
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword module",
                            children: "import"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token imports",
                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                className: "token maybe-class-name",
                                children: "Head"
                            })
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword module",
                            children: "from"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'next/head'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "function"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                className: "token maybe-class-name",
                                children: "ProductPage"
                            })
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "function"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "addProductJsonLd"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "return"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n      ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token literal-property property",
                            children: "__html"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " ",
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token template-string",
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token template-punctuation string",
                                    children: "`"
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token string",
                                    children: '{\n      "@context": "https://schema.org/",\n      "@type": "Product",\n      "name": "Executive Anvil",\n      "image": [\n        "https://example.com/photos/1x1/photo.jpg",\n        "https://example.com/photos/4x3/photo.jpg",\n        "https://example.com/photos/16x9/photo.jpg"\n       ],\n      "description": "Sleeker than ACME\'s Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",\n      "sku": "0446310786",\n      "mpn": "925872",\n      "brand": {\n        "@type": "Brand",\n        "name": "ACME"\n      },\n      "review": {\n        "@type": "Review",\n        "reviewRating": {\n          "@type": "Rating",\n          "ratingValue": "4",\n          "bestRating": "5"\n        },\n        "author": {\n          "@type": "Person",\n          "name": "Fred Benson"\n        }\n      },\n      "aggregateRating": {\n        "@type": "AggregateRating",\n        "ratingValue": "4.4",\n        "reviewCount": "89"\n      },\n      "offers": {\n        "@type": "Offer",\n        "url": "https://example.com/anvil",\n        "priceCurrency": "USD",\n        "price": "119.99",\n        "priceValidUntil": "2020-11-20",\n        "itemCondition": "https://schema.org/UsedCondition",\n        "availability": "https://schema.org/InStock"\n      }\n    }\n  '
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token template-punctuation string",
                                    children: "`"
                                })
                            ]
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "return"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        "div",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        "\n      ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "Head"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        "\n        ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        "title",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "My"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "Product"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "/"
                        }),
                        "title",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        "\n        ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        "meta\n          name",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"description"'
                        }),
                        "\n          content",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"Super product with free shipping."'
                        }),
                        "\n          key",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"desc"'
                        }),
                        "\n        ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "/"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        "\n        ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        "script\n          type",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"application/ld+json"'
                        }),
                        "\n          dangerouslySetInnerHTML",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "addProductJsonLd"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        "\n          key",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"product-jsonld"'
                        }),
                        "\n        ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "/"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        "\n      ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "/"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "Head"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        "\n      ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        "h1",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "My"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "Product"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "/"
                        }),
                        "h1",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        "\n      ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        "p",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "Super"
                        }),
                        " product ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "for"
                        }),
                        " sale",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "/"
                        }),
                        "p",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "<"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "/"
                        }),
                        "div",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ">"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword module",
                            children: "export"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword module",
                            children: "default"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "ProductPage"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n"
                    ]
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "head and links"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "head illustrate the key information of the page  search engine consider it as important\nuse h1 when necessary"
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "google ranks using PageRank Algorithm.,it means it goes through every link on a database and scores domains based on how many links they receive (quantity) and from which domains (quality)\nso you should always include them both internally between your page, and also externally to other websites. Links always ",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                children: [
                                    "need to use ",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "href"
                                    })
                                ]
                            }),
                            " in order to be used for PageRank calculations."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "web performance"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Web page speed on mobile devices has been a ranking factor since 2018. However, it's not been clear what specific performance metrics the Google Search algorithm uses as part of ranking until now."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This changed in June 2021, when Google provided a set of specific metrics and ranges to analyze and optimize your performance."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: _images_photos_web_performance_to_seo_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                alt: "",
                className: ""
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Three Pillars of Optimization"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Technical – Optimize your website for crawling and web performance."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Creation – Create a content strategy to target specific keywords."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Popularity – Boost your site's presence online so search engines know you are a trusted source. This is done through the use of backlinks – third-party sites that link back to your site."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Read more"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#directives",
                            children: "google seo doc"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://amp.dev/",
                            children: "amp"
                        })
                    }),
                    "\n"
                ]
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

/***/ })

};
;