"use strict";

let th = document.querySelectorAll("th") // ubacen kod kako bi se izmenio ispis na web stranici 
th[0].textContent = "Br"
th[2].textContent = "Cena($)"
th[3].textContent = "Dostupan"

function kreirajRed(artikl){
    let tr = document.createElement("tr") // 2. kreiranje reda tabele

    let jedinstveniBroj = document.createElement("td")
    let naziv = document.createElement("td")
    let cena = document.createElement("td")
    let dostupnostArtikla = document.createElement("td")

    jedinstveniBroj.textContent = artikl.jedinstveniBroj; // popunjavanje td elemenata
    naziv.textContent = artikl.naziv;
    cena.textContent = artikl.cena;
    dostupnostArtikla.textContent = artikl.dostupnostArtikla ? "DA" : "NE"

    if (!(artikl.dostupnostArtikla)) {  // ubacivanje stil elementa
        tr.style.backgroundColor = "red"
    }

    tr.appendChild(jedinstveniBroj)   // povezivanje celija sa redom
    tr.appendChild(naziv)
    tr.appendChild(cena)
    tr.appendChild(dostupnostArtikla)

    return tr
}

function inicijalizujAtrikle(artikli){
    let tabela = document.querySelector("#artikli") //1. selektovanje tabele
    for (let artikl of artikli) {
        let tr = kreirajRed(artikl)    
        tabela.appendChild(tr)
    }
}

class Artikl {
    constructor(jedinstveniBroj, naziv, cena, dostupnostArtikla) {
        this.jedinstveniBroj = jedinstveniBroj;
        this.naziv = naziv;
        this.cena = cena;
        this.dostupnostArtikla = dostupnostArtikla;
    }
}

const prviArtikl = new Artikl(1, "Monitor", 165, true);
const drugiArtikl = new Artikl(2, "TV", 650, false);
const treciArtikl = new Artikl(3, "Miš", 20, true);

const artikli = [prviArtikl, drugiArtikl, treciArtikl]

inicijalizujAtrikle(artikli)