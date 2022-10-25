let arrayPaises=['BRASIL','ARGENTINA','URUGUAY'];
let lista = document.getElementById('lista');



function eliminar(i){
  arrayPaises.splice(i,1);
  cargar()
}

function editar(i){
  document.getElementById('exampleModalLabel').innerHTML=`Editar ${arrayPaises[i]}`;

  document.getElementById('modal-number').value=`${i}`

  document.getElementById('modal-body').innerHTML=`<input type="text" class="form-control" name="" id="campo2" value="${arrayPaises[i]}">`;

}

const actualizar = () =>{
  let valorNuevo= document.getElementById('campo2').value;
  let indice = document.getElementById('modal-number').value;

  if(verificar(valorNuevo)){
    arrayPaises[indice]=valorNuevo.toUpperCase();
    cargar()
  }
}


function cargar(){
  lista.innerHTML ='';
  
  for (let i = 0; i < arrayPaises.length; i++) {
    lista.innerHTML +=`<tr'>
                          <td>${i}</td>
                          <td>${arrayPaises[i]}</td>
                          <td><button class='bi bi-trash3 btn btn-danger' onclick="eliminar(${i})"></button></td>
                          
                          <td>
                          <button class='bi bi-pencil btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal' onclick='editar(${i})'></button>
                          </td>
                       </tr>`
  }
   
}


window.addEventListener('load',cargar());

function verificar(valor){

  if(valor===''){
    alert('El campo esta vacio');
    return false;
  }
  if(arrayPaises.includes(valor.toUpperCase())){
    alert('El valor ingresado ya existe')
  }else{
    document.getElementById('campo1').value='';
    return true;
  }

}

const agregar = ()=>{
  let valor = document.getElementById('campo1').value;
  if(Number(valor)){
    alert('Ingrese un texto') 
  }else{
    if(verificar(valor)){
      arrayPaises.push(valor.toUpperCase());
      cargar()
    }

  }
}


document.getElementById('boton').addEventListener('click',agregar);

