function searchInsert(nums: number[], target: number): number {
    let left = 0,
        right = nums.length - 1
    let mid: number

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)
        if (target === nums[mid]) return mid
        else if (target > nums[mid]) left = mid + 1
        else right = mid - 1
    }

    return left
}
