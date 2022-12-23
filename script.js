// ARRAY PAISES //
const teams = [
    {
        name: "Arabia Saudita",
        tdescription: [
            {bestPlayer: "Mohammed Al Owais", captain: "Salman Al-Faraj", dt: "Hervé Renard", worldCups: "0", lastVictory: "Mejor resultado: Octavos de final 1994"}
        ],
    },
    {    name: "Argentina",
        tdescription: [
            {bestPlayer: "Lionel Andres Messi", captain: "Lionel Andres Messi", dt: "Lionel Scaloni", worldCups: "2", lastVictory: "1986"}
        ],
    },
    {    name: "Polonia",
        tdescription: [
            {bestPlayer: "Robert Lewandowski", captain: "Robert Lewandowski", dt: "Czesław Michniewicz", worldCups: "0", lastVictory: "Mejor resultado: Tercer puesto (1974 y 11982)"}
        ],
    },
    {    name: "Mexico",
        tdescription: [
            {bestPlayer: "Edson Álvarez", captain: "Guillermo Ochoa", dt: "Gerardo Martino", worldCups: "0", lastVictory: "Mejor resultado: Cuartos de final (1970 y 1986)"}
        ],
    }
];

// ARRAY PARTIDOS //
let partidos = [
    {
        name: "Primer Partido",
        pdescription:[
            {lugar: "Est. Icónico, Lusail", fecha: "Martes 22 de Noviembre (22/11/2022)", hora: "08:00hs UTC"},
        ],
        name: "Segundo Partido",
        pdescription:[
            {lugar: "Est. 974, Doha", fecha: "Martes 22 de Noviembre (22/11/2022)", hora: "14:00hs UTC"}
        ],
        name: "Tercer Partido",
        pdescription: [
            {lugar: "Est. de la Educación, Rayán", fecha: "Sabado 26 de Noviembre (26/11/2022)", hora: "11:00hs UTC"}
        ],
        name: "Cuarto Partido",
        pdescription: [
            {lugar: "Est. Icónico, Lusail", fecha: "Sabado 26 de Noviembre (26/11/2022)", hora: "17:00hs UTC"}
        ],
        name: "Quinto Partido",
        pdescription: [
            {lugar: "Est. 974, Doha", fecha: "Miércoles 30 de Noviembre (30/11/2022)", hora: "17:00hs UTC"}
        ],
        name: "Sexto Partido",
        pdescription: [
            {lugar: "Est. Icónico, Lusail", fecha: "Miércoles 30 de Noviembre (30/11/2022)", hora: "17:00hs UTC"}
        ],
    }
];

// VARIABLES PUNTOS //

let ptsArabia = 0;
let ptsArgentina = 0;
let ptsPolonia = 0;
let ptsMexico = 0;
let primerLugar = 0;

const puntosArg = (puntosGanados) => {
    return ptsArgentina + puntosGanados
}
const puntosAra = (puntosGanados) => {
    return ptsArabia + puntosGanados
}
const puntosMex = (puntosGanados) => {
    return ptsMexico + puntosGanados
}
const puntosPol = (puntosGanados) => {
    return ptsPolonia + puntosGanados
}

// LOG-IN //

let nombreUsuario = prompt ("Ingrese Su Nombre por favor");
let password = prompt ("Ingrese la Contraseña (1446)");
while (password != "1446") {
    alert ("Error! Vuelva a intentarlo");
    password = prompt ("Ingrese la Contraseña (1446)");
}
alert ("Bienvenido " +nombreUsuario+" Al sistema de fixture qatar 2022!!");

// JSON.stringify //

/*let infoPaises = prompt ("Antes de comenzar desea ver informacion sobre los participantes? \n(escriba Y para confirmar o N para continuar");

if (infoPaises = "Y" || "y") {
    alert (JSON.stringify(teams))
}
else if (infoPaises = "N" || "n"){
    alert ("Empecemos!!")
}
else {
    alert ("Ha ocurrido un error")
}*/

alert ("Juega conmigo: Vamos a calcular la posicion al finalizar la fase de grupos de cada seleccion eligiendo cuantos goles hace cada una de ellas!!!" + "\n" + "Empecemos!!"); 

// FUNCTION TABLA DE POSICIONES //

function tablaPosiciones(){
    alert("tabla de posiciones\nArgentina: "+ptsArgentina+"\nArabia saudita: "+ptsArabia+"\nMexico: "+ptsMexico+"\nPolonia: "+ptsPolonia);
}

