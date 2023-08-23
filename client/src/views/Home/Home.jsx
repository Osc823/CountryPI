import { useEffect} from "react";
import CardsCountry from "../../components/Cards/CardsCountry";
import style from "./home.module.css";
import {resetPage, getCountry, orderName, orderPopulation, selectContinent, area } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginado from "../../components/Paginado/Paginado";

const Home = () => {
    const dispatch = useDispatch();
    
    const allCountries = useSelector((state) => state.allCountries);

    const orderByName = (event) => {
        dispatch(orderName(event.target.name))
    }

    const filterPopulation = (event) => {
        dispatch(orderPopulation(event.target.name))
    }

    const filterContinent = (event) => {
        dispatch(selectContinent(event.target.value));
    };

    const areaMeMa =(event) =>{
        dispatch(area(event.target.name))
    }
    
    useEffect(() => {
      dispatch(getCountry());
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
                <div className={style.navbarButtons}>
                    <button name="AreaMay" onClick={areaMeMa}>Area Mayor</button>
                    <button name="AreaMen" onClick={areaMeMa}>Area Menor</button>
                </div>
                <div>
                    <div className={style.searchBarContainer}>
                        <div >
                            <SearchBar />
                        </div>
                    </div>
                </div>
         
            </div>
            <div className={style.card}>
                <CardsCountry info={allCountries} />
            </div>
            <Paginado/>
        </div>
    )
}
export default Home;

