import { useDispatch, useSelector} from "react-redux";
import { paginate} from "../../redux/actions/actions";
import style from "./paginado.module.css"


const Paginado = () => {
    const dispatch = useDispatch();

    const page = (event) => {
        dispatch(paginate(event.target.name))
        
    }
    
    const numPage = useSelector((state) => state.currentPage)

    return(
        <div className={style.conten}>
            <div className={style.paginationButtons}>
                <button  name="prev" onClick={page}>Anterior</button>
                <h2 className={style.numero}>{numPage + 1}</h2>
                <button name="next" onClick={page}>Siguiente</button>
            </div>
        </div>
    )
}

export default Paginado;