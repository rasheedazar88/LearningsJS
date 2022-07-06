var selectors = [".banner__heading", ".banner__text", "h2", ".rich-text__text", ".title"]
var events = ["click", "dblclick", "mousemove", "drag", "click" ]

for(var i=0; i<=selectors.length; i++){
    var elements = document.querySelectorAll(selectors[i])
    for(var j=0; j<elements.length; j++){
        elements[j].addEventListener(events[i], function(){
            console.log(this.className)
        });
    }
}