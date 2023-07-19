"use strict";
(() => {
var exports = {};
exports.id = 3327;
exports.ids = [3327];
exports.modules = {

/***/ 8081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/planetaria.ecd81ade.svg","height":32,"width":32});

/***/ }),

/***/ 9622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/future/image.js
var future_image = __webpack_require__(1608);
var image_default = /*#__PURE__*/__webpack_require__.n(future_image);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/Card.jsx
var Card = __webpack_require__(6539);
// EXTERNAL MODULE: ./src/components/SimpleLayout.jsx
var SimpleLayout = __webpack_require__(1439);
;// CONCATENATED MODULE: ./src/images/logos/animaginary.svg
/* harmony default export */ const animaginary = ({"src":"/_next/static/media/animaginary.8d221e52.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/images/logos/cosmos.svg
/* harmony default export */ const cosmos = ({"src":"/_next/static/media/cosmos.c70b0295.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/images/logos/helio-stream.svg
/* harmony default export */ const helio_stream = ({"src":"/_next/static/media/helio-stream.2ac8d11f.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/images/logos/open-shuttle.svg
/* harmony default export */ const open_shuttle = ({"src":"/_next/static/media/open-shuttle.db0327e4.svg","height":32,"width":32});
// EXTERNAL MODULE: ./src/images/logos/planetaria.svg
var planetaria = __webpack_require__(8081);
;// CONCATENATED MODULE: ./src/pages/projects.jsx










const projects = [
    {
        name: "Planetaria",
        description: "Creating technology to empower civilians to explore space on their own terms.",
        link: {
            href: "http://planetaria.tech",
            label: "planetaria.tech"
        },
        logo: planetaria/* default */.Z
    },
    {
        name: "Animaginary",
        description: "High performance web animation library, hand-written in optimized WASM.",
        link: {
            href: "#",
            label: "github.com"
        },
        logo: animaginary
    },
    {
        name: "HelioStream",
        description: "Real-time video streaming library, optimized for interstellar transmission.",
        link: {
            href: "#",
            label: "github.com"
        },
        logo: helio_stream
    },
    {
        name: "cosmOS",
        description: "The operating system that powers our Planetaria space shuttles.",
        link: {
            href: "#",
            label: "github.com"
        },
        logo: cosmos
    },
    {
        name: "OpenShuttle",
        description: "The schematics for the first rocket I designed that successfully made it to orbit.",
        link: {
            href: "#",
            label: "github.com"
        },
        logo: open_shuttle
    }, 
];
function LinkIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z",
            fill: "currentColor"
        })
    });
}
function Projects() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Projects - Edward"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Things I’ve made trying to put my dent in the universe."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SimpleLayout/* SimpleLayout */.X, {
                title: "Things I’ve made trying to put my dent in the universe.",
                intro: "I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    role: "list",
                    className: "grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3",
                    children: projects.map((project)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
                            as: "li",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: project.logo,
                                        alt: "",
                                        className: "h-8 w-8",
                                        unoptimized: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Link */.Z.Link, {
                                        href: project.link.href,
                                        children: project.name
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Description */.Z.Description, {
                                    children: project.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(LinkIcon, {
                                            className: "h-6 w-6 flex-none"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "ml-2",
                                            children: project.link.label
                                        })
                                    ]
                                })
                            ]
                        }, project.name))
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
var __webpack_exports__ = __webpack_require__.X(0, [1608,1114,2952,1664,956,1439,6539], () => (__webpack_exec__(9622)));
module.exports = __webpack_exports__;

})();