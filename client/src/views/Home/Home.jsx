//import React from "react";

import { useEffect} from "react";
import CardsCountry from "../../components/Cards/CardsCountry";
import style from "./home.module.css";
import { getActivity,resetPage, getCountry, orderName, orderPopulation, selectContinent } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginado from "../../components/Paginado/Paginado";

const Home = () => {
    const dispatch = useDispatch();
    
    const allCountries = useSelector((state) => state.allCountries);
    const allActivities = useSelector((state) => state.allActivities);

    console.log('Actividades',allActivities);
    

    const orderByName = (event) => {
        dispatch(orderName(event.target.name))
    }

    const filterPopulation = (event) => {
        dispatch(orderPopulation(event.target.name))
    }

    const filterContinent = (event) => {
        dispatch(selectContinent(event.target.value));
    };

    // const filterActivity = (event) => {
    //     dispatch(selectActivity(event.target.value));
    // }

    
    useEffect(() => {
      dispatch(getCountry());
      dispatch(getActivity());
      dispatch(resetPage())
    },[])
    

    

    return(
        <div className={style.homeCont}>
            <div className={style.navbar}>
                <div className={style.navbarButtons}>
                <button name="az" onClick={orderByName}>A-Z</button>
                <button name="za" onClick={orderByName}>Z-A</button>
                </div>
                <div className={style.navbarButtons}>
                <button name="maxPopulation" onClick={filterPopulation}>Mayor poblacion</button>
                <button name="minPopulation" onClick={filterPopulation}>Menor poblacion</button>
                </div>
                {/* <div>
                    <select name="name" onChange={(e)=>filterActivity(e)} className={style.selCon}>
                        <option value={"undefined"}>Seleccione...</option>
                       {allActivities.map((act) => {
                            return (
                                <option value={act.id} key={act.id}>{act.name}</option>
                            );
                        })}
                    </select>
                </div> */}
                
                <div>
                    <select onChange={(e)=>filterContinent(e)} name="continent" className={style.selectCon}>
                        <option value="All">Todos los Continentes</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Americas">Americas</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <SearchBar />
            </div>
            <div className={style.card}>
                <CardsCountry info={allCountries} />
            </div>
            <Paginado/>
        </div>
    )
}
export default Home;

