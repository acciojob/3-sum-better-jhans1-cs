function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  let closestSum = Infinity;

  // Iterate through the array
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum === target) {
        // Found the exact sum, no need to continue
        return closestSum;
      } else if (sum < target) {
        // Sum is less than target, move the left pointer
        left++;
      } else {
        // Sum is greater than target, move the right pointer
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;

