let fancy = document.getElementById("fancy_button");

fancy.onclick = function(){
    let text = document.getElementById("fancy_text").value;
    
    let div = document.createElement("div");
    div.id = "new_fancy";
    div.innerHTML = text;
    document.body.appendChild(div);
}