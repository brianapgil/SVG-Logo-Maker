const readline = require('readline-sync');
const generateSVG = require('./lib/shapes')

function main() {
    const shape = readline.question('Enter shape choice (circle, triangle, or square)');
    const text = readline.question('Enter text for the logo (up to 3 letters).');
    const color = readline.question('Enter the color of the logo.');
    const textcolor = readline.question('Enter the color of the text for the logo.');
    
}