{/* <div class=".typeform-widget" data-url="http://gmail.com"></div> */}
(function() {
    var formEle = document.querySelector('.typeform-widget')
    if(formEle){
        var list = document.location.hash.slice(1).split('&');
        var obj = {};
        list.forEach(function(item) {
            var key = item.split('=')[0];
            var value = item.split('=')[1]
            if(key.includes('h_')){
                var k = key.slice(2);
                obj[k.toUpperCase()] = value
            }
        });
        var b = [], c = document["cookie"]["split"](";");
        var a = new RegExp("^\\s*cl3745wywyz35p_utmParams=\\s*(.*?)\\s*$");
        for (var d = 0, len = c["length"]; d < len; d++) {
            var e = c[d]["match"](a);
            e && b.push(e[1]);
        }
        var utm_params = {}
        if(b.length > 0){
            var utmobj = decodeURIComponent(b[0]);
            try {
                utm_params = JSON.parse(utmobj);
            } catch (error) {
                console.log(error)
            }
        }
        for(var key in utm_params) {
            if(key.includes('utm_')){
                obj[key.toUpperCase()] = utm_params[key];
            }
        };
        var url = formEle.getAttribute('data-url');
        for (var k in obj) url = url.replace(k, obj[k]);
        formEle.setAttribute('data-url', url);
        var qs, js, q, s, d = document,  gi = d.getElementById,
            ce = d.createElement,
            gt = d.getElementsByTagName,
            id = 'typef_orm',
            b = 'https://embed.typeform.com/';
        gi.call(d, id) || (js = ce.call(d, 'script'), js.id = id, js.src = b + 'embed.js', q = gt.call(d, 'script')[0], q.parentNode.insertBefore(js, q));
    }
})()

(function() {
    
    var formEle = document.querySelector('.typeform-widget')
    if(formEle){
        console.log("domready")
        var b = [], c = document["cookie"]["split"](";");
        var a = new RegExp("^\\s*cl3745wywyz35p_utmParams=\\s*(.*?)\\s*$");
        for (var d = 0, len = c["length"]; d < len; d++) {
            var e = c[d]["match"](a);
            e && b.push(e[1]);
        }
        var obj = {};
        var utm_params = {}
        if(b.length > 0){
            var utmobj = decodeURIComponent(b[0]);
            try {
                utm_params = JSON.parse(utmobj);
            } catch (error) {
                console.log(error)
            }
        }
        for(var key in utm_params) {
            if(key.includes('utm_')){
                obj[key.toUpperCase()] = utm_params[key];
            }
        };
        var url = formEle.getAttribute("data-url");
        for (var k in obj) url = url.replace(k, obj[k]);
        url = url.replace("CLUID", CLabsgbVar.generalProps.uid)
        formEle.setAttribute("data-url", url);
        console.log("init")
        var qs, js, q, s, d = document,
            gi = d.getElementById,
            ce = d.createElement,
            gt = d.getElementsByTagName,
            id = "typef_orm",
            b = "https://embed.typeform.com/";
        if (!gi.call(d, id)) {
            js = ce.call(d, "script");
            js.id = id;
            js.src = b + "embed.js";
            q = gt.call(d, "script")[0];
            q.parentNode.insertBefore(js, q)
        }
    }
})()