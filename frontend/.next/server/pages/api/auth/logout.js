"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/logout";
exports.ids = ["pages/api/auth/logout"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/logout.ts":
/*!**************************************!*\
  !*** ./src/pages/api/auth/logout.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst logout = async (req, res)=>{\n    try {\n        await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${process.env.SERVICE_DOMAIN}/auth/logout`, {}, {\n            headers: {\n                cookie: req.headers.cookie || \"\"\n            },\n            withCredentials: true\n        });\n        res.status(200).json({\n            success: true\n        });\n    } catch (error) {\n        res.status(500).json({\n            success: false,\n            message: error.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9nb3V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBR3pCLE1BQU1DLFNBQVMsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ2xFLElBQUk7UUFDRixNQUFNSCxrREFBVSxDQUNkLENBQUMsRUFBRUssUUFBUUMsR0FBRyxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQzNDLENBQUMsR0FDRDtZQUNFQyxTQUFTO2dCQUNQQyxRQUFRUCxJQUFJTSxPQUFPLENBQUNDLE1BQU0sSUFBSTtZQUNoQztZQUNBQyxpQkFBaUIsSUFBSTtRQUN2QjtRQUdGUCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVMsSUFBSTtRQUFDO0lBQ3ZDLEVBQUUsT0FBT0MsT0FBWTtRQUNuQlgsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTLEtBQUs7WUFBRUUsU0FBU0QsTUFBTUMsT0FBTztRQUFDO0lBQ2hFO0FBQ0Y7QUFFQSxpRUFBZWQsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL2xvZ291dC50cz85MmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG5jb25zdCBsb2dvdXQgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuU0VSVklDRV9ET01BSU59L2F1dGgvbG9nb3V0YCxcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgY29va2llOiByZXEuaGVhZGVycy5jb29raWUgfHwgJydcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9nb3V0XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJsb2dvdXQiLCJyZXEiLCJyZXMiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIlNFUlZJQ0VfRE9NQUlOIiwiaGVhZGVycyIsImNvb2tpZSIsIndpdGhDcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/logout.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/logout.ts"));
module.exports = __webpack_exports__;

})();