// const precioOriginal = 120;
// const descuento = 18;




function CalcularPrecioDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;

    return precioConDescuento ;
}



function discountPrice(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    // const inputDiscount = document.getElementById("inputDiscount");
    // const discountValue = inputDiscount.value;

    const coupons = document.getElementById("coupons");
    const palabraCupon  = coupons.value;

    const namescoupons =[
        "joaquinEsteban",
        "platzi",
        "web",
    ];

    let cuponDescuento;

    switch(palabraCupon){

        case namescoupons[0]:
            cuponDescuento = 15;
        break;
        case namescoupons[1]:
            cuponDescuento = 25;
        break;
        case namescoupons[2]:
            cuponDescuento = 35;
        break; 
        
    }

    const precioConDescuento = CalcularPrecioDescuento(priceValue, cuponDescuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de $"+ precioConDescuento;
}


