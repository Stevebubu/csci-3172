const form = document.getElementById('registrationForm');
const submitButton = document.getElementById('submitButton');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const email = document.getElementById('email').value;
	// console.log(firstName);

	const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]:checked');
	console.log(hobbiesCheckboxes);

	const hobbies = Array.from(hobbiesCheckboxes).map(checkbox => checkbox.value);

	const user = {
		firstName,
		lastName,
		email,
		hobbies
	};
	console.log(user);

	const uniqueHobbies = new Set(hobbies);
	console.log('Unique Hobbies:', Array.from(uniqueHobbies));

	const users = new Map();
	users.set(email, user);
	console.log(users);

	form.classList.add('success');
	form.reset();
}); 

// Add event listeners for focus and blur events

const inputID = ['firstName', 'lastName', 'email'];

inputID.forEach(id => {
	const input = document.getElementById(id);

	input.addEventListener('focus', () => {
        input.style.backgroundColor = 'pink'; 
    });

    input.addEventListener('blur', () => {
        input.style.backgroundColor = ''; 
    });
})
