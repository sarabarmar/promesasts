function fetchData() {
    return new Promise((resolve , reject)=> {
        setTimeout(() => {
            if (Math.random() > 0.5){
                resolve("Datos cargados correctamente");
            } else {
                reject("Error al cargar los datos");
            }
        }, 2000)
    });
}
fetchData()
.then((mensaje) => console.log(mensaje))
.catch((error) => console.log(error));