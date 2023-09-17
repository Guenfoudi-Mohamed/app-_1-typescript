"use strict";
// function for check background color bars
function checkBgBars(counterBar) {
    const bars = document.querySelector('body #container #slider .bars');
    for (let i = 0; i < bars.childElementCount; i++) {
        if (i === counterBar) {
            bars.children[i].style.setProperty('');
        }
    }
    // switch(counterBar){
    //     case 0: document.querySelector('body #container #slider .bars .bar') as HTMLButtonElement;
    //         break;
    //     case 1: document.querySelector('body #container #slider .bars .bar.active') as HTMLButtonElement;
    //         break;
    //     case 2: document.querySelector('body #container #slider .bars .bar.active') as HTMLButtonElement;
    //         break;
    // }
}
