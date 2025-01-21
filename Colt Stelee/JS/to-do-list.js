function startTodoApp() {
    const todoName = prompt("What would you like to name your to-do list?");
    console.log(`NAMA TODO LIST : ${todoName} \n*************`);
    const todos = [];
  
    while (true) {
      let input = prompt("Enter the keyword");
      if (input === 'new') {
        const newTodo = prompt('Enter new to-do list');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
        console.log('**********');
      } else if (input === 'list') {
        console.log('Your Todo List:');
        for (let todo of todos) {
          console.log(todo);
        }
        console.log('**********');
      } else if (input === 'delete') {
        const indexToDelete = prompt(
          'Which activity do you want to delete? (enter the index, enter -1 to back)\n' +
          todos.map((todo, i) => `${i} : ${todo}`).join('\n')
        );
        if (indexToDelete === '-1') {
          continue;
        } else if (indexToDelete >= 0 && indexToDelete < todos.length) {
          const deletedTodo = todos.splice(indexToDelete, 1);
          console.log(`Activity "${deletedTodo}" has been deleted`);
          console.log('**********');
        } else {
          console.log('Invalid index!');
        }
      } else if (input === 'quit') {
        console.log('OK, you quit!');
        console.log('**********');
        break;
      } else {
        console.log('Invalid input. Please try again.');
      }
    }
  }
  