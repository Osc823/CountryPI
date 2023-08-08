import style from "./card.module.css";

// eslint-disable-next-line react/prop-types
const CardActivity = ({name, difficulty, duration, season, countries}) => {
    return(
        <div className={style.cardCont}>
            <div className={style.cardTittle}>
                <h1>{name}</h1>
            </div>
            <div className={style.cardSeparator}></div>
            <div className={style.cardInfo}>
                <h2>{difficulty}</h2>
                <h2>{duration}</h2>
                <h2>{season}</h2>
                <div>
                    {
                    // eslint-disable-next-line react/prop-types
                    countries.map((country, index) => (
                        <div key={index}>
                            <h2>{country.name}</h2>
                            <img src={country.image} alt={country.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardActivity;