module.exports = function reverse (n) {
 let result;
 let nPositive;
 if ( n < 0 ){
    nPositive = 0 - n;
    result = nPositive.toString().split('').reverse().join('');
 } else {result = n.toString().split('').reverse().join('');}
    
    return Number(result);
}
