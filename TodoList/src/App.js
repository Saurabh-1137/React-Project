
import { useState } from 'react';
import './App.css';

function App() {
  const [todo,setTodo]=useState([]);
  const[ temp,setTemp]=useState("");
  const [pendingTask,setPendingTask]=useState(0);
 
const TotalTask=todo.length;

  const handleClick=()=>{
    if(temp!=="")
      {
        setTodo([...todo,temp]);
      }
    
  }
const handleDelete=(indexValue)=>{
   const newTodo= todo.filter((_,index)=>index!==indexValue);
   setTodo(newTodo);
   console.log(todo.length);
   
   if(todo.length===1)
    {
      setPendingTask(0)
    }
}

// if(pendingTask===TotalTask && TotalTask!==0)
//   {

//     alert("congratulations you have completed your's all task")
//   }
const handleCheckbox=(e)=>{
  if(e.target.checked )
    {
      setPendingTask(pendingTask+1)   
     }else{
      setPendingTask(pendingTask-1) 
    }

}
// Do Exercise 
//  Do One React Project 
//  Revision 

// console.log(TotalTask)
  return (
    <div className="App">
    <h1 style={{color:"red"}}> !!! Welcome To Todo List !!!</h1>
    <input type="text" onChange={(e)=>{setTemp(e.target.value)}}></input>
    <button onClick={handleClick}>Add</button>
    <div>
      <h3>Todo List</h3>
{
      todo.map((item,index)=>{
        return(
          <div className='table'>
          <tr key={index}>
           <input  onChange={handleCheckbox} type='checkbox'></input>
           <span style={{}}>   {item}  </span><button onClick={(e)=>handleDelete(index)}>Delete</button>
           <br />
           </tr>
           </div>
        )
      })
}
          <h2> Task Remainig:{pendingTask}/{TotalTask} </h2>
       
    </div>

    </div>
  );
}

export default App;
