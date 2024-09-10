window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const mediaQuery = window.matchMedia(['(max-width: 767.98px)', '(max-width: 991.98px)'])
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementById("header-navbar-two").style.display = "inline-block";
        document.getElementById("header-navbar-one").style.display = "none";
        document.getElementById("header-navbar-two").style.position = "fixed";
        document.getElementById("header-navbar-two").style.top = "0px";
        document.getElementById("header-navbar-two").style.left = "0px";
        document.getElementById("header-navbar-two").style.zIndex = "1";
        if (mediaQuery.matches) {
            document.getElementById("header-navbar-two").style.display = "none";
        }

    } else {
        document.getElementById("header-navbar-two").style.display = "none";
        document.getElementById("header-navbar-one").style.display = "inline-block";
        document.getElementById("header-navbar-one").style.width = "100%";
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     const element =document.getElementById("fadeInUp");
//    element.classList.add("fadeInUp");
//   });

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})