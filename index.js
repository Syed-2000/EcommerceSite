function showNav() {
  var nav = document.getElementById("nav");
  nav.style.display = "flex";
  var bars = document.getElementById("bars");
  bars.style.display = "none";
  var cross = document.getElementById("cross");
  cross.style.display = "block";
}
function hideNav() {
  var nav = document.getElementById("nav");
  nav.style.display = "none";
  var bars = document.getElementById("bars");
  bars.style.display = "block";
  var cross = document.getElementById("cross");
  cross.style.display = "none";
}

function showSearch() {
  var searchBar = document.getElementById("searchBarId");
  searchBar.style.display = "flex";
  var search2 = document.getElementById("search2OfNav");
  search2.style.display = "flex";
  var search1 = document.getElementById("search1OfNav");
  search1.style.display = "none";
}
function hideSearch() {
  var searchBar = document.getElementById("searchBarId");
  searchBar.style.display = "none";
  var search2 = document.getElementById("search2OfNav");
  search2.style.display = "none";
  var search1 = document.getElementById("search1OfNav");
  search1.style.display = "flex";
}
