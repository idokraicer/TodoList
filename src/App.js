import React, { useState, useEffect } from 'react';
import './App.css'; 
//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadAPI from './components/LoadAPI';

function App() {
    
    //State Stuff
    
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [filteredTodos, setFilteredTodos] = useState([])
    const [status, setStatus] = useState("all");
    //RUN ONCE when the app start
    
    //USE EFFECT
    useEffect(() => {
      getLocalTodos()
    }, [])


    useEffect(() => {
      setFilteredTodos(filterTodos)
      saveLocalTodos();
    }, [status, todos])

    
    
    

    //Save to Local
    let filterTodos = () => {
        switch (status){
          case 'completed': return todos.filter((item) => item.completed === true)
            break;
          case 'uncompleted': return todos.filter((item) => item.completed === false)
            break;
          case 'all': return todos;
            break;
        }
    }
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]))
      } else {
        setTodos(JSON.parse(localStorage.getItem('todos')))
      } 
    }
    return ( 
      <div className = "App" >
        <header>
          <h1>Ido's Todo List</h1>
        </header>
        <Form 
        inputText = {inputText}
        setInputText = {setInputText}
        todos={todos}
        setTodos={setTodos}
        status= {status} 
        setStatus={setStatus}
        filteredTodos={filteredTodos}
        />
        <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        setTodos={setTodos} 
          />
        <LoadAPI 
        todos={todos}
        setTodos={setTodos}
        />
      </div>
      
    );
}

export default App;