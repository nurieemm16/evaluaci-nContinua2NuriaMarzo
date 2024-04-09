//EJERCICIOS BRAZOS

const bicepsPerderPeso = {
  nombre: "Curl de bíceps.",
  instrucciones:
    "Con los codos pegados al cuerpo, justo delante de la caja torácica, gira las palmas de las manos hacia arriba mientras levantas las mancuernas hacia los hombros. Contrae totalmente el bíceps al llegar al punto más alto del movimiento. Repite el movimiento a la inversa para volver a la posición inicial.",
  musculosAtrabajar: "Bíceps.",
  equipamento: "Mancuerna.",
  video: "https://www.youtube.com/watch?v=HU2lghjU29Y",
};

const tricepsFuerza = {
  nombre: "Extensión de tríceps sentado.",
  instrucciones:
    "Sentados en un banco con una mancuerna o una barra debemos extender los brazos por encima de nuestra cabeza y flexionarlos de forma controlada hacía atrás hasta que estos formen un ángulo cercano a los 90º. Luego volvemos a extenderlos por completo y esto será una repetición.",
  musculosAtrabajar: "Tríceps.",
  equipamento: "Mancuerna y banco.",
  video: "https://www.youtube.com/watch?v=dxLlYmNOr-E",
};

const hombrosResistencia = {
  nombre: "Press Arnold con un solo brazo para hombros.",
  instrucciones:
    "Vista siempre al frente, agarre prono, mancuerna a la altura de la barbilla y espalda recta en todo momento.",
  musculosAtrabajar: "Hombros y deltoides.",
  equipamento: "Mancuerna.",
  video: "https://www.youtube.com/watch?v=oU6NgHWEYb0",
};

//EJERCICIOS CORE

const corePerderPeso = {
  nombre: "Plancha abdominal.",
  instrucciones:
    "Colocar tu cuerpo como cuando haces flexiones, solo que con los codos apoyados en el suelo. La idea es mantener la postura durante algunos segundos, manteniendo la espalda recta y sin bajar o subir los glúteos para no reducir su efectividad.",
  musculosAtrabajar: "Abdominales centrales.",
  equipamento: "Esterilla.",
  video: "https://www.youtube.com/watch?v=Bsof_3XO2Tg",
};

const coreFuerza = {
  nombre: "Plancha lateral.",
  instrucciones:
    "Colocamos el cuerpo de lado y nos apoyamos únicamente con un codo. De la misma manera que sucedía en el ejercicio anterior, tendrás que mantener la postura con el cuerpo recto y trabajar los dos lados por igual. Mientras que lo pongas en práctica procura no acercar la cadera o alejarla del suelo porque podrías afectar la eficacia del ejercicio.",
  musculosAtrabajar: "Oblicuos.",
  equipamento: "Esterilla.",
  video: "https://www.youtube.com/watch?v=bRivOELQVOs",
};

const coreResistencia = {
  nombre: "Elevación de piernas.",
  instrucciones:
    "Tumbarse con la cabeza boca arriba, pegar cada brazo a un lado del cuerpo, dejando las palmas de las manos hacia abajo, y elevar las piernas hasta formar un ángulo de 90º con el torso.",
  musculosAtrabajar: "Core entero.",
  equipamento: "Esterilla y/o toalla.",
  video: "https://www.youtube.com/watch?v=4oYU_1HjbtM",
};

//EJERCICIOS PIERNA

const piernaPerderPeso = {
  nombre: "Sentadilla.",
  instrucciones:
    "Situarse de pie con las piernas separadas según el ancho de los hombros, con los pies hacia afuera. Con la espalda erguida y sin que se tense, el movimiento comienza con un descenso llevando los glúteos hacia atrás, como si se adoptase una posición sentada. A continuación, se recupera la postura inicial y se repite de nuevo.",
  musculosAtrabajar: "Glúteos y cuádriceps.",
  equipamento: "Nada.",
  video:
    "https://www.youtube.com/watch?v=dqynXqte24o&embeds_referring_euri=https%3A%2F%2Fwww.expansion.com%2Ffueradeserie%2Fcuerpo%2F2023%2F05%2F14%2F6449d6c9468aebd81b8b4640.html&embeds_referring_origin=https%3A%2F%2Fwww.expansion.com&source_ve_path=OTY3MTQ&feature=emb_imp_woyt",
};

