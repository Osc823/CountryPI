
// Importamos funciones y estilos necesarios para nuestro componente de búsqueda
import { useDispatch } from "react-redux"; // Importamos una función especial para comunicarnos con la tienda
import style from "./searchbar.module.css"; // Importamos los estilos de nuestra barra de búsqueda
import { useState } from "react"; // Importamos una función que nos ayuda a manejar estados
import { searchName } from "../../redux/actions/actions"; // Importamos una función para buscar nombres

// Creamos nuestro componente de barra de búsqueda
const SearchBar = () => {

    // Establecemos una forma de comunicarnos con la tienda
    const dispatch = useDispatch();

    // Creamos un pedacito de memoria para recordar el nombre que escribimos
    // eslint-disable-next-line no-unused-vars
    const [name, setName] = useState("");

    // Definimos una función que se ejecuta cuando escribimos en la barra de búsqueda
    const handlerInputChange = async (event) => {
        // Guardamos el nuevo nombre que escribimos
        const newName = event.target.value;

        // Usamos el pedacito de memoria para recordar el nombre
        await setName(newName);

        // Le decimos a la tienda que busque nombres similares al que escribimos
        dispatch(searchName(newName));
    };

    // Finalmente, mostramos nuestra barra de búsqueda en la pantalla
    return (
        <div className={style.searchContainer}>
            <input
                type="text"
                placeholder="Buscar...  🔍🚀🪐"
                className={style.searchInput}
                onChange={(e) => handlerInputChange(e)} // Cuando escribimos, llamamos a la función que definimos antes
            />
            {/* Podríamos tener un botón para buscar también */}
            {/* <button className={style.searchButton} onClick={(e) => handlerSubmit(e)}>Buscar</button> */}
        </div>
    );
}

// Exportamos nuestro componente para poder usarlo en otros lugares
export default SearchBar;
