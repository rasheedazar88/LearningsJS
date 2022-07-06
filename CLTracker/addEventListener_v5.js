var configurations = [
    {
        "selector": ".banner__heading",
        "events": ["click", "dblclick"],
        "data": {
            "example": {
                "selector": ".banner__text"
            }
        }
    },
    {
        "selector": ".banner__text",
        "events": ["dblclick"],
        "data": {
            "sample": {
                "selector": ".rich-text__text"
            }
        }
    },
    {
        "selector": ".rich-text__text",
        "events": ["click"],
        "data": {
            "name": {
                "selector": ".title"
            },
            "gender": {
                "selector": ".banner__text"
            }
        }
    },
    {
        "selector": ".title",
        "events": ["click", "dblclick"],
        "data": {
        }
    }
]
// Bad Code 
// for (var i = 0; i < configurations.length; i++) {
//     let configuration = configurations[i];
//     var elements = document.querySelectorAll(configuration.selector)
//     for (var j = 0; j < elements.length; j++) {
//         for(k=0; k< configuration.events.length; k++) {
//             var domevent = configuration.events[k];
//             var element = elements[j];
//             element.addEventListener(domevent, function(){
//                 var attributeNames = Object.keys(configuration.data);
//                 var attributeValues = Object.values(configuration.data);
                                
//                 var eventData = {}; 
//                 attributeNames.forEach((attributeName, index)=>{
//                     eventData[attributeName] = document.querySelector(attributeValues[index].selector).innerText
//                 })
//                 var eventConfig = {};
//                 Object.assign(eventConfig, { eventData })
//                 console.log(eventConfig)
                
//             })
//         }
//     }
// }


//// Clean Code for learning
for (var i = 0; i < configurations.length; i++) {
    let configuration = configurations[i];
    var elements = document.querySelectorAll(configuration.selector)
    for (var j = 0; j < elements.length; j++) {
        for(k=0; k< configuration.events.length; k++) {
            var domevent = configuration.events[k];
            var element = elements[j];
            element.addEventListener(domevent, function(){
                let eventData = {};
                for(var attribute in configuration.data){
                    let settings = configuration.data[attribute];
                    let value = document.querySelector(settings.selector).innerText
                    eventData[attribute] = value;
                }
                console.log({"eventData": eventData})
            })
        }
    }
}


// expected data
// {
//     "eventData": {
//         "name": "some text",
//         "gender": "some text"
//     }
// }
// sample 2
// {
//     "eventData": {
//         "name": "some text",
//     }
// }
// sample 4
// {
//     "eventData": {
//         "sample": "some text",
//     }
// }
// sample 3
// {
//     "eventData": {
//     }
// }