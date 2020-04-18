let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let buttonSelect = document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
console.dir(modalNoButton, backdrop);

for (let i = 0; i < buttonSelect.length; i++) {
	buttonSelect[i].addEventListener('click', function() {
		// (modal.style.display = 'block'), (backdrop.style.display = 'block');
		modal.classList.add('open');
		backdrop.classList.add('open');
	});
}

backdrop.addEventListener('click', function() {
	mobileNav.classList.remove('open');
	closeModal();
});
if (modalNoButton) {
	modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
	// (backdrop.style.display = 'none')((modal.style.display = 'none'));
	if (modal) {
		modal.classList.remove('open');
	}
	backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
	// mobileNav.style.display = 'block';
	// backdrop.style.display = 'block';
	mobileNav.classList.add('open');
	backdrop.classList.add('open');
});
