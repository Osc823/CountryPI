import  {useEffect, useState} from "react";
import styles from "./form.module.css";
import {getCountry, postActivity} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";

const Form = () => {

    const dispatch = useDispatch();
    const country = useSelector((state) => state.allCountriesBackup);

    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration:"",
        season:"",
        countries:[]
    })

    const [error, setError] = useState({
        name: "Campo requerido",
        difficulty: "El campo no puede estar vacio",
        duration:"El campo no puede estar vacio",
        season:"El campo no puede estar vacio",
        countries:"El campo no puede estar vacio"
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        validate(event.target.name, event.target.value)
    }

    const handleSelect = (event) => {
        setForm({
            ...form,
            countries: [...form.countries, event.target.value]
        })
        validate(event.target.name, event.target.value)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        await dispatch(postActivity(form));

        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        });

        setError({
            name: "Campo requerido",
            difficulty: "El campo no puede estar vacio",
            duration: "El campo no puede estar vacio",
            season: "El campo no puede estar vacio",
            countries: "El campo no puede estar vacio"
        });
    
    }

    const handleDelete = (ele) => {
        setForm({
            ...form,
            countries: form.countries.filter(cont => cont !== ele)
        })
    }

    const validate = (name, value) =>{
        const newError = {...error};
        if (name === "name") {
            newError.name = value !== "" ? "" : "El campo no puede estar vacio"; 
        }
        if (name === 'difficulty') {
            if (value !== "") {
                if (!isNaN(parseFloat(value))) {
                    newError.difficulty = value >= 1 && value <= 5 ? "" : "Dificultad máxima 5, te pasaste";
                } else {
                    newError.difficulty = "No es un número";
                }
            }else{
                newError.difficulty = "El campo no puede estar vacío";
            }
        }
        if (name === 'duration') {
            if (value !== "") {
                if (!isNaN(parseInt(value))) {
                    newError.duration = value >= 1 && value <= 12 ? "" : "La duracion maxima es 12, te pasaste";
                }
                else{
                    newError.duration = "No es un numero";
                }
            }
            else{
                newError.duration = "El campo no puede estar vacío";
            }
        }
        if (name === 'season') {
            newError.season = value !== "undefined" ? "" : "Debes seleccionar una temporada";
        }
        if (name === 'countries') {
            newError.countries = value !== "undefined" ? "" : "Debes seleccionar un país";
        }
        // if (name === 'countries') {
        //     newError.countries = value !== "" ? "" : "Pais no encontrado";
        // }
        setError(newError);
    }
    const disable = () =>{
       // Obtener un array con los nombres de las propiedades del objeto error
        const errorFields = Object.keys(error);

        // Verificar si al menos un mensaje de error no está vacío
        const anyError = errorFields.map((field) => error[field] !== "").includes(true);

        return anyError; // Si hay algún mensaje de error no vacío, el botón estará deshabilitado, de lo contrario, estará habilitado
    }
    useEffect(() => {
        dispatch(getCountry())
    },[])

    return(
        <div className={styles.pageContainer}> {/* Aplica estilos para centrar */}
            <div className={styles.formCon}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre: </label>
                    <input onChange={handleChange} type="text" name="name" value={form.name}/>
                    <span className={styles.spamErr}>{error.name}</span>

                    <label htmlFor="difficulty">Dificultad (1-5): </label>
                    <input onChange={handleChange} type="text" name="difficulty" value={form.difficulty}/>
                    <span className={styles.spamErr}>{error.difficulty}</span>
                    

                    <label htmlFor="duration">Duracion (1-12): </label>
                    <input onChange={handleChange} type="text" name="duration" value={form.duration}/>
                    <span className={styles.spamErr}>{error.duration}</span>


                    <label htmlFor="season">Temporada: </label>
                    <select name="season" onChange={handleChange}>
                        <option value={"undefined"}>Seleccione...</option>
                        <option value={"Verano"}>Verano</option>
                        <option value={"Otoño"}>Otoño</option>
                        <option value={"Invierno"}>Invierno</option>
                        <option value={"Primavera"}>Primavera</option>

                    </select>
                    {/* <input  type="text" name="season" value={form.season}/> */}
                    <span className={styles.spamErr}>{error.season}</span>


                    <label htmlFor="countries">Pais: </label>
                    <select name="countries" onChange={handleSelect}>
                        <option value={"undefined"}>Seleccione...</option>
                        {
                            country.map((pais) => {
                                return(
                                    <option value={pais.id} key={pais.id}>{pais.name}</option>
                                )
                            })
                        }

                    </select>
                    {/* <input onChange={handleChange} type="text" name="countries" value={form.countries}/> */}
                    <span className={styles.spamErr}>{error.countries}</span>

                        <input disabled={disable()} type="submit" />
                
                </form>
                {
                    form.countries.map(ele => 
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.barra}>
                        <p>{ele}</p>
                        <button className={styles.buton} onClick={() => handleDelete(ele)}>Quitar</button>
                    </div>
                    )
                }
            </div>
        </div>
    )
}
export default Form;