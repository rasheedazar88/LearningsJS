var configurations = [
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
  {
    selector: ".banner__text",
    events: ["dblclick"],
    data: {
      sample: {
        selector: "rich-text__text",
        type: "query_params",
      },
    },
  },
  {
    selector: ".rich-text__text",
    events: ["click"],
    data: {
      name: {
        selector: "localization",
        type: "cookie",
      },
      gender: {
        selector: ".banner__text",
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
            type: "text"
        }
    },
  },
];

let query_params = {};
let eventData = {};

for (var i = 0; i < configurations.length; i++) {
  let configuration = configurations[i];
  var elements = document.querySelectorAll(configuration.selector);
  for (var j = 0; j < elements.length; j++) {
    for (k = 0; k < configuration.events.length; k++) {
      var domevent = configuration.events[k];
      var element = elements[j];

      for (var attribute in configuration.data) {
        let type = configuration.data[attribute].type;
        let value = configuration.data[attribute].selector;
        if (type == "query_params") {
          let urlString = window.location.href;
          let paramString = urlString.split("?")[1];
          let queryString = new URLSearchParams(paramString);
          for (let pair of queryString.entries()) {
            query_params[pair[0]] = pair[1];
          }
        } else if (type === "text") {
          element.addEventListener(domevent, function () {
            for (var attribute in configuration.data) {
              let settings = configuration.data[attribute];
              let value = document.querySelector(settings.selector).innerText;
              eventData[attribute] = value;
                console.log({ eventData: eventData });
            }
          });
        } else if (type == "cookie") {
          var cookieEvent = {};
          let cookie = {};
          document.cookie.split(";").forEach(function (el) {
            let [k, v] = el.split("=");
            cookie[k.trim()] = v;
          });
          cookieEvent[value] = cookie[value];
        } else if (type == "javascript") {

        }
      }
    }
  }
}
console.log({ eventData: query_params });
console.log({eventData: cookieEvent})
