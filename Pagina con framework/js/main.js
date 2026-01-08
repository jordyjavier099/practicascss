document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    /**
     * Función para aplicar el tema
     * @param {string} theme - Puede ser 'light' o 'dark'
     */
    const setTheme = (theme) => {
        // 1. Aplicamos el atributo nativo de Bootstrap 5.3
        htmlElement.setAttribute('data-bs-theme', theme);
        
        // 2. Guardamos la elección en el navegador
        localStorage.setItem('theme', theme);
        
        // 3. Actualizamos el icono del botón con una pequeña transición
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
            icon.classList.add('text-warning');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            icon.classList.remove('text-warning');
        }
    };

    // --- PASO 1: Cargar el tema guardado al abrir la página ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // --- PASO 2: Escuchar el clic para cambiar de modo ---
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Al ejecutar setTheme, el CSS detectará el cambio de atributo
            // y activará la transición de desvanecido (fade).
            setTheme(newTheme);
        });
    }

    /**
     * LÓGICA EXTRA: Interactividad para javascript.html
     */
    const jsBtn = document.getElementById('btn-magico');
    if (jsBtn) {
        jsBtn.addEventListener('click', function() {
            const texto = document.getElementById('texto-saludo');
            const icono = document.getElementById('demo-icon');
            const caja = document.querySelector('.glass-card');

            texto.textContent = "¡Lógica JS Ejecutada! 🚀";
            icono.className = "fa-solid fa-face-laugh-beam display-1 text-success mb-4";
            this.className = "btn btn-success btn-lg rounded-pill px-5 fw-bold shadow mt-3";
            
            if(caja) {
                caja.style.transform = "scale(1.05)";
                setTimeout(() => caja.style.transform = "scale(1)", 300);
            }
        });
    }

    /**
     * LÓGICA EXTRA: Validación de Formularios para contacto.html
     */
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
    // Ejemplo para cambiar el icono de una tarjeta al pulsar un botón
const miIcono = document.getElementById('icono-a-cambiar');
miIcono.classList.replace('fa-code', 'fa-check'); // Reemplaza código por un check
});