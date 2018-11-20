//Creación de arrays y variables

tiempos = Array();

a = 0;
b = 0;
c = 0;
i = 0;


//Comprobación tiempo

while (true) {
    var vuelta = Number(prompt("Introduzca tiempos de la vueltas. Introduza SALIR para salir del programa"));
    if (vuelta > 0) {
        tiempos.push(vuelta);
    } else if (vuelta === "SALIR") {
        alert("Has salido");
        break;
    } else {
        alert("Has introducido un número o caracter invalido");
        break;
    }
}


//Zona de funciones


function mejorResultado(tiempos) {
    for (let i = 0; i < tiempos.length; i++) {
        if (tiempos[i] > a) {
            a = tiempos[i];
            break;
        }
    }
    return a;
}



function peorResultado(tiempos) {
    for (let i = 0; i < tiempos.length; i++) {
        if (tiempos[i] > b) {
            b = tiempos[i];
        }
    }
    return b;
}



function mediaTiempos(tiempos){
    for (let i = 0; i < tiempos.length; i++) {
    c = c + tiempos[i];
    }
    c = c/tiempos[i];
    return c;
}

var mejor = mejorResultado(tiempos);
var peor = peorResultado(tiempos);
var media = mediaTiempos(tiempos);



//Zona de console.log

console.log(`Lista de tiempos ${tiempos}`);
console.log(`El mejor tiempo fue ${mejor}`);
console.log(`El peor tiempo fue ${peor}`);
console.log(`La media de tiempos fue ${media}`);

