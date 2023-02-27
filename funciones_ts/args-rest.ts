(()=>{

    
    const fullName =(firstName:string,...restArgs:string[]):string =>{
        const name=`${firstName}  ${restArgs.join(' ')}`
        
            return name.toLocaleUpperCase();
        
    }

    const nombre= fullName('Bruno');
    console.log(nombre);

    

})()