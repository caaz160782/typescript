(()=>{

       class Avanger{
             name;
            power;

         constructor(name="No name", power=0){
                 this.name=name;
                this.power=power;
         }

       } 

       class FlyingAvenger  extends Avanger{
          flying;

          constructor (name,power){
            super(name,power);
            this.flying=true;
          }
       }

       const hulk    = new Avanger('hulk',9000);
       const falcon  = new FlyingAvenger('Falcon',5000);

       console.log(hulk)

       console.log(falcon)

})()