function addAriaHiddenOnResize() {
  // if screen size is 1200px or greater, add aria-hidden to mobile gif
  // otherwise add aria-hidden to desktop gif
  const mobileGifs = document.getElementsByClassName('projects__gif--mobile');
  const desktopGifs = document.getElementsByClassName('projects__gif--desktop');
  const windowWidth = window.innerWidth;
  
  for (var i = 0; i < mobileGifs.length; i++) {
    var element = mobileGifs[i];
    if (windowWidth >= 1200) {
      element.setAttribute('aria-hidden', 'true');
    } else {
      element.removeAttribute('aria-hidden');
    }
  }

  for (var i = 0; i < desktopGifs.length; i++) {
    var element = desktopGifs[i];
    if (windowWidth >= 1200) {
      element.removeAttribute('aria-hidden');
    } else {
      element.setAttribute('aria-hidden', 'true');
    }
  }
}

window.addEventListener('resize', addAriaHiddenOnResize);

addAriaHiddenOnResize();
