const sortedArrayToBST = function(nums) {

        if(nums.length == 0){
            return null
        }
        let half = Math.floor(nums.length / 2);
        let root = new TreeNode(nums[half])
        root.left = sortedArrayToBST(nums.slice(0,half))
        //because we are using half as Value.
        root.right = sortedArrayToBST(nums.slice(half+1))
        return root
};