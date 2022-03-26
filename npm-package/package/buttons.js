const loginButtonAction = (e) => {
  console.log("Login");
};
const logoutButtonAction = (e) => {
  console.log("Logout");
};
const paymentButtonAction = (e) => {
  console.log("Payment");
};

const buttonStyle = `
  transition: background-color 0.3s, box-shadow 0.3s;
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  background-color: white;
  background-repeat: no-repeat;
  background-position: 5px 7px;
  background-size: 25px 30px;
`;
const hoverButtonStyle =
  buttonStyle +
  `
	box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
`;

const buttonImage = `
	height: 10%;
	width: auto;
	margin: 0 5px;
  background-image: url("/npm-package/package/assets/TerrAuthLogo.svg");
`;

const getButton = (buttonType) => {
  const button = document.createElement("button");

  const buttonText = document.createElement("span");
  buttonText.innerText =
    buttonType === "login"
      ? "Login with Terra"
      : buttonType === "logout"
      ? "Logout of Terra"
      : buttonType === "payment"
      ? "Pay with Terra"
      : "Error";

  button.style = buttonStyle;
  // button.style.backgroundImage = `url("./TerrAuthLogo.svg")`;
  button.onmouseover = () => (button.style = hoverButtonStyle);
  button.onmouseout = () => (button.style = buttonStyle);

  // const logo = document.createElement('img');
  // logo.src = '../package/assets/GFYLogo.svg';
  // logo.style = buttonImage;
  // button.appendChild(logo);

  const icon = document.createElement("img");
  icon.src = `../package/assets/${
    buttonType == "login"
      ? "login.svg"
      : buttonType == "logout"
      ? "logout.svg"
      : buttonType == "payment"
      ? "payment.svg"
      : null
  }`;
  icon.style = buttonImage;

  button.appendChild(buttonText);
  button.appendChild(icon);
  return button;
};

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
  else console.log("no button for " + buttonType);
};

export { renderButton };
