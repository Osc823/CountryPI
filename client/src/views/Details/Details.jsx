//import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getDetail} from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./detail.module.css"

const Detail = () => {

    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail)
    console.log('detalle', detail);
    const activities = useSelector((state) => state.allActivitiesBackup)
    console.log('Actividadesdet',activities);
    const {id} = useParams();

    
    const list = detail.activities?.length ? detail.activities.map(act => 
        
        <li key={act.id} value={act.id}>{act.name}</li>)
            : <Link to={'/create'}>No hay actividades</Link> ;
    
    
    useEffect(()=>{
        dispatch(getDetail(id))
    }, [])
    
    return(
            <div className={style.container} >
                <div>
                    <div>
                        <div>
                            <h1>{detail.name}</h1>
                        </div>
                        <div className={style.detail}>
                            <div>
                                <label htmlFor="">Id</label>
                                <p>{detail.id}</p>
                                <label htmlFor="">Continente</label>
                                <p>{detail.continent}</p>
                                <label htmlFor="">Capital</label>
                                <p>{detail.capital}</p>
                                <label htmlFor="">Poblacion</label>
                                <p>{detail.population}</p>
                                <label htmlFor="">Actividad</label>
                                <ul>{list}</ul>

                            </div>
                            <div className={style.containerImg} >
                                    <img src={detail.image} />
                            </div>
                        </div>
                        <div  className={style.buttonContainer}>
                            <Link to={'/home'}>
                                <button className={style.button}>Volver</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Detail;