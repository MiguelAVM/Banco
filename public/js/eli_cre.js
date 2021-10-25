$(document).ready(function(){


    $('.btneli').on('click',function(){
        
        let btn=$('.btneli').index(this);
        alert(btn);     
        let codcre=$('.codigocredito').eq(btn);
        let doccli=$('.doccli').eq(btn);
        let codlinea=$('.codlinea').eq(btn);
        let mon=$('.montoprestado').eq(btn);
        let fecha=$('.fechaaproba').eq(btn);
        let plazo=$('.plazo').eq(btn);
        
    
        let c=codcre.val();
        let d=doccli.val();
        let cod=codlinea.val();
        let m=mon.val();
        let f=fecha.val();
        let p=plazo.val();
    
    
        alert("datos"+c+d+cod+m+f+p);
    
        $.ajax({
            type:"POST",
            url:'/eli_cre',
            data:{
                cc:c,dd:d,coco:cod,mm:m,ff:f,pp:p
            }
        })
    });
    });
    