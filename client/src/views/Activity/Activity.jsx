import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getActivity} from "../../redux/actions/actions"
import CardsActivity from "../../components/Cards/CardsActivity";
import style from "./activity.module.css"
import Paginado from "../../components/Paginado/Paginado";

const Activity = () => {

    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.allActivities)
    

    useEffect(() => {
        dispatch(getActivity())
    },[dispatch])

    return(
        <div className={style.homeCont}>
            <div className={style.container}>
                <CardsActivity info={allActivities}/>
            </div>
            <Paginado/>
        </div>
    )
}
export default Activity;