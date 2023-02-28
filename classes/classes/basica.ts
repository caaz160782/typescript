(()=>{
  
    class Avenger{
        // private     name:string;
        // public      team:string;
        // public  realName?:string;
         static    avgAge:number=35;
         static    getAvgAge(){
            return this.name;
         }  
        // constructor(name:string, team:string, realName:string){
        //        this.name    =name;
        //        this.team    =team;
        //        this.realName=realName; 
        // }
        
        constructor(private name:string,
                    public team:string,
                    public realName?:string,
                    avgAge:number=55
                    ){}

        public bio(){
            return `${this.name} (${this.team})`;
        }                    
    }

    const Hulk: Avenger= new Avenger("Hulk","original","Bruce");
    // console.log(Hulk);

    // console.log(Hulk.bio());

    // console.log(Avenger.getAvgAge());
    

})()