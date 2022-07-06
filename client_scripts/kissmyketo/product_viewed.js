function genProductProps(productsData){
    var products = [];
    for(var cli in  productsData){
        var product = productsData[cli];
        var newproduct = {};
        for(prodkey in product){
            switch(prodkey){
            case "product_id":
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
            case "image":
                newproduct["product_image"]= product[prodkey]
            default:
                newproduct["product_" + prodkey] = product[prodkey];
                break;
            }
        }
        products.push(newproduct);
    }
    return products;
};
if(!window._cl_product_viewed){
    window._cl_product_viewed = setInterval(function(){
        if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
            var ecommerceEvent = window.google_tag_manager["GTM-WVV5PS6"].dataLayer.get("ecommerce");
            var properties = {}
            properties["customProperties"] = {
                "currency": {
                    "t": "string",
                    "v": ecommerceEvent["currencyCode"]
                },
                "content_type": {
                    "t": "string",
                    "v": "product_group"
                }
            }
            properties["productProperties"] = genProductProps(ecommerceEvent.detail.products)
            _cl.pageview("Product viewed", properties)
            clearInterval(window._cl_product_viewed)
        }
    },500)
}
