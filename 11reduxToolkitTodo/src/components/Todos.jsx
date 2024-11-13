import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    // State for tracking which todo is being edited
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')

    const handleEditClick = (todo) => {
        setEditingId(todo.id) // Track which todo is being edited
        setEditText(todo.text)
    }

    const handleUpdate = (id) => {
        if (!editText.trim()) {
            alert('Cannot be empty')
            return
        }
        dispatch(updateTodo({ id, text: editText }))
        setEditingId(null) // Reset to indicate no todo is being edited
        setEditText('') // Clear the edit text
    }

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editingId === todo.id ? ( // Check if this todo is being edited
                            <>
                                <input
                                    className="bg-gray-800 text-white rounded border border-gray-700 px-2"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    autoFocus
                                />
                                <button
                                    onClick={() => handleUpdate(todo.id)}
                                    className="ml-2 text-white bg-green-500 py-1 px-3 rounded hover:bg-green-600"
                                >
                                    Update
                                </button>
                            </>
                        ) : (
                            <>
                                <div className='text-white'>{todo.text}</div>
                                <div>
                                    <button
                                        onClick={() => handleEditClick(todo)}
                                        className="text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="ml-2 text-white bg-red-500 py-1 px-3 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos
