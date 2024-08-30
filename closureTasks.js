///1
function createCounter() {
    let i = 0
    return function cC() {
        i++
        return i
    }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

///2
unction createPerson(initName) {
    let name = initName; 

    return {
        getName() {
            return name;
        },
        setName(newName) {
            name = newName;
        }
    };
}

const person = createPerson('John');
console.log(person.getName()); 
person.setName('Jane');
console.log(person.getName()); 
///3

function makeMultiplier(mult) {
    let x = mult
    return (numb) => {
        return numb*x
    }
}

const double = makeMultiplier(2);
console.log(double(5)); // 10
const triple = makeMultiplier(3);
console.log(triple(5)); // 15

///4

function setupClickHandler(btn, msg) {
    btn.addEventListener('click', () => {
        alert(msg)
    })
}

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);
setupClickHandler(button, 'Button was clicked!');
button.click(); // Alerts: 'Button was clicked!'

///5

function once(fn) {
    let hasBeenCalled = false; 

    return function() {
        if (!hasBeenCalled) {
            fn(); 
            hasBeenCalled = true; 
        }
    };
}

const initialize = () => console.log('Initialized!');
const initializeOnce = once(initialize);