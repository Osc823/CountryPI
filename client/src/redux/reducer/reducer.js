import { GET_COUNTRY, GET_ACTIVITY, GET_DETAI_COUNTRY , PAGINATE, ORDER_NAME_COUNTRY, ORDER_BY_POPULATION,SELECT_ACTIVITY,SEARCH_NAME, SELECT_CONTINENT } from "../actions/action-types";

let initialState = {
    allCountries :[],
    allCountriesBackup :[],
    allActivities:[],
    allActivitiesBackup: [],
    detail:{},
    countryFiltered: [],
    selectedContinent:[],
    selectedActivity:[],
    currentPage: 0
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
                selectedContinent:action.payload,
                detail:action.payload
            };
        case GET_ACTIVITY:
            return{
                ...state,
                allActivities: [...action.payload].splice(0,ITEMS_PER_PAGE),
                allActivitiesBackup:action.payload,
                countryFiltered: action.payload,
                selectedActivity:action.payload
            };
        case GET_DETAI_COUNTRY:
            return{
                ...state,
                detail:action.payload,
            }
        
        case PAGINATE:
            // eslint-disable-next-line no-case-declarations
            const next_page = state.currentPage +1;
            // eslint-disable-next-line no-case-declarations
            const prev_page = state.currentPage -1;
            // eslint-disable-next-line no-case-declarations
            const firstIndex = action.payload === "next" ? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE;
            
            if (action.payload === "next" && firstIndex >= state.countryFiltered.length) {return {...state}}
            else if(action.payload === "prev" && prev_page < 0){return {...state}}
            
            return{
                ...state,
                allCountries:  [...state.countryFiltered].splice(firstIndex, ITEMS_PER_PAGE),
                allActivities: [...state.countryFiltered].splice(firstIndex, ITEMS_PER_PAGE),
                selectedContinent: [...state.countryFiltered].splice(firstIndex, ITEMS_PER_PAGE),
                selectedActivity: [...state.countryFiltered].splice(firstIndex, ITEMS_PER_PAGE),
                currentPage: action.payload === "next" ? next_page : prev_page
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

                // if (action.payload === "All") {
                //     // Si se selecciona la opción "Todos los Continentes", muestra todos los países sin filtro
                //     return ({
                //         ...state,
                //         selectedContinent:[...action.payload].splice(0, ITEMS_PER_PAGE),
                //     });
                // } else {
                //     // Filtra los países por el continente seleccionado
                    // const filteredCountries = [...state.countryFiltered].filter(country => country.continent === action.payload);
                //} 


                
            case SELECT_ACTIVITY:
                if (action.payload === "") {
                    // Si se selecciona la opción "Todos los Continentes", muestra todos los países sin filtro
                    return ({
                        ...state,
                        allActivities:[...state.countryFiltered].splice(0, ITEMS_PER_PAGE),
                        selectedActivity: "",
                        currentPage: 0
                    });
                } else {
                    // Filtra los países por el continente seleccionado
                    const filteredActivity = [...state.countryFiltered].filter(act => act.name === action.payload);
                    return ({
                        ...state,
                        allActivities: [...filteredActivity].splice(0, ITEMS_PER_PAGE),
                        selectedActivity: filteredActivity,
                        currentPage: 0
                    });
                } 
        // eslint-disable-next-line no-fallthrough
        case ORDER_BY_POPULATION:
            if(action.payload === "minPopulation"){
                const allCountryNameOrder = [...state.countryFiltered].sort((prev, next) => {
                    if(prev.population > next.population) return 1
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
            };

        // eslint-disable-next-line no-fallthrough
        default:
            return{
            ...state
        }
    }
}

export default rootReducer;