import { useDispatch } from "react-redux";
import style from "./searchbar.module.css";
import { useState } from "react";
import {searchName} from "../../redux/actions/actions"

const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handlerInputChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }
    
    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(searchName(name))
    }
   


    return(
        <div className={style.searchContainer}>
            <input
                type="text"
                placeholder="Buscar..."
                className={style.searchInput}
                onChange={(e) => handlerInputChange(e)}
            />
            <button className={style.searchButton} onClick={(e) => handlerSubmit(e)}>Buscar</button>
        </div>
    )
}

export default SearchBar;