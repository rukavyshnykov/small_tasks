///1
function DecoratorName(attr: any) {
    return function _DecoratorName<T extends {new(...args: any[]): {}}>(constr: T){
        return class extends constr {
            constructor(...args: any[]) {
            super(...args)
            console.log('Did something after the original constructor!')
            console.log('Here is my attribute!', attr.attrName)
            }
        }
    }
}

///2
function loggedMethod(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = Date.now();
        try {
            const result = await originalMethod.apply(this, args);
            return result;
        } finally {
            const end = Date.now();
            console.log(`${String(propertyKey)} executed in ${end - start}ms`);
        }
    };
}

class MathOperations {
    constructor() {}

    @loggedMethod
    async check() {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }
}

const mo = new MathOperations();
mo.check().then(() => {
    console.log('Method execution completed.');
});

///3

function NonEmpty(target: any, propertyKey: string) {
    // Define a private property to hold the actual value
    let value: string = '';

    // Create a getter for the property
    const getter = () => value;

    // Create a setter for the property with validation
    const setter = (newValue: string) => {
        if (typeof newValue !== 'string' || newValue.trim() === '') {
            throw new Error(`${propertyKey} must be a non-empty string.`);
        }
        value = newValue;
    };

    // Define the property with the getter and setter
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}


///4
function LogArguments(target: any, propertyKey: string | symbol, parameterIndex: number) {
    // Save a reference to the original method
    const originalMethod = target[propertyKey];

    // Create a new method that wraps the original method
    target[propertyKey] = function (...args: any[]) {
        // Log the arguments
        console.log(`Method ${String(propertyKey)} called with arguments: ${args.map(arg => JSON.stringify(arg)).join(', ')}`);
        
        // Call the original method with the original arguments
        return originalMethod.apply(this, args);
    };
}

///5
import 'reflect-metadata';

// Define the method decorator
function LogTypes(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        // Retrieve parameter types
        const paramTypes = Reflect.getMetadata('design:paramtypes', target, propertyKey) || [];
        // Retrieve return type
        const returnType = Reflect.getMetadata('design:returntype', target, propertyKey) || 'unknown';

        // Log parameter types
        console.log(`Method ${String(propertyKey)} parameter types: ${paramTypes.map((type: Function) => type.name).join(', ')}`);
        // Log return type
        console.log(`Method ${String(propertyKey)} return type: ${returnType.name}`);

        // Call the original method with the original arguments
        return originalMethod.apply(this, args);
    };
}
