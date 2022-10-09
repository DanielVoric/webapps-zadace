let recenica = "Kreka je iz fazane";


function toCamel(recenica) {
    return recenica.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(toCamel(recenica));