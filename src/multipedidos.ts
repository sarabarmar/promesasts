function tomarPedido() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pedido recibido");
    }, 1000);
  });
}

function prepararPedido() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject("Error al preparar el pedido");
      } else {
        resolve("Pedido en preparación");
      }
    }, 2000);
  });
}

function entregarPedido() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pedido entregado al cliente");
    }, 1500);
  });
}

async function procesarPedido() {
  console.log("[Inicio del proceso]");
  try {
    const paso1 = await tomarPedido();
    console.log(paso1);

    const paso2 = await prepararPedido();
    console.log(paso2);

    const paso3 = await entregarPedido();
    console.log(paso3);

    console.log("[Fin del proceso]");
    return "Completado";
  } catch (error) {
    console.log(error);
    return "Falló";
  }
}

async function pedido1() {
  return await procesarPedido();
}

async function pedido2() {
  return await procesarPedido();
}

async function pedido3() {
  return await procesarPedido();
}

Promise.allSettled([pedido1(), pedido2(), pedido3()])
  .then((resultados) => {
    resultados.forEach((r, i) => {
      if (r.status === "fulfilled") {
        console.log("Pedido " + (i + 1) + ": completado");
      } else {
        console.log("Pedido " + (i + 1) + ": falló");
      }
    });
    console.log("Todos los pedidos han sido procesados");
  });
