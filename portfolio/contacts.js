var arr = [];                               

for (var i = 0; i < 1; i++) {              
  arr.push(prompt('Enter name and phone number' + (i+1))); 
}

alert('Full array: ' + arr.join(', ')); 