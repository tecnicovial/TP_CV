
const agradecimiento="Muchas gracias por el curso. Las explicaiones estuvieron muy bien!.\nFelicitaciones a Daniel y a todo el Equipo!!!. \n Me fue de mucha utilidad. Espero poder anotarme en el proximo"
const sugerencias="- Sería bueno tener un foro o un lugar donde realizar consultas, ya sea entre miembros de 'la Clase' y/o con algun tutor. \n - Estaría bueno que propongan ejercicios aplicando los distintos temas dados."
const aclaraciones=" - Creo que vamos a estar de acuerdo de que el diseño es feito... me centré mas en el uso de los distintos elementos. Perdon a la vista de uds! :) \n - A la mayoria de los elementos le asigne un ID y una CLASE. Al momento de usar CSS, es mejor darles formato por ID o por CLASE, o sencillamente depende de cuanto se vaya a reutilizar el formato para elegir uno u otro?  \n - Por lo que pude ir leyendo, por semántica es 'mas correcto' usar el elementeio Section y no el div. Esto es asi? yo use una seccion y a las distintas partes le colocque un div, estaría correcto o hay otra forma mejor? \n - El html subido,no es web responsive...lo acabo de ver en otra pc y no queda tan acomodado como lo veia en mi compu. Para ese caso y sin usar boostrap, es conveniente definir los tamaños en % y no en px?.\nDesde ya muchas gracias por todo! si está dentro de sus posibilidades conestar en esta instancia las dudas, pueden hacerlo a tecnicovial.martin@gmail.com"


/* "agradecimiento" onclick="mensaje(this.id)">Agradecimientos!</button>

<button type="button" id="sugerencias" onclick="mensaje(this.id)">Sugerencias</button>

<button type="button" id="aclaraciones" onclick="mensaje(this.id)">Aclaraciones</button>*/


function mensaje(boton_apretado)
{
    console.log("el boton apretado es" + boton_apretado);
    switch (boton_apretado)
    {
        case "agradecimiento":
            window.alert(agradecimiento);
            break;
        
        case "sugerencias":
            window.alert(sugerencias);
            break;
                
        case "aclaraciones":
            window.alert(aclaraciones);
            break;
                        
    }
}


