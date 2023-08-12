import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getActivity,selectSeason ,resetPage, paginateAct,selectActivity,orderNameAct, getCountry} from "../../redux/actions/actions"
import CardsActivity from "../../components/Cards/CardsActivity";
import style from "./activity.module.css";
import { Link } from "react-router-dom";
// import SearchBar from "../../components/SearchBar/SearchBar";
// import Paginado from "../../components/Paginado/Paginado";

const Activity = () => {

    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.allActivities)
    const activBackup = useSelector((state) => state.allActivitiesBackup)

    
    const page = (event) => {
        dispatch(paginateAct(event.target.name))
    }
    const orderByName = (event) => {
        dispatch(orderNameAct(event.target.name))
    }
    const filterActivity = (event) => {
        dispatch(selectActivity(event.target.value));
        resetPage(); 
    }

    const filterSeason = (event) => {
        dispatch(selectSeason(event.target.value));
    }

    const numPage = useSelector((state) => state.activityCurrentPage)

    useEffect(() => {
        dispatch(getCountry())
        dispatch(getActivity())
        dispatch(resetPage())
    },[dispatch])

    return(
        <div className={style.homeCont}>
            <div className={style.navbar}>
                <div className={style.navbarButtons}>
                <button name="az" onClick={orderByName}>A-Z</button>
                <button name="za" onClick={orderByName}>Z-A</button>
                </div>
                <div>
                    <select onChange={(e) => filterSeason(e)}>
                        <option value="All">Temporada</option>
                        <option value="Verano">Verano</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                </div>
                <div className={style.navbarButtons}>
                    <button>
                        <Link to={"/create"} style={{ textDecoration: 'none', color: 'inherit' }}>Crear Actividad</Link>
                    </button>
                </div>
                <div>
                <select name="name" onChange={(e) => filterActivity(e)} className={style.selCon}>
                    <option value={"undefined"}>Seleccione...</option>
                    {activBackup.map((act) => {
                        return (
                            <option value={act.name} key={act.id}>{act.name}</option>
                        );
                    })}
                </select>
                </div>
                
                {/* <SearchBar/> */}
            </div>
            <div className={style.container}>
                <CardsActivity info={allActivities}/>
            </div>
            <div className={style.conten}>
            <div className={style.paginationButtons}>
                <button className={style.btn} name="prev" onClick={page}>Anterior</button>
                <h2 className={style.numero}>{numPage + 1}</h2>
                <button className={style.btn} name="next" onClick={page}>Siguiente</button>
            </div>
        </div>
        </div>
    )
}
export default Activity;