const usuario=(contra,usu)=>{
    if(contra=="123" && usu=="Pepe"){
        r="Sus datos son correctos";
        return r;
    }
    else{
        r="sus datos son incorrectos";
        return r;
    }
}

exports.usuario=usuario;