"use strict";
class Task {
    title;
    description;
    completed = false;
    _createdBy;
    constructor(title, description, createdBy) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    get createdBy() {
        return this._createdBy;
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
    getDetails() {
        return `"Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`;
    }
    static createSampleTasks() {
        return [
            new Task('Do laundry', 'fold clean clothes', 'Teddy'),
            new Task('Wash dishes', 'clean the sink', 'Didi')
        ];
    }
}
const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());
//# sourceMappingURL=12-task-tracker.js.map