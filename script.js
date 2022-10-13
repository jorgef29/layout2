agregarFuncionComponentes();
agregarFuncionProductos();


function arrastrarElemento(element) {
    //Declaramos 4 variables para manejar la posición de cada elemento en la pantalla.
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
        //posicionInicialX = element.offsetTop;
        //posicionInicialY = element.offsetLeft;
        //coordenadas = element.getBoundingClientRect();
    element.onpointerdown = arrastrarPuntero

    function arrastrarPuntero(e) {
        e.preventDefault();
        //console.log(e);
        //console.log(element.offsetTop +" "+element.offsetLeft);
        //console.log(posicionInicialX +" "+ posicionInicialY);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = iniciarArrastreElemento;
        document.onpointerup = pararArrastreElemento;
        //document.ondblclick = volverPosicionInicial;
    }

    function iniciarArrastreElemento(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        //console.log(pos1, pos2, pos3, pos4);
        element.style.top = element.offsetTop - pos2 + 'px';
        element.style.left = element.offsetLeft - pos1 + 'px';
    }

    function pararArrastreElemento() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
    /* Intene hacer que al hacer doble click vuelva a su posicion oiriginal pero no pude :(
        estuve ocupado con tareas y examenes de la uni
    function volverPosicionInicial(e){
        console.log("doble click "+posicionInicialY);
        element.style.top = 0+'px';
        element.style.left = 77+'px';
        element.style.rigth = coordenadas.rigth+'px';
        element.style.bottom = coordenadas.bottom+'px';
    }*/
    //para cuando se hace doble click izquierdo
    //ondblclick
}

//funcion para agregar arrastrar elemento a componentes
function agregarFuncionComponentes(){
    for(let i=1;i<=16;i++){
        arrastrarElemento(document.getElementById('componente'+i));
    }
}
//funcion para agregar arrastrar elementos a productos
function agregarFuncionProductos(){
    for(let i=1;i<=4;i++){
        arrastrarElemento(document.getElementById("producto"+i));
    }
}

let elemento = document.getElementById('componente1');
elemento.style.getPropertyValue