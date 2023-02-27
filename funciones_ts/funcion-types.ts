(()=>{

    
    const addNumbers =(a:number,b:number)=>a+b ;
        
    const greet=(name:string)=>`Hola ${name}`;

    const saveTheWorld=()=>`El mundo esta salvado`;

   //* desdpues de los : mostramos el tipo
    let myFunction:Function;

    // console.log(myFunction);

    myFunction = addNumbers

    console.log(myFunction(2,5));

    

})()