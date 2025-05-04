async function loadComponent(componentPath, targetElementId) {
    try {
        const response = await fetch(componentPath);
        
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status}`);
        }
        
        const html = await response.text();
        document.getElementById(targetElementId).innerHTML = html;
        
        console.log(`Компонент ${componentPath} успешно загружен!`);
    } catch (error) {
        console.error('Ошибка:', error);
        document.getElementById(targetElementId).innerHTML = `
            <div style="color: red;">Не удалось загрузить компонент ${componentPath}</div>
        `;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadComponent('../components/header.html', 'header-container');
    loadComponent('../components/section.html', 'section-container');
});