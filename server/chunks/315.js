exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 5849:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 408, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3505));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8531))

/***/ }),

/***/ 4914:
/***/ (() => {



/***/ }),

/***/ 8531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5655);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GoBack_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1654);
/* harmony import */ var _GoBack_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GoBack_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__  auto */ 



const GoBack = ({ children  })=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: (_GoBack_module_scss__WEBPACK_IMPORTED_MODULE_2___default().Button),
        onClick: ()=>router.back(),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__/* .HiArrowLeft */ .jTe, {
                size: "24"
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoBack);


/***/ }),

/***/ 3505:
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
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_constantNameRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4493);
/* harmony import */ var _NavAdditionalInformation_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(653);
/* harmony import */ var _NavAdditionalInformation_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NavAdditionalInformation_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__  auto */ 




const NavAdditionalInformation = ()=>{
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_NavAdditionalInformation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Wrap),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Additional information"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: (_NavAdditionalInformation_module_scss__WEBPACK_IMPORTED_MODULE_4___default().List),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: `${_constants_constantNameRoute__WEBPACK_IMPORTED_MODULE_3__/* .nameRouters.movies */ .L.movies}/${params.filmId}/cast`,
                            replace: true,
                            shallow: true,
                            children: "Cast"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: `${_constants_constantNameRoute__WEBPACK_IMPORTED_MODULE_3__/* .nameRouters.movies */ .L.movies}/${params.filmId}/reviews`,
                            replace: true,
                            shallow: true,
                            children: "Reviews"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavAdditionalInformation);


/***/ }),

/***/ 1654:
/***/ ((module) => {

// Exports
module.exports = {
	"Button": "GoBack_Button__b6gTI"
};


/***/ }),

/***/ 653:
/***/ ((module) => {

// Exports
module.exports = {
	"Wrap": "NavAdditionalInformation_Wrap__SPhTI",
	"List": "NavAdditionalInformation_List__LsUI_"
};


/***/ }),

/***/ 2117:
/***/ ((module) => {

// Exports
module.exports = {
	"WrapMovieDetail": "MovieDetails_WrapMovieDetail__t1bZo",
	"WrapImage": "MovieDetails_WrapImage__jXuiB",
	"ContainerImage": "MovieDetails_ContainerImage__wKgGN",
	"Image": "MovieDetails_Image__vMaHi"
};


/***/ }),

/***/ 7667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(4212);
// EXTERNAL MODULE: ./src/components/GoBack/GoBack.tsx
var GoBack = __webpack_require__(698);
var GoBack_default = /*#__PURE__*/__webpack_require__.n(GoBack);
// EXTERNAL MODULE: ./src/components/NavAdditionalInformation/NavAdditionalInformation.tsx
var NavAdditionalInformation = __webpack_require__(7470);
var NavAdditionalInformation_default = /*#__PURE__*/__webpack_require__.n(NavAdditionalInformation);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/screen/MovieDetails/MovieDetails.module.scss
var MovieDetails_module = __webpack_require__(2117);
var MovieDetails_module_default = /*#__PURE__*/__webpack_require__.n(MovieDetails_module);
;// CONCATENATED MODULE: ./src/components/screen/MovieDetails/MovieDetails.tsx






const MovieDetails = ({ filmInformation  })=>{
    const { posterPath , original_title , releaseDate , voteAverage , overview , genresText  } = filmInformation;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((GoBack_default()), {
                children: "Go back"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MovieDetails_module_default()).WrapMovieDetail,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (MovieDetails_module_default()).WrapImage,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (MovieDetails_module_default()).ContainerImage,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: (MovieDetails_module_default()).Image,
                                src: filmInformation.posterPath,
                                width: 300,
                                height: 450,
                                priority: true,
                                // fill={true}
                                alt: filmInformation.original_title
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: `${original_title} (${releaseDate})`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: `User Score: ${voteAverage}%`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Overviews"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: overview
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Genders"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: genresText
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((NavAdditionalInformation_default()), {})
        ]
    });
};
/* harmony default export */ const MovieDetails_MovieDetails = (MovieDetails);

// EXTERNAL MODULE: ./src/services/servicesFilms.tsx
var servicesFilms = __webpack_require__(6556);
;// CONCATENATED MODULE: ./src/app/movies/[filmId]/layout.tsx



const LayoutMovieId = async ({ params: { filmId  } , children  })=>{
    const filmInformation = await (0,servicesFilms/* fetchFullInformationFromFilm */.Xe)({
        filmId
    });
    if (!filmInformation) return null;
    const fullFilmInformation = await (0,servicesFilms/* addInformationFromFilm */.ho)(filmInformation);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            filmInformation && /*#__PURE__*/ jsx_runtime_.jsx(MovieDetails_MovieDetails, {
                filmInformation: fullFilmInformation
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            })
        ]
    });
};
/* harmony default export */ const layout = (LayoutMovieId); // /movies/id
 // /movies/id/actors
 // /movies/id/gengers


/***/ }),

/***/ 934:
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

/***/ 698:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  auto */ const { createProxy  } = __webpack_require__(5985);
module.exports = createProxy("/home/runner/work/react-hw-05-movies/react-hw-05-movies/src/components/GoBack/GoBack.tsx");


/***/ }),

/***/ 7470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  auto */ const { createProxy  } = __webpack_require__(5985);
module.exports = createProxy("/home/runner/work/react-hw-05-movies/react-hw-05-movies/src/components/NavAdditionalInformation/NavAdditionalInformation.tsx");


/***/ })

};
;