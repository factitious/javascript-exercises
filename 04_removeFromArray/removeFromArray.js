const removeFromArray = function() {
    let args = Array.from(arguments)

    arr = args[0]
    items_to_remove = args.slice(1, args.length)

    for(item of items_to_remove){
        idx = arr.indexOf(item)
        if(idx >= 0){
            arr.splice(idx, 1)
        }
    }
    return(arr)
};

// Do not edit below this line
module.exports = removeFromArray;
