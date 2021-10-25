controller.login=async(req,res,next)=>{
    const usu=await req.body.usuario;
    const cla=await req.body.password;
    cnn.query('SELECT * FROM usuarios WHERE nomusu =? ',[usu],async(err,results)=>{
        if(err){
            next(new Error("error de consulta login",err));
        }
        else if(results!=0 && await(bcryptjs.compare(cla,results[0].clave))){
            //console.log("datos correctos");
            rol= results[0].rol;
            uss= results[0].usu;
            req.session.login=true;

            switch(rol){
                case 'Cliente':
                    if(req.session.login){
                        
                        res.redirect('produc_cli');
                    }
                    else{
                        res.redirect('login');
                    }
                break
            
                case 'empleado':
                    res.redirect('cliente')
                break

                case 'admin':
                    res.redirect('consultas')
                break            
            }
        }
        else{
            //console.log("datos Incorrectos");
            res.redirect('/')
        }
    })
}








/*=====================================================================================*/
controller.product_cli=(req,res,next)=>{
    cnn.query('DELETE FROM clientes WHERE doccli=?',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            //console.log(resbd)
            res.render('creditos',{datos:resbd});
        }
    })
}








controller.login=async(req,res,next)=>{
    const usu=await req.body.usuario;
    const cla=await req.body.password;
    cnn.query('SELECT * FROM usuarios WHERE nomusu=?',[usu],async(err,results)=>{
        if(results !=0){
            console.log("aaa");
        }
        
        if(err){
            next(new Error("Error de consulta login",err));
            
        }
        else if(results !=0 && await(bcryptjs.compare(cla,results[0].clave))){
            console.log("Datos Incorrectos");
            res.redirect('/consultas')
        }
        else{
            console.log("Datos incorrectos");
            res.redirect('/');
        }
    })
}