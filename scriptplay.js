var darkMode = document.querySelector(".summa");

var container = document.querySelector(".container");
var flexdiv = document.querySelector(".flex-div");
var textarea = document.querySelector(".textarea");
var acb = document.querySelector(".acb");




darkMode.onclick = function(){

	
	container.classList.toggle("containertheme");
   flexdiv.classList.toggle("containertheme2");
   textarea.classList.toggle("containertheme");
   acb.classList.toggle("containertheme");
  
  
  
  
}


  /*var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("id");
  console.log("iuefh");
  document.getElementsByClassName("video").src="https://www.youtube.com/embed/3sX1dvExpas";
  console.log("uuu");*/
  


// var menuIcon1 = document.querySelector(".menu-icon");
// var sidebar1 = document.querySelector(".side-bar");
// var container1 = document.querySelector(".container");

// menuIcon1.onclick = function(){

//   sidebar1.classList.toggle("small-sidebar");
//   container1.classList.toggle("large-container");
// }