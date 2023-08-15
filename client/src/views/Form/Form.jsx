import  {useEffect, useState} from "react";
import styles from "./form.module.css";
import {getCountry, postActivity} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import validate from "./validation";


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
        validate(event.target.name, event.target.value, error, setError);
    }

    const handleSelect = (event) => {
        setForm({
            ...form,
            countries: [...form.countries, event.target.value]
        })
        validate(event.target.name, event.target.value, error, setError);
    }

    const handleSubmit = async () =>{

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
    

    const disable = () =>{
    let disabled = true;
    for (const err in error) {
        if (error[err] === "") {
            disabled = false;
        } else {
            disabled = true;
            return disabled; 
        }
    }
    return disabled;
    }
    useEffect(() => {
        dispatch(getCountry())
    },[])

    return(
        <div className={styles.pageContainer}> {/* Aplica estilos para centrar */}
            <div className={styles.formCon}>
                <form onSubmit={handleSubmit} key={"formularioActividades"}>
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
                            country.map((pais, index) => {
                                return(
                                    <option value={pais.id} key={index}>{pais.name}</option>
                                )
                            })
                        }

                    </select>
                    {/* <input onChange={handleChange} type="text" name="countries" value={form.countries}/> */}
                    <span className={styles.spamErr}>{error.countries}</span>

                        <input disabled={disable()} type="submit" />
                
                </form>
                {
                    form.countries.map((ele, index) => 
                    <div className={styles.barra} key={index}>
                        <p>{ele}</p>
                        <button className={styles.buton} onClick={() => handleDelete(ele)}>X</button>
                    </div>
                )
                }
            </div>
        </div>
    )
}
export default Form;