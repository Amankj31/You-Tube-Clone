    var menuIcon = document.querySelector(".menu-icon");
    var sidebar = document.querySelector(".side-bar");
    var container = document.querySelector(".container");

    menuIcon.onclick = function(){
      sidebar.classList.toggle("chotta-sidebar");
      container.classList.toggle("large-container");
    }