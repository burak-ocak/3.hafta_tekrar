let div = document.querySelector("#root");
let pr = document.createElement("p");
div.append(pr);

let ziyaretSayac = localStorage.getItem("ziyaretSayac");
if(ziyaretSayac === null){
    localStorage.setItem("ziyaretSayac", "1");
    let isimSoyisim = prompt("Lütfen isim soyisim bilgilerinizi giriniz.");
    let oyunZorluk = prompt("Lütfen oynamak istediğiniz zorluk seviyesini belirleyiniz. \n 1-Kolay \n 2-Orta \n 3-Zor");

    let oyuncuBilgi = {
        adSoyad: isimSoyisim,
        seviye: oyunZorluk
    }
    let oyuncuBilgiJSON = JSON.stringify(oyuncuBilgi);
    localStorage.setItem("oyuncuBilgi", oyuncuBilgiJSON);
}else{
    ziyaretSayac = parseInt(ziyaretSayac);
    ziyaretSayac++
    localStorage.setItem("ziyaretSayac", ziyaretSayac);
    
    let oyuncuBilgiJSON = localStorage.getItem("oyuncuBilgi");
    let oyuncuBilgi = JSON.parse(oyuncuBilgiJSON);

    pr.innerHTML = "İsim soyisim: " + oyuncuBilgi.adSoyad + "<br>Zorluk Seviyesi: " + oyuncuBilgi.seviye + "<br>Sayfaya giriş sayınız: " + ziyaretSayac;
}