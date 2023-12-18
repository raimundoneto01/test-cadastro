import { useState, useEffect } from "react"
import axios from "axios";


export function useLogica(){

  const [ list, setList ] = useState([]);
  const [ uselist , setUseList ] = useState({
    name: '',
    lastName: '',
  });
  const [ confi, setConfi ] = useState(null)

  async function fetGet(){
    const resposta = await axios.get("https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users", list);
    setList(resposta.data);
    console.log(resposta.data);
  }


  async function deletar(id){
    await axios.delete(`https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users/${id}`);
    await fetGet();
  }

  useEffect(()=>{
    fetGet()
  }, [])


 const handleChange =({ target})=>{
  const { name, value } = target;
  setUseList({...uselist, [name]: value})
 }

 async function fetPost(){
  const postar  = await axios.post('https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users',uselist);
  setConfi(postar);

 }
 function limpar(){
  uselist.name='';
  uselist.lastName='';
 }
 const handleSubmit=(event)=>{
  event.preventDefault();
  fetPost();
  limpar();
  setTimeout(()=>{
    setConfi(uselist)
  }, 2000)
 }
  return{ uselist, list, confi, deletar, handleChange, handleSubmit}
}