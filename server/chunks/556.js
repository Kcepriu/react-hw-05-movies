"use strict";
exports.id = 556;
exports.ids = [556];
exports.modules = {

/***/ 6556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$j": () => (/* binding */ fetchCreditsFromFilm),
/* harmony export */   "Mx": () => (/* binding */ fetchReviewsFromFilm),
/* harmony export */   "Tg": () => (/* binding */ fetchTrending),
/* harmony export */   "Xe": () => (/* binding */ fetchFullInformationFromFilm),
/* harmony export */   "ho": () => (/* binding */ addInformationFromFilm)
/* harmony export */ });
/* unused harmony export searchFilm */
// process.env.DATA_API_KEY,
const URL = "https://api.themoviedb.org/3";
const TOKKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTQ3ZjhjODNlODMwYmVkNzhkNGExZTExMTE4YzJkMCIsInN1YiI6IjYzYjZlZjZlZjA0ZDAxMDBjZmM5NDBiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zh5N3NXUWVK9iECT009XdsQye9ZLaHRrEYAC8cRxenU";
let configImages;
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
const getCommonOption = (method)=>{
    return {
        method: method,
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + TOKKEN
        }
    };
};
const fetchTrending = async ({ signal , page =1 , time_window ="day"  })=>{
    // URL
    const fullUrl = `${URL}/trending/movie/${time_window}?language=en-US&page=${page}`;
    const options = getCommonOption("GET");
    // await delay(2000);
    const res = await fetch(fullUrl, options);
    // Recommendation: handle errors
    if (!res.ok) {
        console.log("Failed to fetch data");
        return null;
    }
    return res.json();
};
const fetchFullInformationFromFilm = async ({ filmId  })=>{
    // URL
    const fullUrl = `${URL}/movie/${filmId}`;
    const options = getCommonOption("GET");
    const res = await fetch(fullUrl, options);
    // Recommendation: handle errors
    if (!res.ok) {
        console.log("Failed to fetch data");
        return null;
    }
    return res.json();
};
const fetchConfiguration = async ()=>{
    const fullUrl = `${URL}/configuration`;
    const options = getCommonOption("GET");
    const res = await fetch(fullUrl, options);
    // Recommendation: handle errors
    if (!res.ok) {
        console.log("Failed to fetch data");
        return null;
    }
    const result = await res.json();
    return result.images;
};
const getConfigurationImages = async ()=>{
    if (configImages) return configImages;
    configImages = await fetchConfiguration();
    return configImages;
};
const getUrlImage = async (size)=>{
    const configurationImages = await getConfigurationImages();
    if (!configurationImages) return "";
    return `${configurationImages.base_url}${size}`;
};
const getGendeText = (ganres)=>{
    const gendeText = ganres.reduce((gendeText, element)=>{
        return gendeText += (gendeText === "" ? "" : ", ") + element.name;
    }, "");
    return gendeText;
};
const addInformationFromFilm = async (filmInformation)=>{
    const { poster_path , release_date , vote_average , genres  } = filmInformation;
    const posterPath = await getUrlImage("w342");
    const genresText = getGendeText(genres);
    const fullInfornation = {
        ...filmInformation,
        posterPath: `${posterPath}${poster_path}`,
        releaseDate: release_date.slice(0, 4),
        voteAverage: Math.ceil(Number(vote_average) * 10),
        genresText
    };
    return fullInfornation;
};
const fetchCreditsFromFilm = async ({ filmId  })=>{
    const fullUrl = `${URL}/movie/${filmId}/credits`;
    const options = getCommonOption("GET");
    const res = await fetch(fullUrl, options);
    const url_to_image = await getUrlImage("w185");
    // Recommendation: handle errors
    if (!res.ok) {
        console.log("Failed to fetch data");
        return null;
    }
    const result = await res.json();
    result.url_to_image = url_to_image;
    return result;
};
const fetchReviewsFromFilm = async ({ filmId  })=>{
    const fullUrl = `${URL}/movie/${filmId}/reviews`;
    const options = getCommonOption("GET");
    const res = await fetch(fullUrl, options);
    // Recommendation: handle errors
    if (!res.ok) {
        console.log("Failed to fetch data");
        return null;
    }
    const result = await res.json();
    return result;
};
const searchFilm = async (nameFilms, page = 1)=>{
    const fullUrl = `${URL}/search/movie?page=${page}&query=${nameFilms}`;
    const options = getCommonOption("GET");
    const res = await fetch(fullUrl, options);
    // Recommendation: handle errors
    if (!res.ok) {
        console.log("Failed to fetch data");
        return null;
    }
    const result = await res.json();
    return result.results;
};


/***/ })

};
;