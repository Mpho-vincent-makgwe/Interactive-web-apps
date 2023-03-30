// scripts.js

import {role as roleA,firstName as firstNameA,surName as surNameA} from './nwabisa.js';
import {role as roleB,firstName as firstNameB,surName as surNameB} from './johannes.js';
import {role as roleC,firstName as firstNameC,surName as surNameC} from './alex.js';

// console.log('Roles:', role1, role2, role3);

const displayA= firstNameA + " " + surNameA + " (" + roleA + ")";
document.getElementById('nwabisa').innerText = displayA;

const displayB= firstNameB + " " + surNameB + " (" + roleB + ")";
document.getElementById('johannes').innerText = displayB;

const displayC= firstNameC + " " + surNameC + " (" + roleC + ")";
document.getElementById('alex').innerText = displayC;





console.log('Roles:' ,  roleA, roleB, roleC);