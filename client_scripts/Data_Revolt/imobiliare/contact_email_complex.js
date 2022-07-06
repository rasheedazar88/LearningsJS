function trigger(){
    var cdl = dataLayer || [];
    var obj = cdl[0];    
    var event_props = {
        "content_type": "product",
        "currency": "EUR",
        "property_status": obj["propertyStatus"],
        "property_type": obj["propertyType"],
        "property_location": obj["propertyLocation"],
        "value": obj["propertyPrice"],
        "seller_id": obj["sellerID"],
        "user_score": obj["user_score"],
        "price_range": {{lookup - price range}}
    }

    var properties = {}
    properties["customProperties"] = event_props;
    _cl.trackClick("contact_email_complex", properties);

    if(obj["idAnunt"]){
        product = {
            "product_id": obj["idAnunt"],
            "product_quantity": 1
        }
        if(obj["propertyPrice"]){
            product["product_price"] = obj["propertyPrice"]
        }

        properties["productProperties"] = [product];
    }
    _cl.trackClick("Purchased", properties);
}
trigger();
