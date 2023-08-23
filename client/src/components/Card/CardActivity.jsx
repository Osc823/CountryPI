
import style from "./card.module.css";
import { Link } from "react-router-dom";
// import {deleteActivity, getActivity} from "../../redux/actions/actions" 
// import {useDispatch} from "react-redux";
// import { useEffect } from "react";


// eslint-disable-next-line react/prop-types
const CardActivity = ({ name, difficulty, duration, season, countries}) => {
    
    
    
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
            </div>
        </div>
    )
}

export default CardActivity;




















        // const dispatch = useDispatch();
    
        
        // const handleRemoveClick = async (event) => {
        //     await dispatch(deleteActivity(event.target.name));
        //     dispatch(getActivity());
        // }
            {/* <button className={style.buton} value={id} name={id} onClick={handleRemoveClick}>x</button> */}