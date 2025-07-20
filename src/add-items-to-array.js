const amdCpus = ["Ryzen Z2", "Sempron", "Phenom", "E-Series", "A-Series"];

amdCpus.unshift("Athlon");
amdCpus.push("PRO A-Series");
console.log(amdCpus);
console.log(amdCpus.push("FX-Series")); // return length
