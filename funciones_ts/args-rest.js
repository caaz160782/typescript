"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        const name = `${firstName}  ${restArgs.join(' ')}`;
        return name.toLocaleUpperCase();
    };
    const nombre = fullName('Bruno');
    console.log(nombre);
})();
