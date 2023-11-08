import React, { useState } from "react";


const Form = () => {
    const [toDo, setToDo] = useState('');
    const [list, setList] = useState([]);
    // const [mouseOver, setMouseOver] = useState(null);

    const handleList = (e) => {
        setToDo(e.target.value)
    }

    const handleKeyPress = (e) => {

        if (e.key === "Enter" && toDo.trim() !== '') {
            setList([...list, toDo]);
            setToDo('');
        }
    };

    /* const handleMouseOver = (index) => {
        setMouseOver(index);
    }; */

    const handleDelete = (index) => {
        setList(list.filter((id, element) => {
            return index !== element
        }))
    };

    return (
        <div className="container">
            <h1>To Do List</h1>
            <ul className="list-group" aria-labelledby="addToDo">
                <li className="list-group-item">
                    <input
                        type="text"
                        htmlFor=""
                        value={toDo}
                        className="form-control p-0"
                        style={{ border: "none" }}
                        onChange={handleList}
                        onKeyDown={handleKeyPress}
                        placeholder="Añadir tarea"
                        aria-label="ToDo"
                        aria-describedby="addToDo" >
                    </input>
                </li>
                
                {list.map((item, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center hidden-icon"
                        /* onMouseOver={() => handleMouseOver(index)} */ >
                        {item}
                        {/* {mouseOver === index && ( */}
                            <span className="fa fa-times"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleDelete(index)}
                            />
                        {/* )} */}
                    </li>
                ))}
            </ul>
            <div className="text-start">{list.length === 0 ? 'No hay tareas, añadir tareas' : list.length + ' item left'}</div>
        </div>
    );
};

export default Form;