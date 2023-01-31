let div = document.querySelector("#div");

let sayac = localStorage.getItem("girisSayisi");
if(sayac !== null){
    sayac = parseInt(sayac);
    sayac++
    localStorage.setItem("girisSayisi" , sayac);
    let oyuncuBilgiJSON = localStorage.getItem("oyuncuBilgi");
    let oyuncuBilgi = JSON.parse(oyuncuBilgiJSON);
    
    let bilgiParagraf = document.createElement("p");
    bilgiParagraf.innerHTML = `<span>${oyuncuBilgi.adSoyad}</span> <span>${oyuncuBilgi.seviye}</span>`
    div.append(bilgiParagraf);
} else{
    localStorage.setItem("girisSayisi" , "1");
    sayac = 1
    let adSoyad = prompt("Lütfen isim soyisim giriniz:");
    let seviye = prompt("Lütfen oyun zorluğunu seçiniz. \n 1- Kolay \n 2- Orta \n 3-Zor");

    let oyuncuBilgi = {
        adSoyad : adSoyad,
        seviye : seviye
    }
    localStorage.setItem("oyuncuBilgi", JSON.stringify(oyuncuBilgi));
}

let sayacEleman = document.createElement("span");
sayacEleman.textContent = sayac;
div.append(sayacEleman);