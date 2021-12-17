const leapYears = function(year) {

    let cond1 = (year%4 == 0) ? true:false
    let cond2 = (year%100 === 0) ? true:false
    let cond3 = (year%400 === 0) ? true:false
    
    if(cond1){
        if(!cond2){
            isLeap = true
        } else {
            if(cond3){
                isLeap = true
            } else {
                isLeap = false
            }
        }
    } else {
        isLeap = false
    }


    return isLeap
    
};

// Do not edit below this line
module.exports = leapYears;