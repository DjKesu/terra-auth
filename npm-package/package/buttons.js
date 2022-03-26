const loginButtonAction = (e) => {
	console.log("Login");
}
const logoutButtonAction = (e) => {
	console.log("Logout");
}
const paymentButtonAction = (e) => {
	console.log("Payment");
}

const buttonStyle = `
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(40px + 20px);
	width: 150px;
	font-size: 25px;
	border: 4px solid black;
	border-radius: 15px;
	padding: 10px;
	margin: 5px;
	box-sizing: border-box;
	text-align: center;
	background-color: #094D92;
	color: white;
	transition: background-color 0.3s, color 0.3s;
	cursor: pointer;
`;
const hoverButtonStyle = buttonStyle + `
	background-color: white;
	color: black;
`;

const getButton = (buttonType) => {
	const button = document.createElement("button");
	const buttonText = document.createElement("p");
	buttonText.innerText = 
		buttonType==="login"?"Login":
		buttonType==="logout"?"Logout":
		buttonType==="payment"?"Pay Here":
		"Error";
	button.style = buttonStyle;
	button.onmouseover = (e) => e.target.style = hoverButtonStyle;
	button.onmouseout = (e) => e.target.style = buttonStyle;

	const logo = document.createElement('img');
	logo.src = './assets/GFYLogo.svg';

	button.appendChild(logo);
	button.appendChild(buttonText);
	return button;
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
	if (button) button.appendChild(getButton(buttonType));
	else console.log("no button for "+buttonType);

}

export {renderButton};