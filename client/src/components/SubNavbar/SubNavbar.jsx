import { useDispatch, useSelector } from "react-redux";
import { orderName, orderPopulation, selectContinent, selectActivity } from "../../redux/actions/actions";
import style from "./subNabvar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const SubNavbar = () => {
    const dispatch = useDispatch();

    const allActivities = useSelector((state) => state.allActivities);

    const orderByName = (event) => {
        dispatch(orderName(event.target.name))
    }

    const filterPopulation = (event) => {
        dispatch(orderPopulation(event.target.name))
    }

    const filterContinent = (event) => {
        dispatch(selectContinent(event.target.value));
    };

    const filterActivity = (event) => {
        dispatch(selectActivity(event.target.value));
    }

    return(
        <div>
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
                    <select name="name" onChange={filterActivity} className={style.selCon}>
                       {allActivities.map((act) => {
                            return (
                                <option key={act.id}>{act.name}</option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <select onChange={filterContinent} name="continent" className={style.selectCon}>
                        <option value="">Todos los Continentes</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Americas">Americas</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <SearchBar />
            </div>

        </div>
    )
}

export default SubNavbar;