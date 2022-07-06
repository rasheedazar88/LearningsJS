var _clInterval = setInterval(function(){
    console.log('Purchase triggered', _clInterval);
    if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
        var properties = {
            "customProperties": {
                "value": 97,
                "currency": "USD"
            }
        }
        _cl.trackClick("Purchase", properties);
        var name = 'cl_purchase_init';
        var path = '';  
        var domain = '.supportpets.com';
        document.cookie = name + "=" + ((path) ? "; path=" + path: "") + ((domain)? "; domain=" + domain: "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";        
        console.log('Purchase success', _clInterval);
        clearInterval(_clInterval)
    }
}, 500);



var _clInterval = setInterval(function(){
    console.log('Purchase upsell', _clInterval);
    if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
        var properties = {
            "customProperties": {
                "value": 49,
                "currency": "USD"
            }
        }
        _cl.trackClick("purchase_upsell", properties);
        var name = 'cl_purchase_init';
        var path = '';  
        var domain = '.supportpets.com';
        document.cookie = name + "=" + ((path) ? "; path=" + path: "") + ((domain)? "; domain=" + domain: "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";        
        console.log('Purchase upsell success', _clInterval);
        clearInterval(_clInterval)
    }
}, 500);