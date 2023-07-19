"use strict";
exports.id = 2462;
exports.ids = [2462];
exports.modules = {

/***/ 360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/pwa-push.0fa0df4c.png","height":1008,"width":1244,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAAAAADbboAnAAAAMUlEQVR42h3GyQ0AIAwDsOy/LlfTpAUJv4yqbpGJs5NWJmK6goco+saw0VdcWz8hUg/zey7uYr2DdQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 2462:
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
/* harmony import */ var _images_photos_pwa_push_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__]);
_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*@jsxRuntime automatic @jsxImportSource react*/ 

const meta = {
    author: "edward",
    date: "2023-06-30",
    title: "deep-into-service-worker",
    description: "deep-into-service-worker"
};
const MDXLayout = (props)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__/* .ArticleLayout */ .B, Object.assign({
        meta: meta
    }, props));


function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        a: "a",
        h2: "h2",
        ol: "ol",
        li: "li",
        ul: "ul",
        pre: "pre",
        code: "code",
        span: "span",
        br: "br",
        h3: "h3",
        table: "table",
        thead: "thead",
        tr: "tr",
        th: "th",
        tbody: "tbody",
        td: "td",
        em: "em"
    }, props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "service worker is a necessary part of pwa, in this part ,we will dive into it"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://github.com/edward12699/basic-pwa-demo/tree/extend",
                        children: "check the simplest  demo"
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://github.com/edward12699/basic-pwa-demo/tree/pushApi",
                        children: "push api"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "foundation"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Normally, an entire website runs in a single thread. This includes the website's own JavaScript, and all the work to render the website's UI."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "To run computationally expensive tasks, web workers can be used  in the background"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "A service worker is a specific type of web worker that's used to implement PWAs."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Like all web workers, a service worker runs in a separate thread to the main JavaScript code. The main code creates the worker, passing in a URL to the worker's script"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The main code creates the worker, passing in a URL to the worker's script."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The worker and the main code can't directly access each other's state, but can communicate by sending each other messages."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "about communicate with the origin page"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The DOM cannot be manipulated directly in a Service Worker because the Service Worker runs in a separate thread and is not in the same context as the page's DOM."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you want to influence the display of your page by downloading something, you can consider the following two methods:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "After the downloaded data is received in the Service Worker, store the data in a suitable place, such as IndexedDB or a cache. Then, by reading the stored data in the page's JavaScript and updating the page presentation."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Send a message to the page in the service worker, and after receiving the message in the page's JavaScript, perform the corresponding processing to update the page display. You can use the postMessage method to communicate between a service worker and a page."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "these methods need to be monitored and processed in the JavaScript code of the page.\nService Workers can only be used as a background task for data processing and notification, and cannot directly manipulate the presentation of pages."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "postMessage in service worker"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "postMessage used to have two main usages:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "between a page and a pop-up that it spawned"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "between a page and an iframe embedded within it\nit accept three params:"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "message"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "targetOrigin"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "transfer (A sequence of transferable objects that are transferred with the message,The ownership of these objects is given to the destination side and they are no longer usable on the sending side.)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "a basic demo"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-js",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-js",
                    children: [
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// in origin page http://example.com:8080"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " popup ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token dom variable",
                            children: "window"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "open"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"http://example.com"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\npopup",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "postMessage"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"hello there!"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"http://example.com"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// in example.com:8080's script"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token dom variable",
                            children: "window"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "addEventListener"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"message"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token parameter",
                            children: "event"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token arrow operator",
                            children: "=>"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// Do we trust the sender of this message? the verification is needed"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "if"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "event",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "origin"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "!=="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"http://example.com:8080"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "return"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// event.source is window.opener"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: '// event.data is "hello there!"'
                        }),
                        "\n  event",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "source"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "postMessage"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"hi there yourself!  the secret response "'
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "+"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"is: rheeeeet!"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        "\n    event",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "origin"
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
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
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
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "the foundation of it can refer to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",
                        children: "postMessage mdn"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "while we can also use it in service worker for communications to origin page"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "and there is a few differences,notice that i didn't give it a origin when postMessage\nand we use clients.matchAll() to get the active and within scope  origin page",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "\nwe use self.clients.claim() to causes the worker being activated to immediately take over any clients that are not yet controlled\nor\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "clients.matchAll({ includeUncontrolled: true, type: 'window' })"
                    }),
                    "\ndue to some reasons we may loose control of the origin page"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-js",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-js",
                    children: [
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// service-worker.js"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " data ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token literal-property property",
                            children: "message"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'loaded news from remote'"
                        }),
                        " ",
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
                            className: "token keyword control-flow",
                            children: "return"
                        }),
                        " self",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "clients"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "claim"
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
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "then"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
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
                            className: "token arrow operator",
                            children: "=>"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "return"
                        }),
                        " self",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "clients"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "matchAll"
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
                            children: "}"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "then"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token parameter",
                            children: "clients"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token arrow operator",
                            children: "=>"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n    clients",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "forEach"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token parameter",
                            children: "client"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token arrow operator",
                            children: "=>"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n      client",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "postMessage"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token literal-property property",
                            children: "type"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'load news'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " data ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
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
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "then"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
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
                            className: "token arrow operator",
                            children: "=>"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token console class-name",
                            children: "console"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "log"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'News updated'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
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
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-js",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-js",
                    children: [
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "//main.js"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token dom variable",
                            children: "navigator"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "serviceWorker"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "addEventListener"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'message'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token parameter",
                            children: "event"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token arrow operator",
                            children: "=>"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        " type",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " data ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " event",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "data"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "if"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "type ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "==="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'load news'"
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
                            className: "token console class-name",
                            children: "console"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "log"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "data",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "message"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
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
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// notice: if main page wanna postMessage to service Worker, can call it after register its service worker"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token dom variable",
                            children: "navigator"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "serviceWorker"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "controller"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "postMessage"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token literal-property property",
                            children: "action"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'fetchData'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
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
                children: "about the lifecycle of service worker"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In the service worker lifecycle, both the 'install' event and the 'activate' event are fired before the page loads. That's why the array of clients you see in the 'activate' event is empty. If you want to send a message to the client after the page loads, you may need to use it in the 'refetch' or 'push' event handler."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Downloading"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Installing"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Waiting   （self.skipWaiting()）"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Activating\nOnce there are no old Service Workers, or if self.skipWaiting() is called, the new Service Worker enters the activation phase. This phase is typically used to complete all administrative work that cannot be done by legacy service workers, such as cleaning up old caches. At this stage, you can listen for the activate event and make some settings in the callback function for that event"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Idle waiting for the next event trigger"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Terminated"
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Update",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.br, {}),
                            "\n",
                            "To conserve memory, the browser terminates the Service Worker after it has been idle for a period of time. Then, when a network request needs to be processed or another lifecycle event occurs, the browser restarts the Service Worker."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "if take cache first strategy， we may get stale response"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "how to improve it"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "background ability"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "browsers may stop service workers when they think it is appropriate",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "\nHowever, the browser will restart the service worker when an event has happened that it needs to take care of,it looks like the process:"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "In the main app, register a request for the service worker to perform some operation"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "At the appropriate time, the service worker will be restarted if necessary, and an event will fire in the service worker's scope"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "The service worker will perform the operation"
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "background sync (short operations)"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "background fetch (long operations like downloading)"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "With background fetch:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The request is initiated from the main app UI"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Whether or not the main app is open, the browser displays a persistent UI element that notifies the user about the ongoing request, and enables them to cancel it or check its progress"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "When the request is completed with success or failure, or the user has asked to check the request's progress, then the browser starts the service worker (if necessary) and fires the appropriate event in the service worker's scope."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "several apis corresponding to some situations"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "sync"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "it fires as soon as the device has network connectivity again\nin practice, the 'sync' fires after a offline start and recover connections, but not when i switch the internet, the browser has its own judges\n,maybe the offline duration"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "if a service worker doesn't finish handling a sync event in a relatively short time, the browser will stop the service worker. This is an intentional measure to conserve battery life and protect the user's privacy by minimizing the time for which the user's IP address is exposed to the server while the app is in the background."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "2",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "backgroundFetch"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The request is initiated from the main app UI"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Whether or not the main app is open, the browser displays a persistent UI element that notifies the user about the ongoing request, and enables them to cancel it or check its progress"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "When the request is completed with success or failure, or the user has asked to check the request's progress, then the browser starts the service worker (if necessary) and fires the appropriate event in the service worker's scope."
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "3",
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "periodicSync\nWhen the PWA no longer needs periodic background updates, ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "\nthe PWA should ask the browser to stop generating periodic sync events, by calling the unregister() method of periodicSync:"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "summary table"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.thead, {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.th, {
                                    children: "api"
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.th, {
                                    children: "fire condition"
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.th, {
                                    children: "usage"
                                })
                            ]
                        })
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.td, {
                                        children: "sync"
                                    }),
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                                        children: [
                                            "As soon as the device has network connectivity, ",
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "the sync event fires in the service worker scope"
                                        ]
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.td, {
                                        children: 'Suppose a user composes an email and presses "Send". In a traditional website, they must keep the tab open until the app has sent the email: if they close the tab, or the device loses connectivity, then the message will not be sent.'
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.td, {
                                        children: "backgroundFetch"
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.td, {
                                        children: "proactive"
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.td, {
                                        children: "downloading long-time files"
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.td, {
                                        children: "periodicSync"
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.td, {
                                        children: "it's up to the browser how often to generate periodic sync events"
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.td, {
                                        children: "Consider an app that depends on reasonably fresh content, like a news app"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "push"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "and in mdn, the most vital  Warning: When implementing PushManager subscriptions, it is vitally important that you protect against CSRF/XSRF issues in your app. See the following articles for more information:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Preventing CSRF and XSRF Attacks"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "please check ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://developer.mozilla.org/en-US/docs/Web/API/Push_API",
                        children: "https://developer.mozilla.org/en-US/docs/Web/API/Push_API"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The Push API enables a PWA to receive messages pushed from the server, whether the app is running or not. When the message is received by the device, the app's service worker is started and handles the message, and a notification is shown to the user"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    'The specification allows for "silent push" in which no notification is shown, but no browsers support this, because of privacy concerns (for example, that push could then be used to track a user\'s location).',
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "it needs a push service and the info between push service and app server need to be encrypted(so the push service can't read them)  and signed(so the push service knows that the messages are really from your server, and not from someone impersonating your server)."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The push service is operated by the browser vendor or by a third party, and the app server communicates with it using the HTTP Push protocol."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The app server can use a third-party library such as web-push to take care of the protocol details."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "the process is a little complex:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Work prepared in advance:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "As a prerequisite, the app server needs to be provisioned with a public/private key pair, Signing messages needs to follow the VAPID specification"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "prerequisite knowledge:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "ECDH: Elliptic Curve Diffie-Hellman\nIn the ECDH (Elliptic Curve Diffie-Hellman) protocol, each participant generates a pair of public and private keys and sends the public keys to each other.\nEach participant then generates a shared secret using the other's public key and their own private key.\nThis shared secret is the same on both sides, but cannot be deduced from the public key.\nThis allows both parties to securely exchange keys in a public Internet environment without fear of key interception",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.br, {}),
                            "\n",
                            "This shared secret (or shared secret) is used to encrypt and decrypt information during subsequent communications."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "steps:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "the client proxy(mostly the browser) create a new public/private key pair, we call it client public key and client private key pair to distinguish from the app server key pair\n(this process honestly happens in the step2,while i wanna make it more clear,so put it ahead.)"
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "the app uses the PushManager.subscribe() method to subscribe to messages from the server, the subscribe method will finish these things:",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            "send ",
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                                                children: "push service"
                                            }),
                                            " the app server's public key(needed to verify the signature of the app server)"
                                        ]
                                    }),
                                    "\n",
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            "send ",
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                                                children: "app server"
                                            }),
                                            " the endpoint for the push Service"
                                        ]
                                    }),
                                    "\n",
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            "send ",
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                                                children: "app server"
                                            }),
                                            " the client public key (need use in the encrypting process)"
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "app server use its private key and client public key to produce a Shared key, using it to encrypt the payload,\nThe encryption of payload is actually symmetric encryption"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "app server sign the encrypted message using its private key, and send it to push service using http push protocol"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "push service valid the signature using app server's public key to make sure it's not from someone impersonating your server,\nif the signature is valid, the push service queues the message for delivery."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "When the device has network connectivity, the push service delivers the encrypted message to the browser"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "When the client proxy(mostly browser) receives the encrypted message, it produces the same Shared key using client private key and app server's public key,with which it then decrypts the message."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The browser starts the service worker if necessary, and fires an event called push in the service worker's global scope. The event handler is passed a PushEvent object, which contains the message data"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "In its event handler, the service worker does any processing of the message. As usual, the event handler calls event.waitUntil() to ask the browser to keep the service worker running"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "In its event handler, the service worker creates a notification using registration.showNotification()."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "If the user clicks the notification or closes it, the notificationclick and notificationclose, respectively, are fired in the service worker's global scope. These enable the app to handle the user's response to the notification."
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "the following picture illustrate the process,while ignoring the  ordinal numbers cause they are not  corresponding *"
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _images_photos_pwa_push_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                alt: "",
                                className: ""
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "The process by which the client generates a public/private key pair is automated in the browser's Push API, when the pushManager.subscribe() method is called to subscribe to push notifications."
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "waitUntil"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "It can also be used to detect whether that work was successful. In service workers, waitUntil() tells the browser that work is ongoing until the promise settles, and it shouldn't terminate the service worker if it wants that work to complete.\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "it accept a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "promise"
                    }),
                    "\nsee how it handles a async function"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-js",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-js",
                    children: [
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "addEventListener"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"install"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token parameter",
                            children: "event"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token arrow operator",
                            children: "=>"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function-variable function",
                            children: "preCache"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "async"
                        }),
                        " ",
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
                            className: "token arrow operator",
                            children: "=>"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " cache ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "await"
                        }),
                        " caches",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "open"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"static-v1"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "return"
                        }),
                        " cache",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "addAll"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "["
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"/"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"/about/"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"/static/styles.css"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "]"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
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
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n  event",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "waitUntil"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "preCache"
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
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n"
                    ]
                })
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