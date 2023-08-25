import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className='w-full flex flex-row justify-center align-middle bg-gradient-to-tl from-slate-800 to-slate-900 h-screen'>
      <div className="w-1/2 flex flex-col bg-slate-800 m-10 rounded-lg p-6">
        <h1 className='text-5xl font-bold font-mono text-center text-slate-200'>TODOS</h1>
        <AddTodo />
        <Todos />
      </div>
    </div >

  )
}

export default App
