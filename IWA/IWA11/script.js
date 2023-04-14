// script.js

const order1 = document.querySelector('[data-key="order1"]');

/* const 1-root = document(order1),*/
const biscuits1 = order1.querySelector('.biscuits .count');
const donuts1 = order1.querySelector('.donuts .count');
const pancakes1 = order1.querySelector('.pancakes .count');
const status1 = order1.querySelector('.status dd');

biscuits1.textContent = order1.getAttribute('data-biscuits');
donuts1.textContent = order1.getAttribute('data-donuts');
pancakes1.textContent = order1.getAttribute('data-pancakes');
status1.textContent = order1.getAttribute('data-delivered') !== 'false'  ? 'Delivered' : 'Pending';





const order2 = document.querySelector('[data-key="order2"]');
/* const 2-root = document(order2),*/
const biscuits2 = order2.querySelector('.biscuits .count');
const donuts2 = order2.querySelector('.donuts .count');
const pancakes2 = order2.querySelector('.pancakes .count');
const status2 = order2.querySelector('.status dd');

biscuits2.textContent = order2.getAttribute('data-biscuits');
donuts2.textContent = order2.getAttribute('data-donuts');
pancakes2.textContent = order2.getAttribute('data-pancakes');
status2.textContent = order2.getAttribute('data-delivered') !== 'false' ? 'Delivered' : 'Pending';

const order3 = document.querySelector('[data-key="order3"]')

/* const 3-root = document(order3),*/
const biscuits3 = order3.querySelector('.biscuits .count');
const donuts3 = order3.querySelector('.donuts .count');
const pancakes3 = order3.querySelector('.pancakes .count');
const status3 = order3.querySelector('.status dd');

biscuits3.textContent = order3.getAttribute('data-biscuits');
donuts3.textContent = order3.getAttribute('data-donuts');
pancakes3.textContent = order3.getAttribute('data-pancakes');
status3.textContent = order3.getAttribute('data-delivered') !== 'false' ? 'Delivered' : 'Pending';

