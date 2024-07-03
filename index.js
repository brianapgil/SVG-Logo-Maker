const readline = require('readline-sync');
const {Circle, Triangle, Square} = require('./lib/shapes');
const fs = require('fs');

function main() {
    const shapes = ['circle', 'triangle', 'square'];
    const shapeIndex = readline.keyInSelect(shapes, 'Select a shape.', {cancel:false});
    const shapeChoice = shapes[shapeIndex];
    const text = readline.question('Enter text for the logo (up to 3 letters).');
    const color = readline.question('Enter the color of the logo.');
    const textcolor = readline.question('Enter the color of the text for the logo.');
    let shape;
    switch(shapeChoice){
        case 'circle':
            shape = new Circle(text, color, textcolor);
            break;
        case 'triangle':
            shape = new Triangle(text, color, textcolor);
            break;
        case 'square':
            shape = new Square(text, color, textcolor);
            break;
    }
    const svgContent = shape.render();
    fs.writeFileSync('logo.svg', svgContent, 'utf-8');
}

main();
