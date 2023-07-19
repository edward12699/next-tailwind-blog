"use strict";
exports.id = 3425;
exports.ids = [3425];
exports.modules = {

/***/ 3698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/googlebot.1fd2fe27.png","height":958,"width":1402,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAYUlEQVR42jWJzQqDMBgE8/7P1mMvpUKhKv5Eg1EUjd/uSkDnNMO47/8I8ZQAKjUfxbINrPvkuvGcVxNh4O5LLD6uCtGcHsz4KpBwp+NNjq5epmGTBDKPbIDE4u2r3ySJ5AUq7XPcTJ9hYgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 3425:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__]);
_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*@jsxRuntime automatic @jsxImportSource react*/ 

const meta = {
    author: "edward",
    date: "2023-06-26",
    title: "introducing-to-seo(learnt-from-next.js)",
    description: "introducing-to-seo(learnt-from-next.js)"
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
        ul: "ul"
    }, props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "it's mostly recorded from the next.js tutorial, while cause it's a common knowledge\nso we can use it everywhere"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "what is seo"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Search Engine Optimization\nthe method of improving your website's ranking in search results"
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