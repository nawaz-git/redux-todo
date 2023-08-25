import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/features/todoSlice'

const AddTodo = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')

    const handleAddTodo = () => {
        dispatch(addTodo(todo))
        setTodo('')
    }

    return (
        <div className='flex flex-row align-middle'>
            <input
                value={todo}
                onChange={(e) => {
                    setTodo(e.target.value)
                }}
                className='w-full mr-8 h-12 font-mono bg-slate-700 border-none outline-none text-slate-200 my-8 p-3 rounded-md font-semibold' />
            <button
                onClick={handleAddTodo}
                className='w-1/3 h-12 bg-slate-200 font-mono text-slate-900 font-bold my-8 p-3 rounded-md'>Add Todo</button>
        </div>
    )
}

export default AddTodo