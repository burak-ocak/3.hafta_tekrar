let div = document.querySelector("#root");
let kutu1 = document.createElement("div");
let kutu2 = document.createElement("div");
let btn = document.createElement("button");
btn.textContent = "Oyna";
div.append(kutu1);
div.append(kutu2);
div.append(btn);


kutu1.style.backgroundColor = "red";
kutu1.style.height = "100px";
kutu1.style.textAlign = "center"
kutu1.style.fontSize = "2rem"

kutu2.style.backgroundColor = "blue";
kutu2.style.height = "100px";
kutu2.style.textAlign = "center"
kutu2.style.fontSize = "2rem"


btn.style.marginTop = "10px";

btn.addEventListener("click", ()=>{
    sonucGoster(kutu1);
    sonucGoster(kutu2);
})

function sonucGoster(kutu1){
    let sonuc = Math.floor(Math.random() * 3)
    if(sonuc === 0){
        kutu1.textContent = "Kağıt";
        console.log(sonuc);
    }
    if(sonuc === 1){
        kutu1.textContent = "Taş";
        console.log(sonuc);
    }
    if(sonuc === 2){
        kutu1.textContent = "Makas";
        console.log(sonuc);
    }
}
