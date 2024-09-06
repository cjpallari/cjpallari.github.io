let fancy = document.getElementById("bigger_button");
let shmancy = document.getElementById("shmancy_button");
let betty = document.getElementById("boring_betty_button");
let moo = document.getElementById("moo_button");
let div = document.createElement("div");
div.id = "new_fancy";

fancy.onclick = function(){
    let text = document.getElementById("text").value;
    
    div.innerHTML = text;
    document.body.appendChild(div);

}

shmancy.onchange = function(){
    let fancy_text = document.getElementById("new_fancy");
    alert("Fancy Shmancy has been pressed");
    fancy_text.style.fontWeight = "900";
    fancy_text.style.color = "blue";
    fancy_text.style.textDecoration = "underline";
}

betty.onchange = function(){
    let boring_text = document.getElementById("new_fancy");
    boring_text.style.fontWeight = "200";
    boring_text.style.color = "black";
    boring_text.style.textDecoration = "none";
}

moo.onclick = function(){
    let moo_text = document.getElementById("new_fancy");
    let moo_content = moo_text.innerHTML;
    moo_text.style.textTransform = "uppercase";
    let sentence = moo_content.split(".");
    for (let i = 0; i < sentence.length; i++){
        sentence[i] = sentence[i].trim();
        if (sentence[i] != ""){
            sentence[i] += "-moo";
        }

    }
    let new_text = sentence.join('. ').trim();
    moo_text.innerHTML = new_text;
}