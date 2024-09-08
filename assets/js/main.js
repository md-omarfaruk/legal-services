window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 103 || document.documentElement.scrollTop > 103) {
    document.getElementById("fixed-nav-logo").style.display = "inline";
    document.getElementById("header-navbar-one").style.width = "100%";
    document.getElementById("header-navbar-one").style.position = "fixed";
    document.getElementById("header-navbar-one").style.top = "0px";
    document.getElementById("header-navbar-one").style.left = "0px";

  } else {
    document.getElementById("fixed-nav-logo").style.display = "none";
    document.getElementById("header-navbar-one").style.width = "100%";
    document.getElementById("header-navbar-one").style.position = "fixed";
    document.getElementById("header-navbar-one").style.top = "103px";
    document.getElementById("header-navbar-one").style.left = "0px";
  }
}