function trigger(){
    var cdl = dataLayer || [];
    var path_parts = window.location.pathname.split("/");
    var category = path_parts[1];
    var event_name = "contact_chat";
    if(category.startsWith("vanzare") || category.startsWith("inchirieri")){
        event_name = "contact_chat";
    }else if(category.startsWith("ansambluri")){
        event_name = "contact_chat_complex";
    }else if(category.startsWith("agentii")){
        event_name = "contact_chat_agency";
    }

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
    _cl.trackClick("contact_chat", properties);

    
    product = {
        "product_id": obj["idAnunt"],
        "product_quantity": 1,
        "product_price": obj["propertyPrice"]
    }

    properties["productProperties"] = [product];
    
    _cl.trackClick("Purchased", properties);
}
trigger();