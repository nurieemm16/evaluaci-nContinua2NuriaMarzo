/*Autora: Núria Marzo*/

//EJERCICIOS FITNESS:

//Ejercicios Brazos/Parte alta del cuerpo:

const bicepsPerderPeso = {
  nombre: "Curl de bíceps.",
  instrucciones:
    "Con los codos pegados al cuerpo, justo delante de la caja torácica, gira las palmas de las manos hacia arriba mientras levantas las mancuernas hacia los hombros. Contrae totalmente el bíceps al llegar al punto más alto del movimiento. Repite el movimiento a la inversa para volver a la posición inicial.",
  musculosAtrabajar: "Bíceps.",
  equipamento: "Mancuerna.",
  video: "https://www.youtube.com/embed/HU2lghjU29Y?si=m0WOeVgVhzQ_Iuat",
};

const tricepsFuerza = {
  nombre: "Extensión de tríceps sentado.",
  instrucciones:
    "Sentados en un banco con una mancuerna o una barra debemos extender los brazos por encima de nuestra cabeza y flexionarlos de forma controlada hacía atrás hasta que estos formen un ángulo cercano a los 90º. Luego volvemos a extenderlos por completo y esto será una repetición.",
  musculosAtrabajar: "Tríceps.",
  equipamento: "Mancuerna y banco.",
  video: "https://www.youtube.com/embed/dxLlYmNOr-E?si=BElHTGfBhPYoFJMN",
};

const hombrosResistencia = {
  nombre: "Press Arnold con un solo brazo para hombros.",
  instrucciones:
    "Vista siempre al frente, agarre prono, mancuerna a la altura de la barbilla y espalda recta en todo momento.",
  musculosAtrabajar: "Hombros y deltoides.",
  equipamento: "Mancuerna.",
  video: "https://www.youtube.com/embed/oU6NgHWEYb0?si=w95TZzsV3hvAk_Ox",
};

//Ejercicios Core:

const corePerderPeso = {
  nombre: "Plancha abdominal.",
  instrucciones:
    "Colocar tu cuerpo como cuando haces flexiones, solo que con los codos apoyados en el suelo. La idea es mantener la postura durante algunos segundos, manteniendo la espalda recta y sin bajar o subir los glúteos para no reducir su efectividad.",
  musculosAtrabajar: "Abdominales centrales.",
  equipamento: "Esterilla.",
  video: "https://www.youtube.com/embed/Bsof_3XO2Tg?si=ZvzAa5JttM6T3EPL",
};

const coreFuerza = {
  nombre: "Plancha lateral.",
  instrucciones:
    "Colocamos el cuerpo de lado y nos apoyamos únicamente con un codo.  Tendrás que mantener la postura con el cuerpo recto y trabajar los dos lados por igual. Mientras que lo pongas en práctica, procura no acercar la cadera o alejarla del suelo porque podrías afectar la eficacia del ejercicio.",
  musculosAtrabajar: "Oblicuos.",
  equipamento: "Esterilla.",
  video: "https://www.youtube.com/embed/bRivOELQVOs?si=Bs6isv_Q7joSGk-v",
};

const coreResistencia = {
  nombre: "Elevación de piernas.",
  instrucciones:
    "Tumbarse con la cabeza boca arriba, pegar cada brazo a un lado del cuerpo, dejando las palmas de las manos hacia abajo, y elevar las piernas hasta formar un ángulo de 90º con el torso.",
  musculosAtrabajar: "Core entero.",
  equipamento: "Esterilla y/o toalla.",
  video: "https://www.youtube.com/embed/4oYU_1HjbtM?si=gLDdWnAyeBHdGVLY",
};

//Ejercicios Pierna:

const piernaPerderPeso = {
  nombre: "Sentadilla.",
  instrucciones:
    "Situarse de pie con las piernas separadas según el ancho de los hombros, con los pies hacia afuera. Con la espalda erguida y sin que se tense, el movimiento comienza con un descenso llevando los glúteos hacia atrás, como si se adoptase una posición sentada. A continuación, se recupera la postura inicial y se repite de nuevo.",
  musculosAtrabajar: "Glúteos y cuádriceps.",
  equipamento: "Nada.",
  video: "https://www.youtube.com/embed/dqynXqte24o?si=vKxZSP8O3Pl3JOfi",
};

const piernaFuerza = {
  nombre: "Walking Lunge.",
  instrucciones:
    "Consiste en caminar hacia adelante dando una zancada comuna pierna, mientras la otra queda atrás y baja hasta que la rodilla casi roce el suelo. Debe hacerse de forma coordinada y no demasiado rápido para asegurarse de que no se corre el riesgo de lesión. Será clave mantener la rodilla de la zancada firme y sin que se doble hacia los lados.",
  musculosAtrabajar: "Cuádriceps, los isquiotibiales y los glúteos.",
  equipamento: "Nada.",
  video: "https://www.youtube.com/embed/2nk3yjfdGz4?si=vlzntyreUVJiqrS5",
};

const piernaResistencia = {
  nombre: "Sentadilla búlgara.",
  instrucciones:
    "La sentadilla búlgara requiere de un soporte o superficie, como puede ser una silla. La técnica consiste en situarse de pie y de espaldas a dicho objeto, una de las dos piernas se apoyará en la superficie elevada mientras que la otra sigue en el suelo. El movimiento se trata de bajar el cuerpo de modo que la rodilla adelantada adquiera un ángulo de 90 grados.",
  musculosAtrabajar:
    "Cuádriceps, glúteos mayor, medio y menor, isquiotibiales, abductores, los gemelos y los músculos de la cadera.",
  equipamento: "Silla o banco.",
  video: "https://www.youtube.com/embed/K-6DG1hcHzU?si=IjUS3pvwwP07mU5B",
};

