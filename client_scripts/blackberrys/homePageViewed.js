function trigger() {
    var cdl = dataLayer || {};
    var hasEvent = false;
    for (var i in cdl) {
        obj = cdl[i];
        if (obj.event == "virtualPageview" && obj.virtualPageURL == "/") {
            var properties = {};
            
            properties["customProperties"] = {
                "page_url":{
                    "t": "string",
                    "v": document.URL
                },
                "page_title":{
                    "t": "string",
                    "v": document.title
                }
            };
            _cl.pageview("homepage_viewed", properties);
            hasEvent = true;
        }
    };
    if (!hasEvent) {
        setTimeout(function () { trigger() }, 1000)
    }
};

setTimeout(function () { trigger() }, 2000);