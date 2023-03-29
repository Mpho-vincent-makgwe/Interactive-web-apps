// scripts.js
// the imports in the script file are incorrect. They should be:
import {company} from './configurations.js';//and full stops ans forward slashes had to be included.

// the variable names in the import statements are misspelled. It should be:
import {year} from './configurations.js';//and full stops ans forward slashes had to be included.

document.addEventListener('DOMContentLoaded', () => {
    const message = '© ' + company + ' (' + year + ')';
    document.querySelector('footer').innerText = message;
});


console.log(message);