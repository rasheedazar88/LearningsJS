var obj =   [ 
                { "selector": ".banner__heading", "event": "click" }, 
                { "selector" : ".banner__text", "event" : "dblclick" }, 
                { "selector": ".rich-text__text", "event" : "mousemove"}, 
                { "selector": ".title", "event": "click" }
            ]

for(var i=0; i<=obj.length; i++){
    var elements = document.querySelectorAll(obj[i].selector)
    for(var j=0; j<elements.length; j++){
        elements[j].addEventListener(obj[i].event, function(){
            console.log(this.className)
        });
    }
}

