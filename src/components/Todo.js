import React from 'react'

export default function Todo({ todo, todos, setTodos, filteredTodos }) {
    
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`} >{todo.title}</li>
            <button  className="complete-btn" onClick={() => {
                setTodos(todos.map(ts => {
                    if(ts.id === todo.id){
                        return {...ts, completed: !todo.completed}
                    }
                    return ts;
                }))
            }}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => {
                setTodos(todos.filter(ts => ts.id !== todo.id))
            }}>
                <i className="fas fa-trash"></i>
            </button>
            <button  className="move-btn" onClick={() => {
                    let index = todos.findIndex(t => t.id === todo.id)
                    let indexFiltered = filteredTodos.findIndex(t => t.id === todo.id)
                    
                    if(indexFiltered > 0 && filteredTodos.length > 1){
                            
                            let prevItemIndex = todos.findIndex(t => t.id === filteredTodos[indexFiltered-1].id)
                            let prevItem = todos[prevItemIndex]
                            let data = [...todos];
                        
                            let temp = data[prevItemIndex];
                            data[prevItemIndex] = data[index];
                            data[index] = temp;
                        
                            setTodos(data)
                        
                    }
                    
                }
            }>
                <i className="fas fa-angle-up"></i>
            </button>
            <button className="move-btn right" onClick={() => {
                    let index = todos.findIndex(t => t.id === todo.id)
                    let indexFiltered = filteredTodos.findIndex(t => t.id === todo.id)
                    if(indexFiltered < filteredTodos.length-1 && filteredTodos.length > 1){
                      
                        
                        let prevItemIndex = todos.findIndex(t => t.id === filteredTodos[indexFiltered+1].id)
                        let prevItem = todos[prevItemIndex]
                        let data = [...todos];
                    
                        let temp = data[prevItemIndex];
                        data[prevItemIndex] = data[index];
                        data[index] = temp;
                    
                        setTodos(data)
                        
                    }
                    
                }
            }>
                <i className="fas fa-angle-down"></i>
            </button>
            
        </div>
    )
}
