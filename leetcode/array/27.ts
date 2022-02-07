function removeElement(nums: number[], val: number): number {
    let slow = 0,
        fast = 0

    while (fast < nums.length) {
        if (nums[fast] !== val) {
            if (slow !== fast) {
                const temp = nums[slow]

                nums[slow] = nums[fast]
                nums[fast] = temp
            }
            slow++
        }
        fast++
    }

    return slow
}
