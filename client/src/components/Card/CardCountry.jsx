import style from "./card.module.css";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CardCountry = ({id, name, image, continent, population}) => {
    return(
        <div className={style.cardCont}>
                <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
            <div className={style.cardTittle}>
                <h2>{name}</h2>
            </div>
            <div className={style.cardSeparator}></div>
            <div className={style.cardInfo}>
                <img src={image} alt="Logo" />
                <h2>{continent}</h2>
                <h2>{population}</h2>
            </div>
                </Link>
        </div>
    )
}
export default CardCountry;