function search(nums: number[], target: number): number {
    let left = 0,
        right = nums.length - 1

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)

        if (target === nums[mid]) return mid
        else if (target > nums[mid]) left = mid + 1
        else right = mid - 1
    }

    return -1
}

/**
 * n/2, n/4, n/8, ..., 1
 * n/2^x = 1 ==> x = log2(n)
 */
