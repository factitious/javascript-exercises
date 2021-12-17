const sumAll = function(val1, val2) {

    const isPositive = (val) => val >= 0;
    const isNumber = (val) => typeof val === 'number';
    const args = Array.from(arguments)

    let final_sum = 0

    if(args.every(isPositive) && args.every(isNumber)){
        for(var i=Math.min(...args); i<=Math.max(...args); i++){
            final_sum += i
        } 
    } else {
        final_sum = 'ERROR'
    }

    return(final_sum)

};

// Do not edit below this line
module.exports = sumAll;
