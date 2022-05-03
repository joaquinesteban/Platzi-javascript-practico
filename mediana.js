const list1 = [
    400,
    200, 
    100,
    900000,
];

function calcularMedia(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedio = sumaLista / lista.length;
    

    return promedio; 
}


const mitadLista1 = parseInt(list1.length / 2);

function esPar(numerito){

    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(list1.length)){

    const ELEMENTO1 = list1[mitadLista1];
    const ELEMENTO2 = list1[mitadLista1 - 1];
    
   

    const promedioElemento1y2 = calcularMedia([
        ELEMENTO1,
        ELEMENTO2
    ]);
    
    mediana = promedioElemento1y2;
    
}else{
    mediana = lista1[mitadLista1];
    //mediana
}