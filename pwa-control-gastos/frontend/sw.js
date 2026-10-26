console.log("ServiceWorker cargado");

self.addEventListener("install", function(evento){
/* Para que se utilizara mas adelante:
- prepara recursos de la nueva version,
- por ejemplo, precachear archivos
*/
console.log("evento install del Service Worker");
//indica que el evento install debe esperar a que termine la Promise
evento.waitUntil(
    caches.open("Control-gastos-v1")
    .then(function(cache){
        return cache.addAll([
            "./",
            "./index.html",
            "./css/estilos.css",
            "./js/app.js",
            "./js/gastos.js",
            "./manifest.webmanifest",
            "./icons/icon-192.png",
            "./icons/icon-512.png"
        ])
    })
)
})

