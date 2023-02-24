"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en probelmas");
    }
    else {
        console.log("nos salvamos");
    }
    avengers = 133;
    console.log({ avengers });
})();
