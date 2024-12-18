const checkString = (string, length) => string.length <= length;
const isPolydrome = (string) => {
  let reverseString = '';
  for (let i = string.replaceAll(' ','').length - 1; i >= 0; i--) {
    reverseString += string.replaceAll(' ', '')[i];
  }
  return reverseString.toLowerCase() === string.replaceAll(' ', '').toLowerCase();
};
const extractNumber = (string = '') => parseInt(string.toString().replace(/\D/g,''),10);
extractNumber();
checkString();
isPolydrome();
