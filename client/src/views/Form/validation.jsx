const validate = (name, value, error, setError) =>{
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

export default validate;

// validate(form,error);

    // const validate = (name, value) =>{
    //     const newError = {...error};
    //     if (name === "name") {
    //         newError.name = value !== "" ? "" : "El campo no puede estar vacio"; 
    //     }
    //     if (name === 'difficulty') {
    //         if (value !== "") {
    //             if (!isNaN(parseFloat(value))) {
    //                 newError.difficulty = value >= 1 && value <= 5 ? "" : "Dificultad máxima 5, te pasaste";
    //             } else {
    //                 newError.difficulty = "No es un número";
    //             }
    //         }else{
    //             newError.difficulty = "El campo no puede estar vacío";
    //         }
    //     }
    //     if (name === 'duration') {
    //         if (value !== "") {
    //             if (!isNaN(parseInt(value))) {
    //                 newError.duration = value >= 1 && value <= 12 ? "" : "La duracion maxima es 12, te pasaste";
    //             }
    //             else{
    //                 newError.duration = "No es un numero";
    //             }
    //         }
    //         else{
    //             newError.duration = "El campo no puede estar vacío";
    //         }
    //     }
    //     if (name === 'season') {
    //         newError.season = value !== "undefined" ? "" : "Debes seleccionar una temporada";
    //     }
    //     if (name === 'countries') {
    //         newError.countries = value !== "undefined" ? "" : "Debes seleccionar un país";
    //     }
    //     // if (name === 'countries') {
    //     //     newError.countries = value !== "" ? "" : "Pais no encontrado";
    //     // }
    //     setError(newError);
    // }