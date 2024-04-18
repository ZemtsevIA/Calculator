let display = document.getElementById('display');
let display2 = document.getElementById('display2');
let temp = 0;

function appendToDisplay(value) {
  
  if(display.value === 'Error'){
    display.value = '';
    display.value += value;
    if(temp === 1){
        preliminaryResult();
    }
  }
  else{
    display.value += value;
    if(temp === 1){
        preliminaryResult();
    }
  }
}

function appendToDisplayAction(value) {
  
    if(display.value === 'Error'){
      display.value = '';
      display.value += value;
    }
    else{
      display.value += value;
    }
    temp = 1;
  }

function clearDisplay() {
  display.value = '';
  display2.value = '';
}