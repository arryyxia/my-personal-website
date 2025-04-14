import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as api from "../../lib/apiHelpers";

export default function Login() {
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
	};

    const user = async () => {
        try {
            const data = await api.getRequest({
                url: api.url + "user",
            });
            console.log("Fetched data:", data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <Button onClick={register}>Click register</Button>
            <Button onClick={user}>Click user info</Button>

            <Card className="w-[350px] mx-auto mt-10">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit">Login</Button>
                </CardFooter>
            </Card>
        </>
    );
}
