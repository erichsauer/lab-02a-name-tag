const name = document.getElementById('name');
const input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    name.textContent = input.value
    input.value = ''
})