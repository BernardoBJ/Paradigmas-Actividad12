const comprarBicicleta = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            nombre: "Bicicleta",
            costo: 1500
        });
    }, 8000);
});

const comprarCasco = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            nombre: "casco",
            costo: 300
        });
    }, 1000);
});

const comprarGuantes = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            nombre: "guantes",
            costo: 150
        });
    }, 2000);
});

const irPaseo = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            nombre: "paseo",
            objeto: "bicicleta"
        });
    }, 8000);
});

const bicicleteando = () => {
    comprarBicicleta
        .then(infoBici => {
            console.log(infoBici);
            return comprarCasco;
        })
        .then(infoCasco => {
            console.log(infoCasco);
            return comprarGuantes;
        })
        .then(infoGuantes => {
            console.log(infoGuantes);
            return irPaseo;
        })
        .then(infoPaseo => {
            console.log(infoPaseo);
            return;
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            console.log("Proceso finalizado");
        })
};


bicicleteando();