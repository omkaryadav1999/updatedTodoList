import React, { useState } from "react"

function Todolist() {
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState([])
    const [index, setIndex] = useState("")
    const [toggle, setToggle] = useState(true)

    const submitData = () => {
        if (!input) {
            alert("ypur name")
        } else if (input && !toggle) {
            setTodo(todo.map((value) => {
                if (value.id === index) {
                    return { ...value, name: input }
                }
                return value
            }))
            setInput("")
            setToggle(true)

        } else {
            const todolist = { id: new Date().getTime().toString(), name: input }
            setTodo([...todo, todolist])
            setInput("")

        }

    }
    const deletetodo = (id) => {
        setTodo(todo.filter((value) => {
            return value.id !== id
        }))
    }

    const edit = (index) => {
        const findTodo = todo.find((value) => {
            return value.id === index
        })
        setIndex(findTodo.id)
        setInput(findTodo.name)
        setToggle(false)
    }

    const removeall = () => {
        setTodo([])
    }
    return (
        <div className="Container">
            <div className="inputFild">
                <h1>Todo list</h1>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />&nbsp;
                <button onClick={submitData}>{toggle ? "submit" : "Update"}</button>
            </div>
            {todo.map((value) => {
                return <div key={value.id} className="todocontainer">{<p>{value.name}</p>}
                    <div className="btnContainr">
                        <div className="edit">
                            <button onClick={() => { edit(value.id) }}><i className="bi bi-pencil"></i></button>
                        </div>
                        <div className="delete">
                            <button onClick={() => { deletetodo(value.id) }}><i className="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>
            })}

            {todo.length > 0 ? <button onClick={removeall} className="clear">clear</button> : null}

        </div>
    )
}

export default Todolist