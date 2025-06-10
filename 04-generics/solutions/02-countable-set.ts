interface CountableSet<T> {
add(item:T): void;
remove(item: T): void;
contains(item: T): boolean;
getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T>{
    items: Map<T, number> = new Map();
    add(item: T){
        const count = this.items.get(item) || 0;
        this.items.set(item, count + 1)
    }
    remove(item: T): void {
        const count = this.items.get(item) || 0;
        if(count > 0){
           this.items.set(item, count - 1) 
        }

    }
    contains(item: T): boolean {
         const count = this.items.get(item) || 0;
        return count > 0;
    }

    getNumberOfCopies(item: T): number {
        const count = this.items.get(item) || 0;
        return count; 
    }
}

let countedSet = new CountedSet<string>();

countedSet.add('test');

countedSet.add('test');

console.log(countedSet.contains('test'));

console.log(countedSet.getNumberOfCopies('test'));

countedSet.remove('test')

countedSet.remove('test')

countedSet.remove('test')

console.log(countedSet.getNumberOfCopies('test'));

console.log(countedSet.contains('test'));

// codesCounterSet.add(205); //TS Error

// codesCounterSet.getNumberOfCopies(350); //TS Error