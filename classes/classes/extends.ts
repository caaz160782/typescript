(()=>{
  
    class Avenger{
         static    avgAge:number=35;
         static    getAvgAge(){
            return this.name;
         }  
        constructor(public name:string,
                    public realName:string,                    
                    ){
                      //  console.log("contructor avenger");
                    }

        protected getFullName(){
            return `${this.name} (${this.realName})`;
        }                    
    }


    class Xmen extends Avenger{
        
        constructor (
                 name    :string,
                 realName:string,  
                public isMutant:boolean )
        {
            super(name,realName);
            //console.log("constructor xmen")

        }

        getFullnameDesdeXmen(){
            console.log(super.getFullName());
        }
        
        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string){
            this.name=name;
        }
    }
    

    const wolverine = new Xmen("wolverine","Logan",true)

    //wolverine.fullName="Juan";
   // console.log(wolverine.fullName);
    //wolverine.getFullnameDesdeXmen();
    

})()