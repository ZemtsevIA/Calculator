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

function clearDisplay() {
    display.value = '';
    display2.value = '';
  }
  
  function calculate() {
    try {
      display.value = eval(display.value);
    } catch(error) {
      display.value = 'Error';
    }
    display2.value = '';
    temp = 0;
  }
  
  function preliminaryResult() {
      try {
          display2.value = "=" + eval(display.value);
      } catch(error) {
          
      }
  }
  
  function revers(){
      display.value = display.value * -1;
  }