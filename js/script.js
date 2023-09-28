// side bar
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

// slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 4000
});

// parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// material box
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});