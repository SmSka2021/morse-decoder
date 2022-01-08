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
  let map = new Map(Object.entries(MORSE_TABLE)); 
  let arr = Array.from(map);  
  for (let i = 0; i < arr.length; i++) {
    let res = "";
    for (let j = 0; j < arr[i][0].length; j++) {
      //for(let n = 0; n < arr[i][j].length; n++ ){
      if (arr[i][0][j] === ".") {
        res += "10";
      }
      if (arr[i][0][j] === "-") {
        res += "11";
      }
    }
    if (res.length < 10) {
      res = res.padStart(10, "0");
    }
    arr[i][0] = res;
  }
  let resMap = new Map(arr);
  resMap.set("**********", " ");
  let resStr = "";
  for (let i = 0; i < expr.length; i += 10) {
    let cod = expr.slice(i, i + 10);
    resStr += resMap.get(cod);
  }
  return resStr;
}

module.exports = {
  decode,
};
