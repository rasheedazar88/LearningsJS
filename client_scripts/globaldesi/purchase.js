function trigger(){
    if(window._cl){
        var items = [];
        var productIDs = document.getElementsByClassName('fbproduct-id')
        for(var i = 0; i < productIDs.length; i++){
            var item = {}
            item["product_id"] = productIDs[i].innerText;
            items.push(item); 
        };

        var properties = {
            "productProperties": items,
            "customProperties": {
                "content_type": 'product_group',
                "value": {{Content Value Purchase}},
                "revenue": {{Content Value Purchase}},
                "currency": {{CL-Content Currency}},
            }
        };

        _cl.trackClick("Purchased", properties)
    }else{
        setTimeout(function(){ trigger() }, 1000)
    }
}

trigger();


var _clInterval = setInterval(function(){
    if(window._cl){
        var items = [];
        var productIDs = document.getElementsByClassName('fbproduct-id')
        for(var i = 0; i < productIDs.length; i++){
            var item = {}
            item["product_id"] = productIDs[i].innerText;
            items.push(item); 
        };

        var properties = {
            "productProperties": items,
            "customProperties": {
                "content_type": 'product_group',
                "value": {{Content Value Purchase}},
                "revenue": {{Content Value Purchase}},
                "currency": {{CL-Content Currency}},
            }
        };

        _cl.trackClick("Purchased", properties);
        
        clearInterval(_clInterval);
    }
}, 500);