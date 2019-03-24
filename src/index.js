module.exports = function check(str, bracketsConfig) {
  while (str != '') {
    let next = str.split('()').join('').split('[]').join('').split('{}').join('').split('||').join('').split('12').join('').split('34').join('').split('56').join('').split('77').join('').split('88').join('');
    console.log(next == str);
    
    if (next == str) {
      return false 
    }
    str = next
  }
  return true 
}