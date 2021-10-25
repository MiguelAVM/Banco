$(document).ready(function(){


    $('.btneli').on('click',function(){
        
        let btn=$('.btneli').index(this);
        alert(btn);     
        let doccli=$('.doccli').eq(btn);
        let nom=$('.nom').eq(btn);
        let apre=$('.apre').eq(btn);
        let correo=$('.correo').eq(btn);
        let celular=$('.celular').eq(btn);
        let sexo=$('.sexo').eq(btn);
        let fecha=$('.fecha').eq(btn);
    
        let d=doccli.val();
        let n=nom.val();
        let a=apre.val();
        let c=correo.val();
        let ce=celular.val();
        let s=sexo.val();
        let f=fecha.val();
    
    
        alert("datos"+d+n+a+c+ce+s+f);
    
        $.ajax({
            type:"POST",
            url:'/eli_cli',
            data:{
                dd:d,nn:n,aa:a,cc:c,cece:ce,ss:s,ff:f
            }
        })
    });
    });
    