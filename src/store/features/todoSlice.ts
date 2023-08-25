import { createSlice, nanoid } from '@reduxjs/toolkit'
import { Todo } from '../../models/Todo'

const initialState = {
    todos: [] as Todo[]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                value: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        changeStatus: (state, action) => {
            let todo = state.todos.find((e: Todo) => e.id == action.payload) as Todo
            todo.status = !todo?.status
        }
    }
})


export const { addTodo, removeTodo, changeStatus } = todoSlice.actions

export default todoSlice.reducer