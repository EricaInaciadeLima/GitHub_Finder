import {BsSearch} from 'react-icons/bs'
import { useState, KeyboardEvent } from 'react';
import classes from "./Search.module.css"

type SearchProps = {
    loadUser: (UserName: string) => Promise<void>
}

function Search({loadUser}: SearchProps) {
    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) =>{
        if (e.key === "Enter"){
            loadUser(userName);
        }
    }
  return (
    <div className={classes.search}>
        <h2>Busque por um usuário:</h2>
        <div className={classes.search_container}>
            <input type='text' placeholder='Digite o nome do usuário'onKeyDown={handleKeyDown} onChange={(e)=> setUserName(e.target.value)}/>
            <button onClick={()=>loadUser(userName)}><BsSearch/></button>
        </div>
    </div>
  )
}

export default Search