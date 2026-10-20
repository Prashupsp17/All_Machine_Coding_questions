import {useState,useEffect} from "react";

const TodoList = () => {
  const [todo,setTodo] = useState("");
  const [todoList,setTodoList] = useState([]);
  console.log(todoList);

  const handleTodoList = () => {
    if(!todo || todo.trim() === ""){
        alert("Please enter todo");
        return;
    } 

    const obj = {
        id:Date.now,
        todoName:todo,
        status:"pending",
    }
    setTodoList((prev) => [...prev,obj]);
    setTodo("");
  }

  const handleKeyDown = (e) => {
    
    if(e.key === "Enter"){
        if(todo.trim() === ""){
        alert("Please enter todo");
        return;
    }
        const obj = {
            id:Date.now(),
            todoName:todo,
            status:"pending",
        }
        setTodoList((prev) => [...prev,obj]);
        setTodo("");
    }
  
  }

  const handleDelete = (id) => {
    const updatedData = todoList.filter((item,i) => item.id !== id);
    setTodoList(updatedData);
  }

  const handleClose = (id) => {
        const updatedData = todoList.map((item,i) => {
            console.log(item.id , id);
            if(item.id === Number(id)){
                  return{
                    ...item,
                    status:"completed"
                  }

            }
          return item;
        })
        setTodoList(updatedData);
  }

  return(
    <div>
        <h6>TodoList</h6>
        <input value={todo} onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => setTodo(e.target.value)} /><button onClick={handleTodoList}>Add Todo</button>
        {
            todoList.length > 0 
            ?
            <div>
             {
                todoList.map((item,i) => {
                    return(
                        <div style={{display:"flex",gap:"10px"}}>
                            <input type="checkbox" value={item.id} onChange={(e) => handleClose(e.target.value)}/>
                            <div>{item.id}</div>
                            <div style={{textDecoration:item.status === "completed" ?  "line-through" : ""}}>{item.todoName}</div>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    )
                })
             }
             </div>
            :
            <div>No Data available</div>
        }
    </div>
  )
}

export default TodoList;