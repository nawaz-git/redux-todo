import { useDispatch, useSelector } from 'react-redux'
import { State } from '../models/State'
import { Todo } from '../models/Todo'
import { removeTodo, changeStatus } from '../store/features/todoSlice'

const Todos = () => {
    const todos = useSelector((state: State) => state.todos)
    const dispatch = useDispatch()

    const handleRemoveTodo = (id: string) => {
        dispatch(removeTodo(id))
    }
    return <>
        {
            todos.map((todo: Todo) => {
                return <div
                    key={todo.id}
                    onClick={() => {
                        dispatch(changeStatus(todo.id))
                    }}
                    className={`flex mb-4 flex-row cursor-pointer rounded-md justify-between items-center p-4  ${todo.status ? 'bg-slate-700' : 'bg-slate-900'}`}>
                    <span className={`font-semibold text-slate-200 ${todo.status ? 'line-through' : ''}`} >
                        {todo.value}
                    </span>
                    <button
                        className='bg-white px-4 py-2 rounded-md text-slate-900'
                        onClick={() => {
                            handleRemoveTodo(todo.id)
                        }}
                    >
                        Delete
                    </button>
                </div >
            })
        }
    </>

}

export default Todos