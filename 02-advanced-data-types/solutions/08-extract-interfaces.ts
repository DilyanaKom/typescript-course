export {}; 
type TaskStatus = 'Logged' | 'Started' | 'InProgress' | 'Done'
type User = { username: string, signupDate: Date};
type Task = {
    status: TaskStatus,
    title: string,
    daysRequired: number,
    assignedTo: {
        username: string,
        signupDate: Date
    } | undefined,
    changeStatus(newStatus: TaskStatus ): void
    }



function assignTask(user: User , task: ){

}