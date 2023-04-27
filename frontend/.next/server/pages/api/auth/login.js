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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/login.ts":
/*!*************************************!*\
  !*** ./src/pages/api/auth/login.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst login = async (req, res)=>{\n    if (req.method === \"POST\") {\n        try {\n            const { email , password  } = req.body;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${process.env.SERVICE_DOMAIN}/auth/login`, {\n                email,\n                password\n            });\n            res.status(200).json(response.data);\n        } catch (error) {\n            res.status(error.response.status).json({\n                message: error.message\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFRekIsTUFBTUMsUUFBUSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDakUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsSUFBSTtZQUNGLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR0osSUFBSUssSUFBSTtZQUNwQyxNQUFNQyxXQUFXLE1BQU1SLGtEQUFVLENBQy9CLENBQUMsRUFBRVUsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQzFDO2dCQUNFUDtnQkFDQUM7WUFDRjtZQUdGSCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTixTQUFTTyxJQUFJO1FBQ3BDLEVBQUUsT0FBT0MsT0FBWTtZQUNuQmIsSUFBSVUsTUFBTSxDQUFDRyxNQUFNUixRQUFRLENBQUNLLE1BQU0sRUFBRUMsSUFBSSxDQUFDO2dCQUFFRyxTQUFTRCxNQUFNQyxPQUFPO1lBQUM7UUFDbEU7SUFDRixPQUFPO1FBQ0xkLElBQUllLFNBQVMsQ0FBQyxTQUFTO1FBQ3ZCZixJQUFJVSxNQUFNLENBQUMsS0FBS00sR0FBRyxDQUFDO0lBQ3RCLENBQUM7QUFDSDtBQUVBLGlFQUFlbEIsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLnRzPzE3MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxudHlwZSBMb2dpblJlcXVlc3RCb2R5ID0ge1xuICBlbWFpbDogc3RyaW5nXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn1cblxuY29uc3QgbG9naW4gPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHkgYXMgTG9naW5SZXF1ZXN0Qm9keVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBgJHtwcm9jZXNzLmVudi5TRVJWSUNFX0RPTUFJTn0vYXV0aC9sb2dpbmAsXG4gICAgICAgIHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlLmRhdGEpXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmVzLnN0YXR1cyhlcnJvci5yZXNwb25zZS5zdGF0dXMpLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKVxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBOb3QgQWxsb3dlZCcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5cbiJdLCJuYW1lcyI6WyJheGlvcyIsImxvZ2luIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJyZXNwb25zZSIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiU0VSVklDRV9ET01BSU4iLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/login.ts"));
module.exports = __webpack_exports__;

})();