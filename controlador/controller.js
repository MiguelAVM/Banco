const connection=require('../conexion/conexion');
const cnn=connection();
const {render}=require('ejs');
const { request } = require('express');
const bcryptjs=require('bcryptjs');
const controller={};
controller.index=(req,res,next)=>{
    res.render('login')
    res.send("Error en el controlador")
}

controller.consultageneral=(req,res,next)=>{
    cnn.query('SELECT * FROM usuarios',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            //console.log(resbd)
            res.render('consultas',{datos:resbd});
        }
    })
}

controller.insertar=async(req,res,next)=>{
    const d=req.body.doccli;
    const u=req.body.nomusu;
    const c=req.body.clave;
    const r=req.body.rol;
    const e=req.body.estado;
    const i=req.body.imagen;
    const password=await bcryptjs.hash(c,8);
    console.log(d,u);
    cnn.query('insert into usuarios set?',{doccli:d,nomusu:u,clave:password,rol:r,estado:e,imagen:i},(err,resbd)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/consultas')
        }
    });
}


controller.login=async(req,res,next)=>{
    const usu=await req.body.usuario;
    const cla=await req.body.password;
    cnn.query('SELECT * FROM usuarios WHERE nomusu =? ',[usu],async(err,results)=>{
        
        if(results!=0 && await(bcryptjs.compare(cla,results[0].clave))){
            rol= results[0].rol;
            uss= results[0].usu;

            switch(rol){
                case 'Cliente':      
                        res.redirect('produc_cli');   
                break
            
                case 'Admin': 
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


controller.actualizar=async(req,res,next)=>{
    const doc=req.body.dd;
    const usu=req.body.uu;
    const cla=req.body.cc;
    const rol=req.body.rr;
    const est=req.body.ee;
    const img=req.body.ii;
    const password=await bcryptjs.hash(cla,8);

    
    cnn.query('UPDATE usuarios SET nomusu="'+usu+'",clave="'+password+'",rol="'+rol+'",estado="'+est+'", imagen="'+img+'" WHERE doccli="'+doc+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Actualizar");
            res.redirect('consultas');
        }
    })

}


controller.eliminar=async(req,res,next)=>{
    const doc=req.body.dd;
    const usu=req.body.uu;
    const cla=req.body.cc;
    const rol=req.body.rr;
    const est=req.body.ee;
    const img=req.body.ii;
    const password=await bcryptjs.hash(cla,8);

    
    cnn.query('DELETE FROM usuarios WHERE doccli=?',[doc],async(err,respbb)=>{
        if(err){
            next(new Error(err));
            console.log("no se pudo eliminar");
        }
        else{
            console.log("Eliminado");
            res.redirect('consultas');
        }
    })

}




controller.consul_cli=(req,res,next)=>{
    cnn.query('SELECT * FROM clientes',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            //console.log(resbd)
            res.render('cliente',{datos:resbd});
        }
    })
}

controller.inser_cli=async(req,res,next)=>{
    const d=req.body.doccli;
    const n=req.body.nomcli;
    const a=req.body.aprecli;
    const c=req.body.correocli;
    const ce=req.body.celular;
    const s=req.body.sexo;
    const f=req.body.fechanaccli;
    console.log(d);
    cnn.query('insert into clientes set?',{doccli:d,nomcli:n,aprecli:a,correocli:c,celular:ce,sexo:s,fechanaccli:f},(err,resbd)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/cliente')
        }
    });
}

controller.act_cli=async(req,res,next)=>{
    const doccli=req.body.dd;
    const nom=req.body.nn;
    const apre=req.body.aa;
    const correo=req.body.cc;
    const celular=req.body.cece;
    const sexo=req.body.ss;
    const fecha=req.body.ff;
    
    cnn.query('UPDATE clientes SET nomcli="'+nom+'",aprecli="'+apre+'",correocli="'+correo+'", celular="'+celular+'", sexo="'+sexo+'", fechanaccli="'+fecha+'" WHERE doccli="'+doccli+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Actualizar");
            res.redirect('cliente');
        }
    })

}

