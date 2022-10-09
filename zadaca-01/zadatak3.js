let x = 500;
let polje = [100,150000];

function provjera(x){
if (x >= polje[0] && x <= polje[1]){
    console.log(x + ' je unutar ' + polje);
}
else
{
    console.log(x + ' nije unutar '+ polje);
}}

provjera(x);

