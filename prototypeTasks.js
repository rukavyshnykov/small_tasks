///1
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype = {
    introduce() {
        return `Name: ${this.name}, age: ${this.age}`
    }
}

function Student(name, age, grade) {
    Person.call(this, name, age)
    this.grade = grade
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.study = function() {
    return `Name: ${this.name}, grade: ${this.grade}`
}

///2222

function checkProperty(obj, propertyName) {
    if (obj.hasOwnProperty(propertyName)) {
        return `${propertyName} is an own property`;
    } else if (propertyName in obj) {
        return `${propertyName} is inherited`;
    } else {
        return `${propertyName} does not exist`;
    }
}

///3

Array.prototype.sum = function() {
    return this.reduce((a,b) => a + b)
}

///4

const animal = {
    speak() {
        console.log('word')
    }
}

const dog = Object.create(animal)

dog.bark = function() {
    console.log('bark')
}

///5

const vehicle = {}
const car = {}
Object.setPrototypeOf(car, vehicle)

///6
function Shape() {
}

Shape.prototype.getArea = function() {
    return 0;
};

function Circle(radius) {
    Shape.call(this);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2)
};

///7

function Vehicle() {
  }
  
  Vehicle.prototype.move = function() {
    console.log("The vehicle is moving.");
  };
  
  function Car() {
    Vehicle.call(this); 
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  Car.prototype.drive = function() {
    console.log("The car is driving.");
  };
  
  function ElectricCar() {
    Car.call(this); 
  }
  
  ElectricCar.prototype = Object.create(Car.prototype);
  ElectricCar.prototype.constructor = ElectricCar;
  
  ElectricCar.prototype.charge = function() {
    console.log("The electric car is charging.");
  };
  
  const myElectricCar = new ElectricCar();

  ///8


function Book(title, author) {
    this.title = title;
    this.author = author;
}


Book.prototype.getDetails = function() {
    return `${this.title} by ${this.author}`;
};


function EBook(title, author, format) {
    Book.call(this, title, author); 
    this.format = format;
}


EBook.prototype = Object.create(Book.prototype);
EBook.prototype.constructor = EBook;


EBook.prototype.getDetails = function() {
    return `${Book.prototype.getDetails.call(this)} (Format: ${this.format})`;
};


function AudioBook(title, author, format, duration, voiceActor) {
    Book.call(this, title, author); 
    this.format = format;
    this.duration = duration;
    this.voiceActor = voiceActor;
}


AudioBook.prototype = Object.create(Book.prototype);
AudioBook.prototype.constructor = AudioBook;


AudioBook.prototype.getDetails = function() {
    return `${Book.prototype.getDetails.call(this)} (Format: ${this.format}, Duration: ${this.duration} hours, Voice Actor: ${this.voiceActor})`;
};

function ComicBook(title, author, format, illustrator) {
    Book.call(this, title, author); 
    this.format = format;
    this.illustrator = illustrator;
}

ComicBook.prototype = Object.create(Book.prototype);
ComicBook.prototype.constructor = ComicBook;

ComicBook.prototype.getDetails = function() {
    return `${Book.prototype.getDetails.call(this)} (Format: ${this.format}, Illustrator: ${this.illustrator})`;
};

///9

function Gadget(brand) {
    this.brand = brand;
}

Gadget.prototype.getDetails = function() {
    return `Brand: ${this.brand}`;
};

function Phone(brand, model) {
    Gadget.call(this, brand); 
    this.model = model;
}

Phone.prototype = Object.create(Gadget.prototype);
Phone.prototype.constructor = Phone;

Phone.prototype.getDetails = function() {
    return `${Gadget.prototype.getDetails.call(this)}, Model: ${this.model}`;
};

function Tablet(brand, screenSize) {
    Gadget.call(this, brand); 
    this.screenSize = screenSize;
}

Tablet.prototype = Object.create(Gadget.prototype);
Tablet.prototype.constructor = Tablet;

Tablet.prototype.getDetails = function() {
    return `${Gadget.prototype.getDetails.call(this)}, Screen Size: ${this.screenSize} inches`;
};

const myPhone = new Phone('Apple', 'iPhone 14');
const myTablet = new Tablet('Samsung', 10.4);

console.log(myPhone instanceof Phone); // true
console.log(myPhone instanceof Gadget); // true
console.log(myTablet instanceof Tablet); // true
console.log(myTablet instanceof Gadget); // true

console.log(myPhone instanceof Tablet); // false
console.log(myTablet instanceof Phone); // false

///10

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

function Dog(name, breed) {
    Animal.call(this, name); 
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    return `${this.name} barks`;
};

const myDog = new Dog('Rex', 'ovcharka');

console.log(myDog.speak()); 
