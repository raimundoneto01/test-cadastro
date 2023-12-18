import { Outlet } from 'react-router-dom'
import { NavLink } from './components/NavLink'

function App() {
  

  return (
    <div className='w-screen h-screen flex bg-red-200 bg-opacity-60' >
      <NavLink />
      <div className='w-screen h-screen flex flex-col space-y-10 mt-5 items-center '>
          <h1 className='font-extrabold text-3xl'>Teste react-router-dom</h1>
          <Outlet/>
           <h3 className='text-xl font-serif tracking-wider'>footer</h3>
      </div>
    </div>
  )
}

export default App
