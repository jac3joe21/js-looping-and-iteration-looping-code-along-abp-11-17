// Code your solutions in this file
const printBadges = (['Lisa', 'Kaitlin', 'Jan']);

function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}`);
  }
  return names;
}
