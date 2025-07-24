const amdCpus = ["Ryzen Z2", "Sempron", "Phenom", "E-Series", "A-Series"];

amdCpus.unshift("Athlon"); // insert new elements at the start an array
amdCpus.push("PRO A-Series"); // insert new elements to the end of an array
console.log(amdCpus);
console.log(amdCpus.push("FX-Series")); // return length
