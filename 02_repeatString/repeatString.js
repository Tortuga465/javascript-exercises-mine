const repeatString = function(str, num) {
    str_ret = "";
    if(num<0) return ("ERROR");
    while (num>0)
    {
        str_ret += str;
        num--;
    }
    return str_ret;
};

// Do not edit below this line
module.exports = repeatString;
