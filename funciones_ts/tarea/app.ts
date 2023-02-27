// Funciones Básicas
const sumar= ( a:number, b:number )=>{
  return a + b;
}

const contar = ( heroes:string[] ) => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar:boolean=true ) => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( personas:string, ...rest:string[] ):string => {
  return `${personas} ${rest.join(", ")}`;
}


// Tipo funcion
const noHaceNada = ( numero:string, texto:string, booleano:boolean, arreglo:string[] )=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:Function;
noHaceNadaTampoco = noHaceNada
