const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const input = []

function parseLine(line) {
  return line.trim().split(' ').map(Number);
}

// https://stepik.org/lesson/13238/step/9?unit=3424
const optimalDots = (cuts = []) => {
    const sortedCuts = [...cuts]
    sortedCuts.sort((a, b) => a[1] - b[1])

    return sortedCuts.reduce((acc, cut, index) => {
        // always add last dot of first cut
        if (index === 0) {
            return [cut[1]]
        }

        const lastDot = acc[acc.length - 1]

        if (lastDot >= cut[0] && lastDot <= cut[1]) {
            return acc;
        }

        return [...acc, cut[1]]
    }, [])
}

rl.on('line', function (line) {
  input.push(parseLine(line));
}).on('close',function() {
  input.shift();
  const output = optimalDots(input);

  console.log(output.length);
  console.log(output.join(' '));
  process.exit(0);
});