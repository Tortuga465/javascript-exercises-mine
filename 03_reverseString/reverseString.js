const reverseString = function(string_input) {
    string_output = "";
    size = string_input.length-1;
    for (let i in string_input)
    {
        string_output += string_input[size-i];
    }
    return string_output;
};

// Do not edit below this line
module.exports = reverseString;
