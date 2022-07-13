var configurations = [
  // Welcome
  {
    selector: ".banner__heading",
    events: ["click", "dblclick"],
    data: {
      example: {
        selector: ".banner__text",
        type: "text",
      },
    },
  },
  // Give customers details about the banner image(s) or content on the template.
  {
    selector: ".banner__text",
    events: ["dblclick"],
    data: {
      sample: {
        selector: "_ab",
        type: "query_params",
      },
    },
  },
  // Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.
  {
    selector: ".rich-text__text",
    events: ["click"],
    data: {
      name: {
        selector: "localization",
        type: "cookie",
      },
      gender: {
        selector: "function evaluate() { var x=10; y=10; z=x+y; return z; }; evaluate(); ",
        type: "javascript",
      },
    },
  },
  {
    selector: ".title",
    events: ["click", "dblclick"],
    data: {
      name: {
        selector: ".title",
        type: "text",
      },
    },
  },
];  

for (var i = 0; i < configurations.length; i++) {
  let configuration = configurations[i];
  var elements = document.querySelectorAll(configuration.selector);
  for (var j = 0; j < elements.length; j++) {
    for (k = 0; k < configuration.events.length; k++) {
      var domevent = configuration.events[k];
      var element = elements[j];
      element.addEventListener(domevent, function () {
        let eventData = {};
        for (var attribute in configuration.data) {
          let settings = configuration.data[attribute];
          let type = configuration.data[attribute].type;
          if (type == "text") {
            let value = document.querySelector(settings.selector).innerText;
            eventData[attribute] = value;
          } else if (type == "query_params") {
            const urlParams = new URLSearchParams(window.location.search);
            var searchParamsKey = configuration.data[attribute].selector;            
            const urlParamsValue = urlParams.get(searchParamsKey);
            eventData[attribute] = urlParamsValue;
          } else if (type == "cookie") {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${settings.selector}=`);
            if (parts.length === 2) {
              var cookieValue = parts.pop().split(";").shift();
            }            
            eventData[attribute] = cookieValue;
          } else if (type == "javascript") {
            var scriptResult = eval(settings.selector);
            eventData[attribute] = scriptResult;
          }
        }
        console.log({ eventData: eventData });
      });
    }
  }
}


var search = document.getElementById("Search-In-Modal"); 
search.addEventListener("submit", function(){
  console.log("SEARCH SUBMITTED")
})





fbq('track', 'CompleteRegistration');