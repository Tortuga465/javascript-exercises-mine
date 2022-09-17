const removeFromArray = function(list, ...args) {
    args.forEach(arg => {
            for (var i = 0; i < list.length; ++i)
            {
                if ((list[i]==arg)&&(typeof(arg) == typeof(list[i]))) list.splice(i,1);
            }
        });
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
