/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let char_array = s.split("");
    let closed_brackets = [')','}',']'];
    let open_brackets = ['(','{','['];
    for(let i = 0; i<char_array.length;i++){
        if(closed_brackets.indexOf(char_array[i]) > -1){
            let open_bracket = open_brackets[closed_brackets.indexOf(char_array[i])]
            if(stack.length==0 || (open_bracket != stack.pop())) {
                return false;
            }
        } else {
            stack.push(char_array[i])
        }
    }
    if(stack.length == 0){
        return true
    } else {
        return false
    }
};