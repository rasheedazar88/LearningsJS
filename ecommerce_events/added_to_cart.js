var eventName = "Added to cart"
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
      }
    ], 
    "customProperties" : {
            "page_url": {
                "t": "string",
                "v": "https://customerlabsdemo.myshopify.com/products/s14-dnl-sh-lkadec-beige-blue"
            },
            "clicked_from": {
                "t": "string",
                "v": "home page"
            }
        }
  }
  _cl.trackClick(eventName, properties)