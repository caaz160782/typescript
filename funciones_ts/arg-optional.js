"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '*-----'}`;
    };
    const nombre = fullName('Bruno');
    console.log({ nombre });
})();
