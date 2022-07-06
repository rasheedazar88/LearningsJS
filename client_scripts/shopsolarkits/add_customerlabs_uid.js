(function(){
    var b = [], c = document["cookie"]["split"](";");
    var a = new RegExp("^\\s*cl43350tcp5k50_uid=\\s*(.*?)\\s*$");
    for (var d = 0, len = c["length"]; d < len; d++) {
        var e = c[d]["match"](a);
        e && b.push(e[1]);
    }
    if(b.length > 0){
        var uid = b[0];
        var img = new Image();
        img.src = "//io.v2.customerlabs.co/externalIds?customerlabs_id=" + uid + "&id=cl43350tcp5k50&uid=" + uid;
    }
}())