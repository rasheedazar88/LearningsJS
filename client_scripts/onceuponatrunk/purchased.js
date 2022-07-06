_cl_purchase_event = setInterval(function(){
    if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
        function genProductProps(productsData){
            var products = [];
            for(var cli in  productsData){
                var product = productsData[cli];
                var newproduct = {};
                for(prodkey in product){
                    switch(prodkey){
                    case "id":
                        newproduct["product_id"] = product[prodkey];
                        break;
                    case "name": 
                        newproduct["product_name"] = product[prodkey];
                        break;
                    case "price":
                        newproduct["product_price"] = product[prodkey];
                        break;
                    case "brand":
                        newproduct["product_brand"] = product[prodkey];
                        break;
                    case "category":
                        newproduct["product_category"] = product[prodkey];
                        break;
                    case "image_url":
                        newproduct["product_image"]= product[prodkey];
                        break;
                    default:
                        newproduct["product_" + prodkey] = product[prodkey];
                        break;
                    }
                }
                products.push(newproduct);
            }
            return products;
        };
        var ecommerceEvent = window.google_tag_manager["GTM-N5XSL84"].dataLayer.get("ecommerce");
        var properties = {};
        properties["customProperties"] = {
            "currency": {
                "t": "string",
                "v": ecommerceEvent["currencyCode"] || "INR"
            },
            "content_type": {
                "t": "string",
                "v": "product_group"
            },
            "value":  {
                "t": "number",
                "v": ecommerceEvent.purchase.actionField["revenue"]
            },
            "revenue":  {
                "t": "number",
                "v": ecommerceEvent.purchase.actionField["revenue"]
            },
            "shipping":  {
                "t": "string",
                "v": ecommerceEvent.purchase.actionField["shipping"]
            },
            "tax":  {
                "t": "string",
                "v": ecommerceEvent.purchase.actionField["tax"]
            },
            "transaction_id": {
                "t": "string",      
                "v": ecommerceEvent.purchase.actionField["id"]
            }
        }
        properties["productProperties"] = genProductProps(ecommerceEvent.purchase.products)
        _cl.pageview("Purchased", properties)
        clearInterval(_cl_purchase_event)
    }
}, 1000);