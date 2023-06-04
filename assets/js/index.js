function toggleActive(element) {
            const activeClass = 'active';
            const isActive = element.classList.contains(activeClass);

            // Remover la clase 'active' de todos los contenedores de planes
            const planContainers = document.querySelectorAll('.plan-container');
            planContainers.forEach(container => {
                container.classList.remove(activeClass);
            });

            // Agregar o remover la clase 'active' al contenedor seleccionado
            if (!isActive) {
                element.classList.add(activeClass);
            }
        }