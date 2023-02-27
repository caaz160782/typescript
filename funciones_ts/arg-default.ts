(()=>{

    
    const fullName =(firstName:string, lastName?:string, upper:boolean=false):string =>{
        const name=`${firstName} ${lastName || '------'}`
        if(upper){        
            return name.toLocaleUpperCase();
        }
        else{
            return name;
        }
    }

    const nombre= fullName('Bruno','Diaz');
    console.log(nombre);

    

})()