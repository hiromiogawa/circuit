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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// /pages/api/auth/login.ts\n\nconst login = async (req, res)=>{\n    try {\n        // Forward the request to the backend\n        const backendRes = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${process.env.SERVICE_DOMAIN}/auth/login`, req.body, {\n            headers: {\n                cookie: req.headers.cookie || \"\"\n            },\n            withCredentials: true\n        });\n        // バックエンドから受け取ったセッション Cookie を設定する\n        const setCookie = backendRes.headers[\"set-cookie\"];\n        if (setCookie) {\n            res.setHeader(\"Set-Cookie\", setCookie);\n        }\n        // バックエンドからの応答を転送する\n        res.status(backendRes.status).json(backendRes.data);\n    } catch (error) {\n        res.status(error.response.status).json(error.response.data);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyQkFBMkI7QUFFRjtBQUV6QixNQUFNQyxRQUFRLE9BQU9DLEtBQXFCQyxNQUF5QjtJQUNqRSxJQUFJO1FBQ0YscUNBQXFDO1FBQ3JDLE1BQU1DLGFBQWEsTUFBTUosa0RBQVUsQ0FDakMsQ0FBQyxFQUFFTSxRQUFRQyxHQUFHLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFDMUNOLElBQUlPLElBQUksRUFDUjtZQUNFQyxTQUFTO2dCQUNQQyxRQUFRVCxJQUFJUSxPQUFPLENBQUNDLE1BQU0sSUFBSTtZQUNoQztZQUNBQyxpQkFBaUIsSUFBSTtRQUN2QjtRQUdGLGtDQUFrQztRQUNsQyxNQUFNQyxZQUFZVCxXQUFXTSxPQUFPLENBQUMsYUFBYTtRQUNsRCxJQUFJRyxXQUFXO1lBQ2JWLElBQUlXLFNBQVMsQ0FBQyxjQUFjRDtRQUM5QixDQUFDO1FBRUQsbUJBQW1CO1FBQ25CVixJQUFJWSxNQUFNLENBQUNYLFdBQVdXLE1BQU0sRUFBRUMsSUFBSSxDQUFDWixXQUFXYSxJQUFJO0lBQ3BELEVBQUUsT0FBT0MsT0FBWTtRQUNuQmYsSUFBSVksTUFBTSxDQUFDRyxNQUFNQyxRQUFRLENBQUNKLE1BQU0sRUFBRUMsSUFBSSxDQUFDRSxNQUFNQyxRQUFRLENBQUNGLElBQUk7SUFDNUQ7QUFDRjtBQUVBLGlFQUFlaEIsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLnRzPzE3MzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLnRzXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgbG9naW4gPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBGb3J3YXJkIHRoZSByZXF1ZXN0IHRvIHRoZSBiYWNrZW5kXG4gICAgY29uc3QgYmFja2VuZFJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm9jZXNzLmVudi5TRVJWSUNFX0RPTUFJTn0vYXV0aC9sb2dpbmAsXG4gICAgICByZXEuYm9keSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGNvb2tpZTogcmVxLmhlYWRlcnMuY29va2llIHx8ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIC8vIOODkOODg+OCr+OCqOODs+ODieOBi+OCieWPl+OBkeWPluOBo+OBn+OCu+ODg+OCt+ODp+ODsyBDb29raWUg44KS6Kit5a6a44GZ44KLXG4gICAgY29uc3Qgc2V0Q29va2llID0gYmFja2VuZFJlcy5oZWFkZXJzWydzZXQtY29va2llJ11cbiAgICBpZiAoc2V0Q29va2llKSB7XG4gICAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgc2V0Q29va2llKVxuICAgIH1cblxuICAgIC8vIOODkOODg+OCr+OCqOODs+ODieOBi+OCieOBruW/nOetlOOCkui7oumAgeOBmeOCi1xuICAgIHJlcy5zdGF0dXMoYmFja2VuZFJlcy5zdGF0dXMpLmpzb24oYmFja2VuZFJlcy5kYXRhKVxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgcmVzLnN0YXR1cyhlcnJvci5yZXNwb25zZS5zdGF0dXMpLmpzb24oZXJyb3IucmVzcG9uc2UuZGF0YSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpblxuIl0sIm5hbWVzIjpbImF4aW9zIiwibG9naW4iLCJyZXEiLCJyZXMiLCJiYWNrZW5kUmVzIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJTRVJWSUNFX0RPTUFJTiIsImJvZHkiLCJoZWFkZXJzIiwiY29va2llIiwid2l0aENyZWRlbnRpYWxzIiwic2V0Q29va2llIiwic2V0SGVhZGVyIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnJvciIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/login.ts\n");

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