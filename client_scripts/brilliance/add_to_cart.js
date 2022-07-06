_cl_add_to_cart = setInterval(function(){
    if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
        var genProductProps = function(productsData){
            var products = [];
            for(var cli in  productsData){
                var product = productsData[cli];
                var newproduct = {};
                for(prodkey in product){
                    switch(prodkey){
                    case "id":
                        newproduct["product_id"] = {"t": "string", "v":product[prodkey]};
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
                        newproduct["product_" + prodkey] = {"t": "string", "v":product[prodkey]};
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
            "content_type": "product_group"
        }
        properties["productProperties"] = genProductProps(ecommerceEvent.detail.products)
        _cl.pageview("Added to cart", properties)
        clearInterval(_cl_add_to_cart)
    }
}, 1000);
