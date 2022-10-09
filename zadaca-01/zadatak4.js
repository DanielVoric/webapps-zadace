let x = 120;
let sati;
let minute;

function pretvarac(x){
    sati= x/60;
    minute= x%60;
    return sati,minute;
}
pretvarac(x);

console.log("Ovo je "+parseInt(sati)+" sata "+"i "+minute+" minuta");