const firstZero = x => x[0] === "0" && x[1] !== '.' ? x.slice(1) : x;

const isDecimal = (x, val) => x.includes(".") && val === '.';

const del = x => x.length > 1 ? x.slice(0, x.length - 1) : "0";

const belowBase = (x, from) => x === "." || parseInt(x, 16) < from;

const filteredOutput = (y, from, id, x = "0") => firstZero(x + y.filter(v => v.includes(id))
                                                .reduce((a,c) => [...a,...c])
                                                .filter(v => v === id && belowBase(v, from) && !isDecimal(x, id) ));

const dotStart = s => s[0] === "." ? "0" + s[0] : s[0];

const badInput = (s, from) => (s+"0").split("").filter(x => !belowBase(x, from)).length > 0;

const toDecimal = (string, radix) => {

    if(string[0] === ".") string = "0" + string;
    let s = string.split('.');
    let decimal = parseInt(s[0], radix);

    if(s.length > 1 && s[1].length > 0){
        let fract = s[1].split('');
       for(let i = 0, div = radix; i < fract.length; i++, div = div * radix) {
          let fractConverted = fract[i].match("[A-F]") ? parseInt(fract[i], radix) : fract[i];
          decimal = decimal + fractConverted / div;
       }
    }

    return decimal;
}

const convert = (x, from, to) =>  {
    let dec =  x === undefined ? "0" : !x.includes(".") ? parseInt(x, from) : toDecimal (x, from);
    let conv = (+dec).toString(to).toUpperCase();

    return badInput(x, from) || conv === "NAN" ? "Worng input for b" + from : 
    conv.includes(".") ? 
    [conv.split(".")[0], conv.split(".")[1].slice(0,6)].join(".") :
    conv;
}

export {firstZero, isDecimal, del, convert, belowBase, filteredOutput, dotStart};