function trigger(){
    if(window._cl){
        var items = [];
        var cart_items = document.getElementsByClassName('cart item')
        for(var i = 0; i < cart_items.length; i++){
            var item = {}
            item["product_id"] = cart_items[i].querySelectorAll('.item-info .item .product-item-details input')[1].value;
            item["product_name"] = cart_items[i].querySelectorAll('.item-info .item .product-item-details .product-item-name a')[0].innerText;
            item["product_quantity"] = cart_items[i].querySelectorAll('.item-info .item .product-item-details input')[2].value;
            var dom = document.getElementsByClassName('cart item')[0].querySelectorAll('.item-info .price .price')[0].innerText.split(" ");
            var price = dom.length > 1 ? dom[1] : dom[0].slice(1);  
            item["product_price"] = price.replaceAll(",", "");
            items.push(item); 
        };

        var properties = {
            "productProperties": items,
            "customProperties": {
                "content_type": 'product_group',
                "value": {{Content Value Initiate Checkout}},
                "revenue": {{Content Value Initiate Checkout}},
                "currency": {{CL-Content Currency}},
                "num_items": {{Number of Items Initiate Checkout}}
            }
        };

        _cl.trackClick("Checkout made", properties)
    }else{
        setTimeout(function(){ trigger() }, 1000)
    }
}

trigger();