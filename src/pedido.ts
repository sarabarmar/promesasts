function tomarPedido() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Pedido recibido");
        }, 1000);
    })
}
function prepararPedido(){
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
 function entregarPedido (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve ("Pedido entregado al cliente")
        }, 1500)
    })
 }

 tomarPedido()
 .then ((msg) => {
    console.log(msg);
    return prepararPedido();
 })
 .then ((msg) => {
    console.log (msg);
    return entregarPedido();
 })
 .then ((msg) => console.log(msg))
 .catch ((err) => console.log (err));