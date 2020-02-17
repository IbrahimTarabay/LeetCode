/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head){
     if(head == null || head.next==null){
        return true;
     }
    let node = head;
    let arr = [];
    
    while(node){
     arr.push(node.val);
     node = node.next;  
    } 
    let len = arr.length;
    let halfLen = len/2;
    
    for(let i=0;i<halfLen;i++){
      if(arr[i]==arr[len-1-i]){
          continue;
      }else{
          return false;
      }
    }
    return true;
 }