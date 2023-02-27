"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    //* desdpues de los : mostramos el tipo
    let myFunction;
    // console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(2, 5));
})();
