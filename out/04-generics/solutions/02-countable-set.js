"use strict";
class CountedSet {
    items = new Map();
    add(item) {
        const count = this.items.get(item) || 0;
        this.items.set(item, count + 1);
    }
    remove(item) {
        const count = this.items.get(item) || 0;
        if (count > 0) {
            this.items.set(item, count - 1);
        }
    }
    contains(item) {
        const count = this.items.get(item) || 0;
        return count > 0;
    }
    getNumberOfCopies(item) {
        const count = this.items.get(item) || 0;
        return count;
    }
}
let countedSet = new CountedSet();
countedSet.add('test');
countedSet.add('test');
console.log(countedSet.contains('test'));
console.log(countedSet.getNumberOfCopies('test'));
countedSet.remove('test');
countedSet.remove('test');
countedSet.remove('test');
console.log(countedSet.getNumberOfCopies('test'));
console.log(countedSet.contains('test'));
//# sourceMappingURL=02-countable-set.js.map