controller.eli_cli=async(req,res,next)=>{
    const doc=req.body.dd;
    const nom=req.body.nn;
    const apre=req.body.aa;
    const correo=req.body.cc;
    const celular=req.body.cece;
    const sexo=req.body.ss;
    const fecha=req.body.ff;
    
    cnn.query('DELETE FROM clientes WHERE doccli=?',[doc],async(err,respbb)=>{
        if(err){
            next(new Error(err));
            console.log("no se pudo eliminar");
        }
        else{
            console.log("Eliminado");
            res.redirect('cliente');
        }
    })
}


/*=========================LINEAS================================================*/
controller.consul_li=(req,res,next)=>{
    cnn.query('SELECT * FROM lineas',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            //console.log(resbd)
            res.render('lineas',{datos:resbd});
        }
    })
}

controller.inser_li=async(req,res,next)=>{
    const c=req.body.codlinea;
    const n=req.body.nomlinea;
    const m=req.body.montomaxicredito;
    const p=req.body.plazomaxcred;
    cnn.query('insert into lineas set?',{codlinea:c,nomlinea:n,montomaxicredito:m,plazomaxcred:p},(err,resbd)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/lineas')
        }
    });
}


controller.act_li=async(req,res,next)=>{
    const cod=req.body.cc;
    const nom=req.body.nn;
    const mon=req.body.mm;
    const pla=req.body.pp;
    
    cnn.query('UPDATE lineas SET nomlinea="'+nom+'",montomaxicredito="'+mon+'",plazomaxcred="'+pla+'" WHERE codlinea="'+cod+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Actualizar");
            res.redirect('lineas');
        }
    })

}

controller.eli_li=async(req,res,next)=>{
    const cod=req.body.cc;
    const nom=req.body.nn;
    const mon=req.body.mm;
    const pla=req.body.pp;
    
    cnn.query('DELETE FROM lineas WHERE codlinea=?',[cod],async(err,respbb)=>{
        if(err){
            next(new Error(err));
            console.log("no se pudo eliminar");
        }
        else{
            console.log("Eliminado");
            res.redirect('lineas');
        }
    })
}

/*================================CREDITOS===============================*/
controller.consul_cre=(req,res,next)=>{
    cnn.query('SELECT * FROM creditos',(err,resbd)=>{
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

controller.inser_cre=async(req,res,next)=>{
    const c=req.body.codigocredito;
    const d=req.body.doccli;
    const cod=req.body.codlinea;
    const m=req.body.montoprestado;
    const f=req.body.fechaaproba;
    const p=req.body.plazo;
    cnn.query('insert into creditos set?',{codigocredito:c,doccli:d,codlinea:cod,montoprestado:m,fechaaproba:f,plazo:p},(err,resbd)=>{
        if(err){
            next(new Error(err))
        }
        else{
            res.redirect('/creditos')
        }
    });
}

controller.act_cre=async(req,res,next)=>{
    const c=req.body.cc;
    const d=req.body.dd;
    const cod=req.body.coco;
    const m=req.body.mm;
    const f=req.body.ff;
    const p=req.body.pp;
    
    cnn.query('UPDATE creditos SET doccli="'+d+'",codlinea="'+cod+'",montoprestado="'+m+'",fechaaproba="'+f+'",plazo="'+p+'" WHERE codigocredito="'+c+'"',async(err,respbb)=>{
        if(err){
            next(new Error(err));
        }
        else{
            console.log("Actualizar");
            res.redirect('creditos');
        }
    })

}

controller.eli_cre=async(req,res,next)=>{
    const c=req.body.cc;
    const d=req.body.dd;
    const cod=req.body.coco;
    const m=req.body.mm;
    const f=req.body.ff;
    const p=req.body.pp;
    
    cnn.query('DELETE FROM creditos WHERE codigocredito=?',[c],async(err,respbb)=>{
        if(err){
            next(new Error(err));
            console.log("no se pudo eliminar");
        }
        else{
            console.log("Eliminado");
            res.redirect('creditos');
        }
    })
}

/*==================================================================================================*/
controller.produc_cli=(req,res,next)=>{
    cnn.query('SELECT FROM usuarios WHERE doccli=?',(err,resbd)=>{
        if(err){
            next(new Error(err))
            console.log("Error en la consulta")
        }
        else{
            //console.log(resbd)
            res.render('produc_cli',{datos:resbd});
        }
    })
}
module.exports=controller;