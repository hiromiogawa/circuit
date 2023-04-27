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
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./src/pages/signup.tsx":
/*!******************************!*\
  !*** ./src/pages/signup.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignUp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction SignUp() {\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setError(null);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/users/signup\", {\n                username,\n                email,\n                password\n            });\n            router.push(\"/login\");\n        } catch (error) {\n            if (error.response && error.response.data && error.response.data.message) {\n                setError(error.response.data.message);\n            } else {\n                setError(\"アカウントの作成に失敗しました。\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"新規登録\"\n            }, void 0, false, {\n                fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/signup.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"username\",\n                        value: username,\n                        onChange: (e)=>setUsername(e.target.value),\n                        className: \"w-full p-2 mb-4 text-black border border-gray-300 rounded\",\n                        placeholder: \"ユーザー名\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/signup.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        name: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        className: \"w-full p-2 mb-4 text-black border border-gray-300 rounded\",\n                        placeholder: \"メールアドレス\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/signup.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        className: \"w-full p-2 mb-4 text-black border border-gray-300 rounded\",\n                        placeholder: \"パスワード\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/signup.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/signup.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 19\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"w-full p-2 bg-blue-500 text-white rounded\",\n                        children: \"登録\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/signup.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/signup.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ogawahiromi/work/develop/circuit/frontend/src/pages/signup.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2lnbnVwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDUDtBQUNjO0FBRXhCLFNBQVNHLFNBQVM7SUFDL0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFnQixJQUFJO0lBQ3RELE1BQU1ZLFNBQVNWLHNEQUFTQTtJQUV4QixNQUFNVyxlQUFlLE9BQU9DLElBQXdDO1FBQ2xFQSxFQUFFQyxjQUFjO1FBQ2hCSixTQUFTLElBQUk7UUFFYixJQUFJO1lBQ0YsTUFBTVYsa0RBQVUsQ0FBQyxxQkFBcUI7Z0JBQ3BDTztnQkFDQUo7Z0JBQ0FFO1lBQ0Y7WUFDQU0sT0FBT0ssSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPUCxPQUFZO1lBQ25CLElBQ0VBLE1BQU1RLFFBQVEsSUFDZFIsTUFBTVEsUUFBUSxDQUFDQyxJQUFJLElBQ25CVCxNQUFNUSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxFQUMzQjtnQkFDQVQsU0FBU0QsTUFBTVEsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE9BQU87WUFDdEMsT0FBTztnQkFDTFQsU0FBUztZQUNYLENBQUM7UUFDSDtJQUNGO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBVzs7Ozs7OzBCQUN6Qiw4REFBQ0U7Z0JBQUtDLFVBQVVaOztrQ0FDZCw4REFBQ2E7d0JBQ0NDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xDLE9BQU9yQjt3QkFDUHNCLFVBQVUsQ0FBQ2hCLElBQU1MLFlBQVlLLEVBQUVpQixNQUFNLENBQUNGLEtBQUs7d0JBQzNDUCxXQUFVO3dCQUNWVSxhQUFZOzs7Ozs7a0NBRWQsOERBQUNOO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMQyxPQUFPekI7d0JBQ1AwQixVQUFVLENBQUNoQixJQUFNVCxTQUFTUyxFQUFFaUIsTUFBTSxDQUFDRixLQUFLO3dCQUN4Q1AsV0FBVTt3QkFDVlUsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDTjt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsT0FBT3ZCO3dCQUNQd0IsVUFBVSxDQUFDaEIsSUFBTVAsWUFBWU8sRUFBRWlCLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDM0NQLFdBQVU7d0JBQ1ZVLGFBQVk7Ozs7OztvQkFFYnRCLHVCQUFTLDhEQUFDdUI7d0JBQUVYLFdBQVU7a0NBQWdCWjs7Ozs7O2tDQUN2Qyw4REFBQ3dCO3dCQUNDUCxNQUFLO3dCQUNMTCxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvc2lnbnVwLnRzeD8wNzI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0RXJyb3IobnVsbClcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3VzZXJzL3NpZ251cCcsIHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfSlcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZXJyb3IucmVzcG9uc2UgJiZcbiAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YSAmJlxuICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICkge1xuICAgICAgICBzZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcign44Ki44Kr44Km44Oz44OI44Gu5L2c5oiQ44Gr5aSx5pWX44GX44G+44GX44Gf44CCJylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPuaWsOimj+eZu+mMsjwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgbWItNCB0ZXh0LWJsYWNrIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLjg6bjg7zjgrbjg7zlkI1cIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgbWItNCB0ZXh0LWJsYWNrIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLjg6Hjg7zjg6vjgqLjg4njg6zjgrlcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgbWItNCB0ZXh0LWJsYWNrIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLjg5Hjgrnjg6/jg7zjg4lcIlxuICAgICAgICAvPlxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvcD59XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZFwiXG4gICAgICAgID5cbiAgICAgICAgICDnmbvpjLJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiU2lnblVwIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJwdXNoIiwicmVzcG9uc2UiLCJkYXRhIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/signup.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/signup.tsx"));
module.exports = __webpack_exports__;

})();