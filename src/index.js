const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // Разделил на десятки
  let arr = [];
  let res = [];
  let massivMorse=[]
  let resultStr=''
  for (let i = 0; i < expr.length; i += 10) {
    let chunk = expr.slice(i, i + 10);
    res.push(chunk);
  }
  
  // прошел по массиву. массивов
  for (let j = 0; j < res.length; j++) {
    
    let resa = res[j];
    // console.log(resa)
    let str = "";
    if (resa.includes("*")) {
      str = " ";
    }else{
        for(let k=0; k<resa.length;k+=2){
            let temp=resa.slice(k,k+2)
            if(+temp===10){
                str+='.';
            }else if(+temp===11){
                str+='-';
            }
        
        }
    }
    massivMorse.push(str)
  }
  for (let i=0;i<massivMorse.length;i++){
    let element=massivMorse[i]
    if(element.includes(' ')){
        resultStr+= " "
    }else {
        resultStr+=MORSE_TABLE[element]
    }
  }
return resultStr
 
}

module.exports = {
  decode,
};
