// Alex.js

export const firstname = "Alex";
export const surname = "Madonsela";
export const role = "Head of Marketing";

// const display = document.getElementById('alex');
// display.innerText =  firstname + ' ' + surname + "  (" + role +")";

const display = firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display