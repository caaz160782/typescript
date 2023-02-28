"use strict";
(() => {
    const avengers = {
        nick: "Samuel",
        ironman: "Robert",
        vision: "paul",
        activo: true,
        poder: 1500
    };
    const { nick, poder } = avengers;
    console.log(nick.toLocaleUpperCase(), poder);
    const printAvenger = (avengers) => {
        console.log(avengers.vision);
    };
    printAvenger(avengers);
    const avengersArray = ['Cap America', "Hulk", "Thor"];
    const [capi, hulk,] = avengersArray;
    console.log(capi, hulk);
})();
(() => {
    const ironman = {
        name: "Tony",
        weapon: "Armor Suit"
    };
    const hulk = {
        name: "Bruce",
        weapon: "fuerza"
    };
    const thor = {
        name: "Thor",
        weapon: "Martillo"
    };
    const avengers = [ironman, hulk, thor];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    let a = 'Felipe';
    console.log(a);
})();
//# sourceMappingURL=main.js.map