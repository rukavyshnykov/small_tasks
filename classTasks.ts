///1

class Car1 {
    made: string;
    model: string

    constructor(made, model) {
        this.made = made
        this.model = model
    }
    
    get details() {
        return `Car was made ${this.made}, model: ${this.model}`
    }
}

//2222

class Rectangle {
    width: number
    height: number

    constructor(width, height) {
        this.width = width
        this.height = height
    }
    
    get area() {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side)
    }
}

///3
class Person1 {
    private ssn: string

    constructor(ssn) {
        this.ssn = ssn
    }

    getSsn() {
        return this.ssn
    }
}

///4

abstract class Shape {
    abstract getArea(): number
}

class Circle extends Shape {
    private radius: number

    constructor(radius: number) {
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }
}

class Triangle extends Shape {
    

    constructor(radius: number) {
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }
}