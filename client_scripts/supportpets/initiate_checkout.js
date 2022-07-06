var _clInterval = setInterval(function(){
    console.log('InitiateCheckout triggered', _clInterval);
    if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
        _cl.trackClick("InitiateCheckout");
        console.log('InitiateCheckout success', _clInterval);
        clearInterval(_clInterval)    
    }
}, 500);