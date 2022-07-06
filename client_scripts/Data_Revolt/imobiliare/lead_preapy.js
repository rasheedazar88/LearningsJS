var _cllead_preapy = setInterval(function(){
  if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
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
    _cl.trackClick("lead_preapy", properties);
    clearInterval(_cllead_preapy);
  }
},500);