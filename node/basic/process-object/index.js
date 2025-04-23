const initialMemoryUsage = process.memoryUsage().heapUsed; // TODO 1
// console.log(initialMemoryUsage);

const yourName = process.argv[2]; // TODO 2
console.log(yourName);

const environment = process.env.NODE_ENV; // TODO 3
// console.log(environment);

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed; // TODO 4
// console.log(currentMemoryUsage);

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);
