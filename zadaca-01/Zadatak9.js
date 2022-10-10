let objekt1 = {
    a:1,
    b:2,
    c:3
};

let objekt2 = {
    a:321,
    b:3,
    c:1
}

function provjera (objekt1, objekt2){
    console.log(Object.keys(objekt1).toString() === Object.keys(objekt2).toString());
}

provjera(objekt1, objekt2)