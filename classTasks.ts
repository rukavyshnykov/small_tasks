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
    side1: number
    side2: number
    side3: number

    constructor(side1: number, side2: number, side3: number) {
        super()
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    getArea(): number {
        const halfPer = (this.side1 + this.side2 + this.side3) / 2
        const formula = halfPer*(halfPer - this.side1)*(halfPer - this.side2)*(halfPer - this.side3)
        return Math.sqrt(formula)
    }
}

class Database {
    private static instace: Database

    private constructor() {}

    public static getInstance(): Database {
        if(!Database.instace) {
            Database.instace = new Database
        }

        return Database.instace
    }

    public connect(): void {
        console.log("Connected to the database.");
    }
}