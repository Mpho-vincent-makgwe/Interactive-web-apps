const MIN_NUMBER = -50;
const MAX_NUMBER = 60;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');


const subtractHandler = () =>{
    const newValue = parseInt(number.value) -1
    number.value =  newValue;
    
    // if(newValue >= MIN_NUMBER ){
    //     subtract.disabled = true;
    // } else {subtract.disabled = false;
    // };
    
}


const addHandler = () =>{
    const newValue = parseInt(number.value) +1
    number.value = newValue;

    if(newValue >= MAX_NUMBER){
        add.disabled = true;
    } else {add.disabled = false;   
    };
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)