let polje = [0,1000];
let x = 23;
let suma=1;

function provjera(x){
if (x >= polje[0] && x <= polje[1])
{
    console.log("X je u polju");
    for (let i=1; i < x; i++){
        if (i%7==0){
            suma=suma*i;
        }
      
    }
console.log(suma);
}
else{
    console.log("X nije u polju");
}}

provjera(x);