const repeatString = function(string, num) {

    // // V1
    // if(num >= 0){
    //     r_string = string.repeat(num)
    // } else {
    //     r_string = 'ERROR'
    // }
    // return(r_string)

    // V2
    if(num < 0){
        r_string = 'ERROR'
    } else {
        r_string = ''
    }
    
    for(let i = 0; i < num; i++){
        r_string += string
    }

    return(r_string)

};

// Do not edit below this line
module.exports = repeatString;

