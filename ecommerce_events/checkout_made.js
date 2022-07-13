var eventName = "Checkout made"
  var properties = {
    "productProperties": [
        {
            "product_name":{
                "t": "string",
                "v": "Linen Western Shirt in Beige/Blue"
            },
            "product_id" :{
                "t": "number",
                "v": "12069045043288"
            },
            "product_brand":{
                "t": "string",
                "v": "Van Heusen"
            },
            "product_category":{
                "t": "string",
                "v": "Men's Collection"
            },
            "product_price":{
                "t": "number",
                "v": "1500"
            },
            "product_variant":{
                "t": "string",
                "v": "cotton"
            },
            "product_quantity": {
                "t": "number",
                "v": "1"
            },
            "product_color": {
                "t": "string",
                "v": "black"
            },
            "product_coupen": {
                "t": "string",
                "v": "CLABS001"
            },
            "product_position": {
                "t": "number",
                "v": "1"
            },
            "product_image": {
                "t": "string",
                "v": "https://cdn.shopify.com/s/files/1/0251/2555/2216/products/2014_11_3_Addis_Look17_02_940x.jpg?v=1563886402"
            }
        },
        
        {
            "product_name":{
                "t": "string",
                "v": "Marquee Coat in Steel"
            },
            "product_id" :{
                "t": "number",
                "v": "12069032591448"
            },
            "product_brand":{
                "t": "string",
                "v": "Raymonds"
            },
            "product_category":{
                "t": "string",
                "v": "Women's Collection"
            },
            "product_price":{
                "t": "number",
                "v": "4500"
            },
            "product_variant":{
                "t": "string",
                "v": "cotton"
            },
            "product_quantity": {
                "t": "number",
                "v": "1"
            },
            "product_color": {
                "t": "string",
                "v": "black"
            },
            "product_coupen": {
                "t": "string",
                "v": "CLABS002"
            },
            "product_position": {
                "t": "number",
                "v": "2"
            },
            "product_image": {
                "t": "string",
                "v": "https://cdn.shopify.com/s/files/1/0251/2555/2216/products/2014_08_11_Lana_Look4_11_940x.jpg?v=1563886355"
            }
        },

        {
            "product_name":{
                "t": "string",
                "v": "Delicious Camisole"
            },
            "product_id" :{
                "t": "number",
                "v": "12069003984984"
            },
            "product_brand":{
                "t": "string",
                "v": "Raymonds"
            },
            "product_category":{
                "t": "string",
                "v": "Women's Collection"
            },
            "product_price":{
                "t": "number",
                "v": "2500"
            },
            "product_variant":{
                "t": "string",
                "v": "cotton"
            },
            "product_quantity": {
                "t": "number",
                "v": "2"
            },
            "product_color": {
                "t": "string",
                "v": "blue"
            },
            "product_coupen": {
                "t": "string",
                "v": "CLABS003"
            },
            "product_position": {
                "t": "number",
                "v": "3"
            },
            "product_image": {
                "t": "string",
                "v": "https://cdn.shopify.com/s/files/1/0251/2555/2216/products/2014_10_18_Lana_Look1101_2048x2048.jpg?v=1563886175"
            }
        },
    ],
    "customProperties" : {
        "currency" : {
            "t": "string",
            "v": "USD"
        },
        "coupen": {
             "t": "string",
             "v": "CLABS"
        },
        "value": {
            "t": "number",
            "v": "3000"
        },
    }
  }
  _cl.trackClick(eventName, properties)