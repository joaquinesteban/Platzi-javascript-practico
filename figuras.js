//Codigo de Cuadrado
console.group("Cuadrado");

const ladoCuadrado =  5 ;
console.log("Los lados del cuadrado es:" + ladoCuadrado +"cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado1,lado2){
    return lado1 * lado2;
}


console.groupEnd()


//Codigo de Triangulo
console.group("Triangulo");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;


console.log(
    "los lados del triangulo son: "
+ ladotriangulo1  
+ "cm,"
+ ladotriangulo2  
+ "cm," 
+basetriangulo 
+ "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es:"+ alturaTriangulo);

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(basetri,alturatri){
    return basetri + alturatri;
} 
console.log("Area del cuadrado es:"+ areaTriangulo +"cm2")

console.groupEnd();

//Circulo
console.group("Circulo");

const radioCirculo = 4;
console.log("El radio del Circulo es:"+ radioCirculo + "cm");


function diametroCirculo(radioC){
    
    return (radioC * radioC) / 2;
}




const PI = Math.PI;
console.log("PI es:" + PI + "cm");


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}


const areaCirculo = (radioCirculo * radioCirculo) * PI;
    console.log("El area del Circulo es:"+ areaCirculo + "cm2");

console.groupEnd();

////////FUNCIONES --------------------------------------------------------------------------------------

function calcularPerimetroCuadrado(){
   const input = document.getElementById("inputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   alert("Tu perimetro es :"+ perimetro + "cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}