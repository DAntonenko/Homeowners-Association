var news = document.querySelector(".main-navigation-news");
var newsSubmenu = document.querySelector(".main-navigation-submenu+news");

news.addEventListener("onmouseover", function (evt) {
	evt.preventDefault();
	newsSubmenu.classList.add("display-submenu");
});
