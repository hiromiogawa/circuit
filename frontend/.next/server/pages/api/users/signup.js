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
exports.id = "pages/api/users/signup";
exports.ids = ["pages/api/users/signup"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/users/signup.ts":
/*!***************************************!*\
  !*** ./src/pages/api/users/signup.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst signup = async (req, res)=>{\n    if (req.method === \"POST\") {\n        try {\n            const { email , password , username  } = req.body;\n            await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${process.env.SERVICE_DOMAIN}/users/`, {\n                email,\n                password,\n                username\n            });\n            res.status(201).json({\n                message: \"User created successfully\"\n            });\n        } catch (error) {\n            const { response  } = error;\n            if (response) {\n                res.status(response.status).json(response.data);\n            } else {\n                res.status(500).json({\n                    message: \"An error occurred while signing up.\"\n                });\n            }\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signup);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJzL3NpZ251cC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN5QjtBQUV6QixNQUFNQyxTQUFTLE9BQU9DLEtBQXFCQyxNQUF5QjtJQUNsRSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFLEdBQUdMLElBQUlNLElBQUk7WUFDOUMsTUFBTVIsa0RBQVUsQ0FBQyxDQUFDLEVBQUVVLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN2RFA7Z0JBQ0FDO2dCQUNBQztZQUNGO1lBRUFKLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBNEI7UUFDOUQsRUFBRSxPQUFPQyxPQUFZO1lBQ25CLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdEO1lBQ3JCLElBQUlDLFVBQVU7Z0JBQ1pkLElBQUlVLE1BQU0sQ0FBQ0ksU0FBU0osTUFBTSxFQUFFQyxJQUFJLENBQUNHLFNBQVNDLElBQUk7WUFDaEQsT0FBTztnQkFDTGYsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBc0M7WUFDeEUsQ0FBQztRQUNIO0lBQ0YsT0FBTztRQUNMWixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUI7SUFDdkQsQ0FBQztBQUNIO0FBRUEsaUVBQWVkLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hcGkvdXNlcnMvc2lnbnVwLnRzPzYwMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IHNpZ251cCA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSB9ID0gcmVxLmJvZHlcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuU0VSVklDRV9ET01BSU59L3VzZXJzL2AsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB1c2VybmFtZVxuICAgICAgfSlcblxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseScgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBlcnJvclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKHJlc3BvbnNlLmRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBzaWduaW5nIHVwLicgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNpZ251cFxuIl0sIm5hbWVzIjpbImF4aW9zIiwic2lnbnVwIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwiYm9keSIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiU0VSVklDRV9ET01BSU4iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwicmVzcG9uc2UiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/users/signup.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/users/signup.ts"));
module.exports = __webpack_exports__;

})();