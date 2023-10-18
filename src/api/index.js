import axios from "axios";

const mainURL = axios.create({
	baseURL: "https://oybek-backend.inomjon12.repl.co/"
	// baseURL: "http://localhost:8000"
	// baseURL: "https://hadya.onrender.com",
	// baseURL: "https://cheerfulexemplaryfirewall--boburmirzo-brm.repl.co/",
	// baseURL: "https://dadamga.inomjon12.repl.co/"
});

export default mainURL;
