/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    return (sortStr(s) === sortStr(t));
    
};
var sortStr = (str)=>{
    return str.split('').sort().join('')        
}