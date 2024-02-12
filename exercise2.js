var Tasks = [];
function addTask(task) {
    var length = Tasks.push(task);
    console.log(task + " has been added to our Task List!");
    return length;
}
addTask("Eat!");
