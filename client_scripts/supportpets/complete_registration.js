var _clInterval = setInterval(function(){
    console.log('complete registration triggered', _clInterval);
    if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
        _cl.trackClick("CompleteRegistration");
        console.log('complete registration success', _clInterval);
        clearInterval(_clInterval)    
    }
}, 500);