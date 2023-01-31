const toggled = document.getElementById('toggle');
const flexible = document.getElementById('flexed');

toggled.addEventListener('change', e => {
	flexible.classList.toggle('showmonthly');
});
