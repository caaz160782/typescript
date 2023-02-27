(()=>{

    
    const fullName =(firstName:string, lastName?:string):string =>{
        
        return `${firstName} ${lastName || '*-----'}`
    }

    const nombre= fullName('Bruno');
    console.log({nombre});

    

})()