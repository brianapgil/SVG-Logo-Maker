class Shape {
    constructor(text, color, textcolor) {
        this.text = text;
        this.color = color;
        this.textcolor = textcolor;
    }

    render() {
        return "Shape";
    }
}

class Circle extends Shape {
    constructor(text, color, textcolor) {
        super(text, color, textcolor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
    constructor(text, color, textcolor) {
        super(text, color, textcolor);
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="50" y="0" rx="20" ry="20" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
}

class Triangle extends Shape {
    constructor(text, color, textcolor) {
        super(text, color, textcolor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
}


module.exports = {
    Circle, 
    Square, 
    Triangle
}