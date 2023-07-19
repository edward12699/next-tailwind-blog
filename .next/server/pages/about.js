"use strict";
(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 2974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/future/image.js
var future_image = __webpack_require__(1608);
var image_default = /*#__PURE__*/__webpack_require__.n(future_image);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(956);
// EXTERNAL MODULE: ./src/components/SocialIcons.jsx
var SocialIcons = __webpack_require__(4378);
;// CONCATENATED MODULE: ./src/images/portrait.jpg
/* harmony default export */ const portrait = ({"src":"/_next/static/media/portrait.79754e9e.jpg","height":800,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAnYP/xAAcEAEBAAEFAQAAAAAAAAAAAAACBAMAAQURUhL/2gAIAQEAAT8As5FUSQTI4zPim3AAHz0va9LX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});
;// CONCATENATED MODULE: ./src/pages/about.jsx








function SocialLink({ className , href , children , icon: Icon  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: external_clsx_default()(className, "flex"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: href,
            className: "group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                    className: "h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "ml-4",
                    children: children
                })
            ]
        })
    });
}
function MailIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        })
    });
}
function About() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "About - Edward"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "I’m Edward. I live in New York City, where I design the future."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-16 sm:mt-32",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:pl-20",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "max-w-xs px-2.5 lg:max-w-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: portrait,
                                    alt: "",
                                    sizes: "(min-width: 1024px) 32rem, 20rem",
                                    className: "aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:order-first lg:row-span-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                                    children: "I’m Edward. I live in New York City, where I design the future."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("em", {
                                                    children: "can"
                                                }),
                                                " ",
                                                "make it to orbit — from the comfort of their own backyards."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:pl-20",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                role: "list",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                        href: "#",
                                        icon: SocialIcons/* TwitterIcon */.Zm,
                                        children: "Follow on Twitter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                        href: "#",
                                        icon: SocialIcons/* InstagramIcon */.yu,
                                        className: "mt-4",
                                        children: "Follow on Instagram"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                        href: "#",
                                        icon: SocialIcons/* GitHubIcon */.fy,
                                        className: "mt-4",
                                        children: "Follow on GitHub"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                        href: "#",
                                        icon: SocialIcons/* LinkedInIcon */.nI,
                                        className: "mt-4",
                                        children: "Follow on LinkedIn"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                        href: "mailto:spencer@planetaria.tech",
                                        icon: MailIcon,
                                        className: "mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40",
                                        children: "spencer@planetaria.tech"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1608,1114,2952,1664,956,4378], () => (__webpack_exec__(2974)));
module.exports = __webpack_exports__;

})();