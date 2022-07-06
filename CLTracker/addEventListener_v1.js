var elements = document.querySelectorAll(".banner__heading, .banner__text, h2, .rich-text__text, .title")

for(var i=0; i<= elements.length; i++){
    elements[i].addEventListener("click", function(){
        console.log(this.className)
    })
}


var selectors = [".banner__heading", ".banner__text", "h2", ".rich-text__text", ".title"]
for(var i=0; i<=selectors.length; i++){
    var elements = document.querySelectorAll(selectors[i])
    for(var j=0; j<elements.length; j++){
        elements[j].addEventListener("click", function(){
            console.log(this.className)
        });
    }
}

