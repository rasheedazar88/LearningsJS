// Supported product properties:
// property name	required or optional
// product_name	Required
// product_id	Required
// product_brand	Optional
// product_category	Optional
// product_price	Optional
// product_variant	Optional
// product_quantity	Optional
// product_coupon	Optional
// product_position	Optional
// product_image	Optional


// CATEGORY VIEWED

var eventName = "Category viewed";
var properties = {
  customProperties: {
    page_url: {
      t: "string",
      v: "https://customerlabs.co",
    },
    page_title: {
      t: "string",
      v: "No-code Customer Data Platform for SMBs",
    },
  },
};
_cl.pageview(eventName, properties);
