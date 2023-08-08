import axios from "axios"
import {GET_COUNTRY, GET_ACTIVITY, GET_DETAI_COUNTRY ,PAGINATE, ORDER_NAME_COUNTRY, ORDER_BY_POPULATION, SELECT_ACTIVITY, SEARCH_NAME, SELECT_CONTINENT} from "./action-types"

export const postActivity = (state) => {
    // eslint-disable-next-line no-unused-vars
    return async function(){
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post("http://localhost:3001/activities/", state)
            alert("Creado correctamente");
        } catch (error) {
            alert(error.response.data.error);
        }
    }
}

export const getCountry = () => {
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/countries/")
            dispatch({
                type:GET_COUNTRY,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getActivity = () => {
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/activities/")
            dispatch({
                type:GET_ACTIVITY,
                payload:response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export const getDetail = (id) => {
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            dispatch({
                type: GET_DETAI_COUNTRY,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const paginate = (orden) => {
    return async function(dispatch){
        dispatch({
            type:PAGINATE,
            payload: orden
        })
    }
}

export const orderName = (orden) => {
    return async function(dispatch){
        dispatch({
            type:ORDER_NAME_COUNTRY,
            payload: orden
        })
    }
}

export const orderPopulation = (orden) => {
    return async function(dispatch){
        dispatch({
            type: ORDER_BY_POPULATION,
            payload: orden
        })
    }
}

export const searchName = (name) => {
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/countries/name?name="+ name)
            return dispatch({
                type: SEARCH_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const selectContinent = (continent) => {
    return {
      type: SELECT_CONTINENT,
      payload: continent
    };
};

export const selectActivity = (activity) => {
    return {
      type: SELECT_ACTIVITY,
      payload: activity
    };
  };