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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/ClientProviders.tsx":
/*!********************************************!*\
  !*** ./src/components/ClientProviders.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ClientProviders)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _privy_io_react_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @privy-io/react-auth */ \"@privy-io/react-auth\");\n/* harmony import */ var _WalletProviders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalletProviders */ \"./src/components/WalletProviders.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_privy_io_react_auth__WEBPACK_IMPORTED_MODULE_2__, _WalletProviders__WEBPACK_IMPORTED_MODULE_3__]);\n([_privy_io_react_auth__WEBPACK_IMPORTED_MODULE_2__, _WalletProviders__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction ClientProviders({ children }) {\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Get Privy app ID from environment variable\n    const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID || \"\";\n    // Check if running in development mode with no Privy app ID\n    const isDevelopmentWithoutPrivy =  true && !privyAppId;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    // If not mounted yet, return null\n    if (!mounted) {\n        return null;\n    }\n    // In development, if no Privy app ID is provided, skip the Privy wrapper\n    if (isDevelopmentWithoutPrivy) {\n        console.warn(\"No Privy app ID provided. Running in development mode without Privy authentication.\");\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WalletProviders__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/components/ClientProviders.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this);\n    }\n    // Normal flow with Privy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_privy_io_react_auth__WEBPACK_IMPORTED_MODULE_2__.PrivyProvider, {\n        appId: privyAppId,\n        config: {\n            loginMethods: [\n                \"email\",\n                \"wallet\"\n            ],\n            appearance: {\n                theme: \"light\",\n                accentColor: \"#4F46E5\"\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WalletProviders__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/components/ClientProviders.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/components/ClientProviders.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DbGllbnRQcm92aWRlcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ0U7QUFDTDtBQU1qQyxTQUFTSyxnQkFBZ0IsRUFBRUMsUUFBUSxFQUF3QjtJQUN4RSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkMsNkNBQTZDO0lBQzdDLE1BQU1RLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0Msd0JBQXdCLElBQUk7SUFFM0QsNERBQTREO0lBQzVELE1BQU1DLDRCQUNKSCxLQUF5QixJQUFpQixDQUFDRDtJQUU3Q1AsZ0RBQVNBLENBQUM7UUFDUk0sV0FBVztJQUNiLEdBQUcsRUFBRTtJQUVMLGtDQUFrQztJQUNsQyxJQUFJLENBQUNELFNBQVM7UUFDWixPQUFPO0lBQ1Q7SUFFQSx5RUFBeUU7SUFDekUsSUFBSU0sMkJBQTJCO1FBQzdCQyxRQUFRQyxJQUFJLENBQUM7UUFDYixxQkFDRSw4REFBQ1gsd0RBQWVBO3NCQUNiRTs7Ozs7O0lBR1A7SUFFQSx5QkFBeUI7SUFDekIscUJBQ0UsOERBQUNILCtEQUFhQTtRQUNaYSxPQUFPUDtRQUNQUSxRQUFRO1lBQ05DLGNBQWM7Z0JBQUM7Z0JBQVM7YUFBUztZQUNqQ0MsWUFBWTtnQkFDVkMsT0FBTztnQkFDUEMsYUFBYTtZQUNmO1FBQ0Y7a0JBRUEsNEVBQUNqQix3REFBZUE7c0JBQ2JFOzs7Ozs7Ozs7OztBQUlUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8venlwaGVyLy4vc3JjL2NvbXBvbmVudHMvQ2xpZW50UHJvdmlkZXJzLnRzeD9iNDdjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcml2eVByb3ZpZGVyIH0gZnJvbSAnQHByaXZ5LWlvL3JlYWN0LWF1dGgnO1xuaW1wb3J0IFdhbGxldFByb3ZpZGVycyBmcm9tICcuL1dhbGxldFByb3ZpZGVycyc7XG5cbmludGVyZmFjZSBDbGllbnRQcm92aWRlcnNQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudFByb3ZpZGVycyh7IGNoaWxkcmVuIH06IENsaWVudFByb3ZpZGVyc1Byb3BzKSB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIC8vIEdldCBQcml2eSBhcHAgSUQgZnJvbSBlbnZpcm9ubWVudCB2YXJpYWJsZVxuICBjb25zdCBwcml2eUFwcElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJJVllfQVBQX0lEIHx8ICcnO1xuICBcbiAgLy8gQ2hlY2sgaWYgcnVubmluZyBpbiBkZXZlbG9wbWVudCBtb2RlIHdpdGggbm8gUHJpdnkgYXBwIElEXG4gIGNvbnN0IGlzRGV2ZWxvcG1lbnRXaXRob3V0UHJpdnkgPSBcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiAhcHJpdnlBcHBJZDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICAvLyBJZiBub3QgbW91bnRlZCB5ZXQsIHJldHVybiBudWxsXG4gIGlmICghbW91bnRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gSW4gZGV2ZWxvcG1lbnQsIGlmIG5vIFByaXZ5IGFwcCBJRCBpcyBwcm92aWRlZCwgc2tpcCB0aGUgUHJpdnkgd3JhcHBlclxuICBpZiAoaXNEZXZlbG9wbWVudFdpdGhvdXRQcml2eSkge1xuICAgIGNvbnNvbGUud2FybignTm8gUHJpdnkgYXBwIElEIHByb3ZpZGVkLiBSdW5uaW5nIGluIGRldmVsb3BtZW50IG1vZGUgd2l0aG91dCBQcml2eSBhdXRoZW50aWNhdGlvbi4nKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdhbGxldFByb3ZpZGVycz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9XYWxsZXRQcm92aWRlcnM+XG4gICAgKTtcbiAgfVxuXG4gIC8vIE5vcm1hbCBmbG93IHdpdGggUHJpdnlcbiAgcmV0dXJuIChcbiAgICA8UHJpdnlQcm92aWRlclxuICAgICAgYXBwSWQ9e3ByaXZ5QXBwSWR9XG4gICAgICBjb25maWc9e3tcbiAgICAgICAgbG9naW5NZXRob2RzOiBbJ2VtYWlsJywgJ3dhbGxldCddLFxuICAgICAgICBhcHBlYXJhbmNlOiB7XG4gICAgICAgICAgdGhlbWU6ICdsaWdodCcsXG4gICAgICAgICAgYWNjZW50Q29sb3I6ICcjNEY0NkU1JyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFdhbGxldFByb3ZpZGVycz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9XYWxsZXRQcm92aWRlcnM+XG4gICAgPC9Qcml2eVByb3ZpZGVyPlxuICApO1xufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByaXZ5UHJvdmlkZXIiLCJXYWxsZXRQcm92aWRlcnMiLCJDbGllbnRQcm92aWRlcnMiLCJjaGlsZHJlbiIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwicHJpdnlBcHBJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19QUklWWV9BUFBfSUQiLCJpc0RldmVsb3BtZW50V2l0aG91dFByaXZ5IiwiY29uc29sZSIsIndhcm4iLCJhcHBJZCIsImNvbmZpZyIsImxvZ2luTWV0aG9kcyIsImFwcGVhcmFuY2UiLCJ0aGVtZSIsImFjY2VudENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ClientProviders.tsx\n");

