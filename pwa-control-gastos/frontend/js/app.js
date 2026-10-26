const formulario = document.querySelector('#form-gasto');
const listasGastos = document.querySelector('#lista-gastos');
const totalGastos = document.querySelector('#total-gastos');

const gastos = [];

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const description = document.querySelector('#description').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    const categoria = document.querySelector('#categoria').value;
    const fecha = document.querySelector('#Fecha').value;

    const gasto = {
        id: crypto.randomUUID(),
        description,
        cantidad,
        categoria,
        fecha
    };

    console.log(gasto);

    agregarGasto(gasto);

    // TODO: invocar función renderizarGastos()
    renderizarGastos();

    formulario.reset();
});

function renderizarGastos() {
    listasGastos.innerHTML = "";

    let total = 0;

    gastos.forEach(function (gasto) {
        const item = document.createElement("li");
        const botonEliminar = document.createElement("button");
        const botonEditar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEditar.textContent = "Editar";
        

        botonEliminar.addEventListener("click", function(){
            eliminarGasto(gasto.id);
        });

        botonEditar.addEventListener("click", () =>{
            cargarGastoEnFormulario(gasto.id);
        })
        item.textContent =
            `${gasto.description} - $${gasto.cantidad.toFixed(2)} - ${gasto.categoria} - ${gasto.fecha}`;
        
        item.appendChild(botonEliminar);
        item.appendChild(botonEditar);
        
        listasGastos.appendChild(item);

        total += gasto.cantidad;
    });

    totalGastos.textContent = "$" + total.toFixed(2);
}

 const agregarGasto = gasto => {
     gastos.push(gasto);
 };

// function eliminarGasto(id){
//     const indice = gastos.findIndex(function (gasto){
//         return gasto.id === id;
//     })
    
//     if(indice !== -1){
//         gastos.splice(indice, 1);
//     }

//     renderizarGastos();
// }

const eliminarGasto = id => {
    const indice = gasto.findIndex(gasto => gasto.id === id);

    if(indice !== -1){
        gastos.splice(indice, 1);
    }

    renderizarGastos(gasto);
}

const obtenerGastoPorId = id =>{
    return gasto.find(gasto => gasto.id === id);
}

const cargarGastoEnFormulario = id =>{
    const gasto = obtenerGastoPorId(id);

    if (!gasto){
        return;
    }
    document.querySelector("#descripcion").value = gasto.description;
    document.querySelector("#cantidad").value = gasto.cantidad;
    document.querySelector("#categoria").value = gasto.categoria;
    document.querySelector("#Fecha").value = gasto.fecha;
    
    

}
