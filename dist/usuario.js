"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["User1", "User2"]);
        }, 2000);
    });
}
function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Post1", "Post2"]);
        }, 3000);
    });
}
Promise.all([getUsers(), getPosts()])
    .then((resultados) => {
})
    .catch(() => {
    console.log("Error al cargar los datos");
});
//# sourceMappingURL=usuario.js.map