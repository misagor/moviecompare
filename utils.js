/**
 * Debounce helper function
 */
 const debounce = (callBackFunc, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            callBackFunc.apply(null, args);
        }, delay);
    };
};