/***/ }),

/***/ "./src/components/WalletProviders.tsx":
/*!********************************************!*\
  !*** ./src/components/WalletProviders.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WalletProviders)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__]);\n([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction WalletProviders({ children }) {\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) {\n        return null;\n    }\n    const wallets = [\n        new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.PhantomWalletAdapter()\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.WalletProvider, {\n        wallets: wallets,\n        autoConnect: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletModalProvider, {\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/components/WalletProviders.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/components/WalletProviders.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XYWxsZXRQcm92aWRlcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVtRDtBQUNXO0FBQ1E7QUFDQTtBQU12RCxTQUFTTSxnQkFBZ0IsRUFBRUMsUUFBUSxFQUF3QjtJQUN4RSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1JRLFdBQVc7SUFDYixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNELFNBQVM7UUFDWixPQUFPO0lBQ1Q7SUFFQSxNQUFNRSxVQUFVO1FBQUMsSUFBSUwsZ0ZBQW9CQTtLQUFHO0lBRTVDLHFCQUNFLDhEQUFDRix3RUFBY0E7UUFBQ08sU0FBU0E7UUFBU0MsV0FBVztrQkFDM0MsNEVBQUNQLGdGQUFtQkE7c0JBQ2pCRzs7Ozs7Ozs7Ozs7QUFJVCIsInNvdXJjZXMiOlsid2VicGFjazovL3p5cGhlci8uL3NyYy9jb21wb25lbnRzL1dhbGxldFByb3ZpZGVycy50c3g/NDlhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0UHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCB7IFdhbGxldE1vZGFsUHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcbmltcG9ydCB7IFBoYW50b21XYWxsZXRBZGFwdGVyIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzJztcblxuaW50ZXJmYWNlIFdhbGxldFByb3ZpZGVyc1Byb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FsbGV0UHJvdmlkZXJzKHsgY2hpbGRyZW4gfTogV2FsbGV0UHJvdmlkZXJzUHJvcHMpIHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW91bnRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmICghbW91bnRlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgd2FsbGV0cyA9IFtuZXcgUGhhbnRvbVdhbGxldEFkYXB0ZXIoKV07XG5cbiAgcmV0dXJuIChcbiAgICA8V2FsbGV0UHJvdmlkZXIgd2FsbGV0cz17d2FsbGV0c30gYXV0b0Nvbm5lY3Q+XG4gICAgICA8V2FsbGV0TW9kYWxQcm92aWRlcj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9XYWxsZXRNb2RhbFByb3ZpZGVyPlxuICAgIDwvV2FsbGV0UHJvdmlkZXI+XG4gICk7XG59ICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2FsbGV0UHJvdmlkZXIiLCJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiUGhhbnRvbVdhbGxldEFkYXB0ZXIiLCJXYWxsZXRQcm92aWRlcnMiLCJjaGlsZHJlbiIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwid2FsbGV0cyIsImF1dG9Db25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/WalletProviders.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ClientProviders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ClientProviders */ \"./src/components/ClientProviders.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ClientProviders__WEBPACK_IMPORTED_MODULE_4__]);\n_components_ClientProviders__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Zypher - Zero-Knowledge Identity Verification\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/pages/_app.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Privacy-preserving identity verification using zero-knowledge proofs\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/pages/_app.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, maximum-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/pages/_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/pages/_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ClientProviders__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/pages/_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rishikanaparti/Zypher/Zypher/src/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFRztBQUNFO0FBQzZCO0FBRTdDLFNBQVNHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSUE7O2tDQUNILDhEQUFDSztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDVixtRUFBZUE7MEJBQ2QsNEVBQUNFO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96eXBoZXIvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IENsaWVudFByb3ZpZGVycyBmcm9tICcuLi9jb21wb25lbnRzL0NsaWVudFByb3ZpZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+WnlwaGVyIC0gWmVyby1Lbm93bGVkZ2UgSWRlbnRpdHkgVmVyaWZpY2F0aW9uPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlByaXZhY3ktcHJlc2VydmluZyBpZGVudGl0eSB2ZXJpZmljYXRpb24gdXNpbmcgemVyby1rbm93bGVkZ2UgcHJvb2ZzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q2xpZW50UHJvdmlkZXJzPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NsaWVudFByb3ZpZGVycz5cbiAgICA8Lz5cbiAgKTtcbn0gIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIkNsaWVudFByb3ZpZGVycyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@privy-io/react-auth":
/*!***************************************!*\
  !*** external "@privy-io/react-auth" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@privy-io/react-auth");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();