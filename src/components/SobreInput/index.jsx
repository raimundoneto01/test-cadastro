
import { useLogica } from "../hook";

export function SobreInput(){
  const { handleChange, handleSubmit , uselist, confi}  = useLogica()
  return(
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col w-60 h-56 space-y-3 px-4 py-2  font-medium tracking-wide text-red-800 text-opacity-70 " >
        <label htmlFor="name">Nome</label>
        <input className="border-2 border-red-600 border-opacity-40 right-3 rounded-md text-neutral-500 px-2  "  type="text" id="name" name="name" value={uselist.name} onChange={handleChange}/>
        <label htmlFor="lastname">SobreNome</label>
        <input className="border-2 border-red-600 border-opacity-40 right-3 rounded-md text-neutral-500 px-2" type="text" id="lastName" name="lastName" value={uselist.lastName} onChange={handleChange}/>
        { confi && confi.statusText && <p className="text-xl text-green-700 font-mono">Cadastro Feito</p>}
        <button  className=" border-2 rounded-xl font-bold text-xl bg-orange-600 bg-opacity-70 hover:bg-opacity-50 py-2">Cadastrar</button>
      </form>
    </div>
  )
}