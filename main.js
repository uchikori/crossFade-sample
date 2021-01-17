let elInner, duration, defaultIndex, switchImage;
elInner = document.getElementsByClassName('main-image');
duration = 5000;
defaultIndex = 0;
switchImage = function(next){
    let current = next ? (next -1) : elInner.length -1;
    elInner[current].classList.remove('is-visible');
    elInner[next].classList.add('is-visible');
    next = (++next < elInner.length) ? next : 0;
    setTimeout(switchImage.bind(this, next), duration);
};
window.onload = switchImage.bind(this, defaultIndex);
