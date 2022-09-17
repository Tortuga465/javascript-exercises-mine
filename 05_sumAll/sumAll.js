const sumAll = function(num_start, num_end) {
    if ((num_start*num_end<0) || (typeof(num_end)!="number") || (typeof(num_start)!="number"))
    {
        return "ERROR";
    }
    return_value = 0;
    if(num_start>num_end)
    {
        temp = num_start;
        num_start = num_end;
        num_end = temp;
    }
    


    for(i=num_start; i<=num_end; i++)
    {
        return_value += i;
    }
    return return_value;
};

// Do not edit below this line
module.exports = sumAll;
