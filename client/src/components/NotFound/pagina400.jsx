import style from './paginado.module.css'
import { Link } from 'react-router-dom';

const PaginaError = () => {
    return (
        <div className={style.container}>
            <div className={style.image}></div>
            <Link to={'/home'} className={style.link}>VOLVER</Link>
        </div>
    )
}

export default PaginaError;
