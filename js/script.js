const knapplo=document.getElementById("knapp2");

knapplo.addEventListener('click', bytinfoB);

function bytinfoB() {
    document.getElementById("info").innerHTML="Lodjuret tillhör familjen kattdjur. Pälsen är mer eller mindre fläckig med gulbrun bottenfärg som blir ljusare på vintern. Svansen är kort med svart spets. På öronen sitter svarta örontofsar. Svansspetsen och örontofsarna förstärker öronens och svansens hållning och gör lodjurets kroppsspråk tydligare.";
    document.getElementById("bild").src="img/source2.gif";
}

const knappbj=document.getElementById("knapp1");

knappbj.addEventListener('click', bytinfoA);

function bytinfoA() {
    document.getElementById("info").innerHTML="Erfarenheten visar att vår skandinaviska björn är en fridsam allätare. Bär, myror, gräs och örter är sådant som förutom kött står på matsedlen. Faktum är att nära hälften av energiintaget kommer från bär.";
    document.getElementById("bild").src="img/tenor.gif";
}

const knappva=document.getElementById("knapp3");

knappva.addEventListener('click', bytinfoC);

function bytinfoC() {
    document.getElementById("info").innerHTML="Vargen är ett socialt djur som lever i en flock på åtta till tolv djur. En vargflock är starkt hierarkisk och styrs av ett alfapar. Vargen har ökat i antal i Sverige sedan den nästan helt försvann under 1970-talet. Stammen är fortfarande liten med ca 305 vargar enligt inventeringsresultaten från vintern 2017/18.";
    document.getElementById("bild").src="img/source.gif";
}

