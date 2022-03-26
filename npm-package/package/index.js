import {renderButton} from "./buttons.js";

const hello = () => {
	console.log("Hello world");
}
renderButton("login");
renderButton("logout");
renderButton("payment");

export {hello};