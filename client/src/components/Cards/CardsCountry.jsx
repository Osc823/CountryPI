//import React from "react";
import CardCountry from "../Card/CardCountry";
import style from "./cards.module.css";


// eslint-disable-next-line react/prop-types
const CardsCountry = ({info}) => {
    return(
        <div className={style.cardsCont}>
            {
                // eslint-disable-next-line react/prop-types
                    info.length? info.map((pais) => <CardCountry key={pais.id} id={pais.id} name={pais.name} 
                    image={pais.image} continent={pais.continent} population={pais.population} area={pais.area}/>) : (<h1 className={style.letra}>Pais no encotrado</h1>)
                
            }
        </div>
    )
}
export default CardsCountry;