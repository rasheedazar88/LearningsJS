_cl_purchase_event = setInterval(function(){
    if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
        var genProductProps = function(productsData){
            var products = [];
            for(var cli in  productsData){
                var product = productsData[cli];
                var newproduct = {};
                for(prodkey in product){
                    switch(prodkey){
                    case "id":
                        newproduct["product_id"] = {"t": "string", "v": product[prodkey]};
                        break;
                    case "name": 
                        newproduct["product_name"] = {"t": "string", "v":product[prodkey]};
                        break;
                    case "price":
                        newproduct["product_price"] = {"t": "number", "v":product[prodkey]};
                        break;
                    case "brand":
                        newproduct["product_brand"] = {"t": "string", "v":product[prodkey]};
                        break;
                    case "category":
                        newproduct["product_category"] = {"t": "string", "v":product[prodkey]};
                        break;
                    case "image_url":
                        newproduct["product_image"]= {"t": "string", "v":product[prodkey]};
                        break;
                    default:
                        newproduct["product_" + prodkey] = {"t": "string", "v": product[prodkey]};
                        break;
                    }
                }
                products.push(newproduct);
            }
            return products;
        };
        var ecommerceEvent = window.google_tag_manager["GTM-MCPRWN"].dataLayer.get("ecommerce");
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
