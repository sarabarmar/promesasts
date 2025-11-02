function tomarPedido(){
    return new promise((resolve) => {
        setTimeout(()=> {
            resolve("Pedido recibido");
        }, 1000);
    })
}
functionprepararPedido(){
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (Math.random() < 0.3){
                reject("Error al preparar el pedido");
            }else{
                resolve("Pedido en preparacion");
            }
        }, 2000)
    })
}