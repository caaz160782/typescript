"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const nombre = fullName('Bruno', 'Diaz');
    console.log(nombre);
})();
