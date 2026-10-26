const NOMBRE_CACHE = "Control gastos-v2";
console.log("ServiceWorker cargado - Version 2");

self.addEventListener("install", function (evento) {
    /* Para que se utilizara mas adelante:
    - prepara recursos de la nueva version,
    - por ejemplo, precachear archivos
    */
    console.log("evento install del Service Worker");
    //indica que el evento install debe esperar a que termine la Promise
    evento.waitUntil(
        caches.open(NOMBRE_CACHE)
            .then(function (cache) {
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

self.addEventListener("activate", (evento) => {
    
    console.log("Evento activate del Service Worker");

    evento.waitUntil(
        caches.keys()
        .then(function (nombreCaches){
            return Promise.all(
                nombreCaches.map(function(nombreCache){
                    if(nombreCache !== NOMBRE_CACHE){
                        return caches.delete(nombreCache)
                    }
                })
            )
        })
    )
})

self.addEventListener("fetch", (evento) => {
    console.log("Evento Fetch: ", evento.request.url);
    evento.respondWith(
        caches.match(evento.request)
    )
})