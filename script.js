/*                                                                    TRUE FALSE                                                  */


//task1
 if ('0') {
   alert('Hello');
 }
 // יהיה ALERT
 
  /*  ------------------------------------------------*/
 // task2
 let num = prompt('what is the official name of javascript:');
 if (num == 'ECMAScript') {
   alert('Correct!');
 } else {
   alert('dont know?');
 }
 
  /*  ------------------------------------------------*/
 //task3
 
 let score = 75;
 let grade;
 
 grade =
   score >= 90
     ? 'A'
     : score >= 80
     ? 'B'
     : score >= 70
     ? 'C'
     : score >= 60
     ? 'D'
     : 'F';
 
 console.log('הציון הוא:', grade);
 
  /*  ------------------------------------------------*/
 //task4
 
 let num1 = prompt('num:');
 if (num1 > 0) {
   alert('גדול מ 0 ');
 } else if (num1 < 0) {
   alert('קטן מ 0 ');
 } else {
   alert('שווה  0 ');
 }
 
 /*  ------------------------------------------------*/
 //task5
 
 let result;
 let a = (b = 2);
 result = a + b < 4 ? 'Not enough' : (result = 'A lot');
 
  /*  ------------------------------------------------*/
 //task6
 let message;
 let login = 'Employee';
 message =
   login == 'Employee'
     ? 'Hello'
     : login == 'Director'
     ? 'Hello'
     : login == ''
     ? 'No login'
     : '';
 
 /*  ------------------------------------------------*/
 //task7
 
 console.log(false || 'sdf'); //sdf
 
 console.log(false && ''); //false
 
 console.log(true || ''); //true
 
 console.log(true && ''); //''
 
 console.log(undefined || null); //null
 
 console.log(undefined || 0 || null); //null
 
 console.log(undefined && 0 && null); //undefined
 
 console.log(1 || 0); //1
 
 console.log(null || 1); // 1
 
 console.log(null || 0 || 1); // 1

/*********************************************************************************************************************************************** */
 /*                                                          loops                                                                              */


 //task 1
 let sum = 0;
let j = 1;

while (j <= 100) {
  sum += i;
  j++;
}
console.log("sum is ", sum);


 /*  ------------------------------------------------*/
//task 2
let number;

do {
  number = prompt("please enter a number that is positive and above 0:");

//changing the prompt from string to number 
number = Number(number);

} while (isNaN(number) || number <= 0);

console.log("wrong number we need positive and above 0 try again ", number);

 
/*  ------------------------------------------------*/
//task 3
for (let i = 1; i <= 10; i++) {
   console.log("7 × " + i + " = " + (7 * i));
}

/************************************************** */
//task 4
const secret = 5; 
while (true) {
    let value = Number(prompt("Enter a number", ''));
    
    if (value === secret) {
        alert("Congratulations! You guessed the secret number!");
        break;  // end if the user guesses 5
    } else {
        alert("Try again!");
    }
}


/*---------------------------------------------------------------------------- */
//task 5 
for (let i = 1; i <= 30; i++) {

   // if true, skip the rest of the loop body
   if (i % 3 == 0) continue;

   alert(i); 
}

/*----------------------------------------------------------------------------**/
//task6
// מה הערך שייצא בסוף ? 
let i = 3;

while (i) {
  console.log( i-- );
}
// ערך אחרון זה אפס (0), לולאה רצה מ 3 עד 1 : נכנס פעם אחרונה מציג אפס אבל התנאי אחרי זה  לא מתקיים אז לא ממשיכים הלאה 



/*----------------------------------------------------------------------------------------------- */
//task 7

/*האם 2 הלולאות נותנות אותם ערכים ? 

let i=0;
 for (++i<5) console.log(i);

 let i=0;
 for(i++ <5) console.log(i);*/

 /*         תשובה           */
 // לא, הקוד הראשון קודם כל מקדם מ0 ל 1 לפני בדיקת התנאי, אבל הקוד השני  מתחיל עם ערך 0 ואז עובר ל 1
 //הקוד הראשון נותן 1-4 והקוד השני נותם 1-5

 /*-------------------------------------------------------------------------------- */

 //task 8
/*האם 2 הלולאות נותנות אותם ערכים ? 
for(let i=0;i<5;i++)console.log(i);
for(let i=0;i<5;++i)console.log(i);

/*    תשובה   
אין הבדל 2 הקודים נתנו פלט של 0-4
*/


 /*-------------------------------------------------------------------------------- */
//task 9
for (let i = 2; i <= 10; i++) {

   // if true, skip the rest of the loop body
   if (i % 2 != 0) continue;

   alert(i); 
}

  /*-------------------------------------------------------------------------------- */
//task 10
/* כתןוב מחדש את הקו ל WHILE 
   for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
  */

let k = 0;
while (k < 3) {
  alert(`number ${k}!`);
  k++;
}



