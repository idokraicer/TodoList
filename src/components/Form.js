import React from 'react'

export default function Form({inputText, setInputText, todos, setTodos, status, setStatus, filteredTodos }) {

    return (
        <div>
            <form>
                <input type="text" className="todo-input" onChange={(e) => setInputText(e.target.value) } value={inputText}/>
                <button className="todo-button" type="submit" onClick={(e) => {
                    e.preventDefault();
                    setTodos([
                        ...todos, {
                            title: inputText,
                            completed: false,
                            id: Math.random() * 1000
                        }
                    ])
                    setInputText("");
                }}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo"  onChange={ (e) => {
                        e.preventDefault()
                        setStatus(e.target.value)} }>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
