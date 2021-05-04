
let cakeRecipe = new Map([
    ['butter', '1/2 cup'],
    ['eggs', '1 large'],
    ['vanilla extract', '2 teaspoons'],
    ['flour', '1-1/2 cups'],
    ['baking powder', '1-3/4 teaspoons'],
    ['milk', '1/2 cup']
    
])
cakeRecipe.set('sugar', '2 cups');
Object.fromEntries(cakeRecipe);
var tryhard = JSON.stringify(Object.fromEntries(cakeRecipe));
var ob = JSON.parse(tryhard);
console.log(cakeRecipe);

    


//1


let studentGrades = new Map([
    [ 'Martin Pratt: 53%'],
    ['Kain Gibbs: 76%'],
    ['Shantelle Shah: 82%'],
    ['Ritik Alcock: 80%'],
    ['Abdurahman Ratcliffe: 57%'],
    ['Bailey Garcia: 68%'],
    ['Freyja Joyce: 99%'],
    ['Abraham Davison: 92%'],
    ['Zarah Cote: 95%'],
    ['Aayush Keith: 100%'],
    ['Melvin Fischer: 58%'],
    ['Blane Ayala: 68%'],
    ['Gregg Zuniga: 76%'],
    ['Rizwan Goodwin: 64%'],
    ['Denise Turner: 84%'],
    ['Shelly Reed: 89%'],
    ['Robin Ellwood: 87%'],
    ['Pollyanna Hopkins: 67%'],
    ['Darcey Martins: 79%'],
    ['Javan Rankin: 92%'],
    ['Lina Flower: 99%'],
    ['Millie-Rose Lacey: 65%'],
    ['Lynda Whitley: 100%'],
    ['Emrys Banks: 77%'],
    ['Bradleigh Hodges: 60%'],
    ['Aishah Knott: 94%'],
    ['Shannen Blanchard: 90%'],
    ['Ellise Watson: 56%'],
    ['Kimora Carver: 54%'],
    ['Elaina Allison: 59%'],
    ['Kobe Odom: 61%'],
    ['Keeleigh Searle: 97%'],
    ['Coby Peters: 52%'],
    ['Leslie Whitmore: 93%'],
    ['Christian Cook: 65%'],
    ['Esme Downes: 77%'],
    ['Nico Clegg: 74%'],
    ['Aine Welch: 82%'],
    ['Noah Huber: 97%'],
    ['Dewey Benton: 55%'],
    ['Ubaid Shannon: 88%'],
    ['Todd Chadwick: 81%']

  
  
])




//2 
console.log(studentGrades.delete('Martin Pratt: 53%'));
console.log(studentGrades.size);

//3 
studentGrades.set('Isobella Moyer: 95%');
studentGrades.set('Star Mcdougall: 56%')
studentGrades.set('Blade Lennon: 72%');
studentGrades.set('Karishma Molloy: 92%');
studentGrades.set('Gregor Garner: 63%');
studentGrades.set('Alec Peterson: 100%');
studentGrades.set('Letitia Benitez: 67%');
studentGrades.set('Elicia Hoover: 55%');

//4




//5
console.log(studentGrades.delete('Martin Pratt: 53%'))






