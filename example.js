"use strict";
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

let th = document.querySelectorAll("th")
th[0].textContent = "Br"
th[2].textContent = "Cena($)"
th[3].textContent = "Dostupan"

