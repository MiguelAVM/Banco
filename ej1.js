/*const invertir=(num)=>{
    const convertAndReverse = num.toString().split('').reverse().join('')
    return Number(convertAndReverse)
}
exports.invertir=invertir;*/

/*const par=(num)=>{
    if(num%2==0){
        r="El numero es par"
        return  r
    }
    else{
        r="el numero es impar"
        return r
    }
}
exports.par=par;*/

const escuela=(edad,puntaje,sal)=>{
    base=908526.0;
    matricula=10000000;
    if(edad>=15 && edad<=18){
        dde=25;
        if(sal<=base){
            dds=30;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*2){
            dds=20;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*3){
            dds=10;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*4){
            dds=5;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal>base*4){
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
    }
    else if(edad>=19 && edad<=21){
        dde=15;
        if(sal<=base){
            dds=30;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*2){
            dds=20;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*3){
            dds=10;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*4){
            dds=5;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal>base*4){
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
    }
    else if(edad>=22 && edad<=25){
        dde=10;
        if(sal<=base){
            dds=30;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*2){
            dds=20;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*3){
            dds=10;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*4){
            dds=5;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal>base*4){
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dde;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
    }
    else if(edad<25){
        if(sal<=base){
            dds=30;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*2){
            dds=20;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*3){
            dds=10;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal<=base*4){
            dds=5;
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=dde+ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=ddp+dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=dds;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
        else if(sal>base*4){
            if(puntaje>80 && puntaje<86){
                ddp=30;
                dtotal=ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=86 && puntaje<91){
                ddp=35;
                dtotal=ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=91 && puntaje<96){
                ddp=40;
                dtotal=ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje>=96){
                ddp=44;
                dtotal=ddp;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
            else if(puntaje<80){
                dtotal=0;
                porcentaje=matricula*dtotal/100;
                return ("su porcentaje de escuento es de "+dtotal+"% que equivale a: "+porcentaje+" sobre el balor de la matricula");               
            }
        }
    }
}
exports.escuela=escuela;