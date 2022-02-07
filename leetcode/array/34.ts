function searchRange(nums: number[], target: number): number[] {
    let left = 0,
        right = nums.length - 1
    let start = -1,
        end = -1

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) {
            start = mid
            while (true) {
                if (nums[start - 1] !== target) break
                start -= 1
            }
            end = mid
            while (true) {
                if (nums[end + 1] !== target) break
                end += 1
            }

            return [start, end]
        } else if (nums[mid] > target) {
            right = mid - 1
        } else left = mid + 1
    }

    return [start, end]
}
