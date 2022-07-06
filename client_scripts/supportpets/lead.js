var _clInterval = setInterval(function(){
    console.log('Lead triggered', _clInterval);
    if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
        _cl.trackClick("Lead")
        console.log('Lead success', _clInterval);
        clearInterval(_clInterval)    
    }
}, 500);