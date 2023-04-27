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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/functions/checkAuth.ts":
/*!************************************!*\
  !*** ./src/functions/checkAuth.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkAuth\": () => (/* binding */ checkAuth)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst checkAuth = async (context)=>{\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://localhost:3000/auth/check-auth\", {\n            headers: {\n                cookie: context.req.headers.cookie || \"\"\n            },\n            withCredentials: true\n        });\n        if (res.data.isAuthenticated) {\n            return {\n                isAuthenticated: true,\n                user: res.data.user\n            };\n        } else {\n            return {\n                isAuthenticated: false\n            };\n        }\n    } catch (error) {\n        return {\n            isAuthenticated: false\n        };\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2NoZWNrQXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN5QjtBQVVsQixNQUFNQyxZQUFZLE9BQ3ZCQyxVQUMyQjtJQUMzQixJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNSCxpREFBUyxDQUFDLHlDQUF5QztZQUNuRUssU0FBUztnQkFDUEMsUUFBUUosUUFBUUssR0FBRyxDQUFDRixPQUFPLENBQUNDLE1BQU0sSUFBSTtZQUN4QztZQUNBRSxpQkFBaUIsSUFBSTtRQUN2QjtRQUVBLElBQUlMLElBQUlNLElBQUksQ0FBQ0MsZUFBZSxFQUFFO1lBQzVCLE9BQU87Z0JBQ0xBLGlCQUFpQixJQUFJO2dCQUNyQkMsTUFBTVIsSUFBSU0sSUFBSSxDQUFDRSxJQUFJO1lBQ3JCO1FBQ0YsT0FBTztZQUNMLE9BQU87Z0JBQ0xELGlCQUFpQixLQUFLO1lBQ3hCO1FBQ0YsQ0FBQztJQUNILEVBQUUsT0FBT0UsT0FBTztRQUNkLE9BQU87WUFDTEYsaUJBQWlCLEtBQUs7UUFDeEI7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9mdW5jdGlvbnMvY2hlY2tBdXRoLnRzPzlmYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCB9IGZyb20gJ25leHQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIHR5cGVzXG5pbXBvcnQgdHlwZSB7IFVzZXJUeXBlIH0gZnJvbSAnQC90eXBlcy91c2VycydcblxuZXhwb3J0IHR5cGUgQ2hlY2tBdXRoVHlwZSA9IHtcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuXG4gIHVzZXI/OiBQaWNrPFVzZXJUeXBlLCAnX2lkJyB8ICd1c2VybmFtZSc+XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0F1dGggPSBhc3luYyAoXG4gIGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRcbik6IFByb21pc2U8Q2hlY2tBdXRoVHlwZT4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGgvY2hlY2stYXV0aCcsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgY29va2llOiBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSB8fCAnJ1xuICAgICAgfSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgIH0pXG5cbiAgICBpZiAocmVzLmRhdGEuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgIHVzZXI6IHJlcy5kYXRhLnVzZXJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiY2hlY2tBdXRoIiwiY29udGV4dCIsInJlcyIsImdldCIsImhlYWRlcnMiLCJjb29raWUiLCJyZXEiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/checkAuth.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functions_checkAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/functions/checkAuth */ \"./src/functions/checkAuth.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_functions_checkAuth__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__]);\n([_functions_checkAuth__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst Home = ({ isAuthenticated , user  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogout = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/auth/logout\");\n            router.push(\"/login\");\n        } catch (error) {\n            console.error(\"ログアウトに失敗しました:\", error);\n        }\n    };\n    if (isAuthenticated && user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Welcome, \",\n                        user.username,\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    className: \"...\",\n                    children: \"ログアウト\"\n                }, void 0, false, {\n                    fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Please log in.\"\n        }, void 0, false, {\n            fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/index.tsx\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, undefined);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nconst getServerSideProps = async (context)=>{\n    const authResult = await (0,_functions_checkAuth__WEBPACK_IMPORTED_MODULE_1__.checkAuth)(context);\n    return {\n        props: authResult\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNnRTtBQUV2QztBQUNjO0FBSXZDLE1BQU1HLE9BQU8sQ0FBQyxFQUFFQyxnQkFBZSxFQUFFQyxLQUFJLEVBQWEsR0FBSztJQUNyRCxNQUFNQyxTQUFTSixzREFBU0E7SUFFeEIsTUFBTUssZUFBZSxVQUFZO1FBQy9CLElBQUk7WUFDRixNQUFNTixrREFBVSxDQUFDO1lBQ2pCSyxPQUFPRyxJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGlCQUFpQkE7UUFDakM7SUFDRjtJQUVBLElBQUlOLG1CQUFtQkMsTUFBTTtRQUMzQixxQkFDRTs7OEJBQ0UsOERBQUNPOzt3QkFBRTt3QkFBVVAsS0FBS1EsUUFBUTt3QkFBQzs7Ozs7Ozs4QkFDM0IsOERBQUNDO29CQUFPQyxTQUFTUjtvQkFBY1MsV0FBVTs4QkFBTTs7Ozs7Ozs7SUFLckQsT0FBTztRQUNMLHFCQUFPLDhEQUFDSjtzQkFBRTs7Ozs7O0lBQ1osQ0FBQztBQUNIO0FBRUEsaUVBQWVULElBQUlBLEVBQUE7QUFFWixNQUFNYyxxQkFBeUMsT0FDcERDLFVBQ0c7SUFDSCxNQUFNQyxhQUFhLE1BQU1uQiwrREFBU0EsQ0FBQ2tCO0lBQ25DLE9BQU87UUFDTEUsT0FBT0Q7SUFDVDtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgY2hlY2tBdXRoLCBDaGVja0F1dGhUeXBlIH0gZnJvbSAnQC9mdW5jdGlvbnMvY2hlY2tBdXRoJ1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxudHlwZSBQcm9wVHlwZXMgPSBDaGVja0F1dGhUeXBlXG5cbmNvbnN0IEhvbWUgPSAoeyBpc0F1dGhlbnRpY2F0ZWQsIHVzZXIgfTogUHJvcFR5cGVzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2F1dGgvbG9nb3V0JylcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfjg63jgrDjgqLjgqbjg4jjgavlpLHmlZfjgZfjgb7jgZfjgZ86JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzQXV0aGVudGljYXRlZCAmJiB1c2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxwPldlbGNvbWUsIHt1c2VyLnVzZXJuYW1lfSE8L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fSBjbGFzc05hbWU9XCIuLi5cIj5cbiAgICAgICAgICDjg63jgrDjgqLjgqbjg4hcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8Lz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxwPlBsZWFzZSBsb2cgaW4uPC9wPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKFxuICBjb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0XG4pID0+IHtcbiAgY29uc3QgYXV0aFJlc3VsdCA9IGF3YWl0IGNoZWNrQXV0aChjb250ZXh0KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiBhdXRoUmVzdWx0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjaGVja0F1dGgiLCJheGlvcyIsInVzZVJvdXRlciIsIkhvbWUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwicG9zdCIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJwIiwidXNlcm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImF1dGhSZXN1bHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();