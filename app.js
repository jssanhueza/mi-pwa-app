if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

function obtenerDatos(){

fetch("AQUI_VA_TU_APPS_SCRIPT")

.then(r => r.json())

.then(data => {
document.getElementById("resultado").textContent =
JSON.stringify(data,null,2);
});

}
