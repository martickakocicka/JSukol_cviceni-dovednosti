/*Doplňte do stránek JavaScriptový program, který pomocí funkce prompt požadované uživatele 
vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. 
Program pak na staví posuvníky na stránce odpovídající délce a hodnoty u posuvníků 
na uživatelem zadaná čísla.*/

/*Na samém začátku vašeho programu funguje funkce updateSkill, která bere dva vstupy: textový řetězec
představující idprvek a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id
na správnou hodnotu. Použijte tuto funkci ve vašem kódu, 
abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.*/

const urovenH = Number(prompt("zadej svou úroveň v HTML 0-100"))
console.log("uroven html: " +urovenH)
const urovenC = prompt("zadej svou úroveň v CSS 0-100")
console.log("uroven css: " +urovenC)
const urovenJ = prompt("zadej svou úroveň v JavaScript 0-100")
console.log("uroven JS: "+urovenJ)

const updateSkill = (id, idhodnota, hodnota) => {
    
    const skill = document.getElementById(id)   
    //const posuvnik = skill.querySelector(".skill__progress")
    
    //const posuvnik = document.getElementById(id).querySelector(".skill__progress")

    skill.style.width=`${hodnota}%`
    const text= document.querySelector(idhodnota)
    text.textContent=`${hodnota}/100`
}

updateSkill("posuvnik1", "#hodnota1", urovenH)
updateSkill("posuvnik2", "#hodnota2", urovenC)
updateSkill("posuvnik3", "#hodnota3", urovenJ) 





/*function updateSkill(id, urovenH)
{
    const skill = document.getElementById(id)
    const posuvnik = skill.querySelector(".skill__progress")
    posuvnik.style.width = urovenH + "%"
}*/

//.skill__progress.style.width=

