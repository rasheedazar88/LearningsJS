function trigger(){
  var cdl = dataLayer || {};
  var hasEvent = false;
  for(var i in cdl){ 
      obj = cdl[i];
      if(obj["event"] === "virtualPageview" && obj["virtualPageURL"].split("/")[1] === "checkout") { 
          var urlArr = obj["virtualPageURL"].split("/");
          var properties = {}
          properties["customProperties"] = customConversion(obj);
          if(urlArr[2] === "address") {
            _cl.pageview("transaction_address", properties);
          } else if(urlArr[2] === "payment") {
            _cl.pageview("transaction_payment", properties);
          }
          hasEvent = true;
      }  
  };
  if(!hasEvent){
    setTimeout(function(){ trigger() }, 1000)
  }

function customConversion(properties) {
  var customStructure = {}
  for(key in properties) {
      switch(key) {
          case "virtualPageURL":
              customStructure["page_url"] = {"t":"string", "v":properties[key]}
              break;
          case "virtualPageTitle":
              customStructure["page_title"] = {"t":"string", "v":properties[key]}
              break; 
      }
  }
  return customStructure;
}
}

setTimeout(function(){ trigger() }, 2000)