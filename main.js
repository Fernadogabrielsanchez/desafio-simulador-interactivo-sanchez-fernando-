alert("Comprar Dolares")



let total=0;
let precio=0;
let seguirCalculando= false;
function calcularDolar(){
     do {
         let dolar = prompt("¿Queres comprar DolarBNA, DolarBlue o DolarSolidario?", "Ej: DolarBNA")
         let cantidad = parseInt(prompt("¿Cuanto queres comprar?", "Ej:200"))
         switch (dolar){
             case "DolarBNA":
             precio = 115,50;
             break;
             case "DolarBlue":
             precio = 201,00;
             break;
             case "DolarSolidario":
             precio = 110,18;
             break;
             default: 
             alert("Alngunos datos ingresados no son correctos")
             dolar = 0;
             cantidad = 0;
         
            }
          total = total + cantidad * precio;
          
        } while (seguirCalculando);
         
         alert("usted Necesitaria:$"+ total +"ARS");
         seguirCalculando = confirm ("¿Quiere seguir Calculando?")

}

calcularDolar();
alert("Precio del Dolar")
let entrada = prompt("Ingresar tipo de Dolar: 1-Dolar BNA, 2-Dolar Blue, 3-Dolar Mayorista o Salir");

while(entrada != "Salir" ){
   switch (entrada) {
       case "1":
            alert("Compra: $109,50 Venta:$115,50");
            break;
        case "2":
            alert("Compra: $198,00 Venta:$201,00");
            break;
        case "3":
            alert("Compra: $109,98 Venta:$110,18")    
       default:
           alert("Fuente: https://www.cronista.com/MercadosOnline/dolar.html")
           break;
   }
   entrada = prompt("Ingresar tipo de Dolar: 1-Dolar BNA, 2-Dolar Blue, 3-Dolar Solidario o Salir");
}
