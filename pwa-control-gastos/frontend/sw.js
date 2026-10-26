console.log("ServiceWorker cargado");

self.addEventListener("install", function(evento){
/* Para que se utilizara mas adelante:
- prepara recursos de la nueva version,
- por ejemplo, precachear archivos
*/
console.log("evento install del Service Worker");
//indica que el evento install debe esperar a que termine la Promise
evento.waitUntill(
    caches.open("Control-gastos-v1")
    .then(function(cache){
        return cache.addAll([
            "./",
            "./index",
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

self.addEventListener("activate", (evento) =>{



console.log(" fetch:", evento.request.url);
evento.respondWith(
    caches.match(evento.request)
)
})
