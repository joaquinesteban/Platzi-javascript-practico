// const lista1 = [
//     100,
//     200,
//     300,
//     400,
//     500,
// ];



function calcularPromedio(lista){
    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedio = sumaLista / lista.length;
    

    return promedio;
}
