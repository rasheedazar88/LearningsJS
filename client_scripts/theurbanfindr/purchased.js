<script>
function trigger(){
    var cdl = dataLayer || {};
    var hasEvent = false;
    for(var i in cdl){ 
        var obj = cdl[i]; 
        var eventName = obj[1];
        if(eventName === "purchase"){ 
            var purchase_event = obj[2];
            var properties = {}
            properties["customProperties"] = customConversion(purchase_event)
            properties["productProperties"] = productsConversion(purchase_event.items)
            _cl.trackClick("Purchased", properties);
            hasEvent = true;
        }  
    };
    if(!hasEvent){
        setTimeout(function(){ trigger() }, 1000)
    }

    function productsConversion(productsArr) {
        var products = [];
        for(var i = 0 ; i < productsArr.length; i++) {
            var productsStructure = {}
            for(key in productsArr[i]){
                switch(key){
                    case "name":
                        productsStructure["product_name"]={"t":"string", "v":productsArr[i]["name"]}
                        break;
                    case "id":
                        productsStructure["product_id"]={"t":"string", "v": productsArr[i]["id"]}
                        break;
                    case "price":
                        productsStructure["product_price"]={"t":"number", "v":productsArr[i]["price"]}
                        break;
                    case "category":
                        productsStructure["product_category"]={"t":"string", "v":productsArr[i]["category"]}
                        break;
                    case "quantity":
                        productsStructure["product_quantity"]={"t":"number", "v":productsArr[i]["quantity"]}
                        break;
                    case "variant":
                        productsStructure["product_variant"]={"t":"string", "v":productsArr[i]["variant"]}
                        break;
                    default:
                        var isNum = /^\d+$/.test(productsArr[i][key]);
                        var type = (Number.isFinite(productsArr[i][key]) || isNum) ? "number":typeof productsArr[i][key]
                        productsStructure["product_"+key] = {"t":type, "v":productsArr[i][key]}
                }
            }
            products.push(productsStructure);
        }
        return products
    }
    
    function customConversion(customProps) {
        var customStructure = {}
        for(key in customProps) {
            switch(key) {
                case "items":
                    break;
                default:
                    customStructure[key] = customProps[key]
            }
        }
    
        return customStructure
    }
}

trigger()
</script>