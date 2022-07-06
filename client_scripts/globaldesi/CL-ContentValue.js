function(){
    var dom = document.getElementsByClassName('price')[0].innerHTML.split(" ")
    var amt = dom.length > 1 ? dom[1] : dom[0].slice(1)  
    return amt.replaceAll(",", "");
}