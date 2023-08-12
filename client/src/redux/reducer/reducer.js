/* eslint-disable no-case-declarations */
import { GET_COUNTRY,SELECT_SEASON ,GET_ACTIVITY, GET_DETAI_COUNTRY  ,PAGINATE, ORDER_NAME_COUNTRY, ORDER_BY_POPULATION,SELECT_ACTIVITY,SEARCH_NAME, SELECT_CONTINENT, ORDER_NAME_ACTIVITY } from "../actions/action-types";

let initialState = {
    allCountries :[],
    allCountriesBackup :[],

    allActivities:[],
    allActivitiesBackup: [],

    detail:{},

    currentPage: 0,
    activityCurrentPage:0,

    countryFiltered: [],
    activityFiltered:[],
};

const rootReducer = (state = initialState, action ) => {
    const ITEMS_PER_PAGE = 10;
    switch (action.type) {
        case GET_COUNTRY:
            return{
                ...state,
                allCountries: [...action.payload].splice(0,ITEMS_PER_PAGE), 
                allCountriesBackup: action.payload,
                countryFiltered: action.payload,
                detail:action.payload
            };
        case GET_ACTIVITY:
            return{
                ...state,
                allActivities: [...action.payload].splice(0,ITEMS_PER_PAGE),
                allActivitiesBackup:action.payload,
                activityFiltered: action.payload,
            };
        case SELECT_ACTIVITY:
            const aa = [...state.allActivitiesBackup];
            const actyFiltre = action.payload === "undefined" ? aa : aa.filter((ac) => ac.name === action.payload);

            return {
            ...state,
            allActivities: [...actyFiltre],
            activityFiltered: actyFiltre,
            currentPage: 0
            };
        case SELECT_SEASON:
            const ss = [...state.allActivitiesBackup];
            const seasonActy = action.payload === "All" ? ss : ss.filter((ss) => ss.season === action.payload);
            return{
            ...state,
            allActivities: [...seasonActy],
            activityFiltered: seasonActy,
            currentPage: 0
            }
        case GET_DETAI_COUNTRY:
            return{
                ...state,
                detail:action.payload,
            }
        case 'RESET_PAGINATE':
           return{
                ...state,
                currentPage: 0,
                
           }
        
        case PAGINATE:
            const nextPage = action.payload === 'next' ? state.currentPage + 1 : state.currentPage - 1;
            const startIndex = nextPage * ITEMS_PER_PAGE;

            const maxPage = Math.ceil(state.countryFiltered.length / ITEMS_PER_PAGE);
            if (nextPage < 0 || nextPage >= maxPage) {
                return { ...state };
            }

            return {
                ...state,
                currentPage: nextPage,
                allCountries: state.countryFiltered.slice(startIndex, startIndex + ITEMS_PER_PAGE),
                // allActivities: state.activityFiltered.slice(startIndex, startIndex + ITEMS_PER_PAGE),
            };

        case 'PAGINATE_ACTIVITY':
            const nextActivityPage = action.payload === 'next' ? state.activityCurrentPage + 1 : state.activityCurrentPage - 1;
            const activityStartIndex = nextActivityPage * ITEMS_PER_PAGE;

            const maxActivityPage = Math.ceil(state.activityFiltered.length / ITEMS_PER_PAGE);
            if (nextActivityPage < 0 || nextActivityPage >= maxActivityPage) {
                return { ...state };
            }

            return {
                ...state,
                activityCurrentPage: nextActivityPage,
                allActivities: state.activityFiltered.slice(activityStartIndex, activityStartIndex + ITEMS_PER_PAGE),
            };

            
        case ORDER_NAME_COUNTRY:
            if(action.payload === "az"){
                const allCountryNameOrder = [...state.countryFiltered].sort((prev, next) => {
                    if(prev.name > next.name) return 1
                    if(prev.name < next.name) return -1
                    return 0
                })
                return({
                    ...state,
                    allCountries:[...allCountryNameOrder].splice(0, ITEMS_PER_PAGE),
                    countryFiltered: allCountryNameOrder,
                    currentPage: 0
                })
            }
            else if(action.payload === "za"){
                const allCountryNameOrder = [...state.countryFiltered].sort((prev, next) => {
                    if(prev.name > next.name) return -1
                    if(prev.name < next.name) return 1
                    return 0
                })
                return({
                    ...state,
                    allCountries:[...allCountryNameOrder].splice(0, ITEMS_PER_PAGE),
                    countryFiltered: allCountryNameOrder,
                    currentPage: 0
                })
            }
            // eslint-disable-next-line no-fallthrough
            case SELECT_CONTINENT:
                // eslint-disable-next-line no-case-declarations
                const pp = [...state.allCountriesBackup];
                // eslint-disable-next-line no-case-declarations
                const contiFiltre = action.payload === "All" ? pp : pp.filter((co) => co.continent === action.payload);
                
                return ({
                    ...state,
                    allCountries: [...contiFiltre].splice(0, ITEMS_PER_PAGE),
                    countryFiltered: contiFiltre,
                    currentPage: 0
                });

                
        // eslint-disable-next-line no-fallthrough
        case ORDER_BY_POPULATION:
            if(action.payload === "minPopulation"){
                const allCountryNameOrder = [...state.countryFiltered].sort((prev, next) => {
                    if(prev.population > next.population) return 1
                    //4555555 545555555 > 
                    if(prev.population < next.population) return -1
                    return 0
                })
                return({
                    ...state,
                    allCountries:[...allCountryNameOrder].splice(0, ITEMS_PER_PAGE),
                    countryFiltered: allCountryNameOrder,
                    currentPage: 0
                })
            }
            else if(action.payload === "maxPopulation"){
                const allCountryNameOrder = [...state.countryFiltered].sort((prev, next) => {
                    if(prev.population > next.population) return -1
                    if(prev.population < next.population) return 1
                    return 0
                })
                return({
                    ...state,
                    allCountries:[...allCountryNameOrder].splice(0, ITEMS_PER_PAGE),
                    countryFiltered: allCountryNameOrder,
                    currentPage: 0
                })
            }
        // eslint-disable-next-line no-fallthrough
        case SEARCH_NAME:
            return{
                ...state,
                allCountries: [...action.payload].splice(0,ITEMS_PER_PAGE), 
                allActivitiesBackup: [...action.payload].splice(0,ITEMS_PER_PAGE), 
            };
            case ORDER_NAME_ACTIVITY:
                if(action.payload === "az"){
                    const allActivityNameOrder = [...state.activityFiltered].sort((prev, next) => {
                        if(prev.name > next.name) return 1
                        if(prev.name < next.name) return -1
                        return 0
                    })
                    return({
                        ...state,
                        allActivities:[...allActivityNameOrder].splice(0, ITEMS_PER_PAGE),
                        activityFiltered: allActivityNameOrder,
                        currentPage: 0
                    })
                }
                else if(action.payload === "za"){
                    const allActivityNameOrder = [...state.activityFiltered].sort((prev, next) => {
                        if(prev.name > next.name) return -1
                        if(prev.name < next.name) return 1
                        return 0
                    })
                    return({
                        ...state,
                        allActivities:[...allActivityNameOrder].splice(0, ITEMS_PER_PAGE),
                        activityFiltered: allActivityNameOrder,
                        currentPage: 0
                    })
                }
           

        // eslint-disable-next-line no-fallthrough
        default:
            return{
            ...state
        }
    }
}

export default rootReducer;