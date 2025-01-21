const todoName = prompt("What would you like to name your to-do list?");
console.log(`NAMA TODO LIST : ${todoName} \n*************`);
const todos = [];

while(true){
    let input = prompt("Enter the keyword");
    if(input === 'new'){
        newTodo = prompt('Enter new to-do list');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
        console.log('**********');
    }else if(input === 'list'){
        for(let todo of todos){
            console.log(todo);
        }
        console.log('**********');
    }else if(input === 'delete'){
        indexToDelete = prompt('Which activity do you want to delete? (enter the index, enter -1 to back)\n ' + todos);
        if(indexToDelete === '-1') {
            continue;
        }else{
            todos.splice(indexToDelete, 1);
            console.log(`Activity ${todos[indexToDelete]} has been deleted`);
            console.log('**********');
        }
        
    }else if(input === 'quit'){
        console.log('OK, you quit!');
        console.log('**********');
        break;
    }
}
