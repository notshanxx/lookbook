// SHOW LOADING ANIMATION
export default function Loading(loading) {
    const loaderEl = document.getElementById("loader")
    const searchEl = document.getElementById("search-result");
    const mainEl = document.querySelector("main");
    if (loading){
        loaderEl.style.display = "block";
        // searchEl.style.display = "none";
    }else {
        loaderEl.style.display = "none";
        // searchEl.style.display = "block";
    }
    
}