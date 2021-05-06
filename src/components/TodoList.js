import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, setTodos, filteredTodos}) {
    
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} filteredTodos={filteredTodos}/>
                ))}
                
                
            </ul>
        </div>
    )
}
