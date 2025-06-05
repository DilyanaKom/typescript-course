class Task {
    title: string;
    description: string;
    completed: boolean = false;
    private _createdBy: string;

    constructor(title: string, description: string, createdBy: string){
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }

    get createdBy(){
        return this._createdBy;
    }
    toggleStatus(): void{
        this.completed = ! this.completed;
    }
    getDetails(): string {
        return `"Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending' }`
    }
    static createSampleTasks(): Task[]{
        return [
            new Task('Do laundry', 'fold clean clothes', 'Teddy'),
            new Task('Wash dishes', 'clean the sink', 'Didi')
        ]
    }


}

const task1 = new Task("Complete homework",

"Finish math exercises", "Charlie");

task1.toggleStatus();

console.log(task1.getDetails());