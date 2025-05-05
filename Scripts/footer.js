function loadFooter(footerElementId, footerFilePath) {
    fetch(footerFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el footer: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            const footer = document.getElementById(footerElementId);
            if (footer) {
                footer.innerHTML = data;
            } else {
                console.warn(`No se encontró el elemento con id '${footerElementId}'`);
            }
        })
        .catch(err => console.error(err));
}

// Ejecutar automáticamente cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadFooter('footer', 'footer.html');
});