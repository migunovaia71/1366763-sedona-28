var searchBtn = document.querySelector(".search-btn1");
var searchForm = document.querySelector(".search");

searchBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle("search-close");
    searchForm.classList.add("search-bounce");
});