const name = document.getElementById('name');
const nameIn = document.getElementById('name-in');
const prououns = document.getElementById('pronouns');
const pronounsIn = document.getElementById('pronouns-in');
const button = document.getElementById('button');
const cyan = document.getElementById('button-cyan');
const orange = document.getElementById('button-orange');
const pink = document.getElementById('button-pink');
const backgroundColor = document.getElementById('header');

nameIn.addEventListener('click', () => {
    nameIn.value = ''
})
pronounsIn.addEventListener('click', () => {
    pronounsIn.value = ''
})
button.addEventListener('click', () => {
    name.textContent = nameIn.value
    name.value = ''
})
button.addEventListener('click', () => {
    pronouns.textContent = pronounsIn.value
    pronouns.value = ''
})
cyan.addEventListener('click', () => {
    backgroundColor.style.background = "cyan"
})
pink.addEventListener('click', () => {
    backgroundColor.style.background = "pink"
})
orange.addEventListener('click', () => {
    backgroundColor.style.background = "orange"
})
