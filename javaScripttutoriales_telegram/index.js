/*20. const positive_negative = (x,y) => {
    if((x<0 && y > 0) || x>0 && y<0){
        return true
    } else {
        return false
    }

}

console.log(positive_negative(2,2))
console.log(positive_negative(-2,2))
console.log(positive_negative(-2,-2))
console.log(positive_negative(2,-2))

*/

const string_check = (str1) => {
    if(str1 === null || str1 === undefined || str1.substring(0,2) === 'Py'){
        return str1
    }

    return 'Py'+ str1
}

console.log(string_check('Python'))
console.log(string_check('thon'))
console.log(string_check(null))
console.log(string_check(undefined))
console.log(string_check())
