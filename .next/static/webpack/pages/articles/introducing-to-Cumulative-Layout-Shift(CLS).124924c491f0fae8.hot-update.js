"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles/introducing-to-Cumulative-Layout-Shift(CLS)",{

/***/ "./src/pages/articles/introducing-to-Cumulative-Layout-Shift(CLS).mdx":
/*!****************************************************************************!*\
  !*** ./src/pages/articles/introducing-to-Cumulative-Layout-Shift(CLS).mdx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"meta\": function() { return /* binding */ meta; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ArticleLayout */ \"./src/components/ArticleLayout.jsx\");\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/future/image */ \"./node_modules/next/future/image.js\");\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_2__);\n/*@jsxRuntime automatic @jsxImportSource react*/ \n\nvar meta = {\n    author: \"edward\",\n    date: \"2023-06-18\",\n    title: \"introducing-to-Cumulative-Layout-Shift(CLS)\",\n    description: \"Cumulative-Layout-Shift\"\n};\n\nvar MDXLayout = function(props) {\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ArticleLayout__WEBPACK_IMPORTED_MODULE_1__.ArticleLayout, Object.assign({\n        meta: meta\n    }, props));\n};\n_c = MDXLayout;\nfunction _createMdxContent(props) {\n    var _components = Object.assign({\n        h2: \"h2\",\n        p: \"p\"\n    }, props.components);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {\n                children: \"what‘s the problem？\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                children: \"Have you ever been reading an article online when something suddenly changes on the page\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {\n                children: \"how it happens\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                children: \"Unexpected movement of page content usually happens because resources are loaded asynchronously or DOM elements get dynamically added to the page above existing content.\\nThe culprit might be an image or video with unknown dimensions, a font that renders larger or smaller than its fallback, or a third-party ad or widget that dynamically resizes itself.\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                children: \"What makes this issue even more problematic is that how a site functions in development is often quite different from how users experience it.\\nPersonalized or third-party content often doesn't behave the same in development as it does in production, test images are often already in the developer's browser cache, and API calls that run locally are often so fast that the delay isn't noticeable.\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {\n                children: \"what is CLS\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {\n                children: \"CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page.\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {\n                children: \"what's the metric of CLS\"\n            }),\n            \"\\n\",\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: \"../../images/photos/cls-metric.png\",\n                alt: \"metric of cls\"\n            })\n        ]\n    });\n}\nfunction MDXContent() {\n    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, Object.assign({}, props, {\n        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, props)\n    }));\n}\n_c1 = MDXContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MDXContent);\nvar _c, _c1;\n$RefreshReg$(_c, \"MDXLayout\");\n$RefreshReg$(_c1, \"MDXContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aWNsZXMvaW50cm9kdWNpbmctdG8tQ3VtdWxhdGl2ZS1MYXlvdXQtU2hpZnQoQ0xTKS5tZHguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsOENBQThDLEdBQWhCO0FBRWpCO0FBQ1gsSUFBUU8sSUFBQTtJQUNSQyxNQUFNO0lBQ05DLElBQUEsY0FBTztJQUNQQyxLQUFBLCtDQUNFO0lBQUFDLFdBQUE7Q0FBQTtBQUd1QjtBQUFBLElBQWNFLFNBQU0sR0FBQUMsU0FBQUEsS0FBQTtXQUFBWCxzREFBQSxDQUFBRyxvRUFBQSxFQUFBUyxNQUFBLENBQUFDLE1BQUE7UUFBQVQsSUFBVSxFQUFBQSxJQUFBO0tBQUEsRUFBQU8sS0FBQTtDQUFBO0FBQWhCRCxLQUFBQSxTQUFNO0FBQVUsU0FBQUksaUJBQUEsQ0FBQUgsS0FBQTtJQUFBLElBQUFJLFdBQUEsR0FBQUgsTUFBQSxDQUFBQyxNQUFBO1FBQUFHLEVBQUE7UUFBQUMsQ0FBQTtLQUFBLEVBQUFOLEtBQUEsQ0FBQU8sVUFBQTtJQUFBLE9BQUFoQix1REFBQSxDQUFBSix1REFBQTtRQUFBcUIsUUFBQTtZQUFBbkIsc0RBRXRELENBQUFlLFdBQUEsQ0FBQUMsRUFBQTtnQkFBQUcsUUFBQTthQUFBO1lBQUE7WUFBQW5CLHNEQUVILENBQUFlLFdBQUEsQ0FBQUUsQ0FBQTtnQkFBQUUsUUFBQTthQUFBO1lBQUE7WUFBQW5CLHNEQUVHLENBQUFlLFdBQUEsQ0FBQUMsRUFBQTtnQkFBQUcsUUFBQTthQUFBO1lBQUE7WUFBQW5CLHNEQUVILENBQUFlLFdBQUEsQ0FBQUUsQ0FBQTtnQkFBQUUsUUFBQTthQUFBO1lBQUE7WUFBQW5CLHNEQUdBLENBQUFlLFdBQUEsQ0FBQUUsQ0FBQTtnQkFBQUUsUUFBQTthQUFBO1lBQUE7WUFBQW5CLHNEQUdHLENBQUFlLFdBQUEsQ0FBQUMsRUFBQTtnQkFBQUcsUUFBQTthQUFBO1lBQUE7WUFBQW5CLHNEQUVILENBQUFlLFdBQUEsQ0FBQUUsQ0FBQTtnQkFBQUUsUUFBQTthQUFBO1lBQUE7WUFBQW5CLHNEQUdHLENBQUFlLFdBQUEsQ0FBQUMsRUFBQTtnQkFBQUcsUUFBQTthQUFBO1lBQUE7WUFBQW5CLHNEQUFBO2dCQUFBb0IsR0FBQTtnQkFBQUMsR0FBQTthQUFBO1NBQUE7S0FBQTtDQUFBO0FBQUEsU0FBQUMsVUFBQTtRQUFBWCxLQUFBLEdBQUFBLCtDQUFBO0lBQUEsT0FBQVgsc0RBQUEsQ0FBQVUsU0FBQSxFQUFBRSxNQUFBLENBQUFDLE1BQUEsS0FBQUYsS0FBQTtRQUFBUSxRQUFBLEVBQUFuQixzREFBQSxDQUFBYyxpQkFBQSxFQUFBSCxLQUFBO0tBQUE7Q0FBQTtBQUFBVyxNQUFBQSxVQUFBO0FBQUEsK0RBQUFBLFVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FydGljbGVzL2ludHJvZHVjaW5nLXRvLUN1bXVsYXRpdmUtTGF5b3V0LVNoaWZ0KENMUykubWR4P2MwYmEiXSwic291cmNlc0NvbnRlbnQiOlsiLypAanN4UnVudGltZSBhdXRvbWF0aWMgQGpzeEltcG9ydFNvdXJjZSByZWFjdCovXG5pbXBvcnQge0ZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHN9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHtBcnRpY2xlTGF5b3V0fSBmcm9tICdAL2NvbXBvbmVudHMvQXJ0aWNsZUxheW91dCc7XG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgYXV0aG9yOiAnZWR3YXJkJyxcbiAgZGF0ZTogJzIwMjMtMDYtMTgnLFxuICB0aXRsZTogJ2ludHJvZHVjaW5nLXRvLUN1bXVsYXRpdmUtTGF5b3V0LVNoaWZ0KENMUyknLFxuICBkZXNjcmlwdGlvbjogJ0N1bXVsYXRpdmUtTGF5b3V0LVNoaWZ0J1xufTtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2Z1dHVyZS9pbWFnZSc7XG5jb25zdCBNRFhMYXlvdXQgPSBwcm9wcyA9PiBfanN4KEFydGljbGVMYXlvdXQsIE9iamVjdC5hc3NpZ24oe1xuICBtZXRhOiBtZXRhXG59LCBwcm9wcykpO1xuZnVuY3Rpb24gX2NyZWF0ZU1keENvbnRlbnQocHJvcHMpIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMjogXCJoMlwiLFxuICAgIHA6IFwicFwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpO1xuICByZXR1cm4gX2pzeHMoX0ZyYWdtZW50LCB7XG4gICAgY2hpbGRyZW46IFtfanN4KF9jb21wb25lbnRzLmgyLCB7XG4gICAgICBjaGlsZHJlbjogXCJ3aGF04oCYcyB0aGUgcHJvYmxlbe+8n1wiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMucCwge1xuICAgICAgY2hpbGRyZW46IFwiSGF2ZSB5b3UgZXZlciBiZWVuIHJlYWRpbmcgYW4gYXJ0aWNsZSBvbmxpbmUgd2hlbiBzb21ldGhpbmcgc3VkZGVubHkgY2hhbmdlcyBvbiB0aGUgcGFnZVwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuaDIsIHtcbiAgICAgIGNoaWxkcmVuOiBcImhvdyBpdCBoYXBwZW5zXCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogXCJVbmV4cGVjdGVkIG1vdmVtZW50IG9mIHBhZ2UgY29udGVudCB1c3VhbGx5IGhhcHBlbnMgYmVjYXVzZSByZXNvdXJjZXMgYXJlIGxvYWRlZCBhc3luY2hyb25vdXNseSBvciBET00gZWxlbWVudHMgZ2V0IGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBwYWdlIGFib3ZlIGV4aXN0aW5nIGNvbnRlbnQuXFxuVGhlIGN1bHByaXQgbWlnaHQgYmUgYW4gaW1hZ2Ugb3IgdmlkZW8gd2l0aCB1bmtub3duIGRpbWVuc2lvbnMsIGEgZm9udCB0aGF0IHJlbmRlcnMgbGFyZ2VyIG9yIHNtYWxsZXIgdGhhbiBpdHMgZmFsbGJhY2ssIG9yIGEgdGhpcmQtcGFydHkgYWQgb3Igd2lkZ2V0IHRoYXQgZHluYW1pY2FsbHkgcmVzaXplcyBpdHNlbGYuXCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5wLCB7XG4gICAgICBjaGlsZHJlbjogXCJXaGF0IG1ha2VzIHRoaXMgaXNzdWUgZXZlbiBtb3JlIHByb2JsZW1hdGljIGlzIHRoYXQgaG93IGEgc2l0ZSBmdW5jdGlvbnMgaW4gZGV2ZWxvcG1lbnQgaXMgb2Z0ZW4gcXVpdGUgZGlmZmVyZW50IGZyb20gaG93IHVzZXJzIGV4cGVyaWVuY2UgaXQuXFxuUGVyc29uYWxpemVkIG9yIHRoaXJkLXBhcnR5IGNvbnRlbnQgb2Z0ZW4gZG9lc24ndCBiZWhhdmUgdGhlIHNhbWUgaW4gZGV2ZWxvcG1lbnQgYXMgaXQgZG9lcyBpbiBwcm9kdWN0aW9uLCB0ZXN0IGltYWdlcyBhcmUgb2Z0ZW4gYWxyZWFkeSBpbiB0aGUgZGV2ZWxvcGVyJ3MgYnJvd3NlciBjYWNoZSwgYW5kIEFQSSBjYWxscyB0aGF0IHJ1biBsb2NhbGx5IGFyZSBvZnRlbiBzbyBmYXN0IHRoYXQgdGhlIGRlbGF5IGlzbid0IG5vdGljZWFibGUuXCJcbiAgICB9KSwgXCJcXG5cIiwgX2pzeChfY29tcG9uZW50cy5oMiwge1xuICAgICAgY2hpbGRyZW46IFwid2hhdCBpcyBDTFNcIlxuICAgIH0pLCBcIlxcblwiLCBfanN4KF9jb21wb25lbnRzLnAsIHtcbiAgICAgIGNoaWxkcmVuOiBcIkNMUyBpcyBhIG1lYXN1cmUgb2YgdGhlIGxhcmdlc3QgYnVyc3Qgb2YgbGF5b3V0IHNoaWZ0IHNjb3JlcyBmb3IgZXZlcnkgdW5leHBlY3RlZCBsYXlvdXQgc2hpZnQgdGhhdCBvY2N1cnMgZHVyaW5nIHRoZSBlbnRpcmUgbGlmZXNwYW4gb2YgYSBwYWdlLlwiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goX2NvbXBvbmVudHMuaDIsIHtcbiAgICAgIGNoaWxkcmVuOiBcIndoYXQncyB0aGUgbWV0cmljIG9mIENMU1wiXG4gICAgfSksIFwiXFxuXCIsIF9qc3goXCJpbWdcIiwge1xuICAgICAgc3JjOiBcIi4uLy4uL2ltYWdlcy9waG90b3MvY2xzLW1ldHJpYy5wbmdcIixcbiAgICAgIGFsdDogXCJtZXRyaWMgb2YgY2xzXCJcbiAgICB9KV1cbiAgfSk7XG59XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgcmV0dXJuIF9qc3goTURYTGF5b3V0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgIGNoaWxkcmVuOiBfanN4KF9jcmVhdGVNZHhDb250ZW50LCBwcm9wcylcbiAgfSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJBcnRpY2xlTGF5b3V0IiwibWV0YSIsImF1dGhvciIsImRhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiSW1hZ2UiLCJNRFhMYXlvdXQiLCJwcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsIl9jcmVhdGVNZHhDb250ZW50IiwiX2NvbXBvbmVudHMiLCJoMiIsInAiLCJjb21wb25lbnRzIiwiY2hpbGRyZW4iLCJzcmMiLCJhbHQiLCJNRFhDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/articles/introducing-to-Cumulative-Layout-Shift(CLS).mdx\n"));

/***/ })

});