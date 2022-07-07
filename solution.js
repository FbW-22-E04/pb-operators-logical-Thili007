// Exercise - 01
const isDogBetter = true;
const isCatBetter = false;

console.log(isDogBetter && isCatBetter);

// Exercise - 02

console.log(isDogBetter || isCatBetter);

// Exercise - 03

console.log(!(isDogBetter && isCatBetter));

// Exercise - 02

const atoms = 5;
const sandGrains = 8;
const starsInSky = 15;

// Exercise - 03

console.log(atoms > starsInSky && atoms > sandGrains);

console.log(atoms !== sandGrains);

console.log(starsInSky < sandGrains || starsInSky > atoms);

console.log(atoms == starsInSky || atoms !== sandGrains);

console.log(atoms >= 10 && sandGrains <= 10);

console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);
