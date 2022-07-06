
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
                newproduct["product_image"]= product[prodkey];
            default:
                newproduct["product_" + prodkey] = product[prodkey];
                break;
            }
        }
        products.push(newproduct);
    }
    return products;
};
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
properties["productProperties"] = genProductProps(ecommerceEvent.add.products)
_cl.trackClick("Added to cart", properties)
