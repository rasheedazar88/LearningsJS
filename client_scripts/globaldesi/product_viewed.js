
function trigger(){
    if(window._cl){
        var properties = {
            "productProperties": [{
                "product_name": {{Content Name PDP}},
                "product_id": {{Content ID PDP}},
                "product_category": {{Content Category PDP}},
            }],
            "customProperties": {
                "content_type": 'product_group',
                "value": {{CL - Content Value PDP}},
                "revenue": {{CL - Content Value PDP}},
                "currency": {{CL-Content Currency}}
            }
        };
        
        _cl.pageview("Product viewed", properties);
    }else{
        setTimeout(function(){ trigger() }, 1000)
    }
}
trigger();