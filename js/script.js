function openWindow(id) {
    document.getElementById(id).classList.remove("hidden");
}

function closeWindow(id) {
    document.getElementById(id).classList.add("hidden");
}

setInterval(() => {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById("hora").textContent = hora;
}, 1000);

function makeDraggable(element) {
    const header = element.querySelector(".titulo-pestaña");
    let offsetX = 0, offsetY = 0;
    let isDragging = false;

    header.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
        element.style.zIndex = 1000;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        element.style.left = `${e.clientX - offsetX}px`;
        element.style.top = `${e.clientY - offsetY}px`;
    });
}

function openWindow(id) {
    const win = document.getElementById(id);
    win.classList.remove("hidden");
    makeDraggable(win);
}

function maximizar(id) {
    const win = document.getElementById(id);
    const isMax = win.classList.contains("maximizada");

    if (isMax) {
        win.style.width = "300px";
        win.style.height = "600px";
        win.style.top = "100px";
        win.style.left = "100px";
        win.classList.remove("maximizada");
    } else {
        win.style.top = "0";
        win.style.left = "0";
        win.style.width = "100vw";
        win.style.height = "calc(100vh - 74px)";
        win.classList.add("maximizada");
    }
}
