var configurations = [
    {
        "selector": ".banner__heading",
        "events": ["click", "mousemove"]
    },
    {
        "selector": ".banner__text",
        "events": ["dblclick"]
    },
    {
        "selector": ".rich-text__text",
        "events": ["mousemove"]
    },
    {
        "selector": ".title",
        "events": ["click"]
    }
]

for (var i = 0; i < configurations.length; i++) {
    var elements = document.querySelectorAll(configurations[i].selector)
    for (var j = 0; j < elements.length; j++) {
        for(k=0; k<configurations[i].events.length; k++) {
            elements[j].addEventListener(configurations[i].events[k], function(){
                console.log(this.className)
            })
        }
    }
}