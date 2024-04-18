function sprintReview(input) {
    const entryLines = Number(input.shift());
    const entries = input.slice(0, entryLines);
    const commands = input.slice(entryLines);
    
    const board = entries.reduce((acc, entry) => {
      const [assignee, taskId, title, status, points] = entry.split(':');

      if (!acc[assignee]) {
        acc[assignee] = [];
      }
      acc[assignee].push({ taskId, title, status, points: Number(points) });
      return acc;
    }, {});

    const commandRunner = {
      'Change Status': changeStatus,
      'Add New': addNew,
      'Remove Task': removeTask
      };  

    commands.forEach((command) => {
      const [commandType,...rest] = command.split(':');
      commandRunner[commandType](...rest);
    });


    const todoTaskPoints = calculateTotalStatusPoints('ToDo');
    const inProgressTaskPoints = calculateTotalStatusPoints('In Progress');    
    const codeReviewTaskPoints = calculateTotalStatusPoints('Code Review');
    const doneTaskPoints = calculateTotalStatusPoints('Done');

    console.log(`ToDo: ${todoTaskPoints}pts`);
    console.log(`In Progress: ${inProgressTaskPoints}pts`);
    console.log(`Code Review: ${codeReviewTaskPoints}pts`);
    console.log(`Done Points: ${doneTaskPoints}pts`);

    if (doneTaskPoints >= todoTaskPoints + inProgressTaskPoints + codeReviewTaskPoints) {
      console.log(`Sprint was successful!`);
    } else {
      console.log(`Sprint was unsuccessful...`);
    }   

    
    function changeStatus(assignee, taskId, newStatus) {
      if (!board[assignee]) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
        return;
      }
      const task = board[assignee].find((t) => t.taskId === taskId);
      if (task) {
        task.status = newStatus;
      } else {
        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
        return
      }
    }
    function addNew(assignee, taskId, title, status, points) {
      if (!board[assignee]) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
        return;
      }
      board[assignee].push({ taskId, title, status, points: Number(points) });
    }
    function removeTask(assignee, index) {
      if (!board[assignee]) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
        return;
      }
      if (index < 0 || index >= board[assignee].length) {
        console.log(`Index is out of range!`);
        return;
      } else {
        board[assignee].splice(index, 1);
      }      
    }

    function calculateTotalStatusPoints(status) {
      return Object.values(board).reduce((acc, curr) => {
        const boardTotal = curr
        .filter((t) => t.status === status)
        .reduce((taskTotal, task) => taskTotal + task.points, 0);

        return acc + boardTotal;
      }, 0);
      
    }

    

    console.log(JSON.stringify(board, null, 2));

}

sprintReview([
  "5",
  "Kiril:BOP-1209:Fix Minor Bug: ToDo: 3",
  "Mariya:BOP-1210:Fix Major Bug: In Progress: 3",
  "Peter:BOP-1211:POC:Code Review: 5",
  "Georgi:BOP-1212:Investigation Task: Done: 2",
  "Mariya:BOP-1213:New Account Page: In Progress: 13",
  "Add New:Kiril:BOP-1217:Add Info Page: In Progress: 5",
  "Change Status:Peter:BOP1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
]);
