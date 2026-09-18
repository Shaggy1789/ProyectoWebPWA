const formulario = document.querySelector('#form-gasto');
const listasGastos = document.querySelector('#lista-gastos');
const totalGastos = document.querySelector('#total-gastos');

// console.log(formulario);
// console.log(listasGastos);
// console.log(totalGastos);

const gastos=[];

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const description = document.querySelector('description'.value)
    const cantidad = document.querySelector('cantidad'.value)
    const categoria = document.querySelector('categoria'.value)
    const fecha = document.querySelector('fecha'.value)

    const gasto = {
        id: crypto.randomUUID,
        description,
        cantidad,
        categoria,
        fecha
    }

    console.log(gasto);

    gastos.push();
    //TODO: invocar funcion, renderizarGastos()
    formulario.reset;

})

//TO DO: Construir la funcion redendizarGastos()

function renderizarGastos(){
    
}