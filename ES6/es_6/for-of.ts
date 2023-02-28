(()=>{

    type Avenger={
        name: string;
        weapon: string;        
       };
    
    const ironman:Avenger={
              name:"Tony",
            weapon:"Armor Suit"
        }

    const hulk:Avenger={
            name:"Bruce",
          weapon:"fuerza"
      }    

    const thor:Avenger={
        name:"Thor",
      weapon:"Martillo"
   }    

    const avengers =[ironman,hulk,thor]   ;

    for (const avenger of avengers) {
        console.log(avenger)
        
    }



})()