






let lastKnownScrollPosition=0;
let ticking = false;

function doAnimation(scrollPos) {
    const el = document.getElementById('first_para');
    el.classList.add('animate__animated', 'animate__fadeInDown', 'animate__delay-1s');


    const el_1 = document.getElementById('second_para');
    el_1.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-2s');

    const el_2 = document.getElementById('freedom_fight');
    let delay = 3;
    for (let e of el_2.children) {
        e.classList.add('animate__animated', 'animate__fadeIn','animate__slower', `animate__delay-${delay}s`);
        delay+=2;
    }
}

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            doAnimation(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});
