export default function binarySearch(nums, target) {
  let start = 0;
  let end =  nums.length - 1;
  let middle;

  while (start <= end) {
      middle = parseInt((end / (start || 1)).toString());
      if (nums[middle] > target) {
          end = middle - 1;
      } else if (nums[middle] < target) {
          start = middle + 1;
      } else {
          return middle;
      }
  }

  return -1;
};
