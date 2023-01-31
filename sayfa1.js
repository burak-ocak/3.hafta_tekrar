

let kutu1 = document.createElement("div");
kutu1.style.backgroundColor = "red";
kutu1.style.height = "100px";
document.querySelector("#app").appendChild(kutu1);

let kutu2 = document.createElement("div");
kutu2.style.backgroundColor = "blue";
kutu2.style.height = "100px";
kutu2.style.marginTop = "10px";
document.querySelector("#app").appendChild(kutu2);

let btn = document.createElement("button");
btn.textContent = "Oyna";
btn.style.marginTop = "10px";
document.querySelector("#app").appendChild(btn);

btn.addEventListener("click", function(){
    sonucUret(kutu1)
    sonucUret(kutu2)
})


function sonucUret(deneme){
    let mat = Math.floor(Math.random() * 3);
    if(mat === 0){
        deneme.innerHTML = "Kağıt"
    }
    if(mat === 1){
        deneme.innerHTML = "Makas"
    }
    if(mat === 2){
        deneme.innerHTML = "Tas"
    }
}