const piernaFuerza = {
  nombre: "Walking lunge.",
  instrucciones:
    "Consiste en caminar hacia adelante dando una zancada comuna pierna, mientras la otra queda atrás y baja hasta que la rodilla casi roce el suelo. Debe hacerse de forma coordinada y no demasiado rápido para asegurarse de que no se corre el riesgo de lesión. Será clave mantener la rodilla de la zancada firme y sin que se doble hacia los lados.",
  musculosAtrabajar: "Cuádriceps, los isquiotibiales y los glúteos",
  equipamento: "Nada.",
  video: "https://www.youtube.com/watch?v=2nk3yjfdGz4",
};

const piernaResistencia = {
  nombre: "Sentadilla búlgara",
  instrucciones:
    "La sentadilla búlgara requiere de un soporte o superficie, como puede ser una silla. La técnica consiste en situarse de pie y de espaldas a dicho objeto, una de las dos piernas se apoyará en la superficie elevada mientras que la otra sigue en el suelo. El movimiento se trata de bajar el cuerpo de modo que la rodilla adelantada adquiera un ángulo de 90 grados.",
  musculosAtrabajar:
    "Cuádriceps, glúteos mayor, medio y menor, isquiotibiales, abductores, los gemelos y los músculos de la cadera.",
  equipamento: "Silla o banco",
  video: "https://www.youtube.com/watch?v=K-6DG1hcHzU",
};

//FUNCION SHOW EJERCICIO BICEPS PERDER PESO
function showDetallesEjercicios() {
  const explicacionej = document.getElementsByClassName("explicacionej")[0];
  
  if (explicacionej.style.display === "none") {
    explicacionej.style.display = "flex";
  } else {
    explicacionej.style.display = "none";
  }
}

/*Creamos funcion pasandole el parámetro ejercicio el cual es el objeto con datos del ejercicio.*/ 
function añadirDatosEjercicio(ejercicio) {
  const nombre = ejercicio.nombre
  document.getElementById("nombreEjercicio").innerHTML = nombre
  const instrucciones = ejercicio.instrucciones
  document.getElementById("instruccionesEjercicio").innerHTML = instrucciones
  const musculos = ejercicio.musculosAtrabajar
  document.getElementById("musculosEjercicio").innerHTML = musculos
  const equipamento = ejercicio.equipamento
  document.getElementById("equipamentoEjercicio").innerHTML = equipamento
  const video = ejercicio.video
  document.getElementById('videoEjercicio').setAttribute('href', video);
}


function showBicepsPerderPeso() {
  // Llamamos a la función añadirDatosEjercicio junto al parámetro (objeto) del ejericio que queremos mostrar
  añadirDatosEjercicio(bicepsPerderPeso)
  showDetallesEjercicios()
}

function showAbsPerderPeso() {
  añadirDatosEjercicio(corePerderPeso)
  showDetallesEjercicios()
}

function showPiernasPerderPeso() {
  añadirDatosEjercicio(piernaPerderPeso)
  showDetallesEjercicios()
}


//POP UP SEGUIMIENTO BOTÓN

document.getElementById("btn-seguimiento").addEventListener("click", ejercicioAcabado);

function ejercicioAcabado() {

    let intensidad = document.getElementById("intensidad").value;
    let peso = document.getElementById("peso").value;
    let numRepeticiones = document.getElementById("numrepet").value;
    let numSeries = document.getElementById("numseri").value;
    let tiempoEmpleado = document.getElementById("tiempoempleado").value;
    
    if(peso === '' || intensidad === "" || numRepeticiones === "" || numSeries === "" || tiempoEmpleado === "") {
      alert("Los datos introducidos no son correctos.")
    } else {
      alert("¡Bien Hecho!");
       // Redirigir a mi página principal (home)
      window.location.href = "./index.html";
    }
}
