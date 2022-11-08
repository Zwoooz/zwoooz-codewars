function validParentheses(parens) {
    if(parens === '') return true;
    if(parens.endsWith(')') && parens.startsWith('(')) {
        if(parens.length % 2) return false;
        let arr = parens.split('');
        arr.forEach((element, index) => {
                for(let i = index; i <= parens.length; i++) {
                    if(element == '('){
                        if(arr[i] == ')') {
                            arr.splice(i, 1, '');
                            arr.splice(index, 1, '');
                            break;
                        }
                    }
                }
        })
        if(arr.includes('(') || arr.includes(')')) return false;
        return true;
    } else return false;
}