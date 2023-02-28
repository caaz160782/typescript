(()=>{

    type Avengers={
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
       };
    
    const avengers:Avengers={
            nick:"Samuel",
            ironman:"Robert",
            vision:"paul",
            activo:true,
            poder:1500
        }

    const {nick, poder}=avengers;
        console.log(nick.toLocaleUpperCase(), poder)

    const printAvenger=( avengers:Avengers)=>{
            console.log(avengers.vision)
        }

    printAvenger(avengers);

    //* arrays destructuracion

    const avengersArray:string[]=['Cap America',"Hulk","Thor"];

    const [capi,hulk,]= avengersArray;

    console.log(capi,hulk)


})()