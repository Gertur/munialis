{
    let titulonoticia;
    let formularionoticia;
    let enviarnoticia;
    let init = function(){
        formularionoticia = document.getElementById("formularionoticia");
        titulonoticia = document.getElementById("titulonoticia");
        ibtitulonoticia = document.getElementById("ibtitulonoticia");
        enviarnoticia = document.getElementById("enviarnoticia");

        titulonoticia.addEventListener("blur",validartitulonoticia);
        enviarnoticia.addEventListener("click",function(event){
            validar();
        });
    };
    let validartitulonoticia = function(){
        let valortitulonoticia = titulonoticia.value;
        if(valortitulonoticia === ""){
            ibtitulonoticia.innerHTML ="La noticia deve contener un título";
            return false;
        }else if(valortitulonoticia.length == 1){
            ibtitulonoticia.innerHTML ="El título insertado en muy corto";
            return false;
        }else{
            ibtitulonoticia.innerHTML ="";
            return true;
        }
    }
    let validar = function(){
        if(!validartitulonoticia()){
            titulonoticia.focus();
        }else{
            alert("se envio");
        }
    };
    window.onload = init;
}
 