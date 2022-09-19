const ftoc = function(temp_in) {
  temp_out = (temp_in - 32) * 5 / 9;
  temp_out = Math.round(temp_out * 10) / 10;
  return temp_out;
};

const ctof = function(temp_in) {
  temp_out = (temp_in * 9 / 5) + 32;
  temp_out = Math.round(temp_out * 10) / 10;
  return temp_out;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
