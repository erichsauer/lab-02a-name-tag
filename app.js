const name = document.getElementById('name');
const input = document.getElementById('input');
const button = document.getElementById('button');
const cyan = document.getElementById('button-cyan');
const orange = document.getElementById('button-orange');
const pink = document.getElementById('button-pink');
const backgroundColor = document.getElementById('header');

button.addEventListener('click', () => {
    name.textContent = input.value
    input.value = ''
})
cyan.addEventListener('click', () => {
    backgroundColor.style.background = "cyan"
})
orange.addEventListener('click', () => {
    backgroundColor.style.background = "orange"
})
pink.addEventListener('click', () => {
    backgroundColor.style.background = "pink"
})
