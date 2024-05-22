
let botonAjustes = document.getElementById("ajustes");

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

function ajustesMapa() {

    let botones = document.getElementsByName("mapa");
    let mapa;

    for (radio of botones) {

        if (radio.checked) {

            mapa = Number(radio.value);
            return mapa;

        }

    }

    return 1;

}

function ajustesColor() {

    let color = document.getElementById("color-serp");

    if (color.value === "#000000") {

        return;

    } else {

        return color.value;

    }

}
