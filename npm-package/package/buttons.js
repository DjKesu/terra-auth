

const loginButtonAction = (e) => {
	console.log("Login");
}
const logoutButtonAction = (e) => {
	console.log("Logout");
}
const paymentButtonAction = (e) => {
	console.log("Payment");
}

const getButtonHTML = (buttonType) => {
	return `
		<button>
			${
				buttonType==="login"?"Login":
				buttonType==="logout"?"Logout":
				buttonType==="payment"?"Pay Here":
				"Error"
			}
		</button>
	`
}

const renderButton = (buttonType) => {
	let button;
	switch (buttonType) {
		case "login":
			button = document.getElementById("terra-auth-login-button");
			if (button) button.onclick = loginButtonAction;
			break;
		case "logout":
			button = document.getElementById("terra-auth-logout-button");
			if (button) button.onclick = logoutButtonAction;
			break;
		case "payment": 
			button = document.getElementById("terra-auth-payment-button");
			if (button) button.onclick = paymentButtonAction;
			break;
		default:
			throw "Invalid buttonType";
	}
	if (button) button.innerHTML = getButtonHTML(buttonType);
	else console.log("no button for "+buttonType);

}

export {renderButton};