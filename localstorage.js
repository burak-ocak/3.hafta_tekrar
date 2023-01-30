const elApp = document.querySelector("#app");

//ziyaretçinin tarayıcısında (local storage) daha önceden olan ziyaretSayisi değeri var mı?
let ziyaretSayac = localStorage.getItem("ziyaretSayisi");
if(ziyaretSayac === null){
    //daha önce sayfamızı ziyaret etmemiş
    //ziyaretçi localStorage'yi kendisi temizlemiş.
    localStorage.setItem("ziyaretSayisi", "1");
    ziyaretSayac = 1;
}else{
    //daha önce tarayıcıda, ziyaretSayac değeri kaydedilmiş.
    //değeri oku, numbere çevir, değeri 1 arttır, son değeri tekrar kaydet
    ziyaretSayac = parseInt(ziyaretSayac);
    ziyaretSayac++
    localStorage.setItem("ziyaretSayisi", ziyaretSayac);
}
elApp.textContent = ziyaretSayac;







