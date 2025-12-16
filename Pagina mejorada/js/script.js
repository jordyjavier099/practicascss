// Esperar a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    
    const themeButton = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeButton.querySelector('i');

    // Verificar si hay una preferencia guardada
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Función al hacer click
    themeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Cambiar icono
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark'); // Guardar preferencia
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Buscamos el botón y el body
    const themeButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verificación de seguridad: Si no encuentra el botón, se detiene para no dar error
    if (!themeButton) {
        console.error("Error: No se encontró el botón con id 'theme-toggle'. Revisa tu HTML.");
        return;
    }

    const icon = themeButton.querySelector('i');

    // 2. Revisar si el usuario ya tenía el modo oscuro guardado de antes
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // 3. Evento al hacer clic
    themeButton.addEventListener('click', () => {
        // Alternar la clase en el body
        body.classList.toggle('dark-mode');
        
        // Comprobar si ahora es oscuro o claro
        if (body.classList.contains('dark-mode')) {
            // Cambiar a icono de Sol
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            // Guardar en memoria
            localStorage.setItem('theme', 'dark');
            console.log("Modo oscuro activado");
        } else {
            // Cambiar a icono de Luna
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            // Guardar en memoria
            localStorage.setItem('theme', 'light');
            console.log("Modo claro activado");
        }
    });
});
});