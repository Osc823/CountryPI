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
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getDetail(id))
    }, [id])
    
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