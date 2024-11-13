import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id!== action.payload)
        },
        // OR
        // removeTodo: (state, action) => {
        //     const index = state.todos.findIndex(todo => todo.id === action.payload);
        //     if (index !== -1) {
        //         state.todos.splice(index, 1); // Remove the todo at the found index
        //     }
        // }
        updateTodo: (state,action) => {
            const updatedTodo = state.todos.find(todo => todo.id === action.payload.id)
            console.log(updatedTodo);
            if(updatedTodo){
                updatedTodo.text = action.payload.text
                console.log(JSON.parse(JSON.stringify(updatedTodo)));
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer