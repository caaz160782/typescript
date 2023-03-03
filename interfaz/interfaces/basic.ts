(()=>{

    interface Hero{
        name:string,
        age?:number, 
        power:string[], 
        getName?:()=>string
    }

    let flash: Hero= {
        name :'Barry Allen',
        age  : 24,
        power: ['super velodciad','viajar en el tiempo']
    }

    let batman: Hero= {
        name :'Bruno diaz',
        age  : 36,
        power: ['super irqueza']
    }

    

})()