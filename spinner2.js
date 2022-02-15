let x = 100;
let spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let elm of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(elm);
  }, x);
  x += 200;
}





