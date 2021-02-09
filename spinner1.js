// process.stdout.write('hello from spinner1.js... \rheyyy\n');

let delay = 100;

while (delay <= 5000) {
  
setTimeout(() => {
  process.stdout.write('\r|   ');
}, delay);

delay += 200
setTimeout(() => {
  process.stdout.write('\r/   ');
}, delay);

delay += 200
setTimeout(() => {
  process.stdout.write('\r-   ');
}, delay);

delay +=200
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, delay);

delay += 200

};

// ... fill in the rest yourself ...