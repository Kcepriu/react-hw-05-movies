exports.id = 476;
exports.ids = [476];
exports.modules = {

/***/ 6400:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 3912:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6335))

/***/ }),

/***/ 7962:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2723))

/***/ }),

/***/ 2723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5262);
/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4312);
/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__  auto */ 


const Loader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ContainerLoader),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__/* .ThreeDots */ .g4, {
            height: "80",
            width: "180",
            radius: "9",
            color: "#303f9f",
            ariaLabel: "three-dots-loading",
            visible: true
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 6335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9422);
/* harmony import */ var _NavHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NavHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_constantNameRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4493);
// rfce
/* __next_internal_client_entry_do_not_use__  auto */ 





const NavHeader = ()=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: (_NavHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navList),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: _constants_constantNameRoute__WEBPACK_IMPORTED_MODULE_4__/* .nameRouters.root */ .L.root,
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_NavHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLink), pathname === _constants_constantNameRoute__WEBPACK_IMPORTED_MODULE_4__/* .nameRouters.root */ .L.root && (_NavHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active)),
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: _constants_constantNameRoute__WEBPACK_IMPORTED_MODULE_4__/* .nameRouters.movies */ .L.movies,
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()((_NavHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navLink), pathname.includes(_constants_constantNameRoute__WEBPACK_IMPORTED_MODULE_4__/* .nameRouters.movies */ .L.movies) && (_NavHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active)),
                        children: "Movies"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavHeader);


/***/ }),

/***/ 4493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ nameRouters)
/* harmony export */ });
const nameRouters = {
    root: "/",
    movies: "/movies"
};


/***/ }),

/***/ 5076:
/***/ ((module) => {

// Exports
module.exports = {
	"contaiter": "layout_contaiter__d6n70",
	"head": "layout_head__Y12ka",
	"header": "layout_header__L_hwa"
};


/***/ }),

/***/ 4312:
/***/ ((module) => {

// Exports
module.exports = {
	"ContainerLoader": "Loader_ContainerLoader__G6ZsT"
};


/***/ }),

/***/ 9422:
/***/ ((module) => {

// Exports
module.exports = {
	"navList": "NavHeader_navList__gqXrw",
	"active": "NavHeader_active__ZEnJp",
	"navLink": "NavHeader_navLink__SAI7w"
};


/***/ }),

/***/ 4180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_arguments_weight_400_500_700_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2227);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_arguments_weight_400_500_700_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_arguments_weight_400_500_700_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavHeader_NavHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _components_NavHeader_NavHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_NavHeader_NavHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5076);
/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const metadata = {
    title: "Movie Next App",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_arguments_weight_400_500_700_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_3___default().className),
            suppressHydrationWarning: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().head),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contaiter),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_components_NavHeader_NavHeader__WEBPACK_IMPORTED_MODULE_2___default()), {})
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contaiter),
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 6624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8624);
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_1__);


function Loading() {
    // Or a custom loading skeleton component
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_1___default()), {});
}


/***/ }),

/***/ 8624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  auto */ const { createProxy  } = __webpack_require__(5985);
module.exports = createProxy("/home/runner/work/react-hw-05-movies/react-hw-05-movies/src/components/Loader/Loader.tsx");


/***/ }),

/***/ 659:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// rfce
/* __next_internal_client_entry_do_not_use__  auto */ const { createProxy  } = __webpack_require__(5985);
module.exports = createProxy("/home/runner/work/react-hw-05-movies/react-hw-05-movies/src/components/NavHeader/NavHeader.tsx");


/***/ }),

/***/ 1764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;