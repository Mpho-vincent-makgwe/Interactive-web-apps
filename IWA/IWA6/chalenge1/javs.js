const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

// The regular expression /^[0-9]+$/ is used to match strings that contain only numerical digits (0-9) from start to end.
const number = /^[0-9]+$/;


// The test() method is used to test if the given phone number matches the regular expression. It returns true if the phone number contains only
const primaryValid = number.test(primaryPhone);
const secondaryValid = number.test(secondaryPhone);

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid );