const btnTruthjs = document.getElementById ("butTRUTH");
console.log(btnTruthjs)
btnTruthjs.addEventListener ("click", ()=> {
    const pToddsliesjs = document.getElementById("pToddslies")
    if (pToddsliesjs.textContent === ""){
        btnTruthjs.textContent = "Live in blissful ignorance"
        pToddsliesjs.textContent = "Todd lied, it doesnt work. Nothing works. I cant climb that mountain";
    }
    else {
        btnTruthjs.textContent = "Reveal the Truth"
        pToddsliesjs.textContent = "";
    }
} )