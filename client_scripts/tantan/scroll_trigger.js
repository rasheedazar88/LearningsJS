(function(){
    var triggered = false;
    var maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    window.addEventListener("scroll", function (event) {
        var scrollVal = this.scrollY;
        var scrollPercentage = Math.round(scrollVal / maxScrollHeight * 100);
        if(scrollPercentage == 50 && !triggered){
            triggered = true;
            _cl.trackClick("scrolled_50_percent", {
                "customProperties": {
                    "url": {
                        "v": this.window.location.href,
                        "t": "string"
                    }
                }
            });
        }
    })
})()