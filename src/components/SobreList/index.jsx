
import { useLogica } from "../hook";

export function SobreList(){
  const {list, deletar,  useEffect} = useLogica()
 

 
  return(
    <>
      <h1>lista de Usuários</h1>
      <ol>
        {list.map((list)=>(
          <div className="flex space-x-8  " key={list.id}>
            <li>{list.id}</li>
            <li>{list.name}</li>
            <li>{list.lastName}</li>
            <li>
              <button onClick={() =>deletar(list.id)} className="border border-black rounded hover:bg-red-600">Apagar</button>
            </li>
          </div>
        ))}
      </ol>
    </>
  )
}