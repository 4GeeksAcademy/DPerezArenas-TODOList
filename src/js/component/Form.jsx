import React, { useState } from "react";

const Form = () => {

    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);


    return (
        <div className="container-fluid">
            <ul className="list-group text-center">
                <h1>Mis Tareas por hacer</h1>
                <li className="list-group-item">
                    <input
                        className="border-0 form-control p-0"
                        type="text"
                        placeholder="¿Qué necesitas hacer?"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        // onClick={e => setInputValue(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                setTodos(todos.concat(inputValue))
                                setInputValue('');
                            }
                        }}
                    />
                </li>
                {todos.map((item, index) =>(
                    <li className="list-group-item d-flex justify-content-between align-items-center hidden-icon" key={index}>
                        {item} <span className="fa fa-times"
                            style={{ cursor: "pointer" }}
                            onClick={() => setTodos(todos.filter((t, currentIndex) => index !== currentIndex))}
                        />
                    </li>
                ))}
                
            </ul>
            <div>{todos.length === 0 ? 'No hay tareas, añadir tareas' : todos.length === 1 ? '1 Tarea por hacer' : todos.length + ' Tareas por hacer'}</div>

            <button className="btn btn-success mt-3">Añadir tarea</button>
        </div>
    )

}

export default Form;