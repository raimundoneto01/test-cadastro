import { SobreInput } from "../components/SobreInput";
import { SobreList } from "../components/SobreList";

export function Sobre(){
  return(
    <>
      <p className="text-2xl underline font-serif text-red-500 font-bold">Lista de Uruários</p>
      <SobreInput/>
      <SobreList/>
    </>
  )
}