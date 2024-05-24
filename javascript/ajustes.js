
let botonAjustes = document.getElementById("ajustes");

function ajustesJugadores() {

    let botones = document.getElementsByName("jugadores");
    let players;

    for (radio of botones) {

        if (radio.checked) {

            players = Number(radio.value);
            return players;

        }

    }

}

function ajustesDificultad() {

    let botones = document.getElementsByName("dif");
    let dif;

    for (radio of botones) {

        if (radio.checked) {

            dif = Number(radio.value);
            return dif;

        }

    }

}

function ajustesMapa(dif) {

    let botones = document.getElementsByName("mapa");
    let mapa;

    switch (dif) {

        case 30: // dificultad fácil
            botones[1].value = "6";
            botones[2].value = "7";
            break;
        
        case 25: // dificultad normal
            botones[1].value = "2";
            botones[2].value = "3";
            break;
        case 20: // dificultad difícil
            botones[1].value = "4";
            botones[2].value = "5";
            break;
    }

    for (radio of botones) {

        if (radio.checked) {

            mapa = Number(radio.value);
            if (mapa == 0) mapa = 1;
            return mapa;

        }

    }

}

function ajustesColor() {

    let color = document.getElementById("color-serp");

    if (color.value === "#000000") {

        return;

    } else {

        return color.value;

    }

}
