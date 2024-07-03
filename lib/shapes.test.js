const shapes = require('./shapes.js');

describe('shape test', () => {
describe('circle', () => {
    it('render', () => {
        const text = "SVG";
        const color = "blue";
        const textcolor = "white";
        const template = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text></svg>`
        const shape = new shapes.Circle(text, color, textcolor);
        expect(shape.render()).toEqual(template);
    });
    });
    describe('square', () => {
        it('render', () => {
            const text = "SVG";
            const color = "blue";
            const textcolor = "white";
            const template = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="50" y="0" rx="20" ry="20" fill="${color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text></svg>`
            const shape = new shapes.Square(text, color, textcolor);
            expect(shape.render()).toEqual(template);
        });
        });
        describe('triangle', () => {
            it('render', () => {
                const text = "SVG";
                const color = "blue";
                const textcolor = "white";
                const template = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${color}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text></svg>`
                const shape = new shapes.Triangle(text, color, textcolor);
                expect(shape.render()).toEqual(template);
            });
            });
  });
