(()=>{

    interface Client{
        name:string;
        age?:number;        
        address?:Adress
    }

    interface Adress{
        id:number;
        zip:string;
        city:string;
    }

    const client:Client ={
        name:"Pepe",
        age:25,
        address:{
            id:125,
            zip:'ghj788',
            city:'Chicago'
        }
    }    

    const client1:Client ={
        name:"Luis",
        age:35,
        
    }    
  

    

})()