var expiryDate = new Date();
expiryDate.setTime(expiryDate.getTime() + (86400 * 1000));
document.cookie = "cl_purchase_init=true;domain=.supportpets.com;path=/;SameSite=Lax;expires=" + expiryDate.toGMTString();