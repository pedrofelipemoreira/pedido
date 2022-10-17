const btn = document.querySelector(".Nao");

btn.addEventListener("mouseover", function(){

    let x = Math.floor(Math.random() * (110 - -210 + 1) + -210);
    let y = Math.floor(Math.random() * (100 - -610 + 1) + -610);

    btn.style.transform = `translate(${x}%, ${y}%)`;

    btn.style.transition = "all 0.4s ease";

    return;

    }
)

function errado(){

    alert("OPÇÃO ERRADA!!!!!")
    
}


