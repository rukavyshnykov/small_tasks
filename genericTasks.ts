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
    get(id: string): T | undefined
    add(item: T): void
}

type Item = {
    id: string
    address: string
}
 
class InMemoryRepository implements Repository<Item> {
    private items: Item[] = []

    constructor(item: Item) {
        this.items.push(item)
    }

    get(id: string) {
        return this.items.find(item => item.id === id)
    }

    add(item: Item) {
        this.items.push(item)
    }
}

///5

const pluck = <T>(arr: T[], key: keyof T): T[keyof T][]  => {
    return arr.map(item => item[key])
}