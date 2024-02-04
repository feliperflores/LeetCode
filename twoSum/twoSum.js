export default function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (map.get(x) !== undefined) {
      return [map.get(x), i];
    }
    map.set(nums[i], i);
  }
};
