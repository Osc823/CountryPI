import { useDispatch} from "react-redux";
import { paginate} from "../../redux/actions/actions";
import style from "./paginado.module.css"

const Paginado = () => {
    const dispatch = useDispatch();

    const page = (event) => {
        dispatch(paginate(event.target.name))
    }

    return(
        <div className={style.paginationButtons}>
            <button name="prev" onClick={page}>Anterior</button>
            <button name="next" onClick={page}>Siguiente</button>
        </div>
    )
}

export default Paginado;