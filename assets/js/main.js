window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const mediaQuery = window.matchMedia(['(max-width: 767.98px)', '(max-width: 991.98px)'])
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("header-navbar-two").style.display = "inline-block";
        document.getElementById("header-navbar-one").style.display = "none";
        document.getElementById("header-navbar-two").style.position = "fixed";
        document.getElementById("header-navbar-two").style.top = "0px";
        document.getElementById("header-navbar-two").style.left = "0px";
        if (mediaQuery.matches) {
            document.getElementById("header-navbar-two").style.display = "none";
        }

    } else {
        document.getElementById("header-navbar-two").style.display = "none";
        document.getElementById("header-navbar-one").style.display = "inline-block";
        document.getElementById("header-navbar-one").style.width = "100%";
    }
}

// -----------------------------jQuery-Animations--------------------------------
