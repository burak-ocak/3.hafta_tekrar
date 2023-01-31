let div = document.querySelector("#root");

let ziyaretSayac = localStorage.getItem("ziyaretSayac");
if(ziyaretSayac === null){
    localStorage.setItem("ziyaretSayac", "1");

    let isimSoyisim = prompt("Lütfen isim soyisim giriniz:");
    let zorluk = prompt("Lütfen zorluk seviyesi seçiniz. \n 1-Kolay \n 2-Orta \n 3-Zor");

    let oyuncuBilgi = {
        isimSoyisim: isimSoyisim,
        zorluk: zorluk
    }
    localStorage.setItem("oyuncuBilgi", JSON.stringify(oyuncuBilgi));
}else{
    ziyaretSayac = parseInt(ziyaretSayac);
    ziyaretSayac++
    localStorage.setItem("ziyaretSayac", ziyaretSayac);

    oyuncuBilgiJSON = localStorage.getItem("oyuncuBilgi");
    oyuncuBilgi = JSON.parse(oyuncuBilgiJSON);

    let renderIsim = oyuncuBilgi.isimSoyisim;
    let renderZorluk = oyuncuBilgi.zorluk;

    let pr = document.createElement("p");
    pr.innerHTML = "Oyuncunun adı soyadı: " + renderIsim + "<br>Zorluk seviyesi: " + renderZorluk + "<br>Sayfaya giriş sayısı: " + ziyaretSayac;
    div.append(pr);
}