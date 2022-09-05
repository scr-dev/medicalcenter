function openmenu() {
    const menuMobile = document.querySelector('#menu');

    if(menuMobile.style.display == 'none') {
        menuMobile.style.display = 'block'
    } else {
        menuMobile.style.display = 'none'
    }
}