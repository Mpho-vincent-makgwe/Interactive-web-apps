const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function hobby1 () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}
function hobby2 () {
  logTwice(`Hello, ${hobby} (${age}). I love ${firstName}!`)
};

hobby1();
hobby2();