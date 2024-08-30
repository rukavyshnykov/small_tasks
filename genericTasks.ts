///1

const identity = <T>(arg: T): T => {
    return arg
}

///2

class Box<T> {
    val: T

    constructor(val) {
        this.val = val
    }

    getVal(): T {
        return this.val
    } 

    setVal(arg: T): void {
        this.val = arg
    }
}

///3

const merge = <T, K>(obj1: T, obj2: K): T & K => {
    return {...obj1, ...obj2}
}

///4

interface Repository<T> {
    get(item: T): T
    add()
}

///5

const pluck = () => {
    
}