


//Objeto que mapea cad acargo a su sueldo correspondiente
const SueldosDeCargos = {
    "Administrador": 1600,
    "Gerente": 1200,
    "Contador": 900
};
const BonificacionesPorCategoria = {
    "A1": 0.10, //10%
    "A2": 0.15, //15%
    "A3": 0.20 //20%
}


function calcularTotal() {
    let cargoEl = document.getElementById("cargo");
    const inputSueldo = document.getElementById("sueldo");
    const cargoSeleccionado = cargoEl.value;
    //Buscar el sueldo en el mapa de sueldos
    //SI EL CARGO ES V{ALIDO, SE USA SU SUELDO, SINO ELEGIE UNA OPCION
    const sueldo = SueldosDeCargos[cargoSeleccionado] || 0;
    inputSueldo.value = sueldo;

    //CALCULAR BONIFICACION

    let categoriaSeleccionada = null;

    const radios = document.getElementsByName('categoria');

    for (let i = 0; i < radios.length; i++) {
       if(radios[i].checked){
        categoriaSeleccionada = radios[i].value;
        break;
       }
        
    }

    //obtener el procentaje de bonificacion
    const porcentaje = BonificacionesPorCategoria[categoriaSeleccionada] || 0;
    //calcular bonificacion
    const bonificacion = sueldo * porcentaje;
    //mostrar la bonificacion en el campo cosrrespondiente
    document.getElementById('bonificacion').value = bonificacion.toFixed(2);
    //Actualizar total de honorarios (sueldo)
    const totalHonorarios = sueldo + bonificacion;
    document.getElementById('total-honorarios').value = totalHonorarios.toFixed(2);
    
    //calculo de retenciones

const chkFonavi = document.getElementById("chk-fonavi");
const chkRenta = document.getElementById("chk-renta");

let fonaviMonto = 0;
let rentaMonto = 0; 

if (chkFonavi.checked) {
    const porcentajeFonavi = parseFloat(chkFonavi.value)/100;
    fonaviMonto = sueldo * porcentajeFonavi;
}

if (chkRenta.checked) {
    const porcentajeRenta = parseFloat(chkRenta.value)/100;
    rentaMonto = sueldo * porcentajeRenta;
}

//mostrar los montos calculados

document.getElementById("edfonavi").value = fonaviMonto.toFixed(2);
document.getElementById("impuesto-renta").value = rentaMonto.toFixed(2);

const totalRetenciones = fonaviMonto + rentaMonto;


const totalNeto = totalHonorarios - totalRetenciones;
document.getElementById('total-neto').value = totalNeto.toFixed(2);

}


