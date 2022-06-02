
const nums = [0,1,2,2,3,0,4,2];
const val = 2;
var removeElement = function(nums, val) {
    let editedNums = [];

    for (let i = 0; i < nums.length; i++){
        if(nums[i] == val) continue;
        editedNums.push(nums[i]);
    };
    const k = editedNums.length;
    return k, editedNums;
};

console.log(removeElement(nums,val));
