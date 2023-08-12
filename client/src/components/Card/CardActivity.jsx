
import { useState } from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {deleteActivity} from "../../redux/actions/actions" 
// import { useEffect } from "react";


// eslint-disable-next-line react/prop-types
const CardActivity = ({name, difficulty, duration, season, countries}) => {
    
    const [card, setCard] = useState([]);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(resetPage())
    // },[])
    const onClose = (name) =>{
        const activityFiltered = card.filter(act =>
           act.name !== name)
           setCard(activityFiltered)
     }
    

    // const handleRemoveClick = () => {
    //     console.log("Button clicked"); // Agrega este console.log
    //     dispatch(deleteActivity(name));
    // }
    return(
        <div className={style.cardCont}>
            <div className={style.cardTittle}>
                <h1>{name}</h1>
            </div>
            <div className={style.cardSeparator}></div>
            <div className={style.cardInfo}>
                <h2>Dificultad: {difficulty}</h2>
                <h2>Duracion: {duration}</h2>
                <h2>Temporada: {season}</h2>
                <div className={style.cardSeparator}></div>
                <div>
                    {
                    // eslint-disable-next-line react/prop-types
                    countries.map((country, index) => (
                        <div key={index}>
                            <h2>{country.name}</h2>
                        <Link to={`/detail/${country.id}`}>
                            <img src={country.image} alt={country.name} />
                        </Link>
                        
                        </div>
                    ))}
                </div>
                <button onClick={() => onClose(name)}>x</button>
            </div>
        </div>
    )
}

export default CardActivity;