import describe from "describe";

const arr = [
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
];

let sentence = "";

function arrAdder(arr) {
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sentence += arr[j][i];
    }
    sentence += " ";
  }
  //   return sentence.trim();
  //   arr.map((val, idx) => {
  //     arr.map((item, i) => {
  //       sentence += arr[i][idx];
  //     });
  //     sentence += " ";
  //   });
  // for (const i in arr) {
  //   for (const j in arr) {
  //     sentence += arr[j][i];
  //   }
  //   sentence += " ";
  // }
}

arrAdder(arr);

console.log(sentence);
