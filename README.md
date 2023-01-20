## initial package
```yarn```

## running programm
```yarn start```

#### Answer  

```
const arr = [
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
];

const secondArr = [
  ["T", "M", "i", "t", "p", "o", "t", "c"],
  ["h", "i", "s", "h", "o", "f", "h", "e"],
  ["e", "t", "", "e", "w", "", "e", "l"],
  ["", "o", "", "", "e", "", "", "l"],
  ["", "c", "", "", "r", "", "", ""],
  ["", "h", "", "", "h", "", "", ""],
  ["", "o", "", "", "o", "", "", ""],
  ["", "n", "", "", "u", "", "", ""],
  ["", "d", "", "", "s", "", "", ""],
  ["", "r", "", "", "e", "", "", ""],
  ["", "i", "", "", "", "", "", ""],
  ["", "a", "", "", "", "", "", ""],
];

let sentence = "";

function arrAdder(arr) {
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sentence += arr[j][i];
    }
    sentence += " ";
  }

  sentence += "\n";
  return sentence.trim();
}

arrAdder(arr);

arrAdder(secondArr);

console.log(sentence);
```