$(document).ready(function(){


    $('.btneli').on('click',function(){
        
        let btn=$('.btneli').index(this);
        alert(btn);     
        let codlinea=$('.codlinea').eq(btn);
        let nom=$('.nomlinea').eq(btn);
        let mon=$('.montomaxicredito').eq(btn);
        let plazo=$('.plazomaxcred').eq(btn);
        
    
        let c=codlinea.val();
        let n=nom.val();
        let m=mon.val();
        let p=plazo.val();
    
    
        alert("datos"+c+n+m+p);
    
        $.ajax({
            type:"POST",
            url:'/eli_li',
            data:{
                cc:c,nn:n,mm:m,pp:p
            }
        })
    });
    });
    