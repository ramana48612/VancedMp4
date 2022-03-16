var darkMode = document.querySelector(".summa");
var sidebar = document.querySelector(".side-bar");
var container = document.querySelector(".container");
var dot = document.querySelector(".subscribed-list");
var flexdiv = document.querySelector(".flex-div");
var hide = document.querySelector(".hide");


darkMode.onclick = function(){

	sidebar.classList.toggle("containertheme");
	container.classList.toggle("containertheme");
   hide.classList.toggle("containertheme");
  flexdiv.classList.toggle("containertheme2");
  dot.classList.toggle("theme");
  
  
}



var menuIcon1 = document.querySelector(".menu-icon");
var sidebar1 = document.querySelector(".side-bar");
var container1 = document.querySelector(".container");

menuIcon1.onclick = function(){

  sidebar1.classList.toggle("small-sidebar");
  container1.classList.toggle("large-container");
}







