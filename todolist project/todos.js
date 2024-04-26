let task = prompt("what do you want to do?");
const todos  = [ 'be happy','eat healthy','exercise'];

while( task!=="quit" && task!=='q') {
    if (task == "list"){
        console.log('Your Tasks are:');
        for(i=0;i<todos.length;i++)
        {
            console.log(`${i}-${todos[i]}`)
        }}
    else if(task ==='new'){
        
        const newtodo=prompt( "Enter your new task:" );
        todos.push(newtodo);
        console.log(`your new task "${newtodo}" has been added`);
    }
    else if(task ==='delete')
    {
       const indexsrt = prompt('what index are you trying to delete');
        const index = parseInt(indexsrt);
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
      console.log(`okay, deleted ${deleted[0]} from the list.`);
        }
        else{
            console.log('unknown index');
        }
      

    }

     task = prompt("what do you want to do?")
    }
console.log("you quit the app!!!")