import React, {useState} from 'react'
import axios from 'axios'

export default function LoadAPI({todos, setTodos, amount, setAmount, todosLoaded, setTodosLoaded}) {
    
    const loadTodos = () => {axios('https://jsonplaceholder.typicode.com/todos/'+Math.floor(Math.random()*100)).then(res => {
            
        setTodos([
            ...todos, {
                title: res.data.title,
                completed: res.data.completed,
                id: Math.random() * 1000
            }
        ])
        
    })}
    return (
        <div>
            <button className="btn btn-primary" onClick={loadTodos}>Load a random todo from API</button>
        </div>
    )
}
