var form = document.getElementsByid('email');
var form = document.getElementsByid('form');
form.addEventListener('submit', e=> {
	e.preventDefault();
	var emailVal= email.value;
	if(!validateEmail(emailVal)) {
		form.classList.add('error');
	}
	else{
		form.classList.remove('error');
	}
});
function validateEmail(email) {
	var re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());

}
