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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst logout = async (req, res)=>{\n    try {\n        console.log(\"logout\");\n        await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${process.env.SERVICE_DOMAIN}/auth/logout`, {}, {\n            headers: {\n                cookie: req.headers.cookie || \"\"\n            },\n            withCredentials: true\n        });\n        res.status(200).json({\n            success: true\n        });\n    } catch (error) {\n        res.status(500).json({\n            success: false,\n            message: error.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9nb3V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBR3pCLE1BQU1DLFNBQVMsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ2xFLElBQUk7UUFDRkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUwsa0RBQVUsQ0FDZCxDQUFDLEVBQUVPLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUMzQyxDQUFDLEdBQ0Q7WUFDRUMsU0FBUztnQkFDUEMsUUFBUVQsSUFBSVEsT0FBTyxDQUFDQyxNQUFNLElBQUk7WUFDaEM7WUFDQUMsaUJBQWlCLElBQUk7UUFDdkI7UUFHRlQsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTLElBQUk7UUFBQztJQUN2QyxFQUFFLE9BQU9DLE9BQVk7UUFDbkJiLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxLQUFLO1lBQUVFLFNBQVNELE1BQU1DLE9BQU87UUFBQztJQUNoRTtBQUNGO0FBRUEsaUVBQWVoQixNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9nb3V0LnRzPzkyYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbmNvbnN0IGxvZ291dCA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKVxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5TRVJWSUNFX0RPTUFJTn0vYXV0aC9sb2dvdXRgLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBjb29raWU6IHJlcS5oZWFkZXJzLmNvb2tpZSB8fCAnJ1xuICAgICAgICB9LFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSlcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dvdXRcbiJdLCJuYW1lcyI6WyJheGlvcyIsImxvZ291dCIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIlNFUlZJQ0VfRE9NQUlOIiwiaGVhZGVycyIsImNvb2tpZSIsIndpdGhDcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/logout.ts\n");

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