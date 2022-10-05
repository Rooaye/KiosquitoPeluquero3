let totalCompra = 0;
let shampoo = 2500;
let acondicionador = 2000;
let planchita = 3500;
let lima = 500;
let tijera = 1200;
let costoEnvio = 500;

 

alert("Bienvenido a Kioskito Peluquero");

let producto = prompt("Paracomprar algunos de nuetros producto\nElija la opcion que desee..\n-Shampoo\n-Acondicionador\n-Planchita\n-Lima\n-Tijera\n(presione aceptar para seguir comprando o ingrese 'fin' para salir)");

while (producto != "fin") {

    switch (producto) {
        case "shampoo":
            totalCompra = totalCompra + shampoo;
            alert("El precio del Shampoo es $" +shampoo+ ", el total de su compra es: "+totalCompra);
            break;
        case "acondicionador":
            totalCompra = totalCompra + acondicionador;
            alert("El precio del Acondicionador es $" +acondicionador+ ", el total de su compra es: "+totalCompra);
            break;
        case "planchita":
            totalCompra = totalCompra + planchita;
            alert("El precio del Planchita es $" +planchita+ ", el total de su compra es: "+totalCompra);
            break;
        case "lima":
            totalCompra = totalCompra + lima;
            alert("El precio del Lima es $" +lima+ ", el total de su compra es: "+totalCompra);
            break;
        case "tijera":
            totalCompra = totalCompra + tijera;
            alert("El precio del Tijera es $" +tijera+ ", el total de su compra es: " +totalCompra);
            break;

        default:
            alert("opción inválida");
            break;

    }

    producto = prompt("Si usted desea seguir a comprando..\nVuelva a elegir otra opc!\n-Shampoo\n-Acondicionador\n-Planchita\n-Lima\n-Tijera\n(presione aceptar para seguir comprando o ingrese 'fin' para terminar la compra)");
}


if (envios() == false) {
    totalCompra = totalCompra + costoEnvio;
}


function envios() {
    if (totalCompra >= 3000) {
        alert("Al ser una compra mayor o igual que $3000,El envio es gratuito");
        return true;
    }
    
    else {
        alert("Al ser una compra menor a 3000, se incluye el costo de envio ");
        return false;
    }
}
alert("El total de su compra es " + totalCompra);