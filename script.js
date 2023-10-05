// JavaScript for opening the optimization window
const optimizeButton = document.getElementById('optimizeButton');
const modal = document.getElementById('myModal');
const closeButton = document.getElementById('closeButton');
const applyColorButton = document.getElementById('applyColor');
const colorInput = document.getElementById('colorInput');
const body = document.body;

optimizeButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

applyColorButton.addEventListener('click', () => {
    const userColor = colorInput.value;
    if (userColor) {
        body.style.backgroundColor = userColor;
        modal.style.display = 'none';
    }
});
