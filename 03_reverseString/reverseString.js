const reverseString = function(str) {

    r_string = ''

    for(let i = str.length; i>0; i--){
        r_string += str[i-1]
    }

    return(r_string)

};

// Do not edit below this line
module.exports = reverseString;
