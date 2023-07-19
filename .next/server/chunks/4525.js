"use strict";
exports.id = 4525;
exports.ids = [4525];
exports.modules = {

/***/ 4525:
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
    date: "2023-06-28",
    title: "introducing-to-simplest-https-server",
    description: "sometimes we wanna have a https server in the local development environment"
};
const MDXLayout = (props)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__/* .ArticleLayout */ .B, Object.assign({
        meta: meta
    }, props));
function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        ol: "ol",
        li: "li",
        code: "code",
        ul: "ul",
        strong: "strong",
        pre: "pre",
        span: "span"
    }, props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "sometimes we wanna have a https server in the local development environment\nwe will realize it within node.js"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Generate a self-signed SSL certificate for HTTPS connections. we can use the OpenSSL tool to generate a certificate:\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem"
                            }),
                            "\nThe preceding command generates a self-signed certificate file - certificate.pem, and a private key file, key.pem, valid for one year."
                        ]
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
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Notice(important!)"
                            }),
                            ":  you can create more effective certification to pass the validation of browser, refer to my another blog ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "'recording-solving-chrome-my-certification-error'"
                            }),
                            ", all the following steps are the same except that need to replace the 'certificate.pem'\nand 'key.pem' with newly created 'mydomain.crt' and 'mydomain.key'"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "2",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Use the built-in HTTPS module"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-js",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-js",
                    children: [
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " https ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "require"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'https'"
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
                            className: "token keyword",
                            children: "const"
                        }),
                        " fs ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "require"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'fs'"
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
                            children: "// SSL 证书文件路径"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " privateKeyPath ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'key.pem'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " certificatePath ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'certificate.pem'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// 创建 HTTPS 服务器,"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " server ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " https",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "createServer"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "{"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token literal-property property",
                            children: "key"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " fs",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "readFileSync"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "privateKeyPath",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token literal-property property",
                            children: "cert"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " fs",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "readFileSync"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "certificatePath",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
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
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token parameter",
                            children: [
                                "req",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token punctuation",
                                    children: ","
                                }),
                                " res"
                            ]
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
                        "\n  res",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "writeHead"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token number",
                            children: "200"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n  res",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "end"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'Hello, HTTPS World!'"
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
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " port ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token number",
                            children: "8000"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\nserver",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "listen"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "port",
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
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token template-string",
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token template-punctuation string",
                                    children: "`"
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token string",
                                    children: "HTTPS server is running on port "
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token interpolation",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token interpolation-punctuation punctuation",
                                            children: "${"
                                        }),
                                        "port",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token interpolation-punctuation punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token template-punctuation string",
                                    children: "`"
                                })
                            ]
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
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "If you want to create a static resource server, you can use it with Express"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-js",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-js",
                    children: [
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " express ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "require"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'express'"
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
                            className: "token keyword",
                            children: "const"
                        }),
                        " https ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "require"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'https'"
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
                            className: "token keyword",
                            children: "const"
                        }),
                        " fs ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "require"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'fs'"
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
                            className: "token keyword",
                            children: "const"
                        }),
                        " path ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "require"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'path'"
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
                            className: "token keyword",
                            children: "const"
                        }),
                        " app ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "express"
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
                            children: ";"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "//这里指定是在public，也可以简单一点直接根目录'/'"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " staticRoot ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " path",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "join"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "__dirname",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'public'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\napp",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "use"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "express",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "static"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "staticRoot",
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
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " port ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token number",
                            children: "8000"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " privateKeyPath ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'key.pem'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " certificatePath ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'certificate.pem'"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " privateKey ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " fs",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "readFileSync"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "privateKeyPath",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'utf8'"
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
                            className: "token keyword",
                            children: "const"
                        }),
                        " certificate ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " fs",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "readFileSync"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "certificatePath",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: "'utf8'"
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
                            className: "token keyword",
                            children: "const"
                        }),
                        " credentials ",
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
                            children: "key"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " privateKey",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token literal-property property",
                            children: "cert"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: ":"
                        }),
                        " certificate ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " server ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " https",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "createServer"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "credentials",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ","
                        }),
                        " app",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n\nserver",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "listen"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "port",
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
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "token template-string",
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token template-punctuation string",
                                    children: "`"
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token string",
                                    children: "Static resource server is running on port "
                                }),
                                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                    className: "token interpolation",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token interpolation-punctuation punctuation",
                                            children: "${"
                                        }),
                                        "port",
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "token interpolation-punctuation punctuation",
                                            children: "}"
                                        })
                                    ]
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "token template-punctuation string",
                                    children: "`"
                                })
                            ]
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
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "3",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "make the browser trust your certificate"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "it depends, you need check for the methods based on your platform"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "ex. macos:\n双击 cert.pem 证书文件，然后选择“钥匙串访问”。在钥匙串访问应用程序中，将证书拖放到“系统”类别下的“钥匙串”列表中。然后，双击证书，展开“信任”部分，选择“始终信任”选项。"
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