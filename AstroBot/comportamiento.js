function conversacion() {
    if (document.getElementById('ingreso1').value==="Hola" || document.getElementById('ingreso1').value==="hola") {
        document.getElementById('texto1').innerHTML="Hola, Soy AstroBot :) ¡Un gusto hablar contigo!";
    }
    else {
        document.getElementById('texto1').innerHTML="No entiendo :( lo siento!";
    }

    if (document.getElementById('ingreso1').value==="Como me llamo?" || document.getElementById('ingreso1').value==="como me llamo?") {
        document.getElementById('texto1').innerHTML="Tu nombre es Erika!";
    }

    if (document.getElementById('ingreso1').value==="Como te llamas?" || document.getElementById('ingreso1').value==="como te llamas?") {
        document.getElementById('texto1').innerHTML="Me llamo AstroBot";
    }
}
