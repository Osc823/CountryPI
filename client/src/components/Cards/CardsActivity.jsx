import CardActivity from "../Card/CardActivity";
import style from "./cards.module.css";


// eslint-disable-next-line react/prop-types
const CardsActivity = ({info}) => {
    console.log('ACJ',info);

    
    return(
        <div className={style.cardsCont} >
            {
                // eslint-disable-next-line react/prop-types
                info.length && info.map((act) => <CardActivity key={act.id} id={act.id} name={act.name} difficulty={act.difficulty}
                    duration={act.duration} season={act.season} countries={act.countries.map(country => ({
                        id: country.id,
                        name: country.name,
                        image: country.image
                    }))}/>
                )
            }
        </div>
    )

}

export default CardsActivity;