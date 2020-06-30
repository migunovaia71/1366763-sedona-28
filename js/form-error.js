var searchForm = document.querySelector(".search");
var arrivalDate = searchForm.querySelector(".arrival");
var departureDate = searchForm.querySelector(".departure");


searchForm.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value) {
        evt.preventDefault();
        searchForm.classList.remove("search-error");
        searchForm.offsetWidth = searchForm.offsetWidth;
        searchForm.classList.add("search-error");
    } 
});