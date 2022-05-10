let delay = 100;
let characters = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let i of characters) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay);
  delay += 200;
}
