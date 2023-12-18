import { Link } from "react-router-dom"

export function NavLink(){
  return(
    <nav className="flex flex-col space-y-10 w-28 h-screen py-8 px-3 text-xl font-semibold text-red-800  bg-red-400">
      <Link className="hover:text-slate-300" to='/'>Home</Link>
      <Link className="hover:text-slate-300" to='/sobre'>Sobre</Link>
      <Link className="hover:text-slate-300" to='/contact'>Contatos</Link>
    </nav>
  )
}