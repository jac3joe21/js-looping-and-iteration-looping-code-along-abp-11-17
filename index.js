// Code your solutions in this file
const names = ['Joe', 'Gabe'];

function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}`);
  }
  return names;
}
