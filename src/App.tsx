import { Button } from "@/components/ui/button";
import * as api from "./lib/apiHelpers.ts";
import "./App.css";

function App() {
	const register = async () => { 
		try {
			const data = await api.postRequest({
				url: api.url + "auth/register",
				data: {
					name: "new user2",
					email: "nerf2@gmail.com",
					password: "12345678",
					c_password: "12345678",
				},
			});
			console.log("Fetched data:", data);
            localStorage.setItem("token", data.accessToken);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	const login = async () => { 
		try {
			const data = await api.postRequest({
				url: api.url + "auth/login",
				data: {
					name: "new user1",
					email: "nerf1@gmail.com",
					password: "12345678",
				},
			});
			console.log("Fetched data:", data);
            localStorage.setItem("token", data.accessToken);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	const user = async () => {
		try {
			const data = await api.getRequest({
				url: api.url + "user",
			});
			console.log("Fetched data:", data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	
    return (
		<>
			<Button onClick={register}>Click regis</Button>
			<Button onClick={login}>Click login</Button>
			<Button onClick={user}>Click user info</Button>
		</>
	);
}

export default App;
