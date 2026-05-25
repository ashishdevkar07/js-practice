// The “for” loop

for (let i = 0 ; i < 5 ; i++){
    console.log(i);
}

for (let j = 5 ; j > 0 ; j--){
    if (j == 3) break;
    console.log(j);
}


// The “while” loop
let i = 0 ;
while (i < 5){
    console.log(i);
    i++;
}

let j = 5;
while (j > 0){
    console.log(j);
    j--;
}


// The “do…while” loop
let i = 0 ;
do {
    console.log(i);
    i++ ;
} while (i < 5);


// here the condition is wrong , but in do while loop , first output runs then condition is checked
// means atleast one time the loop will run , if the condition is wrong 
let j = 5 ;
do {
    console.log(j);
    j-- ;
} while ( j < 0);