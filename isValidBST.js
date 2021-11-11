/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    /**
    {node} root: node of tree I want to check
    {string} side: which side of the Tree I'm on
    */
    var check = function(root, min, max){
        if(root==null){
            return true;
        }
        if((min!==null && root.val<=min) || (max!==null && root.val>=max)){
            return false;
        }
        var left = (root.left) ? root.left : null;
        var right = (root.right) ? root.right : null;
        var val = root.val;
        return check(right, val, max) && check(left, min, val);
    }
    return check(root, null, null)
    
};
