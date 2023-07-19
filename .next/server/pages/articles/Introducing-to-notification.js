"use strict";
(() => {
var exports = {};
exports.id = 798;
exports.ids = [798,6701,3179,5527];
exports.modules = {

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 4871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/notification-reset.4a1fb413.png","height":666,"width":658,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX////+/v79/f38/P38/Pz7/P37+/v6+vz6+vr6+vn5+fn3+Pz2+Pz39/f39/b29/f39vb29vf19vn29vb29vX09fj19fX09PT08/Px8fHv7++ztbOsr62mqaejpqOipqOfpKC+owSWAAAARElEQVR42hXBCRJAMBAEwJlNECGusG7r/69UuvGe122PGY6oxE9jSoHiMWx7FIyKslomBwJ10bSOJDTPXQAFuV89RcIHgFoC69e6ZGgAAAAASUVORK5CYII="});

/***/ }),

/***/ 4725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/notification-success.6f80ceae.png","height":222,"width":784,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPUlEQVR42gUASQqAINCnd2glsRoxmIZEHfHmgi8UIc+pVA9B2xa4c8zElW5chYLNuGfWy45S/Rex+dILeAzUwRyaJGoG4AAAAABJRU5ErkJggg=="});

/***/ }),

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

/***/ 5527:
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
/* harmony import */ var _images_photos_notification_reset_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4871);
/* harmony import */ var _images_photos_notification_success_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4725);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__]);
_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*@jsxRuntime automatic @jsxImportSource react*/ 

const meta = {
    author: "edward",
    date: "2023-07-04",
    title: "Introducing-to-notification",
    description: "web notification"
};



const MDXLayout = (props)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__/* .ArticleLayout */ .B, Object.assign({
        meta: meta
    }, props));
function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        ol: "ol",
        li: "li",
        pre: "pre",
        code: "code",
        span: "span"
    }, props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "官方demo 比较清楚了，附上几点说明"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "在requestPermission 操作以后，如果用户不选择，而是直接关闭，如此几番后，浏览器不会再次弹出对话框，\n而此时，Notification.requestPermission() 返回的promise的状态也一直保持在了pending ，说明此时一直处于等待用户选择的状态\n此时要改变这种状态，以chrome为例，可以点击地址栏前面的符号，然后重制notification的状态，如图"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: _images_photos_notification_reset_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                alt: "",
                className: ""
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "2",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "浏览器需要显示通知，除了获得用户的允许以外，还需要系统允许，以macos 为例，需要在通知中打开相应浏览器的通知权限，不然也是无法通知\n，一个简单的校验方式是观察notification的promise 是成功还是失败\n如果成功，但还是没有通知出现，基本就是系统关闭了浏览器的通知权限。如果成，以chrome 为例，通知应该像这样从右侧出现："
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: _images_photos_notification_success_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                alt: "",
                className: ""
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                className: "language-js",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    className: "language-js",
                    children: [
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "function"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "notifyMe"
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
                            className: "token keyword control-flow",
                            children: "if"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "!"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"Notification"'
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "in"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token dom variable",
                            children: "window"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
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
                            className: "token comment",
                            children: "// Check if the browser supports notifications"
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token function",
                            children: "alert"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"This browser does not support desktop notification"'
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
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "else"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "if"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "Notification"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "permission"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "==="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"granted"'
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
                            className: "token comment",
                            children: "// Check whether notification permissions have already been granted;"
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// if so, create a notification"
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " notification ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "new"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token class-name",
                            children: "Notification"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"Hi there!"'
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
                            className: "token comment",
                            children: "// …"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "else"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "if"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "Notification"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token property-access",
                            children: "permission"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "!=="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"denied"'
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
                            className: "token comment",
                            children: "// We need to ask the user for permission"
                        }),
                        "\n    ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token maybe-class-name",
                            children: "Notification"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "."
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token method function property-access",
                            children: "requestPermission"
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
                            className: "token parameter",
                            children: "permission"
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
                        "\n      ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// If the user accepts, let's create a notification"
                        }),
                        "\n      ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword control-flow",
                            children: "if"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        "permission ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "==="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"granted"'
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
                        "\n        ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "const"
                        }),
                        " notification ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token operator",
                            children: "="
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token keyword",
                            children: "new"
                        }),
                        " ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token class-name",
                            children: "Notification"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "("
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token string",
                            children: '"Hi there!"'
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ")"
                        }),
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: ";"
                        }),
                        "\n        ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// …"
                        }),
                        "\n      ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
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
                        "\n\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// At last, if the user has denied notifications, and you"
                        }),
                        "\n  ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token comment",
                            children: "// want to be respectful there is no need to bother them anymore."
                        }),
                        "\n",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "token punctuation",
                            children: "}"
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

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [1608,1114,5953,956], () => (__webpack_exec__(5527)));
module.exports = __webpack_exports__;

})();