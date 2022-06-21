import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What are the plans for the Day</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
    
// {/* <div class="list">
        
//     <div class="left">
//         <input class="srch" type="search" id="srch" placeholder="Search"/> 
//         <img src={search} id="srch-icon"/>
//         <div class="circle">TM</div>
//         <div class="names">Tebatso Monicca</div>
//             <div class="'views">
//                 <input type ="view" name="" value="Today"/>
//                 <input class ="see" name="" value="Important"/>
//                 <input class ="plan" name="" value="Planned"/>
//                 <input class ="all" name="" value="All"/> 
//             </div>
//             <hr color="black"/>
//              <input class ="add" name="" value="New Task"/>
//         </div>
        
            
    
//     <div class="right">
        
//         <img src={img} id={menu}/>
//         <div class="details">
//             <input class ="figma" name="" value="Get done with Figma Designs"/>
//             <input class ="reg" name="" value="Follow up with IDC Registrations"/>
//             <input class ="code" name="" value="Start with Coding your Figma Designs"/>
//         </div>
       
//         <div class="fold">Future</div>
//         <input class ="task" name="" value="New Task"/>
//         {/* <img src="../Todo/pictures/add_FILL0_wght400_GRAD0_opsz48.svg " id="add" */}
       
//     </div>
    
    
// </div> */}
  );
}

export default TodoList;