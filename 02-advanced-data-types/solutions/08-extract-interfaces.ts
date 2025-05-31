export {}; 
type TaskStatus = 'Logged' | 'Started' | 'InProgress' | 'Done'
interface  User { username: string, signupDate: Date};
type Task = {
    status: TaskStatus,
    title: string,
    daysRequired: number,
    assignedTo: User | undefined,
    changeStatus(newStatus: TaskStatus ): void
    }



function assignTask(user: User , task: Task){

}