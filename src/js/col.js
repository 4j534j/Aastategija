let isColCha = false;
const OS = {};

function StoreOS() {
    const root = document.documentElement;
    OS['--black'] = getComputedStyle(root).getPropertyValue('--black').trim();
    OS['--gray'] = getComputedStyle(root).getPropertyValue('--gray').trim();
    OS['--about-text'] = getComputedStyle(root).getPropertyValue('--about-text').trim();
    OS['--about-trophy-text'] = getComputedStyle(root).getPropertyValue('--about-trophy-text').trim();
    OS['--about-guide-text'] = getComputedStyle(root).getPropertyValue('--about-guide-text').trim();
    OS['--light-blue'] = getComputedStyle(root).getPropertyValue('--light-blue').trim();
    OS['--EKKSL-beige'] = getComputedStyle(root).getPropertyValue('--EKKSL-beige').trim();
}

function colchange() {
    const root = document.documentElement;

    if (!isColCha) {
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--gray', '#F5F7FA');
        root.style.setProperty('--about-text', '#3D3D3F');
        root.style.setProperty('--about-trophy-text', '#1E1F21');
        root.style.setProperty('--about-guide-text', '#1E1F21');
        root.style.setProperty('--light-blue', '#1E1F21');
        root.style.setProperty('--EKKSL-beige', '#3D3D3F');
    } else {
        for (const [property, value] of Object.entries(OS)) {
            root.style.setProperty(property, value);
        }
    }

    // Toggle the state for the next click
    isColCha = !isColCha;
}

// Call this function to store the original styles when the page loads
StoreOS();
