let Empresas = [];
let mostrar = document.getElementById('mostrar');

function iniciar(){
    document.getElementById('guardar').addEventListener("click", saludar);
    Mostrar();
}


function saludar(){
    let nombre = document.getElementById('nombre').value;
    let nit = document.getElementById('nit').value;
    let fFundacion = document.getElementById('fFundacion').value;
    let direccion = document.getElementById('direccion').value;
    let id = document.getElementById('id').value;
    CrearEmpresa(nombre, nit, fFundacion, direccion, id)
}

function CrearEmpresa(nombre, nit, fFundacion, direccion, id){
    let empresa = {
        id: id,
        nombre: nombre,
        nit: nit,
        fFundacion: fFundacion,
        direccion: direccion
    }
    console.log(empresa);
    Empresas.push(empresa);
    GuardarLocalStorage();
}

function GuardarLocalStorage(){
    localStorage.setItem('empresas', JSON.stringify(Empresas));
    limpiar();
        //Empresas.shift();
    Mostrar();
}

function Mostrar(){
    mostrar.innerHTML = ''
    Empresas = JSON.parse(localStorage.getItem('empresas'));

    if (Empresas === null) {
        Empresas = []
    } else {
        Empresas.forEach((valor, i) =>{
            mostrar.innerHTML +=  `<div class="alert alert" role="alert">
            <b>Nombre: ${valor.nombre}</b> - NIT: ${valor.nit} - Fecha Fundacion: ${valor.fFundacion} -  Direccion: ${valor.direccion}
            <button type="button" class="btn btn-info" onclick="Editar(${i})">Edit</button>
            <button type="button" class="btn btn-danger" onclick="Eliminar(${i})">X</button>
        </div>`;
             })
    }
}   

function Editar(index){
    console.log(index)
    document.getElementById('nombre').value = Empresas[index].nombre;
    document.getElementById('nit').value =  Empresas[index].nit;
    document.getElementById('fFundacion').value = Empresas[index].fFundacion;
    document.getElementById('direccion').value =  Empresas[index].direccion;
    document.getElementById('id').value =  Empresas[index].id;

    document.getElementById('EditarT').addEventListener('click', () => EditarF(index))
}

function EditarF(y){
    console.log(y);
    let e = {
        id: id.value,
        nombre: nombre.value,
        nit: nit.value,
        fFundacion: fFundacion.value,
        direccion: direccion.value
    }
    console.log(e);
    Empresas = Empresas.map((x,k) => {if(k === y ){}  return k === y ? e : x } );
    console.log(Empresas);
    GuardarLocalStorage();
    limpiar();
    Mostrar();
   
}

function Eliminar(index){
    Empresas.splice(index,1);
    GuardarLocalStorage();
}

function limpiar(){
    document.getElementById("form").reset();
}

window.addEventListener("load", iniciar)