"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        const name = `${firstName} ${lastName || '------'}`;
        if (upper) {
            return name.toLocaleUpperCase();
        }
        else {
            return name;
        }
    };
    const nombre = fullName('Bruno', 'Diaz');
    console.log(nombre);
})();