// Argentina vs Arabia //

let localUno = parseInt(prompt ("Argentina vs Arabia Saudita. Goles de argentina: (solo coloque un numero)"));
alert("Los goles elegidos fueron "+localUno);

let visitaUno = parseInt(prompt("Argentina vs Arabia Saudita. Goles de Arabia Saudita: (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+visitaUno);

    if(localUno>visitaUno){
        alert("Ganador Argentina. Suma 3pts!.")
        ptsArgentina =+ puntosArg(3);
    } else if (localUno<visitaUno){
        alert("Ganador Arabia. Suma 3pts!.")
        ptsArabia =+ puntosAra(3);
    } else if (localUno==visitaUno){
        alert("Empate. Suma 1pt cada seleccion")
        ptsArabia =+ puntosAra(1);
        ptsArgentina =+ puntosArg(1);
    } else{
        alert("los numeros ingresados no fueron correctos")
    }

tablaPosiciones()

// Polonia Vs Mexico //

let localDos = parseInt(prompt("Mexico vs Polonia. Goles de Mexico (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+localDos);

let visitaDos = parseInt(prompt("Mexico vs Polonia. Goles de Polonia (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+visitaDos)

    if(localDos>visitaDos){
        alert("Ganador Mexico. Suma 3pts!.")
        ptsMexico =+ puntosMex(3);
    } else if (localDos<visitaDos){
        alert("Ganador Polonia. Suma 3pts!.")
        ptsPolonia =+ puntosPol(3);
    } else if (localDos==visitaDos){
        alert("Empate. Suma 1pt cada seleccion")
        ptsMexico =+ puntosMex(1);
        ptsPolonia =+ puntosPol(1);
    } else{
        alert("los numeros ingresados no fueron correctos")
    }

tablaPosiciones()

// Polonia vs Arabia //

let localTres = parseInt(prompt("Polonia vs Arabia Saudita. Goles de Polonia (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+localTres);

let visitaTres = parseInt(prompt("Polonia vs Arabia Saudita. Goles de Arabia Saudita (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+visitaTres);

    if(localTres>visitaTres){
        alert("Ganador Polonia. Suma 3pts!.");
        ptsPolonia =+ puntosPol(3);
    } else if (localTres<visitaTres){
        alert("Ganador Arabia Saudita. Suma 3pts!.");
        ptsArabia =+ puntosAra(3);
    } else if (localTres==visitaTres){
        alert("Empate. Suma 1pt cada seleccion");
        ptsPolonia =+ puntosPol(1);
        ptsArabia =+ puntosAra(1);
    } else{
        alert("Los numeros ingresados no fueron correctos");
    }

tablaPosiciones()

// Argentina vs Mexico //

    let localCuatro = parseInt(prompt("Argentina vs Mexico. Goles de Argentina (Solo coloque un numero)"));
    alert("Los goles elegidos fueron "+localCuatro);
    
    let visitaCuatro = parseInt(prompt("Argentina vs Mexico. Goles de Mexico (Solo coloque un numero)"));
    alert("Los goles elegidos fueron "+visitaCuatro)
    
        if(localCuatro>visitaCuatro){
            alert("Ganador Argentina. Suma 3pts!.")
            ptsArgentina =+ puntosArg(3);
        } else if (localCuatro<visitaCuatro){
            alert("Ganador Mexico. Suma 3pts!.")
            ptsMexico =+ puntosMex(3);
        } else if (localCuatro==visitaCuatro){
            alert("Empate. Suma 1pt cada seleccion")
            ptsArgentina =+ puntosArg(1);
            ptsMexico =+ puntosMex(1);
        } else{
            alert("los numeros ingresados no fueron correctos")
        }

tablaPosiciones()   

// Polonia vs Argentina //

let localCinco = parseInt(prompt("Polonia vs Argentina. Goles de Polonia (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+localCinco);

let visitaCinco = parseInt(prompt("Polonia vs Argentina. Goles de Argentina (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+visitaCinco)

    if(localCinco>visitaCinco){
        alert("Ganador Polonia. Suma 3pts!.")
        ptsPolonia =+ puntosPol(3);
    } else if (localCinco<visitaCinco){
        alert("Ganador Argentina. Suma 3pts!.")
        ptsArgentina =+ puntosArg(3);
    } else if (localCinco==visitaCinco){
        alert("Empate. Suma 1pt cada seleccion")
        ptsPolonia =+ puntosPol(1);
        ptsArgentina =+ puntosArg(1);
    } else{
        alert("los numeros ingresados no fueron correctos")
    }

tablaPosiciones()   

// Arabia vs Mexico //

let localSeis = parseInt(prompt("Arabia Saudita vs Mexico. Goles de Arabia Saudita (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+localSeis);

let visitaSeis = parseInt(prompt("Arabia Saudita vs Mexico. Goles de Mexico (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+visitaSeis)

    if(localSeis>visitaSeis){
        alert("Ganador Arabia Saudita. Suma 3pts!.")
        ptsArabia =+ puntosAra(3);
    } else if (localSeis<visitaSeis){
        alert("Ganador Mexico. Suma 3pts!.")
        ptsMexico =+ puntosMex(3);
    } else if (localSeis==visitaSeis){
        alert("Empate. Suma 1pt cada seleccion")
        ptsArabia =+ puntosAra(1);
        ptsMexico =+ puntosMex(1);
    } else{
        alert("los numeros ingresados no fueron correctos")
    }

tablaPosiciones()  

//Primer Lugar

    if ((ptsArabia > ptsArgentina) && (ptsArabia > ptsMexico) && (ptsArabia > ptsPolonia)){
        alert("Primer Lugar Arabia Saudita con "+ptsArabia+" puntos en total");
        primerLugar = "Arabia Saudita";
    } else if ((ptsArgentina > ptsArabia) && (ptsArgentina > ptsMexico) && (ptsArgentina > ptsPolonia)){
        alert("Primer lugar Argentina con "+ptsArgentina+" puntos en total");
        primerLugar = "Argentina";
    } else if ((ptsMexico > ptsArgentina) && (ptsMexico > ptsArabia) && (ptsMexico > ptsPolonia)){
        alert("Primer Lugar Mexico con "+ptsMexico+" puntos en total");
        primerLugar = "Mexico";
    } else if ((ptsPolonia > ptsArgentina) && (ptsPolonia > ptsMexico) && (ptsPolonia > ptsArabia)){
        alert("Primer Lugar Polonia con "+ptsPolonia+" puntos en total");
        primerLugar = "Polonia";
    } else {
        alert("No pudimos calcular los puntos, Lo siento algo salio mal");
    }
    
    //Segundo Lugar

    let segundoLugar = prompt("Escriba sin tildes.\nQuien crees que deberia ser merecedor del segundo lugar?\n(0 para cancelar)");
    segundoLugar = text.toLowerCase();

        if (segundoLugar == "argentina"){

            alert("Segundo lugar a pedido del publico es Argentina!!");
            segundoLugar = "Argentina";
        }
        else if ((segundoLugar == "arabia") || (segundoLugar == "arabia saudita")){
            alert("Segundo Lugar a pedido del publico es Arabia saudita!!");
            segundoLugar = "Arabia Saudita";
        }
        else if (segundoLugar == "polonia"){
            alert("Segundo lugar a pedido del publico es Polonia!!");
            segundoLugar = "Polonia";
        }
        else if ((segundoLugar == "mexico") || (segundoLugar == "méxico")){
            alert("Segundo Lugar a pedido del publico es Mexico!!!");
            segundoLugar = "Mexico";
        }
        else {
            alert ("No se ha podido elegir un segundo lugar.")
        }

alert("Felicitaciones los ganadores son "+primerLugar+" en primer lugar y "+segundoLugar+" En segundo lugar");

let infoFinal = prompt ("Habiendo finalizado el Quiz, desea ver mas informacion sobre los paises? (Y para aceptar / N para finalizar / informacion en el console.log)")

if (infoFinal == "Y" || "y") {
    const infoPaises = teams.map(teams => {
        return {
            name: teams.name,
            description: teams.tdescription
        }
        }
    
    );
    
    console.log(infoPaises); 
}
else if (infoFinal == "N" || "n") {
    alert ("Muchas gracias por participar!!!")
}
else {
    alert("Se ha producido un error o los datos ingresados no son validos. Gracias por participar!!")
}


/* de alguna manera tenes q filtrar para q te muestre los datos de algun equipo para q no te muestre todo
sino podes hacer un foreach y que te muestre 4 alerts distintos con los datos de cada equipo
podrias tener un select en el dom con los nombres de los equipos y q cuando apretes en un boton q sea ver datos… te haga un find del value del select con el nombre del team y ahi con ese team que te encontro podes mostrarlo */