//FUNCIÓN SHOW AL HACER CLIC AL EJERCICIO

function showDetallesEjercicios() {
  const explicacionej = document.getElementById("explicacionej");
  //Con este IF, aparece o desaparece el ejercicio con el display none/flex
  if (explicacionej.style.display === "none") {
    explicacionej.style.display = "flex";
  } else {
    explicacionej.style.display = "none";
  }
}

/*Creamos función pasandole el parámetro ejercicio el cual es el objeto con datos del ejercicio.*/
function añadirDatosEjercicio(ejercicio) {
  const nombre = ejercicio.nombre; //Aquí creamos una variable, y cojemos del objeto la propiedad de nombre junto con su valor
  document.getElementById("nombreEjercicio").innerHTML = nombre; //Aquí cojemos el elemento nombreEjercicio de nuestro HTML y lo cambiamos a la variable nombre. De esta manera, en el html aparecera el valor de la propiedad nombre.
  const instrucciones = ejercicio.instrucciones;
  document.getElementById("instruccionesEjercicio").innerHTML = instrucciones;
  const musculos = ejercicio.musculosAtrabajar;
  document.getElementById("musculosEjercicio").innerHTML = musculos;
  const equipamento = ejercicio.equipamento;
  document.getElementById("equipamentoEjercicio").innerHTML = equipamento;
  const video = ejercicio.video;
  document.getElementById("videoEjercicio").setAttribute("src", video);
}

//FUNCIONES PERDER PESO:

function showBicepsPerderPeso() {
  // Llamamos a la función añadirDatosEjercicio junto al parámetro (objeto) del ejericio que queremos mostrar
  añadirDatosEjercicio(bicepsPerderPeso);
  showDetallesEjercicios();
}

function showAbsPerderPeso() {
  añadirDatosEjercicio(corePerderPeso);
  showDetallesEjercicios();
}

function showPiernasPerderPeso() {
  añadirDatosEjercicio(piernaPerderPeso);
  showDetallesEjercicios();
}

//FUNCIONES FUERZA:

function showBicepsFuerza() {
  // Llamamos a la función añadirDatosEjercicio junto al parámetro (objeto) del ejericio que queremos mostrar
  añadirDatosEjercicio(tricepsFuerza);
  showDetallesEjercicios();
}

function showAbsFuerza() {
  añadirDatosEjercicio(coreFuerza);
  showDetallesEjercicios();
}

function showPiernasFuerza() {
  añadirDatosEjercicio(piernaFuerza);
  showDetallesEjercicios();
}

//FUNCIONES RESISTENCIA CARDIOVASCULAR:

function showBicepsResistencia() {
  // Llamamos a la función añadirDatosEjercicio junto al parámetro (objeto) del ejericio que queremos mostrar
  añadirDatosEjercicio(hombrosResistencia);
  showDetallesEjercicios();
}

function showAbsResistencia() {
  añadirDatosEjercicio(coreResistencia);
  showDetallesEjercicios();
}

function showPiernasResistencia() {
  añadirDatosEjercicio(piernaResistencia);
  showDetallesEjercicios();
}

//POP UP SEGUIMIENTO BOTÓN

document
  .getElementById("btn-seguimiento")
  .addEventListener("click", ejercicioAcabado); //Aquí cojemos por el id el botón de seguimiento, y le decimos que cuando se haga click, se ejecute la siguiente función:

function ejercicioAcabado() {
  //.value vol dir que agafa el valor que hem posat al input del formulari i ho guarda a la variable intensidad, peso, etc. El valor obtingut és el valor ingressat per l'usuari al camp d'entrada del formulari.
  let intensidad = document.getElementById("intensidad").value; 
  let peso = document.getElementById("peso").value;
  let numRepeticiones = document.getElementById("numrepet").value;
  let numSeries = document.getElementById("numseri").value;
  let tiempoEmpleado = document.getElementById("tiempoempleado").value;
  
  //Aquest if serveix per a verificar si hi ha valors buits en les variables relacionades amb el formulari. La alerta "Los datos introducidos no son correctos." s'activarà, si al menys una d'aquestes variables està buida o si intensitat no és una string.
  if (
    //Gestión de Errores
    peso === "" ||
    intensidad === "" ||
    typeof intensidad !== "string" ||//Gestión de Errores
    numRepeticiones === "" ||
    numSeries === "" ||
    tiempoEmpleado === ""
  ) {
    alert("Los datos introducidos no son correctos."); //Gestión de Errores
  } else if (numRepeticiones <= 0 || 
            numSeries <= 0 || 
            tiempoEmpleado <= 0) {
    alert("El Número de repeticiones, de series y el tiempo empleado debe ser superior a 0");
  } else {
    alert("¡Bien Hecho!");
    
    // Per fer la taula amb els valors que hem introduit al formulari fem el següent: Agafar l'element HTML de destí (<p> buit) i afegim la corresponent variable que hem creat amunt.
    document.getElementById("intensidadEjercicio").innerHTML = `${intensidad} intensidad.`;
    document.getElementById("pesoEjercicio").innerHTML = `${peso} kg.`;
    document.getElementById("numrepsEjercicio").innerHTML = `${numRepeticiones} repeticiones.`;
    document.getElementById("numseriesEjercicio").innerHTML = `${numSeries} series.`;
    document.getElementById("tiempoEjercicio").innerHTML = `${tiempoEmpleado} minutos.`;

    document.getElementById("seguimiento2").style.display = "flex";
  }
}
